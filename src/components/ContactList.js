import React from "react";
import dataUsers from "../data/dataUsers.js";
import Contact from "./Contact.js";

const ContactList = () => {
  return (
    <div>
      {dataUsers.map((user) => (
        <Contact
          name={user.name}
          avatar={user.avatar}
          isOnline={user.isOnline}
        />
      ))}
    </div>
  );
};

export default ContactList;
