import React from "react";
import { ContactItemStyled } from "./ContactItemElm";

function ContactItem({ icon, title, contact1, contact2 }) {
  return (
    <ContactItemStyled>
      <div className="left-content">
        <p>{icon}</p>
      </div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{contact1}</p>
        <p>{contact2}</p>
      </div>
    </ContactItemStyled>
  );
}

export default ContactItem;
