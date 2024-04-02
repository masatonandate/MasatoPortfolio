// import './App.css';
import Home from './Links/Home';
import About from './Links/About';
import Project from './Links/Project';
import Contact from './Links/Contact';
import Resume from './Links/Resume';
import PageNotFound from './Links/PageNotFound';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"



function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/projects" element = {<Project/>}/>
        <Route path = "/resume" element = {<Resume/>}/>
        <Route path = "*" element = {<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
