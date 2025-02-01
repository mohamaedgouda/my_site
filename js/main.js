// navication bar function

function MyMenuFunction() {
  menuBtn = document.getElementById("mynavmenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// Add show on navication
window.onscroll = function(){headerShow()}

function headerShow () {
    const navHeader = document.getElementById("header")

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 1px 6px rgba(0 ,0 ,0 , 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    }
    else{
        navHeader.style.boxShadow = "none"
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}
// //////

var typeingEffect = new Typed(".type-text" ,{
    strings : ["BackEnd" , "FrontEnd" , "Developer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80 ,
    backDelay : 2000
})

// /////////

const sr =  ScrollReveal({
    origin :'top',
    distance : "80px",
    duration : 2000,
    rest : true
})

sr.reveal('.featured-text-card ',{})
sr.reveal('.featured-name' , {delay : 100})
sr.reveal('.featured-text-info' , {delay : 200})
sr.reveal('.featured-text-btn' , {delay : 200})
sr.reveal('.social-icons' , {delay : 200})
sr.reveal('featured-image' , {delay : 300})