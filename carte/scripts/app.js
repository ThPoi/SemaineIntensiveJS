console.log("hello world")

window.addEventListener('load', () => {

  var elem = document.querySelector(".myAnimation");
  var pos = 0
  var posTop = 300;
  var posLeft = 350;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos+ posTop + 'px';
      elem.style.left = pos + posLeft + 'px';
    }
  }
})

setTimeout(function(){
let button = document.querySelector('.nextLevel')
button.classList.remove('none')
button.classList.add('End1')
}, 4000)

function myMove2() {
  var elem = document.querySelector(".myAnimation");
  var pos = 0
  var posTop = 650;
  var posLeft = 700;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 400) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + posLeft + 'px';
    }
  }
}
