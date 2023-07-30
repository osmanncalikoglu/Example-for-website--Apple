
function createandput(callback1,callback2) {
    
    let delay= 1000;

    for(let i=0; i<4;i++){
        setTimeout(()=>{
            callback1();
            if (i==3) {
                callback2();
            }
        },delay);
        delay= delay + 1000;
    }

}

function createandputhelp() {
    let maindiv=document.querySelector('main');
    let div=document.createElement('div');
    maindiv.insertAdjacentElement('beforeend',div);
}

 function changewidth() {
       let delay=1000;
    
            document.querySelectorAll('main div').forEach((element)=>{
                setTimeout(()=>{
                    element.classList.add("item")
                },delay);
                delay+=1000;
            });
    }

createandput(createandputhelp,changewidth);

