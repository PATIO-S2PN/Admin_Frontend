import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import Chef from "./Pages/Chef";
import ChefDetails from './Pages/ChefDetails';
import Gallery from './Pages/Gallery';
import { ChefProvider } from './Components/ChefContext';
import { GalleryProvider } from './Components/GalleryContext';
import EditChef from './Components/EditChef';
import EditProfile from './Pages/EditProfile';
import AuthProvider from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && location.pathname !== '/forgot-password' && <Navbar className="fixed h-screen overflow-auto bg-white w-72" />}
      <div className="flex-grow overflow-auto">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ChangePassword />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notification"
            element={
              <ProtectedRoute>
                <Notification />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/setting"
            element={
              <ProtectedRoute>
                <Setting />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addItem"
            element={
              <ProtectedRoute>
                <AddItem />
              </ProtectedRoute>
            }
          />
          <Route
            path="/item"
            element={
              <ProtectedRoute>
                <Item />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/customer"
            element={
              <ProtectedRoute>
                <Customer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cdetails"
            element={
              <ProtectedRoute>
                <CDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/odetail"
            element={
              <ProtectedRoute>
                <ODetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/smembers"
            element={
              <ProtectedRoute>
                <SMembers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/psetting"
            element={
              <ProtectedRoute>
                <PSetting />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chef"
            element={
              <ProtectedRoute>
                <Chef />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chef-details"
            element={
              <ProtectedRoute>
                <ChefDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-chef"
            element={
              <ProtectedRoute>
                <EditChef />
              </ProtectedRoute>
            }
          />
          <Route
            path="/gallery"
            element={
              <ProtectedRoute>
                <Gallery />
              </ProtectedRoute>
            }
          />
          {/* Add other protected routes here */}
        </Routes>
      </div>
    </>
  );
};

function App() {
  return (
    <div className="flex App">
      <BrowserRouter>
        <AuthProvider>
          <ChefProvider>
            <GalleryProvider>
              <AppContent />
            </GalleryProvider>
          </ChefProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
