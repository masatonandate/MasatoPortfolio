import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideProject from "./SideProject";

const FilterContainer = ({data}) => {

  const [language, setLanguage] = useState("")
  const handleChangeFilter = event => {
    setLanguage(event.target.value)
  }

  const handleButtonClick = event => {
    setLanguage("")
  }

  return (
  <>
    <div class="bg-white py-2 sm:py-2 lg:py-4">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-20">
          {/* <!-- text - start --> */}
          <div class="mb-6 flex items-end justify-between gap-4">
          <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">Projects</h2>
          {/* <button class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">
            Filter
          </button> */}
          <select name = "filter" value = {language} onChange = {handleChangeFilter}
            class ="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-4 md:py-3 md:text-base>">
            <option value="">Select Language</option>
            <option value = "Python">Python</option>
            <option value = "Java">Java</option>
            <option value = "C">C</option>
            <option value = "JavaScript">JavaScript</option>
            <option value = "Swift">Swift</option>
            <option value = "SQL">SQL</option>
            <option value = "R">R</option>
          </select>
        </div>
        {/* Button to Remove Filter */}
        {language != "" &&
          <div class = "my-2 "> 
            <button onClick = {handleButtonClick} class = "rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-4 md:py-2 md:text-base">
              {language}
              <img src = "/cross.png" class = "w-6 h-6 inline-block"></img>
            </button>
          </div>
        }

        <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
          {language != ""
            ?
            data.filter(x=>x.languages.includes(language)).map((project) => {
              return(
                <SideProject Title = {project.title} Description={project.desc} Date = {project.date} Link = {project.link} Image = {project.img} Key = {project.id}/>
              )
            })
            :
            data.map((project) => {
              return(
                <SideProject Title = {project.title} Description={project.desc} Date = {project.date} Link = {project.link} Image = {project.img} Key = {project.id}/>
              )
            })
          }

          {/* <SideProject Title = {"Poly Maps"} Description={"For my Senior Project I created a mobile application that uses AR Objects to guide users across Points of Interest on campus"} Date = {"Sep. 2023 - Mar. 2024"} Link = {"https://github.com/masatonandate/PolyMaps.git"} Image = {PolyMaps}/>
          <SideProject Title = {"Decision Tree"} Description={"We built a Decision Tree from scratch in Java Spark to classify whether an individual made more or less than $50,000 a year. The data comes from UCI's ML Library"} Date = {"Mar. 2024"} Link = {"https://github.com/masatonandate/DistributedFinal"} Image = {DecisionTree}/>
          <SideProject Title = {"Group Cart"} Description={"Developed in a team with MongoDB, Express.js, React, and Node.js, this web app empowers roommates to sign in, create groups, and collaboratively manage their shopping lists"} Date = {"Sep. 2022 - Dec. 2022"} Link = {"https://github.com/ethanoutangoun/groupcart.git"} Image = {GroupCart}/> */}

        </div>
      </div>
    </div>
  </>)
}

export default FilterContainer;