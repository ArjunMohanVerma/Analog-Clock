function time(){
    var tm=new Date();
    let h=tm.getHours();
    let m=tm.getMinutes();
    let s=tm.getSeconds();
    let hrotation = 30*h + m/2;
    let mrotation = 6*m;
    let srotation = 6*s;
    document.getElementById("hour").style.transform=`rotate(${hrotation}deg)`;
    document.getElementById("minute").style.transform=`rotate(${mrotation}deg)`;
    document.getElementById("second").style.transform=`rotate(${srotation}deg)`;

}

setInterval(time,1000);




