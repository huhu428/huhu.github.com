var o1=document.querySelector("div.m-box");
var o2=document.querySelector("div.u-box");
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
} 
o1.onclick=function()
{
    if(hasClass(o2,"hide"))
    {
        o2.classList.remove("hide");
    }
    else{
        o2.classList.add("hide");
    }
    
};
