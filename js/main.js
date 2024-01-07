const showMenu = (toogleId, navId)=>{
    const toogle =document.getElementById(toogleId)
    nav = document.getElementById(navId);
    if(toogle && nav){
        toogle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        });
    }

}
showMenu('nav_toggle','nav_menu')

const navLink=document.querySelectorAll('.nav_link')
navLink.forEach(n=> n.classList.remove('active'))

function linkAction(){
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')
    const nav_menu=document.getElementById('nav_menu')
    nav_menu.classList.remove('show')
}
navLink.forEach(n=>n.addEventListener('click', linkAction))

function showPlatformList() {
    const pdfList = document.getElementById('platformList');
    if (pdfList) {
        pdfList.style.display = (pdfList.style.display === 'none') ? 'block' : 'none';
    }
}
