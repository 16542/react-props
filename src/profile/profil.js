import React from "react";
import PropTypes from "prop-types";
const Profil = (props) => {
 
  return (
    <div>
      <span>
        <div style={{ color:"red",fontFamily:"fantasy",fontWeight:"40px",margin:20 }}>my Full Name : </div>
      </span>
      {props.name}
      <br />
      <span>
        <div style={{color:"blue",fontFamily:"fantasy",margin:20}}>This Is my Bio: </div>
      </span>
      {props.bio}
      <br />
      <span>
        <div style={{color:"purple",fontFamily:"fantasy",margin:20}}>My Age:</div>
      </span>
      {props.age}
      <div>
      {props.children}
      </div>
      
    </div>
  );
};

export default Profil;

Profil.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
};
