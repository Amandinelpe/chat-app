import React from "react";
import "../styles/Contact.css";
import avatar from "../data/dataAvatar.js";

const Contact = () => {
  return (
    <div className="Contact">
      <img src={avatar.image} alt="avatar" className="avatar" />
      <div>
        <p className="name">{avatar.name}</p>
        <div className="status">
          <div
            className={avatar.isOnline ? "status-online" : "status-offline"}
          ></div>
          <p className="status-text">
            {avatar.isOnline ? "Online" : "Offline"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
