console.log("hello world")

function play(){
  let container2 = document.querySelector('.container2')
  container2.classList.add('noneContainer')
  let container = document.querySelector('.container')
  container.classList.remove('noneContainer')
  var elem = document.querySelector(".myAnimation");
  var pos = 0
  var posTop = 300;
  var posLeft = 350;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos+ posTop + 'px';
      elem.style.left = pos + posLeft + 'px';
    }
  }
  setTimeout(function(){
  let button = document.querySelector('.nextLevel')
  button.classList.remove('none')
  button.classList.add('End1')
  }, 4000)}


function myMove2() {
  var elem = document.querySelector(".myAnimation");
  var pos = 0
  var posTop = 650;
  var posLeft = 700;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 500) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + posLeft + 'px';
    }
  }
}
