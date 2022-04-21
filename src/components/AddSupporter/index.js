import { useState } from "react";
import axios from "axios";

export function AddSupporter() {

    const[supopen, setSupOpen] = useState(false)

    const [form, setForm] = useState({
        Name: "",
        Field: "",
        Location: "",
        Contact: "",
    });

    function SuphandleClick(){
        setSupOpen(true)
    }

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

        setSupOpen(false)
    }
    
    
    return (
        <div>
        <button className="supporter" onClick={SuphandleClick}>I'm a Supporter</button>

        <dialog className="dialog" open={supopen}>
            
        <h1>Register as a Supporter</h1>
        
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