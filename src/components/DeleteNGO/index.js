import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export function DeleteNGO() {
    const params = useParams();    useEffect(() => {
        const response = axios.delete(`https://ironrest.herokuapp.com/ngogeh/${params._id}`)
    })   
     
    return (
        <></>    );
}