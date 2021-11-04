import React, { Component } from 'react';
import './App.css';
import ChosenFilm from './components/ChosenFilm';
import Film from './components/Film';

const axios = require('axios')



class StarUI extends Component {
  constructor() {
    super()
    this.state = {
      favoriteFilms: [],
      films: [],
      chosenFilm: [],
      StartScreen: true,
      chosenFilmCharacters: [],
      response: [],
      add:true

    }
  }


  componentDidMount = async () => {
    let films = await axios.get('https://swapi.dev/api/films')
    this.setState({ films: films.data.results })
    let localStorageFavoriteList =localStorage.favoriteList.split(',')
    this.setState({ favoriteFilms:localStorageFavoriteList})
  }


  addToFavorite = (film) => {
    let favoriteList = [...this.state.favoriteFilms]
    for (let i = 0; i > this.state.favoriteFilms.length; i++) {
      if (favoriteList[i] === film) {
        this.setState({add:false})
      }
    }
    if (this.state.add) {
      favoriteList.push(film.title)
      this.setState({ favoriteFilms: favoriteList })
      localStorage.setItem("favoriteList",favoriteList)
    }

  }


  removeFromFavorite = (filmToRemove) => {
    let favoriteList = [...this.state.favoriteFilms]
    for (let i = 0; i < favoriteList.length; i++) {
      if (favoriteList[i] === filmToRemove) {
        favoriteList.splice(i, 1)
        this.setState({ favoriteFilms: favoriteList })
        localStorage.setItem("favoriteList",favoriteList)
      }
    }

  }

  displayChosenFilm = async (film) => {
    await this.setState({ chosenFilm: film, StartScreen: false })
    await axios.all(this.state.chosenFilm.characters.map(character => axios.get(character)))
      .then(axios.spread(function (...res) {
        // all requests are now complete
        let characterName = []
        res.forEach(element => {
          characterName.push(element.data.name)
        })
        // this.setState({chosenFilmCharacters:characterName})error*** async issue probably 
        console.log(characterName);
      }))

  }

  render() {

    return (
      <div className="container">
        <div className="toc">
        <h1 className="filmListHeader" >Star War Films(TOC) </h1>

          {this.state.films.map(film => {
            return (
              <Film  favoriteFilms={this.state.favoriteFilms} addToFavorite={this.addToFavorite} displayChosenFilm={this.displayChosenFilm} key={film.title} filmDetails={film} />
            )
          })}
        </div>{this.state.StartScreen ? <div className="ChosenFilm" >Please select a Film</div> :
          <ChosenFilm  key={this.state.chosenFilm.title} favoriteFilms={this.state.favoriteFilms} removeFromFavorite={this.removeFromFavorite}  chosenFilm={this.state.chosenFilm} />}
      </div>
    )
  }
}
export default StarUI;
