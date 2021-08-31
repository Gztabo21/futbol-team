import React, { Component } from 'react';
import Formteam from './form-team';
import ListTeams from './list-team';
import './team.css'

class Team extends Component {
    render() {
        return (
            <div className="wp_team">
                <h2>Ingrese el Equipo nombre del Equipo</h2>
                <Formteam />
                <ListTeams />
            </div>
        );
    }
}

export default Team;