function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#f0ebd8");
}

var w=100
var s_w=50

function draw() {
  background("#f0ebd8");
  noFill()
  for(var y=50;y<=height+50;y=y+w ){
  for(var x=50;x<=width+50;x=x+w)
  {

  stroke("#2364aa")
  rectMode(CENTER)
  rect(x,y,w+mouseX/30)

  stroke("#73bfb8")
  ellipse(x,y,w+mouseY/10)

  stroke("#fec601")
  ellipse(x,y,100,s_w+mouseY/20)
}
}
}
