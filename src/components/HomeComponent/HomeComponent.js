import React from 'react';
import {Link} from 'react-router-dom';
import './HomeComponent.style.css';

const HomeComponent = () => {
    return (
        <div className='home-wrapper'>
            <h1>Insights on Copenhagen cycling</h1>
            <p>Cycling in Copenhagen is an important means of transportation and a dominating feature of the cityscape.Every day 1.2 million kilometres (0.75 million miles) are cycled in Copenhagen, with 62% of all citizens commuting to work, school or university by bicycle</p>
            <h2>What to expect from this app:</h2>
            <p>This app helps you to show cycle route's in the city of Copenhagen on the physical space (map) and also gives you a graphical representation on weather conditions at the location you would like to visit.</p>
            <button><Link to='/cycle-map'>Start</Link></button>
        </div>
    )
}

export default HomeComponent
