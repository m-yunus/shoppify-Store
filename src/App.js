
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Mainbody from "./Components/Mainbody/mainbody.jsx"

import {BrowserRouter,Route,Routes} from "react-router-dom"
import ItemDetail from './Components/ItemDetail/ItemDetail';
import { useRef } from 'react';

function App() {
  const NavRef=useRef()
  const shownavbar=()=>{

    NavRef.current.classList.toggle("responsive_nav")

  }

  return (
      <div className="App">
              <BrowserRouter>
              <Navbar shownavbar={shownavbar} NavRef={NavRef}/>

                <Routes>

                  <Route exact path="/shoppify-Store"  element={<Mainbody/>}/>
                  <Route path='/:id' element={<ItemDetail/>}/>
                </Routes>
            


              
      
              </BrowserRouter>

      </div>
  );
}

export default App;
