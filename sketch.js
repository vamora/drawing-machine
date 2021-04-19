function setup() {
  createCanvas(600, 600);
  background(208, 215, 245);

  strokeWeight(1);
}

function draw() {

  if (mouseIsPressed){
    line(mouseX, mouseY, 0, 0);
    stroke(100, 82, 86, 50);
  } else{
    keyPressed();
  }

//   translate(width / 2, height / 2);
//   translate(p5.Vector.fromAngle(millis() / 1000, 40));
 }

function keyPressed(){

  if (key === '1'){
    //top left
    line(mouseX, mouseY, 0, 0);
    stroke(100, 82, 86, 50);
  }

  if (key === '2'){
    //top right
    line(mouseX, mouseY, width - 0, height - 600);
  }

  if (key === '3'){
    //bottom right
     line(mouseX, mouseY, width - 0, height - 0);
  }
  
  if (key === '4'){
    //bottom left
    line(mouseX, mouseY, width - 600, height - 0);
  }


}

function keyTyped(){
  console.log('key ${key} is being typed')

  if (key === 's'){
    saveCanvas('vm_sketch', 'png');
  } else if (key === 'x'){
    background(208, 215, 245);
  }
}
