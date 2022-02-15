import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css'

import Layout from "./components/layout/Layout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";

// Design
import Accordion from "./components/design/Accordion";
import Alert from "./components/design/Alert";
import Dialog from "./components/design/Dialog";
import Dropdown from "./components/design/Dropdown";
import Tab from "./components/design/Tab";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/** Pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error404 />} />

          {/** Design */}
          <Route path="accordion" element={<Accordion />} />
          <Route path="alert" element={<Alert />} />
          <Route path="dialog" element={<Dialog />} />
          <Route path="dropdown" element={<Dropdown />} />
          <Route path="tab" element={<Tab />} />

        </Route>
      </Routes>
    </>
  );
}

export default App