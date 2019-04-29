window.onload = function(){

  const canvas = document.querySelector('canvas')
  const ctx = canvas.getContext('2d')
  const cw = canvas.clientWidth
  const ch = canvas.clientHeight
  const xPos = document.querySelector('.coordX');
  const yPos = document.querySelector('.coordY');
  const max_dist = dist(0, 0, cw, ch)
  console.log(max_dist)

  canvas.addEventListener('mousemove', function (e) {
    let z = window.getComputedStyle(canvas).zoom || 1;     
    let mouseX = e.pageX/z - e.target.offsetLeft,
        mouseY = e.pageY/z - e.target.offsetTop;
    ctx.clearRect(0,0,cw,ch);
    
    for (let i = 0; i <= cw; i += 30) {
      for (let j = 0; j <= ch; j += 30) {
        let size = dist(mouseX, mouseY, i, j);
        size = (size / max_dist) * 60;
        ctx.beginPath();
        ctx.arc(i,j,size,0,Math.PI*2,true);
        ctx.stroke(); 
        ctx.fill()
      }
    }
    xPos.innerHTML = `X = ${mouseX}`
    yPos.innerHTML = `Y = ${mouseY}`
  });
  
  function dist(x1, y1, x2, y2) {
    return Math.ceil(Math.hypot (x2 - x1, y2 - y1)) 
  }

}