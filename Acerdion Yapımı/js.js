var buton= document.querySelectorAll(".hepsi .section");

for (let i = 0; i < buton.length; i++) {
    buton[i].addEventListener("click",function(){
        this.classList.toggle("active");

        var sonrakiElementiYakala = this.nextElementSibling;

        if (sonrakiElementiYakala.style.maxHeight) {
            sonrakiElementiYakala.style.maxHeight=null;
        }else{
            sonrakiElementiYakala.style.maxHeight=sonrakiElementiYakala.scrollHeight+ "px";
        }
    })
    
}