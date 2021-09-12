import React, { Component } from 'react';
import Formteam from './form-team';
import ListTeams from './list-team';
import './team.css'

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
      }
    render() {
        return (
            <div className="wp_team">
                <h2>Ingrese el Equipo nombre del Equipo</h2>
                <Formteam />
                <ListTeams competitionId={this.props.competitionId} />
            </div>
        );
    }
}

export default Team;