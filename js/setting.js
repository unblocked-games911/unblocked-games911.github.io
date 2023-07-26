function setTitle(){
    var title = document.getElementById('title').value;
    localStorage.setItem('title',title);
    document.title = title;
}
function setIcon(){
    var icon = document.getElementById('icon').value;
    localStorage.setItem('icon',icon);
    setIcoLink(icon);
}
function reset(){
    localStorage.removeItem('title');
    localStorage.removeItem('icon');
    setIcoLink('/images/logo/icon36.png');
    document.title = 'Tab Cloak - Unblocked Games 911 - TBG95 Games'
}
function setIcoLink(linkIcon){
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = linkIcon;
}
var btnTitle = document.getElementById("btnTitle");
btnTitle.addEventListener("click", setTitle);

var btnIcon = document.getElementById("btnIcon");
btnIcon.addEventListener("click", setIcon);

var btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", reset);