import { useState } from 'react'
import './Step1.css'


export default function Step1({PageNext}){

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [number, setNumber] = useState("")
    
    return(
        <> 
        <div id='step1before'>
            <div id='step1'>
                    <h2>Personal info</h2>
                    <p id='h2p'>Please provide your name, e-mail adress and phone number</p>
                    <form>
                        <p id='infoname'>Your name is : {name} </p>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
                        <p id='infomail'>Your email is : {mail}</p>
                        <input value={mail} onChange={(e) => setMail(e.target.value)} type="mail" />
                        <p id='infonumber'>Your phone number is : {number}</p>
                        <input value={number} onChange={(e) => setNumber(e.target.value)} type="number" />
                    </form>
                </div>
                <div id='divbtn'>
                    <button onClick={PageNext} id='btn1'>Next Step</button>
                </div>
            </div>

        </>
    )
}