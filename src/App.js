import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home';
import Navbar from './Navbar';
import Sendmail from './Sendmail';
import { createContext, useState } from 'react';
import ViewMail from './ViewMail';
import User from './User';

export const userContext = createContext()

function App() {
  const[sent,setSent] = useState(false)
  const[userSelect,setUserSelect] = useState('')
  return (
    
    <userContext.Provider value={{sent:sent,setSent:setSent,userSelect,setUserSelect}}>
      <BrowserRouter>
        
        <Routes>
            <Route path='/home' Component={Home}/>
            <Route path='/sendmail' Component={Sendmail}/>
            <Route path='/viewmail/:id' Component={ViewMail}/>
            <Route path='/' Component={User}/>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  )
}

export default App;
