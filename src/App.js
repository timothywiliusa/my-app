import React from 'react';
//import React,{useEffect, useState} from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import PlanList from "./components/plan-list.component";
import EditPlan from "./components/edit-plan.component";
import CreatePlan from "./components/create-plan.component";
import CreateFaction from "./components/create-faction.component";

//import axios from 'axios';
import './App.css';

const App = () => {

  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={PlanList} />
      <Route path="/edit/:id" component={EditPlan} />
      <Route path="/create" exact component={CreatePlan} />
      <Route path="/purpose" exact component={CreateFaction} />
    </Router>
  );
}

export default App;
