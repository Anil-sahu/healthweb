toggleNav=()=>{
var navbar=document.getElementById("navbar").style;
var toggleBtn = document.getElementById("toggleBtn").style;
if(navbar.display!="block"){
    navbar.display="block"
    toggleBtn.backgroundImage='url("../image/xmark.svg")';
}else{
    navbar.display="none"
   toggleBtn.backgroundImage='url("../image/menu.svg")';
}

}