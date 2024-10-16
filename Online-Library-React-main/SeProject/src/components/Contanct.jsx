import React from "react";
import "../css/App.css";
import "../css/contact.css";
function Contact() {
  return (
    <div className="bo">
      <div className="about">
      <div className="title">
         <h1>About</h1>
        </div><br/><br/>
        <p>This site offers the service of electronic purchase of any book that the user needs through his visa number</p><br/><br/><br/>
        <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod
               tempor incididunt ut labore et dolore mangna aliqua.</p>
      </div>
      <div className="wrapper">
        <div className="title">
         <h1>contact us form</h1>
        </div>
        <div className="contact-form">
          <div className="inputt-fields">
            <input type="text" className="inputt" placeholder="Name"/>
            <input type="text" className="inputt" placeholder="Email Address"/>
            <input type="text" className="inputt" placeholder="Phone"/>
            <input type="text" className="inputt" placeholder="Subject"/>
          </div>
          <div className="msg">
            <textarea placeholder="Message"></textarea>
            <div className="btnn">send</div>
          </div>
       </div>
      </div>
    </div>
  );
}

export default Contact;