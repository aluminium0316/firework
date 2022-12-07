let stars
function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  // canvas
  // const ctx = canvas.elt.getContext('2d')
  noStroke();
  fill(0, 0, 0)
  // strokeWeight(20)
  // stroke(255, 255, 255)
  // background(0)
  stars = Array(windowWidth*windowHeight/2500|0).fill(0).map((v, i)=>[Math.random()*windowWidth, Math.random()*windowHeight, Math.random()*255, Math.random()*8]);
}

let positions = [];

function draw() {
  background(0, 20);
  // if (mouseIsPressed)
  // positions.push(new Particle(mouseX, mouseY));
  for (let i = 0; i < windowHeight; i++) {
    stroke(0, i/windowHeight*31, i/windowHeight*63)
    line(0, i, windowWidth, i)
  }
  stars.forEach(v=>{
    stroke(v[2]/2+128, 191+v[2]/4, 256-v[2]/2)
    strokeWeight(v[3])
    point(v[0], v[1])
  })
  noStroke();
  
  positions.forEach((v, i)=>v.update(_ => delete positions[i]))
  positions.forEach((v, i)=>v.render(positions[i-1]??0))
  if (positions.every(v=>!v)) {
    positions.length = 0
  }
  positions = positions.filter(v => v)
  // filter(BLUR, 1)
}

function mouseClicked() {
  resetColor()
  for (let i = 0; i < 100; i++) {
    const a = Math.random()*windowWidth
    setTimeout(_=>{
      for (let j = 0; j < 100; j++)
      positions.push(new Particle(a, windowHeight));
    }, i*100)
  }

  // const x = mouseX
  // const y = mouseY
  // for (let i = 0; i < 100; i++)
  //   positions.push(new Particle(x, y));
}

