import { useState } from "react";
import axios from "axios";


export function AddSupporter() {
    const [form, setForm] = useState({
        Name: "",
        Field: "",
        Location: "",
        Contact: "",
    });

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }
    
    function handleSubmit(event) {
        event.preventDefault();

        axios.post("https://ironrest.herokuapp.com/supgeh", form);

        setForm({
            Name: "",
            Field: "",
            Location: "",
            Contact: "",
        });
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
            {/* <label htmlFor="inputContact">Contact Information</label> */}
            <input
                placeholder="Contact Information"
                id="inputContact"
                value={form.Contact}
                name="Contact"
                onChange={handleChange}
            />
            <button type="submit">Submit</button>        
        </form>

    );
}