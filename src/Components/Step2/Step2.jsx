import { useState } from 'react';
import './Step2.css';

export default function Step2({PageNext, PagePrev}) {
    const [isYearly, setIsYearly] = useState(false);

    return(
        <div id='step2'>
            <div>
                <h2 id='h2step2'>Select your plan</h2>
                <p id='h2p1'>You have the option of monthly or yearly billing</p>
            </div> 
            <div id='paymentPlan'>
                <div id='borderPayment'>
                    <div><img id='imgstep2' src="../src/assets/Img/arcade.svg" alt="" /></div>
                    <div style={{marginTop:'35%', marginLeft:'10%', lineHeight:'1'}}>
                        <p id='arcade' style={{marginBottom:'0'}}>Arcade</p>
                        <p id='prix' style={{marginTop:'0'}}>{isYearly ? '$90/yr' : '$9/mo'}</p>
                    </div>
                </div>
                <div id='borderPayment'>
                    <div><img id='imgstep2' src="../src/assets/Img/advenced.svg" alt="" /></div>
                    <div style={{marginTop:'35%', marginLeft:'10%', lineHeight:'1'}}>
                        <p id='advanced' style={{marginBottom:'0'}}>Advanced</p>
                        <p id='prix' style={{marginTop:'0'}}>{isYearly ? '$120/yr' : '$12/mo'}</p>
                    </div>
                </div>
                <div id='borderPayment'>
                    <div><img id='imgstep2' src="../src/assets/Img/pro.svg" alt="" /></div>
                    <div style={{marginTop:'35%', marginLeft:'10%', lineHeight:'1'}}>
                        <p id='pro' style={{marginBottom:'0'}}>Pro</p>
                        <p id='prix' style={{marginTop:'0'}}>{isYearly ? '$150/yr' : '$15/mo'}</p>
                    </div>
                </div>
            </div> 
            <div id='monthyeardiv'>
                <span style={{fontWeight: !isYearly ? 'bold' : 'normal'}}>Monthly</span>
                <label className="switch">
                    <input type="checkbox" checked={isYearly} onChange={() => setIsYearly(!isYearly)}/>
                    <span className="slider"></span>
                </label>
                <span style={{fontWeight: isYearly ? 'bold' : 'normal'}}>Yearly</span>
            </div>
            <div id='lesboutons'>
                <button onClick={PagePrev} id='btnback'>Go back</button>
                <button onClick={PageNext} id='btnnext'>Next Step</button>
            </div>
        </div>
    )
}