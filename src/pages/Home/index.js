import { useState } from "react"
import { NGOBoard } from "../../components/NGOBoard"
import { SupporterBoard } from "../../components/SupporterBoard"
import "./styles.modules.css"

export function Home() {

    const[ngoopen, setNGOOpen] = useState(false)
    const[supopen, setSupOpen] = useState(false)

    function NGOhandleClick(){
        setNGOOpen(true)
    }
    function NGOhandleClose(){
        setNGOOpen(false)
    }

    function SuphandleClick(){
        setSupOpen(true)
    }
    function SuphandleClose(){
        setSupOpen(false)
    }
    

    return (
        <div className="home">
            <header><h1 className="title">Help a NGO</h1></header>
            <div className="buttons">

            <button className="ngo" onClick={NGOhandleClick}>I'm a NGO</button>
            <dialog className="dialog" open={ngoopen}>
                  <h1>Register as a NGO</h1>
                  <form className="form">
                    <input type="text" placeholder="NGO's Name"></input><br />
                    <input type="text" placeholder="Actuation Area" ></input><br />
                    <input type="text" placeholder="Where you are from" ></input><br />
                    <input type="text" placeholder="Itens you need"></input><br />
                    <input type="text" placeholder="Link"></input><br />
                </form>

                  <div className="actions">
                    <button onClick={NGOhandleClose} className="submit">Submit</button>
                  </div>
                </dialog>



            <button className="supporter" onClick={SuphandleClick}>I'm a Supporter</button>
            <dialog  className="dialog" open={supopen}>
                  <h1>Register as a Supporter</h1>
                  <form className="form">
                    <input type="text" placeholder="Supporter's Name"></input><br />
                    <input type="text" placeholder="Actuation Area"></input><br />
                    <input type="text" placeholder="Where you are from" ></input><br />
                    <input type="text" placeholder="Link"></input><br />
                </form>

                  <div className="actions">
                    <button onClick={SuphandleClose} className="submit">Submit</button>
                  </div>
            </dialog>

            </div>


            <div className="board">
                <div className="ngoboard">
                    <NGOBoard />
                </div>

                <hr/>
                
                <div className="supporterboard">
                    <SupporterBoard />
                </div>
            </div>

            <footer>
                <span>By Gabriel Ahrens e Hudson Arpini</span>
            </footer>
        </div>
    )
}