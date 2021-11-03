import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from "@fortawesome/free-regular-svg-icons";


class Film extends Component {

    displayChosenFilm = () => {
        this.props.displayChosenFilm(this.props.filmDetails)
    }


    addToFavorite = () => {

        for (let film of this.props.favoriteFilms) {
            if (film === this.props.filmDetails.title) {
              return 
            }
        }
        this.props.addToFavorite(this.props.filmDetails)
    }

    render() {
        return (
            <div>
                <div onClick={this.displayChosenFilm} className="film" key={this.props.filmDetails.title}> <FontAwesomeIcon onClick={this.addToFavorite} icon={faBookmark} />{this.props.filmDetails.title}</div>
            </div>
        )

    }
}
export default Film;
