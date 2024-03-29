import React from "react";
import headshot from "../Images/Photos/masato_headshot.jpg"

const Hero = () => {
  return(
    <>
    <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-20">
      <section class="flex flex-col justify-between gap-2 sm:gap-10 md:gap-16 lg:flex-row">
        {/* <!-- content - start --> */}
        <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
  
          <h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">Hi, I'm Masato</h1>
  
          <p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-5/5 xl:text-lg">
            I'm a Computer Science Graduate from Cal Poly San Luis Obispo interested in Full Stack Web Development and Mobile Development.
          </p>
  
          <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
            <a href="#" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Scroll Down
            </a>
          </div>
        </div>
        {/* <!-- content - end --> */}
  
        {/* <!-- image - start --> */}
        <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-4/12">
          <img src={headshot} loading="lazy" alt="Headshot" class="h-full w-full object-cover object-center" />
        </div>
        {/* <!-- image - end --> */}
      </section>
    </div>
    </div>
    </>
  )
}

export default Hero;