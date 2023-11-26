const changeMode = document.querySelector("#change-theme")

function toggleDarkMode(){
    document.body.classList.toggle("dark")
}

function loadingTheme(){
    const darkMode = localStorage.getItem("dark") 

    if(darkMode){
        toggleDarkMode()
    }
}

loadingTheme()

changeMode.addEventListener("change", ()=>{
    toggleDarkMode()

    localStorage.removeItem("dark")

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1)
    }
})
