import './Step2.css';

export default function Step2() {




    return(
        <div id='step2'>
            <div>
                <h2 id='h2step2'>Select your plan</h2>
                <p id='h2p1'>You have the option of monthly or yearly billing</p>
            </div> 
            <div id='paymentPlan'>
                <div id='borderPayment'>
                    <div><img id='imgstep2' src="../src/assets/Img/arcade.svg" alt="" /></div>
                    <div style={{marginTop:'25%'}}>
                        <p id='arcade' style={{marginBottom:'0'}}>Arcade</p>
                        <p style={{marginTop:'0'}}>$9/mo</p>
                    </div>
                </div>
                <div id='borderPayment'>
                    <div><img id='imgstep2' src="../src/assets/Img/advenced.svg" alt="" /></div>
                    <div style={{marginTop:'25%'}}>
                        <p id='advanced' style={{marginBottom:'0'}}>Advanced</p>
                        <p style={{marginTop:'0'}}>$9/mo</p>
                    </div>
                </div>
                <div id='borderPayment'>
                    <div><img id='imgstep2' src="../src/assets/Img/pro.svg" alt="" /></div>
                    <div style={{marginTop:'25%'}}>
                        <p id='pro' style={{marginBottom:'0'}}>Pro</p>
                        <p style={{marginTop:'0'}}>$9/mo</p>
                    </div>
                </div>
            </div> 
            <div id='monthyeardiv'>
                <p id='monthyear'>Monthly/Year</p>
            </div>
            <div>
                <button>Go back</button>
                <button>Next Step</button>
            </div>
        </div>
    )
}