import React from "react";
import github from "../Images/Logos/GithubNeutral.png"

const SideProject = ({Title, Description, Image, Date, Link, Key}) => {
  console.log(Image)
  return(
    <>
      <div class="flex flex-col overflow-hidden rounded-lg bg-white border dark:bg-gray-900 dark:border-gray-700" key = {Key}>
        <div class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src={Image} loading="lazy" alt={Title} class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div class="flex flex-1 flex-col p-4 sm:p-6">
          <h2 class="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
            {Title}
          </h2>
          <p class="mb-8 text-gray-500">{Description}</p>
          {Link !== ""
          ?      
          <div class="mt-auto flex items-end justify-between">
            <div class="flex items-center gap-2">
              <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-900">
                <img src={github} loading="lazy" alt="GitHub Icon" class="h-full w-full object-cover object-center" />
              </div>

              <div>
                <span class="block text-sm text-gray-400">{Date}</span>
              </div>
            </div>
            <a href = {Link} target = "_blank" rel = "noopener noreferrer" class="rounded border px-2 py-1 text-sm text-gray-500 dark:border-gray-700">Link to Repo</a>
          </div>
          :
          <div class="mt-auto flex items-end justify-between">
            <div class="flex items-center gap-2">
              <div>
                <span class="block text-sm text-gray-400">{Date}</span>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </>
  )

}

export default SideProject;