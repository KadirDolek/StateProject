import './Step3.css'

export default function Step3({PageNext, PagePrev}){



    return(

        <div id='bigdiv'>
            <div>
                <h2 id='h2step2'>Pick add-ons</h2>
                <p id='h2p1'>Add-ons help enhance your gaming experience</p>
            </div>
            <div>
                <div id='divcheckbox'>
                    <input id='check' type="checkbox" />
                    <div id='divphrase'>
                        <p style={{marginBottom:'0', fontWeight:'800', color:'rgb(57, 77, 110)'}}>Online Service</p>
                        <p style={{opacity:'0.6', fontWeight:'500'}}>Access to multiplayer games</p>
                    </div>
                    <p style={{color:'rgb(156, 129, 193)', fontWeight:'bold'}}>(dynamique)</p>
                </div>
                 <div id='divcheckbox'>
                    <input id='check' type="checkbox" />
                    <div id='divphrase'>
                        <p style={{marginBottom:'0', fontWeight:'800', color:'rgb(57, 77, 110)'}}>Larger Storage</p>
                        <p style={{opacity:'0.6', fontWeight:'500'}}>Extra 1TB of cloud save</p>
                    </div>
                    <p style={{color:'rgb(156, 129, 193)', fontWeight:'bold'}}>(dynamique)</p>
                </div>
                 <div id='divcheckbox'>
                    <input id='check' type="checkbox" />
                    <div id='divphrase'>
                        <p style={{marginBottom:'0', fontWeight:'800', color:'rgb(57, 77, 110)'}}>Customizable Profile</p>
                        <p style={{opacity:'0.6', fontWeight:'500'}}>Custom theme on your profile</p>
                    </div>
                    <p style={{color:'rgb(156, 129, 193)', fontWeight:'bold'}}>(dynamique)</p>
                </div>
            </div>
             <div id='lesboutons2'>
                <button onClick={PagePrev} id='btnback'>Go back</button>
                <button onClick={PageNext} id='btnnext'>Next Step</button>
            </div>
        </div>

    )
}