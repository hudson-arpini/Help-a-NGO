import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export function EditSupporter(props) {

    const [form, setForm] = useState({
        Name: props.data.Name,
        Field: props.data.Field,
        Location: props.data.Location,
        Items: props.data.Items,
        Contact: props.data.Contact,
    });
    const[openeditsup, setopeneditsup]=useState(false)
    function opensupeditform(){setopeneditsup(true)}
    


    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        

        axios.put(
            `https://ironrest.herokuapp.com/supgeh/${props.id}`,
            {...form}
        );

        setopeneditsup(false)
        setTimeout(()=>{window.location.href='/'},500)
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