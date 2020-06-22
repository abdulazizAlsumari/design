import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const options = {
  orientation: 'landscape',
  unit: 'in',
  format: [220,220]}
function App() {
  return (
    <>
       <Pdf targetRef={ref} filename="code-example.pdf" options={options}x={.5} y={.5}>
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
    <div className="App">
   
     
    <div  className="header_stats" >

  <div  ref={ref} id="continer-card" style={{backgroundColor:"gold"}}>
    <div><img style={{ width: "50px", higth: "50px", marginTop: "12px" }} src={logo} /></div>
    <div className="card-body">
      <h5 className="card-title animate number">99</h5>
      <h3 className="tis">abdulaziz Alsumari</h3>

    </div>
  </div>
{/* <div id="continer-card" style={{ maxWidth: "1000px" }}>
  <div className="card-header tis">Published Project</div>
  <div className="card-body" style={{ display: "flex", justifyContent: "center" }}>{ProjectStates.map((item, index) => (
    <>
      <h5 className="card-title tis" style={{ marginRight: "5%", display: "block" }}>{ProjectStatesName[index]}</h5>
      <br />
      <h5 className="card-title tis" style={{ marginRight: "5%", display: "block", color: ProjectStatesStyle[index] }}>{item}</h5>
    </>))}
  </div>
</div> */}
</div>
    </div>
    </>
  );
}

export default App;
