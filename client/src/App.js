import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ColorList from './components/ColorList';
// import Bubbles from './components/Bubbles';
// import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/colors'>🌈Colors🌈</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
        <Route exact path="/login" component={Login} />
        {/* <Route path='/' component={BubblePage} /> */}
        {/* <Route path='/' component={Bubbles} /> */}
        {/* <Route path='/' component={ColorList} /> */}
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
