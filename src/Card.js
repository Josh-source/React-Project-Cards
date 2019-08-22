import React from 'react';




function Card(props) {
    console.log(props.property);
    const {id, name, city, country, employer, title, favoriteMovies} = props.property;
    return (
        <div id={`card-${id}`} className = 'Card'>
            <h1 className= 'First'>{id}/25</h1>
        <div className = 'Info'>
            <h2 className= 'Second'>{name.first} {name.last}</h2>
            <h3 className= 'Third'>From: {city} , {country}</h3>
            <h4 className= 'Fourth'>Employer:{employer}</h4>
            <h5 className= 'Fifth'>Job Title:{title}</h5>
            <h6 className= 'Sixth'>Favorite Movies:<li>{favoriteMovies}</li></h6>
        </div>
        </div>
    )
}

export default Card;