
import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  
  Route,
  
  Routes
} from "react-router-dom";

import About from './component/About';

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const ShowAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
  }
  const SwitchMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      ShowAlert('Dark mode is enabled', 'Success : ');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      ShowAlert('light mode is enabled', 'Success : ')
    }
  }
  setTimeout(() => {
    setAlert(null);
  }, 4000);

  return (

    <>
      <Router>
        <Navbar title="textutils" about="About Us" Mode={Mode} SwitchMode={SwitchMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About Mode={Mode}/>}/>
              
           
            <Route exact path="/" element={<Textform ShowAlert={ShowAlert} heading="Enter the text for anlyze" Mode={Mode} alert={alert} />}/>
             
              
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
