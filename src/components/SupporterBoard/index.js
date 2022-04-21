import { useState, useEffect } from "react";
import axios from "axios";export function SupporterBoard(){
    const [data, setData] = useState([]);    
    useEffect(() => {
        async function fetchPlayers() {
            const response = await axios.get(
                "https://ironrest.herokuapp.com/supgeh"
            );
            setData(response.data);
        }
        fetchPlayers();
    }, [])    
    
    return (
        <div>
            <h2>Read Supporter</h2>
            {data.map((currentSupporter) => {return(
                <>
                    <p>Name: {currentSupporter.Name}</p>
                    <p>Field of Work: {currentSupporter.Field}</p>
                    <p>Location: {currentSupporter.Location}</p>
                    <p>Contact: {currentSupporter.Contact}</p>
                </>
                )
            })}
        </div>    );
}