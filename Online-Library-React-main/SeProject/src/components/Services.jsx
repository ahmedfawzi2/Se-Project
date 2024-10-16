import React from "react";
import "../css/service.css";
import { NavLink } from "react-router-dom";
import img from './image/Wrath.jpg';
import img1 from './image/Walk.jpg';
import img2 from './image/Searcher.jpg';
import img3 from './image/where.jpg';
import img4 from './image/Greenlights.jpg';
import img5 from './image/Promised.jpg';
import img6 from './image/Follow.jpg';
import img7 from './image/Friends.jpg';
import img8 from './image/Intelligent.jpg';
import img9 from './image/Erfenis.jpg';
function Services() {
  return (
    <div className="body">
      <div className="wrapp">
            <div className="cat">
              <h2>Library Catalog</h2>
            </div><br/><br/>
            <div className="prod-container">
            <div className="prod-box">
              <div><img src={img} alt={'The Grapes of Wrath'} /></div>
              <div className="prod-trans">
                <div className="prod-feature">
                  <p>The Grapes of Wrath</p>
                  <p >Price : $10</p><br/><br/><br/>
                  <NavLink className="input" to="/addcart"> Add to cart</NavLink>
                </div>
              </div>
            </div>
            <div className="prod-box">
              <img src={img1} alt={'A Long Walk to Water'} />
              <div className="prod-trans">
                <div className="prod-feature">
                  <p>A Long Walk to Water</p>
                  <p >Price : $9</p><br/><br/><br/>
                  <NavLink className="input" to="/addcart"> Add to cart</NavLink>
                </div>
              </div>
            </div>
            <div className="prod-box">
              <img src={img2} alt={'The Searcher'} />
              <div className="prod-trans">
                <div className="prod-feature">
                  <p>The Searcher</p>
                  <p >Price : $23</p><br/><br/><br/>
                  <NavLink className="input" to="/addcart"> Add to cart</NavLink>
                </div>
              </div>
            </div>
            <div className="prod-box">
              <img src={img3} alt={'Where the Crawdads Sing'} />
              <div className="prod-trans">
                <div className="prod-feature">
                  <p>Where the Crawdads Sing</p>
                  <p >Price : $21</p><br/><br/><br/>
                  <NavLink className="input" to="/addcart"> Add to cart</NavLink>
                </div>
              </div>
            </div>
            <div className="prod-box">
              <img src={img4} alt={'Greenlights'} />
              <div className="prod-trans">
                <div className="prod-feature">
                  <p>Greenlights</p>
                  <p >Price : $26</p><br/><br/><br/>
                  <NavLink className="input" to="/addcart"> Add to cart</NavLink>
                </div>
              </div>
            </div>
            <div className="prod-box">
              <img src={img5} alt={'A Promised Land'} />
              <div className="prod-trans">
                <div className="prod-feature">
                  <p>A Promised Land</p>
                  <p >Price : $38</p><br/><br/><br/>
                  <NavLink className="input" to="/addcart"> Add to cart</NavLink>
                </div>
              </div>
            </div>
            <div className="prod-box">
              <img src={img6} alt={'Follow the Money'} />
              <div className="prod-trans">
                <div className="prod-feature">
                  <p>Follow the Money</p>
                  <p >Price : $24</p><br/><br/><br/>
                  <NavLink className="input" to="/addcart"> Add to cart</NavLink>
                </div>
              </div>
            </div>
            <div className="prod-box">
              <img src={img7} alt={'Friends'} />
              <div className="prod-trans">
                <div className="prod-feature">
                  <p>Friends</p>
                  <p >Price : $21</p><br/><br/><br/>
                  <NavLink className="input" to="/addcart"> Add to cart</NavLink>
                </div>
              </div>
            </div>
            <div className="prod-box">
              <img src={img8} alt={'The Intelligent Investor'} />
              <div className="prod-trans">
                <div className="prod-feature">
                  <p>The Intelligent Investor</p>
                  <p >Price : $21</p><br/><br/><br/>
                  <NavLink className="input" to="/addcart"> Add to cart</NavLink>
                </div>
              </div>
            </div>
            <div className="prod-box">
              <img src={img9} alt={'Erfenis'} />
              <div className="prod-trans">
                <div className="prod-feature">
                  <p>Erfenis</p>
                  <p >Price : $14</p><br/><br/><br/>
                  <NavLink className="input" to="/addcart"> Add to cart</NavLink>
                </div>
              </div>
            </div>
          </div> 
        </div></div>
  );
}

export default Services;