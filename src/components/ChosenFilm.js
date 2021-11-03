import React, { Component } from 'react';
import FavoriteFilm from './FavoriteFilm';

// const axios = require('axios')


class ChosenFilm extends Component {
  constructor() {
    super()
    this.state = {

      chosenFilmCharacters: []
    }
  }

  // componentDidMount = async () => {
  //   await this.setState({ chosenFilmCharacters: this.props.charactersName })

  // }

  render() {

    return (

      <div className="ChosenFilm">

        <div className="details" >Title - {this.props.chosenFilm.title}</div>
        <div className="details" >Release_date - {this.props.chosenFilm.release_date}</div>
        <div className="details" >Director - {this.props.chosenFilm.director}</div>
        <div className="details" >Producer - {this.props.chosenFilm.producer}</div>
        <div className="details" >Opening_crawl - {this.props.chosenFilm.opening_crawl}</div>
        <div className="details" >Number of Characters - {this.props.chosenFilm.characters.length} (Names in the console)</div>
        {/* <div className="details" >Characters Name - {this.state.chosenFilmCharacters.map(characterName => {
          <li>{characterName}</li>
        })}
        </div> */}
       <div>favorite {this.props.favoriteFilms.map(film=> <FavoriteFilm removeFromFavorite={this.props.removeFromFavorite} film={film} addToFavorite={this.props.addToFavorite} /> )}
       </div>

      </div>






    )
  }
}
export default ChosenFilm;
