import React from "react";
import { useState } from "react";
import UseDarkMode from "../Hooks/UseDarkMode";

const ToggleSwitch = () => {
  const [colorTheme, setTheme] = UseDarkMode() //current color theme and a function to update it
  console.log("opposite theme", colorTheme)
  const [isSelected, setSelected] = useState(colorTheme === 'light' ? true : false)

  const toggleSelected = () => {
    setTheme(colorTheme)
    setSelected(!isSelected)
  }

  return (
    <>
    <label class="inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" class="sr-only peer" checked={isSelected} onChange = {toggleSelected}/>
      <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
      <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
    </label>
    </>
  )
}

export default ToggleSwitch;