import React from 'react'
import {useState} from 'react'
import Header from '../Component/Header';
import FilterContainer from '../Component/FilterContainer'
import SideProjectData from '../Data/SideProjectData'
import Footer from '../Component/Footer';


const Project = () => {
  const [item, setItem] = useState(SideProjectData)
  return (
    <div>
      <Header />
      <FilterContainer data = {item}/>
      <Footer/>
    </div>
  )
}

export default Project;