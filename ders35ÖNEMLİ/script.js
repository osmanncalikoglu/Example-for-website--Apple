setTimeout(function(){
    console.log("yeni merhaba")
},4000);

function yazdir(){
    console.log("merhaba")
}

setTimeout(()=>{
    console.log("nabersinn")
},2000)

//setInterval(()=>{console.log("kamilll")},1000)

function progressbar(){

    var progressitem=document.querySelector(".progress-item");
    var progresscount=document.querySelector(".count");
    var progresswidth=0;
    var progressstring="";

    var id=setInterval(()=>{

        if (progresswidth==100) {
            clearInterval(id);
            setTimeout(() => {
                window.location=("https://www.google.com/")
            }, 3000);
        }

        progressitem.style.width=progresswidth+"%";
        progresscount.innerHTML="%"+progresswidth;
        progresswidth++;
    },20)


}

progressbar();

