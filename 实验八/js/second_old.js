var u1=document.getElementById("#1");
var u2=document.getElementById("#2");
var u3=document.getElementById("#3");
var o1=document.getElementById("1");
var o2=document.getElementById("2");
var o3=document.getElementById("3");
u1.onclick=function()
{
    u1.classList.add("u-color");
    u2.classList.remove("u-color");
    u3.classList.remove("u-color");
    o1.classList.remove("hide");
    o2.classList.add("hide");
    o3.classList.add("hide");
};
u2.onclick=function()
{
    u2.classList.add("u-color");
    u1.classList.remove("u-color");
    u3.classList.remove("u-color");
    o2.classList.remove("hide");
    o1.classList.add("hide");
    o3.classList.add("hide");
};
u3.onclick=function()
{
    u3.classList.add("u-color");
    u1.classList.remove("u-color");
    u2.classList.remove("u-color");
    o3.classList.remove("hide");
    o1.classList.add("hide");
    o2.classList.add("hide");
};
