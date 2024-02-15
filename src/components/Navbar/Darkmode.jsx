import React from "react"
import DarkImage from "../../assets/navbar/dark-mode-button.png"
import LightImage from "../../assets/navbar/light-mode-button.png"

export default function Darkmode(){
    const[theme,setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    )

    const element = document.documentElement
    console.log(element)

    React.useEffect(()=>{
        if(theme === "dark") {
            element.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }else{
            element.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [theme])

    return(
        <div className="relative">
            <img src={LightImage} alt="light image" className={`w-12 cursor-pointer 
            drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all 
            duration-300 absolute righ-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            />
            <img src={DarkImage} alt="dark mode button" className="w-12 cursor-pointer 
            drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all 
            duration-300"
            onClick={() => setTheme(theme === "light" ? "light" : "dark")}
            />
        </div>
    )
}