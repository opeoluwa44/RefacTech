const nav = document.querySelector(".primary-nav")
const navToggle = document.querySelector(".menu")
const header = document.querySelector(".header-container")


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



function makeMarquee(){
    const title='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quod laudantium, voluptates ab id consectetur? Blanditiis corrupti veritatis sint possimus fugit ea quos odit odio rerum consequatur. Qui, unde consequuntur!'
const marqueeText=Array(50).fill(title).join(' _ ')
const marquee=document.querySelector('.marquee span')
marquee.innerHTML+=marqueeText
}
makeMarquee()


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
    strings: ['<i>Tech</i> &amp; <i>Software /<</i>'],
    typeSpeed: 50,
    loop:true
  });