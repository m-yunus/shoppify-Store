
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Mainbody from "./Components/Mainbody/mainbody.jsx"

import {BrowserRouter,Route,Routes} from "react-router-dom"
import ItemDetail from './Components/ItemDetail/ItemDetail';

function App() {
  return (
      <div className="App">
              <BrowserRouter>
              <Navbar/>

                <Routes>

                  <Route path="/shoppify-Store" exact element={<Mainbody/>}/>
                  <Route path='/:id' element={<ItemDetail/>}/>
                </Routes>
            


              
      
              </BrowserRouter>

      </div>
  );
}

export default App;
