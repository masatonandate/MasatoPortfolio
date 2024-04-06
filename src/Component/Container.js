import React from "react";
import SideProject from "./SideProject";
import { Link } from "react-router-dom";


const Container = ({Title}) => {
  return (
    <>
    <div class="bg-white dark:bg-gray-900 py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-20">
        {/* <!-- text - start --> */}
        <div class="mb-6 flex items-end justify-between gap-4">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-200 lg:text-3xl">Projects</h2>
        <Link to="/projects" class="inline-block rounded-lg bg-indigo-500 px-4 py-2 text-center text-sm font-semibold text-white dark:text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">All Projects</Link>
      </div>
        {/* <!-- text - end --> */}

        <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">

          <SideProject Title = {"Poly Maps"} Description={"For my Senior Project I created a mobile application that uses AR Objects to guide users across Points of Interest on campus"} Date = {"Sep. 2023 - Mar. 2024"} Link = {"https://github.com/masatonandate/PolyMaps.git"} Image = {"./SideProjects/polymaps.png"}/>
          <SideProject Title = {"Decision Tree"} Description={"We built a Decision Tree from scratch in Java Spark to classify whether an individual made more or less than $50,000 a year. The data comes from UCI's ML Library"} Date = {"Mar. 2024"} Link = {"https://github.com/masatonandate/DistributedFinal"} Image = {"./SideProjects/decisionTree.png"}/>
          <SideProject Title = {"Group Cart"} Description={"Developed in a team with MongoDB, Express.js, React, and Node.js, this web app empowers roommates to sign in, create groups, and collaboratively manage their shopping lists"} Date = {"Sep. 2022 - Dec. 2022"} Link = {"https://github.com/ethanoutangoun/groupcart.git"} Image = {"./SideProjects/groupcart.jpg"}/>

        </div>
      </div>
    </div>
    </>
  )
}
export default Container;