import React, { Component } from 'react';
const axios = require('axios')


class ChosenFilm extends Component {
  constructor() {
    super()
    this.state = {
      films: [],
      chosenFilmCharacters: []
    }
  }
  componentDidMount = async () => {
    
    let films = await axios.get('https://swapi.dev/api/films')
    this.setState({ films: films.data.results })
  }
  
  
  render() {

    return (
      <div className="ChosenFilm">
      <div>Title : {this.props.chosenFilm.title}</div> 
      

      <div>Release_date : {this.props.chosenFilm.release_date}</div>
      <div>Director : {this.props.chosenFilm.director}</div>
      <div>Producer : {this.props.chosenFilm.producer}</div>
      <div>Opening_crawl : {this.props.chosenFilm.opening_crawl}</div>
      
      
      </div>
    );
  }
}
export default ChosenFilm;
