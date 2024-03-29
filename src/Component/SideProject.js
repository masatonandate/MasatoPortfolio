import React from "react";
import github from "../Images/Logos/github.png"

const SideProject = ({Title, Description, Image, Date}) => {
  return(
    <>
      <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
        <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-1 flex-col p-4 sm:p-6">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{Title}</a>
          </h2>

          <p class="mb-8 text-gray-500">{Description}</p>

          <div class="mt-auto flex items-end justify-between">
            <div class="flex items-center gap-2">
              <div class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                <img src={github} loading="lazy" alt="GitHub Icon" class="h-full w-full object-cover object-center" />
              </div>

              <div>
                <span class="block text-sm text-gray-400">{Date}</span>
              </div>
            </div>
            <a href = "#" class="rounded border px-2 py-1 text-sm text-gray-500">Link to Repo</a>
          </div>
        </div>
      </div>
    </>
  )

}

export default SideProject;