import React from "react";
import Skill from "./Skill"

import Python from "../Images/Logos/Python.png"
import Swift from "../Images/Logos/swift.png"
import Java from "../Images/Logos/java.png"
import C from "../Images/Logos/c.png"
import JavaScript from "../Images/Logos/js.png"
import MySQL from "../Images/Logos/mysql.png"
import ReactLogo from "../Images/Logos/react.png"
import Mongo from "../Images/Logos/mongodb.png"
import R from "../Images/Logos/r.png"
import Scala from "../Images/Logos/scala.png"

const LogoContainer = ({Title}) => {
  return (
  <div class="bg-white dark:bg-gray-900 py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-20">
    {/* <!-- text - start --> */}
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-gray-200 md:mb-6 lg:text-3xl">Skills</h2>
    </div>
    {/* <!-- text - end --> */}

    <div class="grid gap-12 sm:grid-cols-2 xl:grid-cols-5 xl:gap-8">
      <Skill Title = {"Python"} Image = {Python}/>
      <Skill Title = {"Swift"} Image = {Swift}/>
      <Skill Title = {"Java"} Image = {Java}/>
      <Skill Title = {"C"} Image = {C}/>
      <Skill Title = {"JavaScript"} Image = {JavaScript}/>
      <Skill Title = {"MySQL"} Image = {MySQL}/>
      <Skill Title = {"React.js"} Image = {ReactLogo}/>
      <Skill Title = {"Mongo.DB"} Image = {Mongo}/>
      <Skill Title = {"R"} Image = {R}/>
      <Skill Title = {"Scala"} Image = {Scala}/>
    </div>
  </div>
</div>
  )
}

export default LogoContainer;