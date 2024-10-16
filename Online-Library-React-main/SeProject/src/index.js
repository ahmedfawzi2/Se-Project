import React from 'react';
import ReactDOM from 'react-dom';
import "./css/App.css";
import "./css/index.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Services,
  Contact,
  Blog,
  Log,
  Addcart,
} from "./components";
ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />}/>
      <Route path="/log" element={<Log />}/>
      <Route path="/addcart" element={<Addcart />}>
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();