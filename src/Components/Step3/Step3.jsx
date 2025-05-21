import './Step3.css'

export default function Step3({PageNext, PagePrev, addOns, selectedAddOns, setSelectedAddOns, isYearly}) {
    
    const handleAddOnChange = (index) => {
        const newSelectedAddOns = [...selectedAddOns];
        newSelectedAddOns[index] = !newSelectedAddOns[index];
        setSelectedAddOns(newSelectedAddOns);
    }

    return(
        <div id='bigdiv'>
            <div>
                <h2 id='h2step2'>Pick add-ons</h2>
                <p id='h2p1'>Add-ons help enhance your gaming experience</p>
            </div>
            <div>
                <div 
                    id='divcheckbox'
                    style={{
                        border: selectedAddOns[0] ? '2px solid #473dff' : '1px solid #d6d9e6',
                        backgroundColor: selectedAddOns[0] ? '#f8f9fe' : 'white'
                    }}
                    onClick={() => handleAddOnChange(0)}
                >
                    <input 
                        id='check' 
                        type="checkbox" 
                        checked={selectedAddOns[0]} 
                        onChange={() => handleAddOnChange(0)}
                    />
                    <div id='divphrase'>
                        <p style={{marginBottom:'0', fontWeight:'800', color:'rgb(57, 77, 110)'}}>{addOns[0].name}</p>
                        <p style={{opacity:'0.6', fontWeight:'500'}}>{addOns[0].description}</p>
                    </div>
                    <p style={{color:'rgb(156, 129, 193)', fontWeight:'bold'}}>
                        {isYearly ? `+$${addOns[0].yearlyPrice}/yr` : `+$${addOns[0].price}/mo`}
                    </p>
                </div>
                <div 
                    id='divcheckbox'
                    style={{
                        border: selectedAddOns[1] ? '2px solid #473dff' : '1px solid #d6d9e6',
                        backgroundColor: selectedAddOns[1] ? '#f8f9fe' : 'white'
                    }}
                    onClick={() => handleAddOnChange(1)}
                >
                    <input 
                        id='check' 
                        type="checkbox" 
                        checked={selectedAddOns[1]} 
                        onChange={() => handleAddOnChange(1)} 
                    />
                    <div id='divphrase'>
                        <p style={{marginBottom:'0', fontWeight:'800', color:'rgb(57, 77, 110)'}}>{addOns[1].name}</p>
                        <p style={{opacity:'0.6', fontWeight:'500'}}>{addOns[1].description}</p>
                    </div>
                    <p style={{color:'rgb(156, 129, 193)', fontWeight:'bold'}}>
                        {isYearly ? `+$${addOns[1].yearlyPrice}/yr` : `+$${addOns[1].price}/mo`}
                    </p>
                </div>
                <div 
                    id='divcheckbox'
                    style={{
                        border: selectedAddOns[2] ? '2px solid #473dff' : '1px solid #d6d9e6',
                        backgroundColor: selectedAddOns[2] ? '#f8f9fe' : 'white'
                    }}
                    onClick={() => handleAddOnChange(2)}
                >
                    <input 
                        id='check' 
                        type="checkbox" 
                        checked={selectedAddOns[2]} 
                        onChange={() => handleAddOnChange(2)}
                    />
                    <div id='divphrase'>
                        <p style={{marginBottom:'0', fontWeight:'800', color:'rgb(57, 77, 110)'}}>{addOns[2].name}</p>
                        <p style={{opacity:'0.6', fontWeight:'500'}}>{addOns[2].description}</p>
                    </div>
                    <p style={{color:'rgb(156, 129, 193)', fontWeight:'bold'}}>
                        {isYearly ? `+$${addOns[2].yearlyPrice}/yr` : `+$${addOns[2].price}/mo`}
                    </p>
                </div>
            </div>
            <div id='lesboutons2'>
                <button onClick={PagePrev} id='btnback'>Go back</button>
                <button onClick={PageNext} id='btnnext'>Next Step</button>
            </div>
        </div>
    )
}