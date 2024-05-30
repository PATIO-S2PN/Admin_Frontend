import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
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
import ChangePassword from './Authentication/ResetPw';
import Notification from './Pages/Notifications';
import Setting from './Pages/Setting';
import SMembers from './Pages/SMembers';
import PSetting from './Pages/PSetting';
import { useLocation } from 'react-router-dom';
import Chef from "./Pages/Chef";
import ChefDetails from './Pages/ChefDetails';
import Gallery from './Pages/Gallery';
import { ChefProvider } from './Components/ChefContext';
import { GalleryProvider } from './Components/GalleryContext';
import EditChef from './Components/EditChef';


function App() {
  return (
    <div className="flex App">
      <BrowserRouter>
        <ChefProvider>
          <GalleryProvider>
            <AppContent />
          </GalleryProvider>
        </ChefProvider>
      </BrowserRouter>
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Navbar className="fixed h-screen overflow-auto bg-white w-72" />}
      <div className="flex-grow overflow-auto">
        {/* <Nav className="fixed w-64 h-screen overflow-auto bg-white" /> */}
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ChangePassword />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/addItem" element={<AddItem />} />
            <Route path="/item" element={<Item />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/customer" element={<Customer/>}/>
            <Route path="/cdetails" element={<CDetails/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/odetail" element={<ODetails/>}/>
            <Route path="/smembers" element={<SMembers/>}/>
            <Route path="/psetting" element={<PSetting/>}/>  
            <Route path="/chef" element={<Chef/>}/>
            <Route path="/chef-details" element={<ChefDetails/>}/>
            <Route path="/edit-chef" element={<EditChef />} />
            <Route path="/gallery" element={<Gallery/>}/>  
          {/* ... other routes */}
        </Routes>
      </div>
    </>
  );
}


export default App;