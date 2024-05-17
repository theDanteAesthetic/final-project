let decBox;

function setup() {
  createCanvas(900, 600, WEBGL);
  angleMode(DEGREES);
  let defaultCam = createCamera();
  defaultCam.camera(0, 0, 200, 0, 0, 0, 0, 1, 0);
  makeDecBox();
}


function draw() {
  background(0);
  reset();
  orbitControl();
  makeAxis();
  makeBox();
  //updateRV();
}

function getRotationX(){
  let aa = document.querySelector("#rX").value;
  
}
function getRotationY(){
  let aa = document.querySelector("#rY").value;
  
}
function getRotationZ(){
  let aa = document.querySelector("#rZ").value;
  
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
    angleMode(DEGREES);
    let xx = document.querySelector("#rX").value;
    let yy = document.querySelector("#rY").value;
    let zz = document.querySelector("#rZ").value;
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
    updateRV();
    //rotateX(xx);
    //rotateY(yy);
    //rotateZ(zz);
    
    model(decBox);
    //box(30, 30, 30);
  pop();
}

function updateRV(){
  push();
    let xx = document.querySelector("#rX").value;
    let yy = document.querySelector("#rY").value;
    let zz = document.querySelector("#rZ").value;
    document.querySelector("#rX").addEventListener("input", () => {
      document.querySelector("#m22").value = (cos(xx));
      document.querySelector("#m23").value = (-1*sin(xx));
      document.querySelector("#m32").value = (sin(xx));
      document.querySelector("#m33").value = (cos(xx));
    })
    document.querySelector("#rY").addEventListener("input", () => {
      document.querySelector("#m11").value = (cos(yy));
      document.querySelector("#m13").value = (sin(yy));
      document.querySelector("#m31").value = (-1*sin(yy));
      document.querySelector("#m33").value = (cos(yy));
    })
    document.querySelector("#rZ").addEventListener("input", () => {
      document.querySelector("#m11").value = (cos(zz));
      document.querySelector("#m12").value = (-1*sin(zz));
      document.querySelector("#m21").value = (sin(zz));
      document.querySelector("#m22").value = (cos(zz));
    })
      
  pop();
}

function reset(){
  push();
    let resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener("click", () => {
      document.querySelector("#m11").value = 1;
      document.querySelector("#m12").value = 0;
      document.querySelector("#m13").value = 0;
      document.querySelector("#m21").value = 0;
      document.querySelector("#m22").value = 1;
      document.querySelector("#m23").value = 0;
      document.querySelector("#m31").value = 0;
      document.querySelector("#m32").value = 0;
      document.querySelector("#m33").value = 1;

      document.querySelector("#rX").value = 0;
      document.querySelector("#rY").value = 0;
      document.querySelector("#rZ").value = 0;
    })
  pop();
}

