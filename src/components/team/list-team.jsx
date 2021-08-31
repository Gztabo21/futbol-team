import React,{useEffect, useState} from "react";

const ListTeams = () => {
    const [Teams,setTeams] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(()=>{
        fetch('http://api.football-data.org/v2/competitions/2016/teams',{
            method: 'GET',
            mode: 'cors',
            headers: {'X-Auth-Token': 'ba43837668c3457f9d97bf050df2f8ed'},
        })
          .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    console.log(data)
                    setTeams(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    },[])

    if (error) {
        return <div>Error: </div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="tb-team">
            <label>Competicion: <span>{Teams.competition.name}</span></label>
            <table>
                <thead><tr><td>Logo</td><td>Nombre</td><td>Fundado</td></tr></thead>
                {Teams.teams.map(t=>(<tr id={t.id}>
                    <td><img src={t.crestUrl} width="50" /></td>
                    <td><span>{t.name}</span></td>
                    <td><span>{t.founded}</span></td>
                </tr>))}
            </table>
            </div>
        );
    }
    /* return (
        <>
        <h3>Tabla de posiciones</h3>
        <div className="tb-team">
            <table >
                <thead>
                    <tr>
                    <th>N°</th>
                    <th>Equipo</th>
                    <th>jj</th>
                    <th>jG</th>
                    <th>jp</th>
                    <th>jE</th>
                    <th>GF</th>
                    <th>GC</th>
                    <th>GA</th>
                    <th>PTOS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </div>
            <p>Total de Equipos: <span></span></p>
        </>
    ) */
}
export default ListTeams