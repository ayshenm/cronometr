//choose h1 tag
const min = document.querySelector("#minute");
const sec = document.querySelector("#second");


//label
const chooseMinute = document.querySelector("#choose-mt");
const chooseSecond = document.querySelector("#choose-sc");

//button
const buttonStart = document.querySelector("#start");
const buttonStop = document.querySelector("#stop");

//minute deyisende h1 tagi ici deyisir
chooseMinute.addEventListener("change",()=>{
    min.textContent = chooseMinute.value;
});

chooseSecond.addEventListener("change",()=>{
    sec.textContent = chooseSecond.value < 10 ? "0" + chooseSecond.value : chooseSecond;

});

buttonStart.addEventListener("click",startTimer);

function startTimer(){
    let dk = min.textContent;
    let sn = sec.textContent;


    const interval = setInterval(() =>{
        sn--;
        if(sn == 0){
            dk--;
            sn = 59;
        }

    },1000)
}