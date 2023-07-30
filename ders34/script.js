var header=document.getElementById("topnavigation");//idlere ulaşırız
var paragraflar=document.getElementsByTagName("p");//p etiketlerine ulaşırız
var ilkparagraf=document.getElementsByClassName("par1");//classı par1 olan elemente ulaşırız
var linkler=document.querySelector("a[href]" )//hrefi olan a etiketini seçeriz
var link=document.querySelectorAll("a[href]" )//hrefi olan tüm a etiketlerini seçeriz
console.log(ilkparagraf[0]);//indis numarası ile seçeriz
console.log(document)
console.log(header);
document.querySelector("header").innerHTML="<strong>yeni içerik</stronghr><hr>";//query ile header etiketini seçtik içeriğine inner html ile ulaştık ve değiştirdik
document.querySelector("img").width=300;//img etiketinin genişliğini değiştirdik (CSS uyguladık)
document.querySelector("img").src="yildiz.jpg";//CSS uyguladık FAKAT sadece bir eleman varsa bunu kullanabilşriz
document.write("deneme")//ekrana dedeme yazdıerdık
document.forms["iletisim"];//form elemanlarından id^'si iletisim olana ulaştık
document.forms["iletisim"]["isim"].value="osman";//idsi iletisim olan formun içinde namesi isim olan form etiketine ulaştık
document.querySelector("h1").style.color="tomato";//CSS uyguladık h1 etiketine
document.querySelector("h1").style.backgroundColor="#ccc";//h1 etiketine css uygulsdık
document.querySelector("h1").style.padding="20px";
document.querySelector("img").style.width="100px";//CSS uyguladık query ile elementmizi seçtik

for (let index = 0; index < paragraflar.length; index++) {
    paragraflar[index].style.border="5px solid tomato";
    paragraflar[index].style.padding="20px";
}
/*querySelector ile tek bir elemente dokunabiliriz. aynı etiketlerin hepsine müdahale için
TagName("") İile elementleri seçeriz değişkene aktarırız ve yukarıdaki gibi for döngüsüne
sokarız */
