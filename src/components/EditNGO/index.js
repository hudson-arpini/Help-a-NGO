import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export function EditNGO(props) {
    const[openeditngo, setopeneditngo]=useState(false)
    function openngoeditform() {setopeneditngo(true)}
    const [form, setForm] = useState({
        Name: "",
        Field: "",
        Location: "",
        Items: "",
        Contact: "",
    });


    function handleChange(event) {
        setForm({ ...form, [event.target.name]:event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const editObject = {...form} ;
        console.log(editObject)
        axios.put(
            `https://ironrest.herokuapp.com/ngogeh/${props.id}`,
            editObject
        );


        setForm({
            Name: "",
            Field: "",
            Location: "",
            Items: "",
            Contact: "",
        })

        setopeneditngo(false)
    }

    return (
        <div className="editform">

        <button onClick={openngoeditform} className='editdelete'>Edit</button>
        <dialog open={openeditngo} className="dialogedit">
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
                placeholder="Items Needed"
                id="inputItems"
                value={form.Items}
                name="Items"
                onChange={handleChange}
            />
            <input 
                placeholder="Contact Information"
                id="inputContact"
                value={form.Contact}
                name="Contact"
                onChange={handleChange}
            />
            <button type="submit" className="submit">Edit</button>
        </form>
        </dialog>
        </div>
    );
}