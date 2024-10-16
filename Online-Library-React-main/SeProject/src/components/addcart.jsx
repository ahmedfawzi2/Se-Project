import React from "react";
import "../css/add.css";
function Addcart() {
  return (
    <div className="add"><div className="bd"><div className="li1">
          <h3>Complete the purchase</h3>
          <div className="contact-form">
          <div className="input-fields">
          <input type="text" className="input" id="fname" name="firstname" placeholder="user-name" size="30" required/>
          <input type="text" className="input" id="email" name="email" placeholder="someone@ex.com" size="30" required/>
          <input type="text" className="input" id="adr" name="address" placeholder="x-Street ,city, Country" size="30" required/>
          </div></div>
      </div><div className="Payment">
              <h3>Payment data</h3>
              <div className="contact-form">
              <div className="input-fields">
              <input type="text" className="input" id="cname" name="cardname" placeholder="Name on Card" size="30" required/>
              <input type="text" className="input" id="cnum" name="cardnumber" placeholder="Credit card number xxxx xxxx xxxx xxxx"size="30" required />
              <input type="text" className="input" id="expmonth" name="expmonth" placeholder="Exp Month xx" size="30" required/>
              <input type="text" className="input" id="expyear" name="expyear" placeholder="Exp Year xxxx" size="30" required/>
              <input type="text" className="input" id="cvv" name="cvv" placeholder="cvv xxx" />
              </div></div>
          </div><br/><br/><br/><br/><br/><label><input type="checkbox"  name="save-info" /> save information</label><br/><br/>
          <input type="submit" value="Continue " className="bt" />
    </div></div>
  );
}

export default Addcart;