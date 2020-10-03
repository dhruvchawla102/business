import React from 'react';
import './AppB.css';
import HomeBsn  from './components/HomeBsn';
// import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

function AppB() {
  return (
    <div className="app">
       <Router>
         <HomeBsn />
         {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default AppB;