
image2=document.getElementById("movingelement2")
image2.style.display="none"
image3=document.getElementById("movingelement3")
image3.style.display="none"
function buttonRightOne(){
    image1=document.getElementById("movingelement1")
    image1.style.display="none"
    image2=document.getElementById("movingelement2")
    image2.style.display=""
}
function buttonRightTwo(){
    image2=document.getElementById("movingelement2")
    image2.style.display="none"
    image3=document.getElementById("movingelement3")
    image3.style.display=""
}
function buttonleftThree(){
    image3=document.getElementById("movingelement3")
    image3.style.display="none"
    image2=document.getElementById("movingelement2")
    image2.style.display=""
}
function buttonleftTwo(){
    image2=document.getElementById("movingelement2")
    image2.style.display="none"
    image1=document.getElementById("movingelement1")
    image1.style.display=""
}
aa=document.getElementById("busBookingInfor")
aa.style.display="none"
bb=document.getElementById("trainBookingInfor")
bb.style.display="none"
function busbuttonsearch(){
    bb=document.getElementById("trainBookingInfor")
    bb.style.display="none"
    aa=document.getElementById("busBookingInfor")
    aa.style.display=""
}
function trainebuttonsearch(){
    aa=document.getElementById("busBookingInfor")
    aa.style.display="none"
    bb=document.getElementById("trainBookingInfor")
    bb.style.display=""
}
