import React from "react";
import { InnerLayout, MainLayout } from "../../styles/Layout";
import { ContactStyled } from "./ContactElm";
import Title from "../../Components/Title/Title";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../../Components/ContactItem/ContactItem";

function Contact() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;

  return (
    <MainLayout>
      <Title title="Contact" span="Contact" />
      <ContactStyled>
        <InnerLayout className="contact">
          <div className="left-content">
            <div className="contact-title">
              <h4>Get in Touch</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="nameId">Enter your name*</label>
                <input type="text" id="nameId" />
              </div>
              <div className="form-field">
                <label htmlFor="emailId">Enter your email*</label>
                <input type="email" id="emailId" />
              </div>
              <div className="form-field">
                <label htmlFor="subjectId">Enter your subject</label>
                <input type="text" id="subjectId" />
              </div>
              <div className="form-field">
                <label htmlFor="textareaId">Enter your message</label>
                <textarea
                  name="textarea"
                  id="textareaId"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-field f-button">
                <PrimaryButton title="Send Email" />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              icon={phone}
              title="Phone"
              contact1="+00777452123"
              contact2="+8845684331"
            />
            <ContactItem
              icon={email}
              title="Phone"
              contact1="+00777452123"
              contact2="+8845684331"
            />
            <ContactItem
              icon={location}
              title="Phone"
              contact1="+00777452123"
              contact2="+8845684331"
            />
          </div>
        </InnerLayout>
      </ContactStyled>
    </MainLayout>
  );
}

export default Contact;
