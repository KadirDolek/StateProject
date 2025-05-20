
import './App.css'
import Tableau from './Components/Tableau/Tableau'
import Step1 from './Components/Step1/Step1'
import Step2 from './Components/Step2/Step2'
import Step3 from './Components/Step3/Step3'
import Step4 from './Components/Step4/Step4'
import Step5 from './Components/Step5/Step5'

import { useState } from 'react'


function App() {
  
  const [page,setPage] = useState(0);
  
  
  function PageNext() {
    setPage(page+1)
  }
  
  function PagePrev() {
    setPage(page-1)
  }

   function Back(){
    setPage(0)
  }


  return (
    <>
      <div id='base'>
        <Tableau page={page}/>
        {page === 0 ?(<Step1 PageNext={PageNext} PagePrev={PagePrev}/>) : page === 1  ? (<Step2 PageNext={PageNext} PagePrev={PagePrev}/>) : page === 2 ?(<Step3 PageNext={PageNext} PagePrev={PagePrev}/>) : page === 3 ? (<Step4 PageNext={PageNext} PagePrev={PagePrev} Back={Back}/>) : page === 4 && (<Step5 PagePrev={PagePrev}/>) }
      </div>
    </>
  )
}

export default App
