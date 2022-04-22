import axios from "axios";

export function DeleteNGO(props) {

    function handleDeletengo(){
        axios.delete(`https://ironrest.herokuapp.com/ngogeh/${props.id}`)
    }
     
     
    return (
        <button onClick={handleDeletengo} className='editdelete'>Delete</button>
           );
}