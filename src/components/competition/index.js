import React,{useState,useEffect} from 'react';
const Competition = ({competitionId})=>{
    const [competitions,setCompetitions] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


  

    useEffect(()=>{
        fetch('http://api.football-data.org/v2/competitions/',{
            method: 'GET',
            mode: 'cors',
            headers: {'X-Auth-Token': 'ba43837668c3457f9d97bf050df2f8ed'},
        })
          .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    console.log(data)
                    setCompetitions(data.competitions);
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
            <div>
                <select  onChange={competitionId} >
                    {competitions.map(c=>(
                        <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select>
            </div>
        );
    }
}

export default Competition