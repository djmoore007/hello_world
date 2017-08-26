
function createParagraph(i) {
  var para = document.createElement('p');
  para.textContent = 'You clicked the silly button!'+string(i);
  document.body.appendChild(para);
}

var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph(i));
}

