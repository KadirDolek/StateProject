import './Step4.css'

export default function Step4({PageNext, PagePrev, Back, forfaits, addOns, selectedForfait, selectedAddOns, isYearly, calculTotal }){


    // Récupérer le forfait sélectionné
const currentForfait = forfaits[selectedForfait];

// Calculer le total final
const total = calculTotal();

return(
    <div id='bigdiv'>
        <div id='ptitdiv'>
            <h2 id='h2step2'>
                Finishing up
            </h2>
            <p id='h2p1'>
                Double-check everything looks OK before confirming
            </p>
        </div>
        <div>
            <div id='step4div'>
                <div>
                    <p style={{marginBottom:'0', fontWeight:'bold', color:'rgb(38, 78, 129)'}}>
                        &nbsp;{currentForfait.name} ({isYearly ? 'Yearly' : 'Monthly'})
                    </p>
                    <button
                        onClick={Back}
                        style={{background:'transparent', border:'none', textDecoration:'underline', marginTop:'0', color:'grey'}}
                    >
                        Change
                    </button>
                </div>
                <div>
                    <p style={{fontWeight:'bold', color:'rgb(38, 78, 129)'}}>
                        {isYearly ?
                            `$${currentForfait.yearlyPrice}/yr` :
                            `$${currentForfait.price}/mo`}
                    </p>
                </div>
            </div>

            {selectedAddOns.some(addon => addon) && <hr style={{opacity: '0.3'}} />}

            {selectedAddOns[0] && (
                <div style={{display: 'flex', justifyContent: 'space-between', margin: '15px 25px'}}>
                    <p style={{color: 'gray'}}>{addOns[0].name}</p>
                    <p style={{color: 'rgb(38, 78, 129)'}}>
                        {isYearly ?
                            `+$${addOns[0].yearlyPrice}/yr` :
                            `+$${addOns[0].price}/mo`}
                    </p>
                </div>
            )}

            {selectedAddOns[1] && (
                <div style={{display: 'flex', justifyContent: 'space-between', margin: '15px 25px'}}>
                    <p style={{color: 'gray'}}>{addOns[1].name}</p>
                    <p style={{color: 'rgb(38, 78, 129)'}}>
                        {isYearly ?
                            `+$${addOns[1].yearlyPrice}/yr` :
                            `+$${addOns[1].price}/mo`}
                    </p>
                </div>
            )}

            {selectedAddOns[2] && (
                <div style={{display: 'flex', justifyContent: 'space-between', margin: '15px 25px'}}>
                    <p style={{color: 'gray'}}>{addOns[2].name}</p>
                    <p style={{color: 'rgb(38, 78, 129)'}}>
                        {isYearly ?
                            `+$${addOns[2].yearlyPrice}/yr` :
                            `+$${addOns[2].price}/mo`}
                    </p>
                </div>
            )}

            <div>
                <div id='totalprix'>
                    <p id='bordure1'>&nbsp;Total (per {isYearly ? 'year' : 'month'})</p>
                    <p id='bordure2'>
                        ${total}/{isYearly ? 'yr' : 'mo'}
                    </p>
                </div>
            </div>
        </div>
        <div id='lesboutons3'>
            <button onClick={PagePrev} id='btnback'>Go back</button>
            <button onClick={PageNext} id='btnnext'>Confirm</button>
        </div>
    </div>
)
}