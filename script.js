const hour= document.getElementById('hour');
const seconds= document.getElementById('seconds');
const minutes= document.getElementById('minutes');
const am_pm= document.getElementById('am_pm');

function updateClock(){
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let am_pm="AM";

    if(h > 12){
        h= h-12;
        am_pm="PM";
    }

    h= h<10? "0"+h :h;
    m= m<10? "0"+m :m;
    s= s<10? "0"+s :s;
    
    hour.innerText= h;
    minutes.innerText= m;
    seconds.innerText= s;
    am_pm.innerText= am_pm;
    setTimeout(()=>{
      updateClock()
    },1000);
}

updateClock();