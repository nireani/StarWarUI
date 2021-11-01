import React, { Component } from 'react';


class Film extends Component {
displayChosenFilm = () => {
this.props.displayChosenFilm(this.props.filmDetails) 
console.log(this.props.filmDetails) 
}

    render() {
        return (
            <div onClick={this.displayChosenFilm} className="film" key={this.props.filmDetails.title}>{this.props.filmDetails.title}</div>
        )

    }
}
export default Film;
