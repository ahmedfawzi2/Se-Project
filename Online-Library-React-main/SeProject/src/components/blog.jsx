import React from "react";
import { NavLink } from "react-router-dom";
import "../css/blog.css";
function Blog() {
  return (
    <div className="b">
      <div className="aboutt">
      <div className="title">
         <h1>log in</h1>
        </div><br/><br/>
        <h3>already have an account </h3><br/>
                <p> join to my website and enjoy </p><br/><br/><br/><br/>
                <NavLink className="btn1" to="/log"> login</NavLink>
      </div>
      <div className="wrapperr">
        <div className="title">
         <h1>sign up</h1>
        </div>
        <div className="contact-form">
          <div className="inputt-fields">
          <form >
          <input type="text" className="inputt" placeholder="fname"size="30" required/>
            <input type="text" className="inputt" placeholder="lname"size="30" required/>
            <input type="email" className="inputt" placeholder="Email@gmail.com"required/>
            <input type="password" className="inputt" placeholder="password" maxLength="20" minLength="6"  required/>
                   <br/> <br/> 
                   <input type="checkbox" id="accept" name="accept" value="accept"required/>
                   <label  style={{color: "white"}}>i accept <NavLink style={{color: "white"}} to="#"> Terms and Privacy Policy</NavLink></label><br/>
                   <br/>
                   <input className="btn2"  type="submit" value="submit"/><br/><br/></form><div>
          </div></div>
       </div>
      </div>
   
           </div>
    
  );
}

export default Blog;