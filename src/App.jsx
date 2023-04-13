import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleRecipe from "./pages/SingleRecipe";
import Footer from './components/Footer';
import Error from "./pages/Error";
// import components
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="recipe/:id" element={<SingleRecipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
