window.onload = function(){

  const canvas = document.querySelector('canvas')
  const context = canvas.getContext('2d')
  const cw = canvas.clientWidth
  const ch = canvas.clientHeight
  
  let startX = 0;
  let startY = 0;
  let mouseX = 0;
  let mouseY = 0;

  canvas.addEventListener('mousemove', function (e) {
    let z = window.getComputedStyle(canvas).zoom || 1;     
    mouseX = e.pageX/z - e.target.offsetLeft;
    mouseY = e.pageY/z - e.target.offsetTop;
  });

  function draw(){
    context.clearRect(0, 0, cw, ch);
    startX = lerp(startX, mouseX, 0.1)
    startY = lerp(startY, mouseY, 0.1)
    circle(startX, startY)
    window.requestAnimationFrame(draw)
  }
  window.requestAnimationFrame(draw)

  function circle(x, y, r = 20, color = '#fff'){
    context.beginPath();
    context.fillStyle = color
    context.arc(x,y,r,0,Math.PI*2,true);
    context.stroke(); 
    context.fill()
  }

 function lerp(start, stop, amt){
    return amt * (stop - start) + start
  }
}