
import React from 'react';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import AddItem from './Pages/AddItem';
//import Dashboard from './Pages/Main';
import Item from './Pages/Item';
import Cart from './Pages/Cart';



function App() {
  return (
    <div className="App">
    <BrowserRouter>  
    <Routes>
    
    <Route path="/" element={<AddItem/>}/>
    <Route path="/Item" element={<Item/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    </Routes> 
    
  </BrowserRouter>,
    </div>
  );
}
export default App;
