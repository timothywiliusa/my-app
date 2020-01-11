import React from 'react';
//import React,{useEffect, useState} from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import PlanList from "./components/plan-list.component";
import ChangeOfPlans from "./components/change-of-plans.component";
import NewPlan from "./components/new-plan.component";
import FindAPurpose from "./components/find-a-purpose.component";

//import axios from 'axios';
import './App.css';

const App = () => {

  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={PlanList} />
      <Route path="/edit/:id" component={ChangeOfPlans} />
      <Route path="/newplan" exact component={NewPlan} />
      <Route path="/findapurpose" exact component={FindAPurpose} />
    </Router>
  );
}

export default App;
