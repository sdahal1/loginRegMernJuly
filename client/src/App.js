import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

import {Router} from "@reach/router";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Register path= "/"></Register>
        <Dashboard path = "/dashboard"></Dashboard>


      </Router>
    </div>
  );
}

export default App;
