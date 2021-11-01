import React, { Component } from 'react';
import './App.css';
import ChosenFilm from './components/ChosenFilm';
import Toc from './components/Toc';


class StarUI extends Component {

  

  

  render() {
     
      return (
          <div>
           star UI  
           <Toc />
           <ChosenFilm /> 
    </div>
  );
}
}
export default StarUI;
