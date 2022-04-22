import axios from "axios";

export function DeleteNGO(props) {

    function handleDeletengo(){
        axios.delete(`https://ironrest.herokuapp.com/ngogeh/${props.id}`)
        setTimeout(()=>{window.location.href='/'},500)
    }
     
     
    return (
        <button onClick={handleDeletengo} className='editdelete'>Delete</button>
           );
}