const list = document.getElementById("menuList");
const checkbox = document.getElementById("navi-toggle");
list.addEventListener('click',(e)=>{
    if(e.target.className == "navigation__link"){
        checkbox.checked = false;
        setTimeout(function () {},100);
    }
});