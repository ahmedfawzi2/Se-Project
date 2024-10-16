import React from "react";
import { NavLink } from "react-router-dom";
import "../css/App.css";
function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="info">
                <br/><br/><br/>
                <table>
                    <tr>
                        <td><NavLink className="button0" to="#"> SHOP </NavLink></td>
                        <td><NavLink className="button0" to="#"> EXPLORE </NavLink></td>
                        <td><NavLink className="button0" to="#"> MORE </NavLink></td>
                    </tr>
                    <tr>
                        <td><NavLink className="button0" to="#"> Find a Shop </NavLink></td>
                        <td><NavLink className="button0" to="#"> Featured Products </NavLink></td>
                        <td><NavLink className="button0" to="#"> News Feed </NavLink></td>
                    </tr>
                    <tr>
                        <td><NavLink className="button0" to="#"> Schedule a Tour </NavLink></td>
                        <td><NavLink className="button0" to="#"> Future Products </NavLink></td>
                        <td><NavLink className="button0" to="#"> Careers </NavLink></td>
                    </tr>
                    <tr>
                        <td><NavLink className="button0" to="#"> Custom Solutions </NavLink></td>
                        <td><NavLink className="button0" to="#"> Our Mission </NavLink></td>
                        <td><NavLink className="button0" to="#"> Contact us </NavLink></td>
                    </tr>
                    <tr>
                        <td><NavLink className="button0" to="#"> Get a Quote </NavLink></td>
                        <td><NavLink className="button0" to="#"> Customer Stories </NavLink></td>
                        <td><NavLink className="button0" to="#"> Privacy Policy </NavLink></td>
                    </tr>
                </table>
            </div>
            <div className="copyright">
                <div className="data">Copyright © 1996-2016 Compan Co. All rights reserved</div>
            </div>
        </footer>
    </div>
  );
}

export default Footer;