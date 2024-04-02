import React from "react";
import Github from "../Images/Logos/github.png"
import Mail from "../Images/Logos/mailicon.png"
import LinkedIn from "../Images/Logos/linkedinicon.png"

const Footer = () => {

  const mailHandler = () => {
    window.location = 'mailto:mnandate.work@gmail.com'
  }

  return (
  <div class="bg-white pt-4 sm:pt-10 lg:pt-12">
  <footer class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="flex flex-col items-center border-t pt-6">
      <h3 class = "mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6 text-lg font-semibold text-gray-600">Contact</h3>

      {/* <!-- social - start --> */}
      <div class="flex gap-4">

        <a href="javascript:void(0)" onClick = {mailHandler} class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <img src = {Mail} class = "h-5 w-5"></img>
        </a>

        <a href="https://www.linkedin.com/in/masato-nandate/" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <img src = {LinkedIn} class = "h-5 w-5"></img>
        </a>

        <a href="https://github.com/masatonandate" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <img src = {Github} class = "h-5 w-5"></img>
        </a>

      </div>
      {/* <!-- social - end --> */}
      </div>

    <div class="py-8 text-center text-sm text-gray-400"></div>
  </footer>
  </div>
  )
}
export default Footer;