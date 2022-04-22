import axios from "axios";
import { useState, useEffect} from "react";
import { DeleteNGO } from "../DeleteNGO";
import { EditNGO } from "../EditNGO";

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
        <div className="ngoboard">
            <h1>NGOs</h1>
            <div className="ngos">
            {data.map((currentNGO) => {return(
                <div className="ngoitem">
                    <p>Name: {currentNGO.Name}</p>
                    <p>Field of Work: {currentNGO.Field}</p>
                    <p>Location: {currentNGO.Location}</p>
                    <p>Items: {currentNGO.Items}</p>
                    <p>Contact: {currentNGO.Contact}</p>
                    <div className="ngobuttons">
                    <DeleteNGO id={currentNGO._id}/>
                    <EditNGO id={currentNGO._id}/>
                    </div>                               
                </div>
                )
            })}
            </div>
        </div>    );
}
