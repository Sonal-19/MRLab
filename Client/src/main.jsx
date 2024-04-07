import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx"; 
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import TestingFacilities from "./Pages/TestingFacilities.jsx";
import NewsEvents from "./Pages/NewsEvents.jsx";
import Contact from "./Pages/Contact.jsx";
import DSC from "./Components/Testings/DSC.jsx";
import FTIR from "./Components/Testings/FTIR.jsx";
import AbrasiveCuttingMachine from "./Components/Testings/AbrasiveCuttingMachine.jsx";
import CryoMill from "./Components/Testings/CryoMill.jsx";
import DoubleDiscPolishingMachine from "./Components/Testings/DoubleDiscPolishingMachine.jsx";
import InjectionModelingMachine from "./Components/Testings/InjectionModelingMachine.jsx";
import MeltFlowTester from "./Components/Testings/MeltFlowTester.jsx";
import MicroVickerHardnessTester from "./Components/Testings/MicroVickerHardnessTester.jsx";
import Printer from "./Components/Testings/Printer.jsx";
import Tribometer from "./Components/Testings/Tribometer.jsx";
import TwinScrewExtruder from "./Components/Testings/TwinScrewExtruder.jsx";
import UniversalTensilTester from "./Components/Testings/UniversalTensilTester.jsx";
import VapourSmoothening from "./Components/Testings/VapourSmoothening.jsx";
import QueryForm from "./Pages/QueryForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route>
          <Route path="/" element={<App></App>}></Route>
          <Route index element= {<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path='/testing' element={<TestingFacilities/>} />
          <Route path="/news-events" element={<NewsEvents/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/dsc" element={<DSC/>} />
          <Route path="/ftir" element={<FTIR/>} />
          <Route path="/abrasive-cutting-machine" element={<AbrasiveCuttingMachine/>} />
          <Route path="/cryo-mill" element={<CryoMill/>} />
          <Route path="/double-disc-polishing-machine" element={<DoubleDiscPolishingMachine/>} />
          <Route path="/injection-modeling-machine" element={<InjectionModelingMachine/>} />
          <Route path="/melt-flow-tester" element={<MeltFlowTester/>} />
          <Route path="/micro-vector-hardness-tester" element={<MicroVickerHardnessTester/>} />
          <Route path="/pinter" element={<Printer/>} />
          <Route path="/tribometer" element={<Tribometer/>} />
          <Route path="/twin-screw-extruder" element={<TwinScrewExtruder/>} />
          <Route path="/universal-tensil-tester" element={<UniversalTensilTester/>} />
          <Route path="/vapour-smoothening" element={<VapourSmoothening/>} />
          <Route path="/queryform" element={<QueryForm/>} />
          
        </Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
  </React.StrictMode>
);
