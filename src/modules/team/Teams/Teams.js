import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Teams.css";
import { LoadJS } from "../../../libraries/datatables/datatables";
import useForceUpdate from "use-force-update";
import teamHTTPService from "../../../main/services/teamHTTPService";
import showMessage from "../../../libraries/messages/messages";
import clientMessage from "../../../main/messages/clientMessage";
import AddTeam from "../../../modules/team/AddTeam/AddTeam";
import EditTeam from "../../../modules/team//EditTeam/EditTeam";
import { Typography, Button, LinearProgress } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import CurrentUser from "../../../main/config/user";
const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [updatedItem, setUpdatedItem] = useState({});
  const forceUpdate = useForceUpdate();
  const [loading, setLoading] = useState(false);
  const closeButtonEdit = useRef(null);
  const closeButtonAdd = useRef(null);
  const [updatedItemId, setUpdatedItemId] = useState([]);
  

  const closeModalEdit = (data) => {
    resfresh();
    closeButtonEdit.current.click();
  };

  const closeModalAdd = (data) => {
    resfresh();
    closeButtonAdd.current.click();
  };
  useEffect(() => {
    LoadJS();
    retrieveClients();
  }, []);

  const retrieveClients = () => {
    setLoading(true);
    teamHTTPService.getAllTeam().then((data) => {
      setLoading(false);
      setTeams(data.data);
    });
  };

  const resfresh = () => {
    retrieveClients();
    forceUpdate();
  };

  const remove = (e, data) => {
    e.preventDefault();
    console.log(data , "data");
    
   if(data.length==1){
 
      showMessage('Confirmation', clientMessage.delete, 'success')
      //ClientTestService.remove(data)
      //removeOne(data)
      teamHTTPService.removeTeam(data).then(data => {
        var r = window.confirm(CurrentUser.DELTE_MSG);
        resfresh()
      })

    
   }
   else if(data.length==teams.length){
    teamHTTPService.removeAllTeam(data).then(data => {
      var r = window.confirm(CurrentUser.DELTE_MSG);
      resfresh();
    }) 
   }
   else{
    
    
    teamHTTPService.removeSelectTeam(data).then(data => {
      var r = window.confirm(CurrentUser.DELTE_MSG);
      resfresh();
    }) 

   }


  }

  function isEmptyObject(obj) {
    return Object.keys(obj).length <= 0;
  }

  const update = (e, data) => {
   if(isEmptyObject(updatedItem)){
    alert("Please Select a task !");
   }
   else{
    e.preventDefault();
    setUpdatedItem(data)
    resfresh()
   }
   
  }
  const columns = [
    { field: "id", headerName: "#", width: 200 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "minimum", headerName: "Minimum Number", width: 200 },
    { field: "maximum", headerName: "Maximum Number", width: 200 },
  ];

  const handleRowSelection = (e) => {
    if (e.length == 1) {

      setUpdatedItemId([e[0]])
      const selectedItem = teams.find(item => item.id == e[0])
      setUpdatedItem(selectedItem);
      console.log(updatedItem);
    }
   else{
    setUpdatedItemId([...e])
    setUpdatedItem(e[0] || {});
   }

  }
  const [updatedItemIds, setUpdatedItemIds] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const removeAll = (e) => {
    e.preventDefault();
    var r = window.confirm(CurrentUser.DELTE_MSG);
    if (r) {
      teamHTTPService.removeAllTeam(updatedItemId).then((data) => {
        resfresh();
      });
    }
  };
  // console.log(updatedItemId , "Removed");
  return (
    <div className="card">
      <div className="card-header">
        <h4>
          <i class="menu-icon fas fa-users-cog"></i> Teams
        </h4>
      </div>
      <div className="card-body">
        <button
          type="button"
          className="btn btn-success btn-sm"
          data-toggle="modal"
          data-target="#addClient"
          disabled={updatedItemId.length>0}
        >
          <i class="far fa-plus-square"></i> Create
        </button>
        <button
          type="button"
          onClick={(e) => update(e, updatedItem)}
          data-toggle="modal"
          data-target="#edit"
          class="btn btn-warning btn-sm"
          disabled={isEmptyObject(updatedItem)}
        >
          <i class="fas fa-edit"></i> Edit
        </button>
        <button
          onClick={(e) => remove(e, updatedItemId)}
          type="button"
          class="btn btn-danger btn-sm"
          disabled={updatedItemId.length<=0}
        >
          <i class="fas fa-trash-alt"></i> Remove
        </button>
        {loading ? (
          <LinearProgress />
        ) : (
          <div style={{ height: 430, width: "100%" }}>
            <DataGrid
              rows={teams}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[6]}
              checkboxSelection
              onSelectionModelChange={handleRowSelection}
              components={{ Toolbar: GridToolbar }}
            />
          </div>
        )}

        <div
          class="modal fade"
          id="addClient"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  New
                </h5>
                <button
                  onClick={resfresh}
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddTeam closeModal={closeModalAdd} />
              </div>
              <div class="modal-footer">
                <button
                  onClick={() => {
                    setUpdatedItemId([]);
                    resfresh();
                  }}
                  ref={closeButtonAdd}
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="edit"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Edit
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <EditTeam team={updatedItem} closeModal={closeModalEdit} />
              </div>
              <div class="modal-footer">
                <button
                  onClick={() => {
                    setUpdatedItemId([]);
                    resfresh();
                  }}
                  ref={closeButtonEdit}
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="viewClient"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body"></div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Teams.propTypes = {};

Teams.defaultProps = {};

export default Teams;
