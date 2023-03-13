import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css';
import Textform from "../src/componentes/Textform"
import Navbar from "../src/componentes/Navbar";
import Alert from "./componentes/Alert";
import About from "../src/componentes/About";
import React, {useState} from 'react'
// import { Route } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState('null')
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
setAlert(null);
    },1500);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","Success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
       }
  }
  const redToggleMode = ()=>{
    if(mode==='light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#d63384';
      showAlert("Dark mode has been enabled","Success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
       }
  }
  const greenToggleMode = ()=>{
    if(mode==='light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#20c997';
      showAlert("Dark mode has been enabled","Success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
       }
  }
  return (
   <>
   <div>
   <Navbar title="MY-APP" mode={mode} toggleMode={toggleMode} redToggleMode={redToggleMode} greenToggleMode={greenToggleMode} />
   <Textform title="MY-APP" showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
   <Alert title="MY-APP" alert={alert} />
   {/* <About /> */}
   </div>

   <Router>

    <BrowserRouter>
            
      <Routes>
    
                  <Route path="/About" element={<About />} />
                  <Route path="/" >
          <Textform  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
                  
        
      </Routes>
    </BrowserRouter>
    </Router>



     </>
  );
}
export default App;

