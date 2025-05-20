import './Step4.css'

export default function Step4({PageNext, PagePrev, Back}){


    return(

            <div id='bigdiv'>
                <div>
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
                            <p style={{marginBottom:'0', color:'blue', fontWeight:'bold',color:'rgb(38, 78, 129)'}}>&nbsp;Advanced(Yearly)</p>
                            <button onClick={Back}  style={{background:'transparent', border:'none', textDecoration:'underline',marginTop:'0', color:'grey'}}>Change</button>
                        </div>
                        <div>
                            (dynamique)
                        </div>
                    </div>
                    <div>
                        <div id='totalprix'>
                            <p id='bordure1'>&nbsp;Total(per year)</p>
                            <p id='bordure2'>$120/yr</p>
                        </div>
                    </div>
                </div>
                <div id='lesboutons3'>
                    <button onClick={PagePrev} id='btnback'>Go back</button>
                <button onClick={PageNext} id='btnnext'>Next Step</button>
                </div>
            </div>

    )
}