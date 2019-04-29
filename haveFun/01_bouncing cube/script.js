window.onload = function(){
  
  const canvas = document.querySelector('canvas')
  const context = canvas.getContext('2d')
  const cw = canvas.clientWidth
  const ch = canvas.clientHeight
  let PosX = 0
  let PosY = 0
  let speedX = 5
  let speedY = 5
  context.fillStyle = '#000'

  function draw(){
    context.clearRect(0, 0, cw, ch);
    PosX+=speedX
    PosX > (cw - 50) || PosX < 0 ? speedX *= -1 : ''
    PosY+=speedY
    PosY > (ch - 50) || PosY < 0 ? speedY *= -1 : ''
    context.fillRect(PosX, PosY, 50, 50)
    window.requestAnimationFrame(draw)
  }
  window.requestAnimationFrame(draw)
}