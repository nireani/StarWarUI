import React, { Component } from 'react';
import FavoriteFilm from './FavoriteFilm';



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

        <h1 className="filmDetailsHeader" >Film Details</h1>
        <div className="details" >Title - {this.props.chosenFilm.title}</div>
        <div className="details" >Release date - {this.props.chosenFilm.release_date}</div>
        <div className="details" >Director - {this.props.chosenFilm.director}</div>
        <div className="details" >Producer - {this.props.chosenFilm.producer}</div>
        <div className="details" >Opening crawl - {this.props.chosenFilm.opening_crawl}</div>
        <div className="details" >Number of characters - {this.props.chosenFilm.characters.length} (Names in the console)</div>
        {/* <div className="details" >Characters Name - {this.state.chosenFilmCharacters.map(characterName => {
          <li>{characterName}</li>
        })}
        </div> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       <div className="favorite" >My Favorite films {this.props.favoriteFilms.map(film=> <FavoriteFilm key={film} removeFromFavorite={this.props.removeFromFavorite} favoriteFilms={this.props.favoriteFilms}film={film} addToFavorite={this.props.addToFavorite} /> )}
       </div>

      </div>






    )
  }
}
export default ChosenFilm;
