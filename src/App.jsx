import './App.css'
import Tableau from './Components/Tableau/Tableau'
import Step1 from './Components/Step1/Step1'
import Step2 from './Components/Step2/Step2'
import Step3 from './Components/Step3/Step3'
import Step4 from './Components/Step4/Step4'
import Step5 from './Components/Step5/Step5'
import { useState } from 'react'


function App() {

  const forfaits = [
    {
      name: "Arcade",
      price: 9,
      yearlyPrice: 90,
      period: "mo"
    },
    {
      name: "Advanced",
      price: 12,
      yearlyPrice: 120,
      period: "mo"
    },
    {
      name: "Pro",
      price: 15,
      yearlyPrice: 150,
      period: "mo"
    }
  ]
    const addOns = [
    {
      name: "Online Service",
      description: "Access to multiplayer games",
      price: 1,
      yearlyPrice: 10
    },
    {
      name: "Larger Storage",
      description: "Extra 1TB of cloud save",
      price: 2,
      yearlyPrice: 20
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      price: 2,
      yearlyPrice: 20
    }
  ]


  
  const [page,setPage] = useState(0);
  const [selectedForfait, setSelectedForfait] = useState(0);
  const [isYearly, setIsYearly] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState([false, false, false]);

    

  function calculTotal() {
  let total = 0;
  // Ajout forfait oklm
  total += isYearly ? forfaits[selectedForfait].yearlyPrice : forfaits[selectedForfait].price;
  // Ajout des adds-on
  selectedAddOns.forEach((isSelected, index) => {
    if (isSelected) {
      total += isYearly ? addOns[index].yearlyPrice : addOns[index].price;
    }
  });
  return total;
}
  
  function PageNext() {
    setPage(page+1)
  }
  
  function PagePrev() {
    setPage(page-1)
  }

   function Back(){
    setPage(1)
  }

  return (
    <>
      <div id='base'>
        <Tableau page={page}/>
        {page === 0 ?(<Step1 PageNext={PageNext} PagePrev={PagePrev}/>) : 
        page === 1  ? (<Step2 PageNext={PageNext} PagePrev={PagePrev} forfaits={forfaits} selectedForfait={selectedForfait} setSelectedForfait={setSelectedForfait} isYearly={isYearly} setIsYearly={setIsYearly}/>) : 
        page === 2 ?(<Step3 PageNext={PageNext} PagePrev={PagePrev}/>) : 
        page === 3 ? (<Step4 PageNext={PageNext} PagePrev={PagePrev} Back={Back}/>) : 
        page === 4 && (<Step5 PagePrev={PagePrev}/>) }
      </div>
    </>
  )
}

export default App
