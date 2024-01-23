let years = document.querySelectorAll('.history-item>h2');
console.log(years.length);

/* for(let j = 0; j < years.length; j++) {
  for(let i = 2021; i >= 1945; i--) {
    years[j].innerHTML = `${i}년`;
  }
} */

let year = 2021;
for (let j = 0; j < years.length; j++) {
  years[j].innerHTML = `${year}년`;
  year--;
}



/* scroll Event */
let yearItem = document.querySelectorAll('.history-left a');
let yearWrap = document.querySelectorAll('.history-item-wrap > div');
let historyTop = document.querySelector('.history').offsetTop - 180;


window.addEventListener('scroll', function(){
  itemScroll00(0);
  itemScroll01(1);
  itemScroll02(2);
  itemScroll03(3);
  itemScroll04(4);
  itemScroll05(5);
  itemScroll06(6);
})

function itemScroll00(idx){
  let itemTop = historyTop + yearWrap[idx].offsetHeight;
  if(this.window.scrollY >= historyTop && this.window.scrollY < itemTop){
    yearItem[idx].classList.add('on');
  } else {
    yearItem[idx].classList.remove('on');
  }
}
function itemScroll01(idx){
  let itemTop = historyTop + yearWrap[idx - 1].offsetHeight;
  let itemTop2 = itemTop + yearWrap[idx].offsetHeight;
  if(this.window.scrollY >= itemTop && this.window.scrollY < itemTop2){
    yearItem[idx].classList.add('on');
  } else {
    yearItem[idx].classList.remove('on');
  }
}
function itemScroll02(idx){
  let itemTop = historyTop + yearWrap[idx - 2].offsetHeight;
  let itemTop2 = itemTop + yearWrap[idx - 1].offsetHeight;
  let itemTop3 = itemTop2 + yearWrap[idx].offsetHeight;

  if(this.window.scrollY >= itemTop2 && this.window.scrollY < itemTop3){
    yearItem[idx].classList.add('on');
  } else {
    yearItem[idx].classList.remove('on');
  }
}
function itemScroll03(idx){
  let itemTop = historyTop + yearWrap[idx - 3].offsetHeight;
  let itemTop2 = itemTop + yearWrap[idx - 2].offsetHeight;
  let itemTop3 = itemTop2 + yearWrap[idx -1].offsetHeight;
  let itemTop4 = itemTop3 + yearWrap[idx].offsetHeight;

  if(this.window.scrollY >= itemTop3 && this.window.scrollY < itemTop4){
    yearItem[idx].classList.add('on');
  } else {
    yearItem[idx].classList.remove('on');
  }
}
function itemScroll04(idx){
  let itemTop = historyTop + yearWrap[idx - 4].offsetHeight;
  let itemTop2 = itemTop + yearWrap[idx - 3].offsetHeight;
  let itemTop3 = itemTop2 + yearWrap[idx -2].offsetHeight;
  let itemTop4 = itemTop3 + yearWrap[idx -1].offsetHeight;
  let itemTop5 = itemTop4 + yearWrap[idx].offsetHeight;

  if(this.window.scrollY >= itemTop4 && this.window.scrollY < itemTop5){
    yearItem[idx].classList.add('on');
  } else {
    yearItem[idx].classList.remove('on');
  }
}
function itemScroll05(idx){
  let itemTop = historyTop + yearWrap[idx - 5].offsetHeight;
  let itemTop2 = itemTop + yearWrap[idx - 4].offsetHeight;
  let itemTop3 = itemTop2 + yearWrap[idx -3].offsetHeight;
  let itemTop4 = itemTop3 + yearWrap[idx -2].offsetHeight;
  let itemTop5 = itemTop4 + yearWrap[idx -1].offsetHeight;
  let itemTop6 = itemTop5 + yearWrap[idx].offsetHeight;

  if(this.window.scrollY >= itemTop5 && this.window.scrollY < itemTop6){
    yearItem[idx].classList.add('on');
  } else {
    yearItem[idx].classList.remove('on');
  }
}
function itemScroll06(idx){
  let itemTop = historyTop + yearWrap[idx - 6].offsetHeight;
  let itemTop2 = itemTop + yearWrap[idx - 5].offsetHeight;
  let itemTop3 = itemTop2 + yearWrap[idx -4].offsetHeight;
  let itemTop4 = itemTop3 + yearWrap[idx -3].offsetHeight;
  let itemTop5 = itemTop4 + yearWrap[idx -2].offsetHeight;
  let itemTop6 = itemTop5 + yearWrap[idx-1].offsetHeight;
  let itemTop7 = itemTop6 + yearWrap[idx].offsetHeight;

  if(this.window.scrollY >= itemTop6 && this.window.scrollY < itemTop7){
    yearItem[idx].classList.add('on');
  } else {
    yearItem[idx].classList.remove('on');
  }
}