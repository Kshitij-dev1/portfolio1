// header scroller
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if (document.documentElement.scrollTop > 20){
        nav.classList.add("header_scrolled");

    }
    else{
        nav.classList.remove("header_scrolled");
    }
}


// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})


// <!-- Contect Form script -->

    const scriptURL = 'https://script.google.com/macros/s/AKfycbz2JdIvWRbQWIJRE6p1_7bTspr-nNBzR2anuwzOne8lzVBSmQaNYnxFH6f0zlSdLPm78Q/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent Successfully &#9996"
            setTimeout(function(){
                msg.innerHTML =""
            },3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })