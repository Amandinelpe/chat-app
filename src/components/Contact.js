import React from "react";
import "../styles/Contact.css";
import PropTypes from "prop-types";

const Contact = ({ name, avatar, isOnline }) => {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt={name} />
      <div>
        <p className="name">{name}</p>
        <div className="status">
          <div className={isOnline ? "status-online" : "status-offline"}></div>
          <p className="status-text">{isOnline ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
