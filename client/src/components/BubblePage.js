import React, { useState, useEffect } from "react";
import axios from "axios";

import axiosWAuth from '../helpers/axiosWAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

class BubblePage extends React.Component {
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  componentDidMount() {
    this.getColorList();
  };

  getColorList = () => {
    axios.get('http:localhost:5000/api/colors')
  };
}

  const BubblePages = (initialState) => {
    const [colorList, setColorList] = useState(initialState)

    useEffect(() => {
      axiosWAuth().get(`http://localhost:5000/api/colors`)
        .then(res => setColorList(res.data))
    })
      .catch(err => console.log(err.res), initialState);
      
      // render() {
        return (
          <div>
          <ColorList colors={colorList} updateColors={setColorList} />
          <Bubbles colors={colorList} />
          <BubblePages  />
        </div>
      );
      
      
  // };
    };

  export default BubblePage;
