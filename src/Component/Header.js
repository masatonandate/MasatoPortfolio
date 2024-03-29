import React from "react";
import icon from "../Images/Logos/homeIcon.png"

const Header = () => {
  return (
  <>
    <div class="bg-white lg:pb-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-20">
      <header class="flex items-center justify-between py-4 md:py-8">
        {/* <!-- logo - start --> */}
        <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
          {/* <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="./Images/homeIcon" />
          </svg> */}
          <img class = "h-auto w-8" src = {icon}></img>
        </a>
        {/* <!-- logo - end --> */}

        {/* <!-- nav - start --> */}
        <nav class="hidden gap-12 lg:flex">
          <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Home</a>
          <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Projects</a>
          <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Resume</a>
        </nav>
        {/* <!-- nav - end -->*/}
      </header>
    </div>
  </div>
</>
  )
}
export default Header;