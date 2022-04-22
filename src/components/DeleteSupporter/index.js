import axios from "axios";

export function DeleteSupporter(props) {

    function handleDeletesup(){axios.delete(`https://ironrest.herokuapp.com/supgeh/${props.id}`)}
     
     
    return (
        <button onClick={handleDeletesup} className='editdelete'>Delete</button>
           );
}