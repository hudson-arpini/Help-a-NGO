import { useState } from "react";
import axios from "axios";


export function AddNGO() {

    const[ngoopen, setNGOOpen] = useState(false)

    const [form, setForm] = useState({
        Name: "",
        Field: "",
        Location: "",
        Items: "",
        Contact: "",
    });

    function NGOhandleClick(){
        setNGOOpen(true)
    }

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }
    
    function handleSubmit(event) {
        event.preventDefault();

        axios.post("https://ironrest.herokuapp.com/ngogeh", form);

        setForm({
            Name: "",
            Field: "",
            Location: "",
            Items: "",
            Contact: "",
        });
        setNGOOpen(false)
        setTimeout(()=>{window.location.href='/'},500)
    }
    
    
    return (
        <div>
        <button className="ngo" onClick={NGOhandleClick}>I'm a NGO</button>

        <dialog className="dialog" open={ngoopen}>

        <h1>Register as a NGO</h1>

        <form onSubmit={handleSubmit} className='form'>
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
            
            <div className="actions">
            <button type="submit" className="submit">Submit</button> 
            </div>       
        </form>
        </dialog>
        </div>
    );
}