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
let titleParent = document.querySelectorAll('.title-parent'); //눌러지는 title부분
let siteMapContent = document.querySelectorAll('.site-map-item'); //눌렀을때 등장하는 부분

for(let i =0;i < titleParent.length; i++){
  titleParent[i].addEventListener('click', function(e){
    let titleParentRemove = document.querySelector('.title-parent.on');
    for(let j = 0;j < titleParent.length; j++ ){
      titleParent[j].classList.remove('on');
      titleParent[i].classList.add('on');
    };
    titleParentRemove.classList.remove('on');
  });
};

