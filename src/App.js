import React, { Component } from 'react';
import './App.css';
import ChosenFilm from './components/ChosenFilm';
import Film from './components/Film';

const axios = require('axios')

class StarUI extends Component {
  constructor() {
    super()
    this.state = {
      films: [],
      chosenFilm: []
    }
  }
  componentDidMount = async () => {
    let films = await axios.get('https://swapi.dev/api/films')
    this.setState({ films: films.data.results })
  }

  displayChosenFilm = (film) => {
    this.setState({ chosenFilm: film })
  }

  render() {
    return (
      <div className="container">
        <div className="toc">
          {this.state.films.map(film => {
            return (
              <Film displayChosenFilm={this.displayChosenFilm} filmDetails={film} />
            )
          })
          }
        </div>
        <ChosenFilm chosenFilm={this.state.chosenFilm} />
      </div>
    );
  }
}
export default StarUI;
