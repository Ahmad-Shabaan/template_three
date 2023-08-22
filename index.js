// let scr = document.querySelector(".scroll");
// let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// window.addEventListener("scroll",()=>{
//     let topScroll = document.documentElement.scrollTop;
//     scr.style.width = `${(topScroll / height) * 100}%`
// });

let x = document.querySelector(".toUp");
window.addEventListener("scroll",()=>{
    let toUp = document.documentElement.clientHeight + document.documentElement.scrollTop;
    if(toUp > document.documentElement.clientHeight + 500){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
});
document.querySelector(".toUp").style.cursor="pointer",
document.querySelector(".toUp").addEventListener("click",() => {
    window.scrollTo({
        top : 0,
        behavior: 'smooth'
    
    })
});





