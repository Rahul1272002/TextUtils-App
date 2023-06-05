import {
  BrowserRouter as Router,
  Routes,
  Route,
 // Link
} from "react-router-dom";
import './App.css';
import About from './componants/About';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import Alert from './componants/Alert';
import React, { useState } from 'react';



function App() {
const [mode,setMode]=useState('light');
const [alert,setAlert]=useState(null);



const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);

  },1500)
}

const toggleMode=()=>{
  if(mode==='light')
  {
     setMode('dark');
    document.body.style.backgroundColor='#042743';
   showAlert("Enable dark mode","success");
   document.title='React app Dark Mode';
  }
   
  else
  {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Enable light mode","success");
    document.title='React app Light Mode';
  }
     
}

  return (
 <>
<Router>
   <Navbar   about="AboutText" mode={mode} toggleMode={toggleMode} /> 
<Alert alert={alert}/>
 
 <div className="container my-3">
<Routes>
          <Route path="/about" element={<About />}/>
        
          
      
          <Route path="/" element={<TextForm  mode={mode} heading="Enter the text for count text length and word" showAlert={showAlert}/>}/>
          </Routes>

 </div>
 </Router>
 </>
    
    
  );
}

export default App;

