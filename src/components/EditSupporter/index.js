import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export function EditSupporter(props) {
    const[openeditsup, setopeneditsup]=useState(false)
    function opensupeditform(){setopeneditsup(true)}
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
        


        const editObject = { ...form };

        axios.put(
            `https://ironrest.herokuapp.com/supgeh/${props.id}`,
            editObject
        );


        /*setForm({
            Name: "",
            Field: "",
            Location: "",
            Contact: "",
        })*/
        setopeneditsup(false)
    }

    return (
        <div className="editform">

        <button onClick={opensupeditform} className='editdelete'>Edit</button>
        <dialog open={openeditsup} className="dialogedit">
        <form onSubmit={handleSubmit} className="form">
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
            <button type="submit" className="submit">Editar</button>
        </form>
        </dialog>
        </div>
    );
}