import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


export function EditSupporter() {
    const params = useParams();
    const [form, setForm] = useState({
        Name: "",
        Field: "",
        Location: "",
        Contact: "",
    });

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                `https://ironrest.herokuapp.com/supgeh/${params}`
            );
            setForm({ ...response.data })
        }
    })

    return (
        <>
        </>
    );
}