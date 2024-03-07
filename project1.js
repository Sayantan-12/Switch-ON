let vid1= document.getElementById("v1");
let vid2= document.getElementById("v2");
let btn1= document.getElementById("b1");
let btn2= document.getElementById("b2");
function playvid1(){
    if(btn1.innerHTML==="ON"){
        vid1.play();
        btn1.innerHTML="OFF";
    }
    else{
        vid1.load();
        btn1.innerHTML="ON";
    }
    
}
function playvid2(){
    if(btn2.innerHTML==="ON"){
        vid2.play();
        btn2.innerHTML="OFF";
    }
    else{
        vid2.load();
        btn2.innerHTML="ON";
    }
}
