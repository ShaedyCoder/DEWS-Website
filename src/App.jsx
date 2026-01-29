import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./Layout.jsx"

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Solutions from "./pages/Solutions.jsx"
import ROSystems from "./pages/ROSystems.jsx"
import DesalinatedWater from "./pages/DesalinatedWater.jsx"
import FreshwaterSolutions from "./pages/FreshwaterSolutions.jsx"
import Fleet from "./pages/Fleet.jsx"
import News from "./pages/News.jsx"
import Contact from "./pages/Contact.jsx"

function Wrap({ name, Page }) {
  return (
    <Layout currentPageName={name}>
      <Page />
    </Layout>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" replace />} />
      <Route path="/Home" element={<Wrap name="Home" Page={Home} />} />
      <Route path="/About" element={<Wrap name="About" Page={About} />} />
      <Route path="/Solutions" element={<Wrap name="Solutions" Page={Solutions} />} />
      <Route path="/ROSystems" element={<Wrap name="ROSystems" Page={ROSystems} />} />
      <Route path="/DesalinatedWater" element={<Wrap name="DesalinatedWater" Page={DesalinatedWater} />} />
      <Route path="/FreshwaterSolutions" element={<Wrap name="FreshwaterSolutions" Page={FreshwaterSolutions} />} />
      <Route path="/Fleet" element={<Wrap name="Fleet" Page={Fleet} />} />
      <Route path="/News" element={<Wrap name="News" Page={News} />} />
      <Route path="/Contact" element={<Wrap name="Contact" Page={Contact} />} />
      <Route path="*" element={<Navigate to="/Home" replace />} />
    </Routes>
  )
}
