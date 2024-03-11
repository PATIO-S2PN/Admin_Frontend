
import React from 'react';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import AddItem from './Pages/AddItem';
//import Dashboard from './Pages/Main';
import Item from './Pages/Item';
import Cart from './Pages/Cart';
import Dashboard from './Pages/Dashbord';
import Customer from './Pages/Customer';
import CDetails from './Pages/CDetails';
import Orders from './Pages/Orders';
import ODetails from './Pages/ODetails';
import NavBar from './Components/Navbar';


function App() {
  return (
    <div className="flex App">
      <BrowserRouter>
        <NavBar className="fixed w-64 h-screen overflow-auto bg-white" /> {/* Include the NavBar component with fixed positioning */}
        <div className="flex-grow overflow-auto"> {/* Add a content div for the page content with flex-grow to take remaining width */}
          <Routes>
            <Route path="/" element={<AddItem />} />
            <Route path="/item" element={<Item />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/customer" element={<Customer/>}/>
            <Route path="/cdetails" element={<CDetails/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/odetail" element={<ODetails/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;



