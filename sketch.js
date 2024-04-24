function setup() {
  createCanvas(600, 600);
}

let vectors = [
  {x: 1, y: 1, z: 1},
  {x: -1, y: 1, z: 1},
  {x: -1, y: -1, z: 1},
  {x: 1, y: -1, z: 1},
  {x: 1, y: 1, z: -1},
  {x: -1, y: 1, z: -1},
  {x: -1, y: -1, z: -1},
  {x: 1, y: -1, z: -1}
]

function draw() {
  background(0);
  horizon();
  cameraP();
  drawPoints();
}
function horizon() {
  push();
    stroke(255);
    strokeWeight(2);
    line(0, height/2, width, height/2);
  pop();
}

function cameraP(){
  push();
    translate(width/2, height/2);
    stroke('red');
    strokeWeight(2);
    line(-5, 5, 5, -5)
    line(5, 5, -5, -5)
  pop();
}

function transformVectors(a, t){
  for(let i = 0; i < vectors.length; i++){
    //ideally this function will take an array of vectors and a transformation type (like rotation) and transform the vectors
  }
}

function drawPoints(){
  push();
    translate(width/2, height/2);
    for(let i = 0; i < vectors.length; i++){
        ellipse(vectors[i].x*50, vectors[i].y*50,5,5);
    }
  pop();
}

