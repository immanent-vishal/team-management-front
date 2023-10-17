import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./EditContract.css";
import contractHTTPService from "../../../main/services/contractHTTPService";

import { useForm } from "react-hook-form";
import showMessage from "../../../libraries/messages/messages";
import projectHTTPService from "../../../main/services/projectHTTPService";
import clientHTTPService from "../../../main/services/clientHTTPService";
const EditContract = (props) => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const [contract, setContract] = useState(props.contract);
  const [typeSubs, setTypeSubs] = useState([]);
  const [members, setMembers] = useState([]);
  const [clients, setClients] = useState([]);
  const [projects,setProjects]=useState([]);
  useEffect(() => {
    console.log(props.contract, "props.contract");
    setContract(props.contract);
    retrieveClients();
    retrieveProjects();
  }, [props.contract]);

  const onSubmit = (data) => {
    console.log(data);
    contractHTTPService
      .editContract(props.contract.id, data)
      .then((data) => {
        props.closeModal();
        showMessage("Confirmation", "contractMessage.edit", "success");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveClients = async () => {
    const { data } = await clientHTTPService.getAllClient();
    setClients(data);
  };

  const retrieveProjects = async () => {
    const { data } = await projectHTTPService.getAllProject();
    setProjects(data);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContract({ ...contract, [name]: value });
  };

  return (
    <div className="EditContract">
      <form class="" onSubmit={handleSubmit(onSubmit)}>
        <div class="row">
          <div class="form-group col-md-12">
            <label>
              Title<span class="text-danger">*</span>
            </label>
            <input
              ref={register({ required: true })}
              onChange={handleInputChange}
              value={contract.title}
              type="text"
              name="title"
              class="form-control"
            />
            <label>
              Date<span class="text-danger">*</span>
            </label>
            <input
              ref={register({ required: true })}
              onChange={handleInputChange}
              value={contract.date}
              type="date"
              name="date"
              class="form-control"
            />

            <div class="form-group">
              <label>Client</label>
              <select
                ref={register({ required: true })}
                onChange={handleInputChange}
                value={contract.client}
                name="client"
                className="selectpicker form-control border-0 mb-1 px-4 py-4 rounded shadow"
              >
                <option value="">select</option>
                {clients.map((c, i) => (
                  <option key={i} 
                  value={`${c.first_name} ${c.last_name}`} 
                  selected={contract.client==`${c.first_name} ${c.last_name}`?true:false}
                  >
                    {`${c.first_name} ${c.last_name}`}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>
                Project<span className="text-danger">*</span>
              </label>
              <select
                ref={register({ required: true })}
                onChange={handleInputChange}
                value={contract.project}
                name="project"
                id="project"
                class="selectpicker form-control border-0 mb-1 px-4 py-4 rounded shadow"
                tabIndex="-1"
                aria-hidden="true"
              >
                <option value="">Projects</option>
                {
                  projects.map((p,k)=><option key={k} value={p.title}
                  selected={contract.project===`${p.title}`?true:false}
                  >{p.title}</option>)
                }
              </select>
            </div>

            <label>
              Company<span class="text-danger">*</span>
            </label>
            <input
              ref={register({ required: true })}
              onChange={handleInputChange}
              value={contract.company}
              type="text"
              name="company"
              class="form-control"
            />

            <label>
              Value<span class="text-danger">*</span>
            </label>
            <input
              ref={register({ required: true })}
              onChange={handleInputChange}
              value={contract.contractValue}
              type="number"
              name="contractValue"
              class="form-control"
            />

            <label>
              Type<span class="text-danger">*</span>
            </label>
            <input
              ref={register({ required: true })}
              onChange={handleInputChange}
              value={contract.contractType}
              type="text"
              name="contractType"
              class="form-control"
            />

            <label>
              Website<span class="text-danger">*</span>
            </label>
            <input
              ref={register({ required: true })}
              onChange={handleInputChange}
              value={contract.website}
              type="text"
              name="website"
              class="form-control"
            />

            <label>
              Start<span class="text-danger">*</span>
            </label>
            <input
              ref={register({ required: true })}
              onChange={handleInputChange}
              value={contract.startDate}
              type="date"
              name="startDate"
              class="form-control"
            />

            <label>
              End<span class="text-danger">*</span>
            </label>
            <input
              ref={register({ required: true })}
              onChange={handleInputChange}
              value={contract.endDate}
              type="date"
              name="endDate"
              class="form-control"
            />

            <label>
              Description<span class="text-danger">*</span>
            </label>
            <textarea
              ref={register({ required: true })}
              onChange={handleInputChange}
              value={contract.description}
              type="text"
              name="description"
              class="form-control"
            ></textarea>
          </div>
        </div>
        <button type="submit" id="save-form" className="btn btn-success">
          <i className="fa fa-check"></i>
          <font>
            <font> Save</font>
          </font>
        </button>
      </form>
    </div>
  );
};

EditContract.propTypes = {};

EditContract.defaultProps = {};

export default EditContract;
