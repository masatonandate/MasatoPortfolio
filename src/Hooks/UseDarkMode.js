import { useEffect, useState } from "react";

const UseDarkMode = () => {
  //localStorage is persisted data regardless of closing or opening browser
  const [theme, setTheme] = useState(localStorage.theme)
  const colorTheme = theme ==='dark' ? 'light' : 'dark' //colorTheme is opposite of theme

  //useEffect is necessary to update the HTML document based on theme and colorTheme states. Saves theme to localStorage
  useEffect(()=>{
    const root = window.document.documentElement //returns <html> tag
    root.classList.remove(colorTheme)
    root.classList.add(theme)

    //saves theme to local storage
    localStorage.setItem('theme', theme)

  }, [theme, colorTheme])

  return [colorTheme, setTheme]

}

export default UseDarkMode;