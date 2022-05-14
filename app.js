let btn = document.querySelector('button')
let textdiv = document.querySelector('.text')


function searchFilter(e) {
  let searchinput = document.querySelector('.search');
  let filter = searchinput.value.toUpperCase();

  let li = document.querySelectorAll('ul li');
 
  li.forEach(element => {
    let a = element.querySelectorAll('a')[0];
    let textvalue = a.textContent.toUpperCase();
    console.log(textvalue)
    textvalue.includes(filter) ? element.style.display = 'block' : element.style.display = 'none'; 
  });


};








