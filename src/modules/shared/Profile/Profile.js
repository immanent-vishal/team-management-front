import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';
import CurrentUser from '../../../main/config/user';
import { useUser } from '../../../context/UserContext';
const Profile = () => {
  const {user}=useUser();  
  return  (

 
  <div className="Profile">
    <div class="col-md-12">
      <div class="feed-box text-center">
        <section class="card">
          <div class="card-body">
            <div class="corner-ribon blue-ribon">
              <i class="fa fa-twitter"></i>
            </div>
            <a href="#">
              <img class="align-self-center rounded-circle mr-3" alt="" src={user?.USER_DETAIL?.profile_picture||'images/admin.jpg'} ></img>
            </a>
            <h4>{user?.USER_DETAIL?.first_name}{" "}{user?.USER_DETAIL?.last_name} </h4> 
            <p>{user?.USER_DETAIL?.birthday?.substring(0, 10)}</p>
            <p>{user?.USER_DETAIL?.email}</p>
            <p>{user?.USER_DETAIL?.telephone}</p>
            <p>{user?.USER_DETAIL?.address}</p>
            <p>{user?.USER_DETAIL?.role}</p>

          </div>
        </section>
      </div>
    </div>
  </div>
);}

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
