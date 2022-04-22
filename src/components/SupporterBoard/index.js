import { useState, useEffect } from "react";
import axios from "axios";
import { DeleteSupporter } from "../DeleteSupporter";
import { EditSupporter } from "../EditSupporter"

export function SupporterBoard(){
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
        <div className="ngoboard">
            <h1>Supporters</h1>
            <div className="ngos">
            {data.map((currentSupporter) => {return(
                <div className="ngoitem">
                    <p>Name: {currentSupporter.Name}</p>
                    <p>Field of Work: {currentSupporter.Field}</p>
                    <p>Location: {currentSupporter.Location}</p>
                    <p>Link: <a href={currentSupporter.Contact} target='_blank' >{currentSupporter.Contact}</a></p>
                    <div className="ngobuttons">
                    <DeleteSupporter id={currentSupporter._id}/>
                    <EditSupporter id={currentSupporter._id}/>
                    </div>
                </div>
                )
            })}
            </div>
        </div>    );
}