
// import React from 'react';
// import { BrowserRouter, Routes , Route} from 'react-router-dom';
// import AddItem from './Pages/AddItem';
// //import Dashboard from './Pages/Main';
// import Item from './Pages/Item';
// import Cart from './Pages/Cart';
// import Dashboard from './Pages/Dashbord';
// import Customer from './Pages/Customer';
// import CDetails from './Pages/CDetails';
// import Orders from './Pages/Orders';
// import ODetails from './Pages/ODetails';
// import NavBar from './Components/Navbar';


// function App() {
//   return (
//     <div className="flex App">
//       <BrowserRouter>
//         <NavBar className="fixed w-64 h-screen overflow-auto bg-white" /> {/* Include the NavBar component with fixed positioning */}
//         <div className="flex-grow overflow-auto"> {/* Add a content div for the page content with flex-grow to take remaining width */}
//           <Routes>
//             <Route path="/" element={<AddItem />} />
//             <Route path="/item" element={<Item />} />
//             <Route path="/Cart" element={<Cart />} />
//             <Route path="/dashboard" element={<Dashboard/>}/>
//             <Route path="/customer" element={<Customer/>}/>
//             <Route path="/cdetails" element={<CDetails/>}/>
//             <Route path="/orders" element={<Orders/>}/>
//             <Route path="/odetail" element={<ODetails/>}/>
//           </Routes>
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Nav from './Components/Nav';
import AddItem from './Pages/AddItem';
import Dashboard from './Pages/Dashbord';
import Item from './Pages/Item';
import Cart from './Pages/Cart';
import Customer from './Pages/Customer';
import CDetails from './Pages/CDetails';
import Orders from './Pages/Orders';
import ODetails from './Pages/ODetails';
import Login from './Authentication/Login';
import Signup from './Authentication/SignUp';
import ForgotPassword from './Authentication/ForgetPw';

// Import other pages as needed

function App() {
  return (
    <div className="App flex">
      <BrowserRouter>
        <Navbar className="fixed w-72 h-screen overflow-auto bg-white" />
        <div className="flex-grow overflow-auto">
          <Nav className="fixed w-64 h-screen overflow-auto bg-white" />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addItem" element={<AddItem />} />
            <Route path="/item" element={<Item />} />
            <Route path="/Cart" element={<Cart />} />
             <Route path="/customer" element={<Customer/>}/>
             <Route path="/cdetails" element={<CDetails/>}/>
           <Route path="/orders" element={<Orders/>}/>
             <Route path="/odetail" element={<ODetails/>}/>

            {/* Define more routes as needed */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;