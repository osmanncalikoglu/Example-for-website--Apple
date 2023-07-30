//butonların arka plan rengini sıfırla
//seçili butonun rengi değişsin

//içreklerin hepsini gizle
//seçilen tab içeriğini göster

//contentin arka plan rengini değiştir

function tab(el,button,color) {
    
    //butonların arka plan rengini sıfırla
    const buttons= document.querySelectorAll(".tablink")
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#111"
    }

    //seçili butonun rengi değişsin
    button.style.backgroundColor =color

    //içreklerin hepsini gizle
    const contents= document.querySelectorAll(".contents div")
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display ="none"
    }

    //seçilen tab içeriğini göster
    document.querySelector(el).style.display="block";

    //contentin arka plan rengini değiştir
    document.querySelector("#tab").style.backgroundColor= color;
}