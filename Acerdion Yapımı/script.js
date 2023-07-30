var sec= document.querySelectorAll("#accordion .section1")

for (let i = 0; i <sec.length ; i++) {
    sec[i].addEventListener("click",function () {
        this.classList.toggle("active");
        var panel =this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight= null
        }else{
            panel.style.maxHeight=panel.scrollHeight+ "px"
        }
    })
}