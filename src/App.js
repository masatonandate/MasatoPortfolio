// import './App.css';
import Home from './Links/Home';
import Project from './Links/Project';
import Resume from './Links/Resume';
import {Routes, Route} from "react-router-dom"



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
