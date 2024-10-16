import React from "react";
import { NavLink } from "react-router-dom";
import "../css/home.css";
function Home() {
  return (
    <div className="bodyy">
           <div className="container">
            <div className="section1">
              <h2>Every new book is a new thinking</h2>
            </div></div>
            <div className="section2"> 
            <div className="para1">Reading is life, <br/>so why is it  <p>important?</p></div>       
            <div className="para2">It represents a major means of communication for learning and learning about different cultures and sciences,
                  and it is a source for the linguistic growth of the individual, and a source for the growth of his personality. It gives the
                  person the ability to acquire the skill of “self-learning”, which has become a necessity in life, without which it is impossible
                  to keep pace with scientific development.<br/><br/></div>
            <div className="para2">Reading is an integral part of our personal and professional life, and it is the key to various fields of science 
                and knowledge. Reading is the key to knowledge and the path to advancement. And no nation reads that it took the lead and was in 
                the position of leadership<br/><br/></div>
        </div>
        <div className="section3">
            <p>Quality has no substitute.</p>
            <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod
               tempor incididunt ut labore et dolore mangna aliqua.</p>
            <div><ul>
                <li><NavLink className="button" to="#"> Get Started </NavLink></li>
                <li><NavLink className="button" to="#">Learn More</NavLink></li>
            </ul></div>
        </div> </div> 
  );
}

export default Home;