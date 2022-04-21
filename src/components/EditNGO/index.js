import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


export function EditSupporter() {
    const params = useParams();
    const [form, setForm] = useState({
        Name: "",
        Field: "",
        Location: "",
        Items: "",
        Contact: "",
    });

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                `https://ironrest.herokuapp.com/ngogeh/${params}`
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
            `https://ironrest.herokuapp.com/ngogeh/${params}`,
            editObject
        );


        setForm({
            Name: "",
            Field: "",
            Location: "",
            Items: "",
            Contact: "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor="inputName">Name</label> */}
            <input
                placeholder="Name"
                id="inputName"
                value={form.Name}
                name="Name"
                onChange={handleChange}
            />
            {/* <label htmlFor="inputField">Field of Work</label> */}
            <input
                placeholder="Field of Work"
                id="inputField"
                value={form.Field}
                name="Field"
                onChange={handleChange}
            />
            {/* <label htmlFor="inputLocation">Location</label> */}
            <input
                placeholder="Location"
                id="inputLocation"
                value={form.Location}
                name="Location"
                onChange={handleChange}
            />
            {/* <label htmlFor="inputItems">Items Needed</label> */}
            <input
                placeholder="Items Needed"
                id="inputItems"
                value={form.Items}
                name="Items"
                onChange={handleChange}
            />
            {/* <label htmlFor="inputContact">Contact Information</label> */}
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