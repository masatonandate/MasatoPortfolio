// import './App.css';
import Home from './Links/Home';
import About from './Links/About';
import Blog from './Links/Blog';
import Project from './Links/Project';
import Contact from './Links/Contact';
import Resume from './Links/Resume';
import PageNotFound from './Links/PageNotFound';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Navbar from './Component/Navbar';
import Header from './Component/Header'
import Hero from './Component/Hero'
import Container from './Component/Container'
import LogoContainer from './Component/LogoContainer';
import AboutMe from './Component/AboutMe';


function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Container Title = {"Projects"}/>
      <LogoContainer/>
      <AboutMe/>
    </>
  );
}

export default App;
