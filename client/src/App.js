import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ColorList from './components/ColorList';
// import Bubbles from './components/Bubbles';
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";

function App() {
  // const [colorList, setColorList] = useState();
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/colors'>
              {/* <span>🌈</span> */}
              Colors
              {/* <span>🌈</span> */}
              </Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path='/colors' component={ColorList} />
        {/* <Route path='/' component={Bubbles} /> */}
        <PrivateRoute path='/colors' component={BubblePage} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
