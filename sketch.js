function setup() {
  createCanvas(600, 600);
  background(208, 215, 245);
  
  
  strokeWeight(1);
  stroke(100, 82, 86, 50);
}

function draw() {
 
  if (mouseIsPressed){
  //line(mouseX, mouseY, pmouseX, pmouseY);
  //line(width - mouseX, height - mouseY, width - 10, height - 10);
    line(mouseX, mouseY, 0, 0);
   
  } 
}

function keyTyped(){
  console.log('key ${key} is being typed')
 
  if (key === 's'){
    saveCanvas('fileName', 'png');
  } else if (key === 'x'){
    background(208, 215, 245);
  }
}