const nav = document.querySelector(".primary-nav")
const navToggle = document.querySelector(".menu")
const header = document.querySelector(".header-container")
const list = document.querySelectorAll("li")


navToggle.addEventListener("click", ()=>{
    visibility = nav.getAttribute("data-visible")
    aria = navToggle.getAttribute("aria-expanded")
    if(visibility==="false" && aria==="false"){
    nav.setAttribute("data-visible", true)
    navToggle.setAttribute("aria-expanded", true)
    }else{
    nav.setAttribute("data-visible", false)
    navToggle.setAttribute("aria-expanded", false)

    }
    
})


list.forEach(item=> {
    item.addEventListener("click", function() {
        list.forEach(item=> {
            item.classList.remove("active")
        })

        this.classList.add("active")

    })

})



window.addEventListener("scroll", ()=>{
    if(window.scrollY>=150){
        header.classList.add('show-background')

    }else{
        header.classList.remove('show-background')
    }
    return ()=> {
        // so we don't have too much event listener active
        window.removeEventListener("scroll")
    }
});

var typed = new Typed('#typewriter', {
    strings: ['<i>BUILD</i>', '<i>DEPLOY</i>', ' <i>OPERATE</i>'],
    typeSpeed: 50,
    loop:true
  });