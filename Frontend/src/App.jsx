import React from "react";
import Home from "./home/Home";
import {Navigate, Route, Routes} from "react-router-dom"
import Events from "./events/Events";
import Signup from "./components/Signup";
import ContactUs from "../contact/ContactUs";
import AboutUs from "../about/AboutUs";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";


function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
     <div className='dark:bg-slate-900 dark:text-white'>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/event" element={authUser?<Events/>:<Navigate to="/signup"/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/about" element={<AboutUs/>} />
     </Routes>
     <Toaster/>
     </div>
    </>
  );
}

export default App;
