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
        fetchData();
    }, [params]);

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const editObject = { ...form };
        delete editObject;

        axios.put(
            `https://ironrest.herokuapp.com/supgeh/${params}`,
            editObject
        );


        setForm({
            Name: "",
            Field: "",
            Location: "",
            Contact: "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Name"
                id="inputName"
                value={form.Name}
                name="Name"
                onChange={handleChange}
            />
            <input
                placeholder="Field of Work"
                id="inputField"
                value={form.Field}
                name="Field"
                onChange={handleChange}
            />
            <input
                placeholder="Location"
                id="inputLocation"
                value={form.Location}
                name="Location"
                onChange={handleChange}
            />
            <input
                placeholder="Contact Information"
                id="inputContact"
                value={form.Contact}
                name="Contact"
                onChange={handleChange}
            />
            <button type="submit">Editar</button>
        </form>
    );
}