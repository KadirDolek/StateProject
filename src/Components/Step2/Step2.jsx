import './Step2.css';
import Arcade from '../../assets/Img/arcade.svg'
import Advance from '../../assets/Img/advenced.svg'
import Pro from '../../assets/Img/pro.svg'

export default function Step2({PageNext, PagePrev, selectedForfait, setSelectedForfait, isYearly, setIsYearly}) {
    return(
        <div id='step2'>
            <div>
                <h2 id='h2step2'>Select your plan</h2>
                <p id='h2p1'>You have the option of monthly or yearly billing</p>
            </div> 
            <div id='paymentPlan'>
                <div 
                    id='borderPayment'
                    style={{
                        border: selectedForfait === 0 ? '2px solid rgb(133, 81, 182)' : '1px solid #d6d9e6',
                        backgroundColor: selectedForfait === 0 ? '#f8f9fe' : 'white'
                    }}
                    onClick={() => setSelectedForfait(0)}
                >
                    <div><img id='imgstep2' src={Arcade} alt="" /></div>
                    <div style={{marginTop:'35%', marginLeft:'10%', lineHeight:'1'}}>
                        <p id='arcade' style={{marginBottom:'0'}}>Arcade</p>
                        <p id='prix' style={{marginTop:'0'}}>{isYearly ? '$90/yr' : '$9/mo'}</p>
                        {isYearly && <p style={{color: '#473dff', fontSize: '14px', marginTop: '5px'}}></p>}
                    </div>
                </div>
                <div 
                    id='borderPayment'
                    style={{
                        border: selectedForfait === 1 ? '2px solid rgb(133, 81, 182)' : '1px solid #d6d9e6',
                        backgroundColor: selectedForfait === 1 ? '#f8f9fe' : 'white'
                    }}
                    onClick={() => setSelectedForfait(1)}
                >
                    <div><img id='imgstep2' src={Advance} alt="" /></div>
                    <div style={{marginTop:'35%', marginLeft:'10%', lineHeight:'1'}}>
                        <p id='advanced' style={{marginBottom:'0'}}>Advanced</p>
                        <p id='prix' style={{marginTop:'0'}}>{isYearly ? '$120/yr' : '$12/mo'}</p>
                        {isYearly && <p style={{color: '#473dff', fontSize: '14px', marginTop: '5px'}}></p>}
                    </div>
                </div>
                <div 
                    id='borderPayment'
                    style={{
                        border: selectedForfait === 2 ? '2px solid rgb(133, 81, 182)' : '1px solid #d6d9e6',
                        backgroundColor: selectedForfait === 2 ? '#f8f9fe' : 'white'
                    }}
                    onClick={() => setSelectedForfait(2)}
                >
                    <div><img id='imgstep2' src={Pro} alt="" /></div>
                    <div style={{marginTop:'35%', marginLeft:'10%', lineHeight:'1'}}>
                        <p id='pro' style={{marginBottom:'0'}}>Pro</p>
                        <p id='prix' style={{marginTop:'0'}}>{isYearly ? '$150/yr' : '$15/mo'}</p>
                        {isYearly && <p style={{color: '#473dff', fontSize: '14px', marginTop: '5px'}}></p>}
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