function callMe(){
   let date = new Date();
   let hrs = date.getHours();
   let mins = date.getMinutes();
   let secs = date.getSeconds();
   let h=document.getElementsByTagName('h1');
   let txt=document.getElementById('txt');

   if(hrs >= 4 && hrs < 11){
    txt.innerText="GOOD MORNING, HAVE A NICE DAY!!!";
   }else if(hrs >= 11 && hrs < 15){
    txt.innerText="GOOD AFTERNOON !!!";
   }else if(hrs >= 15 && hrs < 19){
    txt.innerText="GOOD EVENING !!!";
   }else{
    txt.innerText="GOOD NIGHT, HAVE A SLEEP!!!";
   }

   if(hrs>=12){
    h[4].innerText = "PM";
   }

   if(hrs>12){
    h[1].innerText = hrs-12;
   }else{
    h[1].innerText = hrs;
   }
   h[2].innerText = mins;
   h[3].innerText = secs;
   
} 
setInterval(() => {
    callMe(); 
}, 1000 )

function set(){
    let date = new Date();
    let hrs = date.getHours();
    let para=document.getElementById('para');
    let mrng=document.getElementById('mrng');
    let aftrn=document.getElementById('aftrn');
    let evng=document.getElementById('evng');
    let nyt=document.getElementById('gdnyt');
    let pictre=document.getElementById('pictre');

    if(hrs === parseInt(mrng.value)){
        para.innerText="GOOD MORNING, HAVE A GREAT DAY!"
        pictre.style.backgroundImage="url(./mrng.svg)";
    }else if(hrs === parseInt(aftrn.value)){
        para.innerText="GOOD AFTERNOON !!!"
        pictre.style.backgroundImage="url(./lunch.svg)";
    }else if(hrs === parseInt(evng.value)){
        para.innerText="GOOD EVENING !!!"
        pictre.style.backgroundImage="url(./evng.png)";
    }else if(hrs === parseInt(nyt.value)){
        para.innerText="GOOD NIGHT, HAVE A SLEEP!"
        pictre.style.backgroundImage="url(./nyt.svg)";
    }

    let mrngtxt=mrng.options[mrng.selectedIndex].textContent;
    let wkup=document.getElementById('wkup');
    wkup.textContent = mrngtxt;

    let aftrtxt=aftrn.options[aftrn.selectedIndex].textContent;
    let lch=document.getElementById('lch');
    lch.textContent = aftrtxt;

    let evngtxt=evng.options[evng.selectedIndex].textContent;
    let eg=document.getElementById('eg');
    eg.textContent = evngtxt;

    let nyttxt=nyt.options[nyt.selectedIndex].textContent;
    let nt=document.getElementById('nt');
    nt.textContent = nyttxt;
}


