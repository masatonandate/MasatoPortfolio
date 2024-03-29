import React from "react";
const Skill = ({Title, Image}) => {
  return(
    <>    
    <div class="flex flex-col items-center">
      <div class="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
      <h3 class="mb-2 text-center text-lg font-semibold md:text-xl">{Title}</h3>
    </div>
    </>
  )
}
export default Skill;