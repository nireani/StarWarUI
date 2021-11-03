import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";


class FavoriteFilm extends Component {

    removeFromFavorite = () => {

        this.props.removeFromFavorite(this.props.film)
    }


    render() {
        return (
            <div className="favorite">
                {this.props.film!==""?<li>{this.props.film} <FontAwesomeIcon onClick={this.removeFromFavorite} icon={faTrashAlt} /> </li>:null}
            </div>
        )

    }
}
export default FavoriteFilm;
