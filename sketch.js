function setup() {
  createCanvas(600, 600);
  
}

let vectors = [
  {x: 1, y: 1, z: 1, r:{x:1, y: 1, z:1}},
  {x: -1, y: 1, z: 1, r:{x:-1, y: 1, z:1}},
  {x: -1, y: -1, z: 1, r:{x:-1, y: -1, z:1}},
  {x: 1, y: -1, z: 1, r:{x:1, y: -1, z:1}},
  {x: 1, y: 1, z: -1, r:{x:1, y: 1, z: -1}},
  {x: -1, y: 1, z: -1, r:{x: -1, y: 1, z: -1}},
  {x: -1, y: -1, z: -1, r:{x: -1, y: -1, z: -1}},
  {x: 1, y: -1, z: -1, r:{x:1, y: -1, z: -1}}
]


function draw() {
  background(0);
  horizon();
  cameraP();
  drawPoints();
  rTransformX();
  rTransformY();
  rTransformZ();
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

function rTransformX(){
  //this function rotates around the x axis, not the x direction
  push();
    angleMode(DEGREES);
    let aa = document.getElementById("x").value;
    for(let i = 0; i < vectors.length; i++){
      console.log(aa);
      vectors[i].x = vectors[i].r.x;
      vectors[i].y = vectors[i].r.y;
      vectors[i].z = vectors[i].r.z;
      
      vectors[i].x = vectors[i].x;
      vectors[i].y = vectors[i].y*cos(aa)-vectors[i].z*sin(aa);
      vectors[i].z = vectors[i].y*sin(aa)+vectors[i].z*cos(aa);
      //console.log(vectors[i].x, vectors[i].y, vectors[i].z);
    }
  pop();
}

function rTransformY(){
  //this function rotates around the y axis, not the y direction
  push();
    angleMode(DEGREES);
    let aa = document.getElementById("y").value;
    for(let i = 0; i < vectors.length; i++){
      vectors[i].x = vectors[i].x*cos(aa) + vectors[i].z*sin(aa);
      vectors[i].y = vectors[i].y;
      vectors[i].z = -1*vectors[i].x*sin(aa) + vectors[i].z*cos(aa);
      //console.log(vectors[i].x, vectors[i].y, vectors[i].z);
    }
  pop();
}

function rTransformZ(){
  //this function rotates around the z axis, not the z direction
  push();
    angleMode(DEGREES);
    let aa = document.getElementById("z").value;
    for(let i = 0; i < vectors.length; i++){

      vectors[i].x = vectors[i].x*cos(aa) - vectors[i].y*sin(aa);
      vectors[i].y = vectors[i].x*sin(aa) + vectors[i].y*cos(aa);
      vectors[i].z = vectors[i].z;
      //console.log(vectors[i].x, vectors[i].y, vectors[i].z);
    }
  pop();
}
function drawPoints(){
  push();
    translate(width/2, height/2);
    stroke('lime');
    strokeWeight(2);
    for(let i = 0; i < vectors.length; i++){
      ellipse(vectors[i].x*50, vectors[i].y*50,5,5);
      for(let u = 0; u<vectors.length;u++){
        if(vectors[i]!=vectors[u]){
          if((vectors[i].r.x === vectors[u].r.x || vectors[i].r.y === vectors[u].r.y) && vectors[i].r.z === vectors[u].r.z){
            line(vectors[i].x*50,vectors[i].y*50,vectors[u].x*50,vectors[u].y*50);
          }
          if(vectors[i].r.x === vectors[u].r.x && vectors[i].r.y === vectors[u].r.y && vectors[i].r.z != vectors[u].r.z){
            line(vectors[i].x*50,vectors[i].y*50,vectors[u].x*50,vectors[u].y*50);
          }
        }
      }
    }
  pop();
}

