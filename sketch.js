function setup() {
  createCanvas(600, 600, WEBGL);
  
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
  //resetVectors();
  makeAxis();
  makeBox();
}

function makeAxis(){
  push();
    rotateX(30);
    rotateY(30)
    noFill();
    stroke(255)
    box(width, 0, 0)
    box(0, height, 0)
    box(0, 0, width+height)
  pop();
}
function makeBox(){
  push();
    angleMode(DEGREES);
    let aa = frameCount * 0.01;
    let inputMatirx = {
      m11: document.querySelector("#m11").value,
      m12: document.querySelector("#m12").value,
      m13: document.querySelector("#m13").value,
      m21: document.querySelector("#m21").value,
      m22: document.querySelector("#m22").value,
      m23: document.querySelector("#m23").value,
      m31: document.querySelector("#m31").value,
      m32: document.querySelector("#m32").value,
      m33: document.querySelector("#m33").value,
    }
    strokeWeight(1);
    noFill();
    stroke('lime');
    applyMatrix(inputMatirx.m11, inputMatirx.m12, inputMatirx.m13, 0, inputMatirx.m21, inputMatirx.m22, inputMatirx.m23, 0, inputMatirx.m31, inputMatirx.m32, inputMatirx.m33, 0, 0, 0, 0, 1);
    box(100, 100, 100);
  pop();
}