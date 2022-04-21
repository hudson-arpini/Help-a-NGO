import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export function DeleteSupporter() {
    const params = useParams();    
    useEffect(() => {
        const response = axios.delete(`https://ironrest.herokuapp.com/supgeh/${params._id}`)
    })    
    return (
        <></>
    );
}