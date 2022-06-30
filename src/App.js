import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { useState, useReducer, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/pages/home/home";
import About from "./component/pages/about/about";
import ServicePage from "./component/pages/service";
import SignUpPage from "./component/pages/inscription";
import SignInPage from "./component/pages/login";
import SubmissionProject from "./component/pages/submit/submit";
import Details from "./component/pages/submit/project_details";
import Offre from "./component/pages/offre_list/offre";
import Formation from "./component/pages/formation";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/service" element={<ServicePage />}></Route>
        <Route
          exact
          path="/centre_de_formation"
          element={<Formation />}
        ></Route>
        <Route exact path="/signup" element={<SignUpPage />}></Route>
        <Route exact path="/signin" element={<SignInPage />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route
          exact
          path="/project_submission"
          element={<SubmissionProject />}
        ></Route>
        <Route exact path="/project_details" element={<Details />}></Route>
        <Route exact path="/offre" element={<Offre />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
