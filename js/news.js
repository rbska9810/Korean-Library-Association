//pagenation
let rowsPerPage = 8;
let rows = document.querySelectorAll('.association-items li');
let rowsCount = rows.length;
let pageCount = Math.ceil(rowsCount / rowsPerPage);
let numbers = document.querySelector('#numbers');

for(let i = 1;i <= pageCount; i++){
  numbers.innerHTML += `<li><a href="">${i}</a></li>`;
}

//a
let numberBtn = numbers.querySelectorAll('a');

numberBtn.forEach(function(item, idx){
  item.addEventListener('click', function(e){
    e.preventDefault();
    displayRows(idx);
    e.target.classList.add('active');
    numberBtn.forEach(function(btn){
      if(btn !== e.target){
        btn.classList.remove('active');
      };
    });
  });
  numberBtn[0].classList.add('active');
});

function displayRows(idx){
  let start = idx * rowsPerPage;
  let end = start + rowsPerPage;
  let rowsArray = [...rows];

  for(ra of rowsArray){
    ra.style.display = 'none';
  };
  let nowRows = rowsArray.slice(start, end);
  for(nr of nowRows){
    nr.style.display = '';
  };
}
displayRows(0);

//association-total

let total = document.querySelector('.association-total');

total.innerHTML = `<p>총 <span>${rowsCount}</span>건, 1/${numberBtn.length}페이지</p>`;