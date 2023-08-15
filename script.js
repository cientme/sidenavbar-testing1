const nav = document.querySelector('.side-nav')
fetch("/side_nav.html")
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data 
})