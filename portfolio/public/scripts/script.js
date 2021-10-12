const sections = document.querySelectorAll('.section');
const navLi = document.querySelectorAll('nav ul li');
const navA = document.querySelectorAll('nav ul li a');
const menuOpen = document.getElementById('menu-img');
const menuclose = document.getElementById('close-img');
const navBar = document.getElementById('nav');
const challengesEle = document.querySelector('#challenges #boxes-cont');
const aboutContainer = document.querySelector('#about #container');
const sectionAbout = document.querySelector('.about-sec');
const aboutContent = document.getElementById('about-content');

window.addEventListener('scroll', ()=>{
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop; // the length from the top of the page
    const sectionHeight = section.clientHeight;

    if (parseInt(pageYOffset) >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id')
    }
  })

  navLi.forEach(li =>{
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active');
    }
  })
})


let isNavOpen = false;
function openCloseMenu(eleType){
  if (eleType == 'open') {
    navBar.style.visibility = 'visible';
    menuOpen.style.visibility = 'hidden';
    isNavOpen = true;
  }else{
    navBar.style.visibility = 'hidden';
    menuOpen.style.visibility = 'visible';
    isNavOpen = false;
  }
}

sections.forEach(section => {
  section.addEventListener('touchstart', () => {
    if (isNavOpen) {
      navBar.style.visibility = 'hidden';
      menuOpen.style.visibility = 'visible';
      isNavOpen = false;
    }
  })

})





// (function (){
//   const aboutHeight = aboutContainer.offsetTop;
//   const sectionAboutHeight = sectionAbout.offsetTop;
//   console.log("aboutHeight: " + aboutHeight + ", sectionAboutHeight: " + sectionAboutHeight);

//   let secAbtHght = sectionAbout.offsetHeight;

//   if (aboutHeight < sectionAboutHeight) {
//     aboutContent.style.display = 'block';
//     document.getElementById('img-contain').style.display = 'none';
//     const aboutRight = document.getElementById('about-right');
//     aboutRight.style.width = '92%';
//     aboutRight.style.marginLeft = '0px';

//   }
// })()






