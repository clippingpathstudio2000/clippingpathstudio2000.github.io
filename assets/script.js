
document.addEventListener("DOMContentLoaded",function(){
 const toggle=document.querySelector(".menu-toggle"), nav=document.querySelector(".nav");
 if(toggle&&nav){toggle.addEventListener("click",()=>nav.classList.toggle("open"))}
 document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",function(e){
   const el=document.querySelector(this.getAttribute("href")); if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth"})}
 }));
});
