import React from "react";
const Skill = ({Title, Image}) => {
  return(
    <>    
    <div class="flex flex-col items-center">
      <div class="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
        <img src = {Image} alt = {Title}></img>
      </div>
      <h3 class="mb-2 text-center text-lg font-semibold md:text-xl">{Title}</h3>
    </div>
    </>
  )
}
export default Skill;