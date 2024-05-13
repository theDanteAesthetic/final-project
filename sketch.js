let decBox;

function setup() {
  createCanvas(800, 600, WEBGL);
  angleMode(DEGREES);
  let defaultCam = createCamera();
  defaultCam.camera(0, 0, 200, 0, 0, 0, 0, 1, 0);
  makeDecBox();
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
  reset();
  orbitControl();
  makeAxis();
  makeBox();
}

function makeAxis(){
  push();
    noFill();
    stroke('#00FF2F')
    box(5*width, 0, 0)
    stroke('#0078FF')
    box(0, 5*width, 0)
    stroke('#FF001F')
    box(0, 0, 5*width)
  pop();
}

function makeDecBox(){
  push();
    beginGeometry();
    fill('rgba(255, 255, 255, 0)');
    box(30, 30, 30);
    push();
      translate(0,15,0);
      fill('#0078FF');
      noStroke();
      cylinder(2,0.5);
    pop();
    push();
      translate(0,-15,0);
      fill('#0078FF');
      noStroke();
      cylinder(2,0.5);
    pop();
    push();
      translate(15,0,0);
      rotateZ(90)
      fill('#00FF2F');
      noStroke();
      cylinder(2,0.5);
    pop();
    push();
    translate(-15,0,0);
    rotateZ(90)
      fill('#00FF2F');
      noStroke();
      cylinder(2,0.5);
    pop();
    push();
      translate(0,0,15);
      rotateX(90);
      fill('#FF001F');
      noStroke();
      cylinder(2,0.5);
    pop();
    push();
    translate(0,0,-15);
    rotateX(90)
      fill('#FF001F');
      noStroke();
      cylinder(2,0.5);
    pop();

    decBox = endGeometry();
  pop();
}

function makeBox(){
  push();
    //angleMode(DEGREES);
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
    fill('rgba(255, 255, 255, 0)');
    stroke(255);
    applyMatrix(inputMatirx.m11, inputMatirx.m12, inputMatirx.m13, 0, inputMatirx.m21, inputMatirx.m22, inputMatirx.m23, 0, inputMatirx.m31, inputMatirx.m32, inputMatirx.m33, 0, 0, 0, 0, 1);
    model(decBox);
    //box(30, 30, 30);
  pop();
}

function reset(){
  push();
    let resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener("click", () => {
      window.location.reload();
    })
  pop();
}

