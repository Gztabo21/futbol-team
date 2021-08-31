import React, { Component } from 'react';
import Matches from './matches';

class Game extends Component {
    render() {
        return (
            <div>
                <h2>Partidos</h2>
                <Matches />
            </div>
        );
    }
}

export default Game;