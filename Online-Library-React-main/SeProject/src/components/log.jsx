import React from "react";
import { NavLink } from "react-router-dom";
import "../css/blog.css";
function Log() {
  return (
    <div className="b">
      <div className="aboutt">
      <div className="title">
         <h1>sign up</h1>
        </div><br/><br/>
        <h3> have not an account </h3><br/>
                <p> join to my website and enjoy </p><br/><br/>
                <NavLink className="btn3" to="/blog"> sign up</NavLink>
      </div>
      <div className="wrapperr">
        <div className="title">
         <h1>log</h1>
        </div>
        
        <div className="contact-form">
          <div className="input-fields">
          <form ><center>
            <input type="email" className="input" placeholder="Email@gmail.com"required/><br/>
            <input type="password" className="input" placeholder="password" maxLength="20" minLength="6"  required/><br/><br/>
                   <br/> 
                   <input type="checkbox" id="accept" name="accept" value="accept"required/>
                    <label style={{color: "white"}}>Remmember Me </label><br/><br/><br/>
                   <br/>
                   <input className="btn4"  type="submit" value="log"/><br/><br/></center></form><div>
          </div></div>
       </div>
      </div>
   
           </div>
    

  );
}

export default Log;