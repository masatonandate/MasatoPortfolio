import React from "react";
import AboutImage from "../Images/Photos/masato_art.png"


const AboutMe = () => {
  return (
  <>
  <div class="bg-white dark:bg-gray-900 py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div>
          <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <img src={AboutImage} loading="lazy" alt="headshot" class="h-full w-full object-cover object-center" />
          </div>
        </div>

        <div class="md:pt-8">

          <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-gray-300 sm:text-3xl md:mb-6 md:text-left">About Me</h1>

          <p class="mb-6 text-gray-500 dark:text-gray-400 sm:text-lg md:mb-8">
          Graduating with a Bachelors in Computer Science and Minor in Statistics from <a class = "hover:text-indigo-500" href = "https://www.calpoly.edu/" target="_blank" rel="noopener noreferrer">Cal Poly San Luis Obispo</a> (2024),
          I am looking for oppurtunities to start my career journey in Software.
          I am interested in pursuing positions as a Software Engineer, Mobile Engineer, or Data Scientist.<br /><br />
          My experience comes from my Software Engineering Internship for Gap Inc., where I contributed to the companies retail mobile application, and campus involvement
          as a computer science tutor and data analyst for the school newspaper. <br/><br/>

          I am a very social person and I love to work hard in a team towards a common goal.
           Also, I believe in life-long learning and I am always looking for ways to learn new technical skills through the internet. <br/><br/>

          My hobbies outside of Computer Science include Soccer, Beach Volleyball, Photography, Piano, and Drawing. <br/><br/>

          This page will continue to be updated!<br /><br />
          </p>
        </div>
      </div>
    </div>
  </div>
</>
  )
}
export default AboutMe;