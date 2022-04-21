import axios from "axios";
import { useState, useEffect} from "react";
import { DeleteNGO } from "../DeleteNGO";

export function NGOBoard() {
    const [data, setData] = useState([]);    
    useEffect(() => {
        async function fetchPlayers() {
            const response = await axios.get(
                "https://ironrest.herokuapp.com/ngogeh"
            );
            setData(response.data);
        }
        fetchPlayers();

    }, [])    
    
    return (
        <div>
            <h2>Read NGO</h2>
            {data.map((currentNGO) => {                return(
                <>
                    <p>name: {currentNGO.Name}</p>
                    <p>Field of Work: {currentNGO.Field}</p>
                    <p>Location: {currentNGO.Location}</p>
                    <p>Items: {currentNGO.Items}</p>
                    <p>Contact: {currentNGO.Contact}</p>                    {/* <DeleteNGO id={currentNGO._id} /> */}                </>
                )
            })}
        </div>    );
}
