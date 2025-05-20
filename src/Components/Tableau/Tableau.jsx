import './Tableau.css';

export default function Tableau({ page }) {
  return (
    <div id="tableau">
      <div id="container">
        <div style={{marginLeft:'-4px'}} id="stepp1">
          <div className={page === 0 ? "pnumberOn" : "pnumber"}>1</div>
          <div id="step1bis">
            <p id="step1p1">STEP 1</p>
            <p id="step1p2">Your info</p>
          </div>
        </div>
        <div style={{marginLeft:'-35px'}} id="stepp2">
          <div className={page === 1 ? "pnumberOn" : "pnumber"}>2</div>
          <div id="step1bis">
            <p id="step1p1">STEP 2</p>
            <p id="step1p2">Select plan</p>
          </div>
        </div>
        <div id="stepp3">
          <div className={page === 2 ? "pnumberOn" : "pnumber"}>3</div>
          <div id="step1bis">
            <p id="step1p1">STEP 3</p>
            <p id="step1p2">Add-ons</p>
          </div>
        </div>
        <div id="stepp4">
          <div className={page === 3 ? "pnumberOn" : "pnumber"}>4</div>
          <div id="step1bis">
            <p id="step1p1">STEP 4</p>
            <p id="step1p2">Summary</p>
          </div>
        </div>
      </div>
    </div>
  );
}