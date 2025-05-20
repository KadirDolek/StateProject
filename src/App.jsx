
import './App.css'
import Tableau from './Components/Tableau/Tableau'
import Step1 from './Components/Step1/Step1'
import Step2 from './Components/Step2/Step2'

function App() {

  return (
    <>
      <div id='base'>
        <Tableau/>
        {/* <Step1/> */}
        <Step2/>


      </div>
    </>
  )
}

export default App
