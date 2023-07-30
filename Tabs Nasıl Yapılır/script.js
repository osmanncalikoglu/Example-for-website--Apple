//varsayılan tab elementi göster +
//varsayılan butonu active classı ekle +

//click eventi oluşur +
 //elementlerin (tablar) hepsini gizle +
 //istenen tabı göster +

 //butonların üzerindeki active classını kaldırma +
 //hangi buton seçili ise onun butonuna active classı ekleyeceğiz

document.querySelector("[data-default-tab]").style.display = "block";

document.querySelector("[data-default-button]").classList.add("active");

document.querySelector(".tab").addEventListener("click",function (event) {
    let tabitems= document.querySelectorAll(".tab-item")
    
    for (let i=0; i<tabitems.length; i++){
        tabitems[i].style.display = "none";
    }

    let clickedbuttonatt = event.target.getAttribute("data-tab-open"); 
    
    document.querySelector(clickedbuttonatt).style.display = "block";

    let buttons= document.querySelectorAll(".tab button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    event.target.classList.add("active");
})








