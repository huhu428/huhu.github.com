var o1=document.querySelector("div.m-data");
var uad=document.querySelector("div.u-add");
var no=document.querySelector("div.u-content");
var del=document.getElementsByClassName('u-del');
var num = 3;
uad.onclick=function()
{
    var div1 = document.createElement("div");
    div1.setAttribute("class", "u-content");
    o1.appendChild(div1);
    var div2 = document.createElement("div");
    div2.setAttribute("class", "u-no");
    div2.innerHTML=++num;
    o1.lastChild.appendChild(div2);
    var div3 = document.createElement("div");
    div3.setAttribute("class", "u-fang");
    o1.lastChild.appendChild(div3);
    var div4 = document.createElement("div");
    div4.setAttribute("class", "u-del");
    div4.innerHTML="Delete";
    o1.lastChild.appendChild(div4);
    del=document.getElementsByClassName('u-del');
};
uad.addEventListener("click",myfuction);
function myfuction(){
    del=document.getElementsByClassName('u-del');
    for(i = 0; i < del.length; i++) {
        var item = del[i];
        item.addEventListener('click', showMsg)
    }
};
for(i = 0; i < del.length; i++) {
    var item = del[i];
    item.addEventListener('click', showMsg)
}
function showMsg(e) {
    var item = e.target
    console.log(item.innerHTML);
    item.parentElement.remove();
}





