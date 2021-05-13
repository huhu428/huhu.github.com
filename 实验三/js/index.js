var ul=document.getElementById("ul");

var liList = document.querySelectorAll('li');
for(i = 0; i < liList.length; i++) {
    var item = liList[i];
    item.onclick=function()
    {
        alert(""+this.innerHTML[1]);
    }
}

var o6=document.getElementById("p6");
o6.onclick=function()
{
    alert(""+this.innerHTML[1]);
    var li = document.createElement("li");
    var p9=document.createTextNode("p9");
    li.appendChild(p9);
    ul.appendChild(li);
    var liList = document.querySelectorAll('li');
};

var o1=document.getElementById("p1");
o1.onclick=function()
{   
    alert(""+this.innerHTML[1]);
    o1.classList.add("red");
}

var o2=document.getElementById("p2");
o2.onclick=function()
{   
    alert(""+this.innerHTML[1]);
    var year=(new Date().getFullYear()).toString().padStart(4,'0');
    var month=(new Date().getMonth()+1).toString().padStart(2,'0');
    var day=(new Date().getDate()).toString().padStart(2,'0');
    o2.innerHTML=year+"-"+month+"-"+day;
};
var o3=document.getElementById("p3");
o3.onclick=function()
{
    alert(""+this.innerHTML[1]);
    o3.classList.add("fn-active");
};

var o4=document.getElementById("p4");
o4.onclick=function()
{
    alert(""+this.innerHTML[1]);
    var o8=document.getElementById("p8");
    ul.removeChild(o8);
};

var o5=document.getElementById("p5");
o5.onclick=function()
{
    alert(""+this.innerHTML[1]);
    window.open("https://www.taobao.com");
};

var o7=document.getElementById("p7");
o7.onclick=function()
{
    alert(""+this.innerHTML[1]);
    var m = document.querySelector("div.m-box");
    m.style.width=window.innerWidth;
};


