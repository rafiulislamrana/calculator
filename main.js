document.querySelector("#one").addEventListener( "click", function(){
    document.forms.scr.value += 1;
})
document.querySelector("#two").addEventListener( "click", function(){
    document.forms.scr.value += 2;
})
document.querySelector("#three").addEventListener( "click", function(){
    document.forms.scr.value += 3;
})
document.querySelector("#four").addEventListener( "click", function(){
    document.forms.scr.value += 4;
})
document.querySelector("#five").addEventListener( "click", function(){
    document.forms.scr.value += 5;
})
document.querySelector("#six").addEventListener( "click", function(){
    document.forms.scr.value += 6;
})
document.querySelector("#seven").addEventListener( "click", function(){
    document.forms.scr.value += 7;
})
document.querySelector("#eight").addEventListener( "click", function(){
    document.forms.scr.value += 8;
})
document.querySelector("#nine").addEventListener( "click", function(){
    document.forms.scr.value += 1;
})
document.querySelector("#zero").addEventListener( "click", function(){
    document.forms.scr.value += 0;
})
document.querySelector("#parcent").addEventListener( "click", function(){
    document.forms.scr.value += "%";
})
document.querySelector("#division").addEventListener( "click", function(){
    document.forms.scr.value += "/";
})
document.querySelector("#clear").addEventListener( "click", function(){
    document.forms.scr.value = "";
})
document.querySelector("#multiply").addEventListener( "click", function(){
    document.forms.scr.value += "*";
})
document.querySelector("#minus").addEventListener( "click", function(){
    document.forms.scr.value += "-";
})
document.querySelector("#addition").addEventListener( "click", function(){
    document.forms.scr.value += "+";
})
document.querySelector("#decimal").addEventListener( "click", function(){
    document.forms.scr.value += ".";
})
document.querySelector("#del").addEventListener( "click", function(){
    document.forms.scr.value = "";
})
document.querySelector("#equal").addEventListener( "click", function(){
    if(scr.value == ""){
        alert("Please Enter Number to Calculate!!!")
    }else{
        document.forms.scr.value = eval(document.forms.scr.value)
    }
})




