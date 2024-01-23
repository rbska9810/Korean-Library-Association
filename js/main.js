var swiperCon = new Swiper(".container", {
  speed: 1000,
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  touchRatio: 0,
  breakpoints: {
    1024: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 6,
    },
  },
  on: {
    slideChange: function() {
        setTimeout(function () {
          swiperCon.params.touchReleaseOnEdges = false;
          swiper.params.mousewheel.releaseOnEdges = false;
        });
    },
    reachEnd: function() {
        setTimeout(function () {
            swiperCon.params.touchReleaseOnEdges = true;
            swiperCon.params.mousewheel.releaseOnEdges = true;
        }, 500);
    },
    reachBeginning: function() {
        setTimeout(function () {
            swiperCon.params.touchReleaseOnEdges = true;
            swiperCon.params.mousewheel.releaseOnEdges = true;
        }, 500);
    },
  },
});
/* main-typing */
const content = ['성', '장', '하', '는', ' ', '도','서','관', ',','<br>', '춤','추','는', ' ', '이','용','자', ',', '빛','나','는', ' ', '사','서'];
const text = document.querySelector(".main-header");
let index = 0;
function typeWriter() {
  if (index < content.length) {
    text.innerHTML += content[index];
    index++; // 다음 인덱스로 이동
    if (index < content.length) {
      setTimeout(typeWriter, 200); // 1초(1000ms)
    }
  }
}
typeWriter();


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


/* news-tab */
let tabTitle = document.querySelectorAll('.news-tab>li>a');
let tabContent = document.querySelectorAll('.news-tab-content');


for (let i = 0; i < tabTitle.length; i++) {
  tabTitle[i].addEventListener('click', function (e) {
    e.preventDefault();
    for (let j = 0; j < tabTitle.length; j++) {
      tabTitle[j].classList.remove('on');
      tabContent[j].style.display ='none';
    };
    tabTitle[i].classList.add('on');
    tabContent[i].style.display ='flex';
  });
}

/* news-slide */
var swiper = new Swiper(".news-slide", {
  pagination: {
    el: ".swiper-pagination2",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop : true,
  loopAdditionalSlides : 1,
  touchRatio: 0,
});

/* culture-slide */
var swiper = new Swiper(".culture-content-2020", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 25,
  touchRatio: 0,
  breakpoints: {
    1024: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 3,
    },
    568: {
      slidesPerView: 2,
    },
  },
});
var swiper = new Swiper(".culture-content-2021", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 25,
  touchRatio: 0,
  breakpoints: {
    1024: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 3,
    },
    568: {
      slidesPerView: 2,
    },
  },
});
var swiper = new Swiper(".culture-content-2022", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 25,
  touchRatio: 0,
  breakpoints: {
    1024: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 3,
    },
    568: {
      slidesPerView: 2,
    },
  },
});
var swiper = new Swiper(".culture-content-2023", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 25,
  touchRatio: 0,
  breakpoints: {
    1024: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 3,
    },
    568: {
      slidesPerView: 2,
    },
  },
});

/* culture-tab */
let yearBtn = document.querySelectorAll('.year a');
let cultureContent = document.querySelectorAll('.culture .swiper');

for (let i = 0; i < yearBtn.length; i++) {
  yearBtn[i].addEventListener('click', function (e) {
    e.preventDefault();
    for (let j = 0; j < yearBtn.length; j++) {
      yearBtn[j].classList.remove('on');
      cultureContent[j].classList.remove('on')
    };
    yearBtn[i].classList.add('on');
    cultureContent[i].classList.add('on')
  });
}

/* mall-slide */
var swiper = new Swiper(".mall-content", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 70,
  touchRatio: 0,
  breakpoints: {
    1024: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 3,
    },
    568: {
      slidesPerView: 2,
    },
  },
});

/* business-slide */
var swiper = new Swiper(".business", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2,
  spaceBetween: 20,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  loop : true,
  loopAdditionalSlides : 1,
  touchRatio: 0,
  breakpoints: {
    1024: {
      slidesPerView: 7,
    },
    768: {
      slidesPerView: 4,
    },
    568: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".business02", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2,
  spaceBetween: 20,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  loop : true,
  loopAdditionalSlides : 1,
  touchRatio: 0,
  breakpoints: {
    1024: {
      slidesPerView: 7,
    },
    768: {
      slidesPerView: 4,
    },
    568: {
      slidesPerView: 3,
    },
  },
});