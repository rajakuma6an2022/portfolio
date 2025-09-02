import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import { IoCodeSlashOutline } from "react-icons/io5";
import { useTheme } from "./stateManagement/ThemeContext";
import { Moon, Sun } from "./components/Icons";
import { portfolioData } from "./data/Portfolio";
import About from "./pages/About";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css"

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
