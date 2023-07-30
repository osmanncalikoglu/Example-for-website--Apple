//her klavye girişi olduğunda
//girilen değeri al(büyük harfe çevir)
// listeyi bir döngüye sok değer var mı diye kontrol
// girilen karakterleri karşılaştır
//eğer eşleşme var ise listenin görünümü açık kalsın
//eşleşme yoksa da listeyi sakla


function searchMenu() {
    
    const searchInput = document.querySelector("input");

    searchInput.addEventListener("keyup",function(){

        let data = this.value.toUpperCase();
        let li=document.querySelectorAll("ul li");

        for (let i = 0; i < li.length; i++) {
            if (li[i].innerHTML.toUpperCase().indexOf(data) > -1) {
                //eleman bulunuyor ise gerçekleşicek
                li[i].style.display = "";
            }   else{
                //eşleşme yok
                li[i].style.display = "none";
            }
        }
    } )
}
searchMenu();