window.onload = function(){

  const canvas = document.querySelector('canvas')
  const ctx = canvas.getContext('2d')

  setInterval(() => {
    randomHords()
  }, 20)

  function randomHords(){
    let angel1 = random(2 * Math.PI)
    let xpos1 = 200 + 200 * Math.cos(angel1)
    let ypos1 = 200 + 200 * Math.sin(angel1)

    let angel2 = random(2 * Math.PI)
    let xpos2 = 200 + 200 * Math.cos(angel2)
    let ypos2 = 200 + 200 * Math.sin(angel2)

    line(xpos1, ypos1, xpos2, ypos2)
  }

  function random(numb){
    return Math.random() * numb
  }

  function line(x1, y1, x2, y2, lw = .1){
    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2);
    ctx.lineWidth = lw;
    ctx.stroke(); 
  }
}