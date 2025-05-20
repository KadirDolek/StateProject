import './Step1.css'

export default function Step1(){



    return(
        <> 
        <div id='step1before'>
            <div id='step1'>
                    <h2>Personal info</h2>
                    <p id='h2p'>Please provide your name, e-mail adress and phone number</p>
                    <form>
                        <p id='infoname'>Your name is : </p>
                        <input type="text" />
                        <p id='infomail'>Your email is :</p>
                        <input type="mail" />
                        <p id='infonumber'>Your phone number is:</p>
                        <input type="number" />
                    </form>
                </div>
                <div id='divbtn'>
                    <button id='btn1'>Next Step</button>
                </div>
            </div>

        </>
    )
}