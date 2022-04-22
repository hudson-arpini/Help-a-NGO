import { useState } from "react"
import { AddNGO } from "../../components/AddNGO"
import { AddSupporter } from "../../components/AddSupporter"
import { NGOBoard } from "../../components/NGOBoard"
import { SupporterBoard } from "../../components/SupporterBoard"
import "./styles.modules.css"

export function Home() {
   
    
    return (
        <div className="home">
            <header><h1 className="title">Help a NGO</h1></header>

           <div className="buttons">
                
                <AddNGO />
                <AddSupporter />

            </div>


            <div className="board">
                <div>
                    <NGOBoard />
                </div>

                <hr/>
                
                <div>
                    <SupporterBoard />
                </div>
            </div>

            <footer>
                <span>By <a href='https://github.com/Gab-Ahrens' target='_blank' >Gabriel Ahrens</a> e <a href='https://github.com/hudson-arpini' target='_blank' >Hudson Arpini</a></span>
            </footer>
        </div>
    )
}