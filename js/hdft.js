/* subMenu */
let gnbItem = document.querySelectorAll('.gnb>li');
let subMenu = document.querySelectorAll('.sub-menu');

for(let i = 0; i < gnbItem.length; i++){
  gnbItem[i].addEventListener('mouseover', function(){
    subMenu[i].classList.add('on');
  });
  gnbItem[i].addEventListener('mouseout', function(){
    subMenu[i].classList.remove('on');
  });
}

/* trigger버튼누르면 사이트맵 나옴 */
let trigger = document.querySelector('.trigger');
let siteMap = document.querySelector('.site-map');

trigger.addEventListener('click', function(){
  trigger.classList.toggle('on');
  siteMap.classList.toggle('on');
})
/* siteMap-content */
let titleParent = document.querySelectorAll('.title-parent');
let siteMapContent = document.querySelectorAll('.site-map-item');
let siteMapBtn = document.querySelectorAll('.site-map-btn');
for (let i = 0; i < titleParent.length; i++) {
  titleParent[i].addEventListener('click', function (e) {
    for (let j = 0; j < titleParent.length; j++) {
      titleParent[j].classList.remove('on');
    };
    titleParent[i].classList.add('on');
  });
}
