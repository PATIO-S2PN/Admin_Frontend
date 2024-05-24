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
import ChangePassword from './Authentication/ResetPw';
import Notification from './Pages/Notifications';
import Setting from './Pages/Setting';
import AdminFeedback from './Pages/AdminFeedback';
import Chef from "./Pages/Chef";
import ChefDetails from './Pages/ChefDetails';
import SMembers from './Pages/SMembers';
import PSetting from './Pages/PSetting';
import Gallery from './Pages/Gallery';
import { ChefProvider } from './Components/ChefContext';
import { GalleryProvider } from './Components/GalleryContext';

function App() {
  return (
    <div className="flex App">
      <BrowserRouter>
      
        <Navbar className="fixed h-screen overflow-auto bg-white w-72" />
        <div className="flex-grow overflow-auto">
          <Nav className="fixed w-64 h-screen overflow-auto bg-white" />
          <ChefProvider>
          <GalleryProvider>
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
            <Route path="/chef" element={<Chef/>}/>
            <Route path="/chef-details" element={<ChefDetails/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/cdetails" element={<CDetails/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/odetail" element={<ODetails/>}/>
            <Route path="/smembers" element={<SMembers/>}/>
            <Route path="/psetting" element={<PSetting/>}/>           
          </Routes>
          </GalleryProvider> 
        </ChefProvider>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;