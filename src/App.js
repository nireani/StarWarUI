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
      response: []

    }
  }


  componentDidMount = async () => {
    let films = await axios.get('https://swapi.dev/api/films')
    this.setState({ films: films.data.results })
  }


  addToFavorite = (film) => {
    let favoriteList = [...this.state.favoriteFilms]
    favoriteList.push(film.title)
    this.setState({ favoriteFilms: favoriteList })
  }

  
  removeFromFavorite = (filmToRemove) => {
    let favoriteList = [...this.state.favoriteFilms]
    for ( let i =0;i<favoriteList.length ;i++){
      if (favoriteList[i]===filmToRemove){
        favoriteList.splice(i,1)
      this.setState({favoriteFilms:favoriteList})
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
          {this.state.films.map(film => {
            return (
              <Film  addToFavorite={this.addToFavorite} displayChosenFilm={this.displayChosenFilm} key={film.title} filmDetails={film} />
            )
          })}
          </div>{this.state.StartScreen ? <div className="ChosenFilm" >Please select a Film</div> :
          <ChosenFilm removeFromFavorite={this.removeFromFavorite} favoriteFilms={this.state.favoriteFilms} chosenFilm={this.state.chosenFilm} />}
      </div>
    )
  }
}
export default StarUI;
