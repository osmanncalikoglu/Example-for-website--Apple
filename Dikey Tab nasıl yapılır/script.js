//varsayılan tab içeriğini göster
//varsayılan butonu active class ekle

//click event
  //elementlerin hepsini gizle
  //istenen tabı göster
  //butonların active classını kaldır
  //hangi tab seçili ise onun butonuna active classı ekle


  
  function tab() {
    
    //varsayılan tab içeriğini göster

    let defaultcontent=document.querySelector("[data-default-content]");
    defaultcontent.style.display="block";

    //varsayılan butonu active class ekle

    let defaultbutton=document.querySelector("[data-default-button]");
    defaultbutton.classList.add("active");

    //click event

    let buttons =document.querySelector(".tab-buttons");

    //elementlerin hepsini gizle

    buttons.addEventListener("click",function (e) {
        if (e.target != this) {
            
            let tabs = document.querySelectorAll(".contents p");

            //tüm tbleri gizliyoruz
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].style.display = "none"; 
            }

            //istenen tabı göster

             let showtab = e.target.getAttribute("data-open-content");
             
             document.querySelector(showtab).style.display="block";

             //butonların active classını kaldır

             let butonlar= document.querySelectorAll(".tab-buttons button");
             for (let i = 0; i < butonlar.length; i++) {
                butonlar[i].classList.remove("active"); 
             } 

             //hangi tab seçili ise onun butonuna active classı ekle

             e.target.classList.add("active");



        }
    })

  }

  tab();