let timing = false;
let startMillis;
let FIREFONT;
let FIREBACKGROUND;

function preload() {
  FIREFONT = loadFont("SMM.ttf");
  FIREBACKGROUND = loadImage("SMMBACKGROND.jpg")
}

function mousePressed() {
  if(!timing){
    startMillis = millis();
    timing = true;
  } else {
    timing = false;
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

addEventListener("resize", () => {
  resizeCanvas(windowWidth, windowHeight)
});

function draw() {
  background(FIREBACKGROUND);
  fill(255);
  noStroke();
  textAlign(CENTER,CENTER);
  textFont(FIREFONT)
  textSize(32);
  if (timing){
    fill(255,0,0);
    text(round(((60000-(round((millis()-startMillis)))))*100)/100000,width/2,height/2);
    let angle = map(round((60000-(round((millis()-startMillis)))))/1000,60,0,0,TWO_PI);
    stroke(255);
    
    noFill();
    stroke(255,0,0);
    strokeWeight(8);
    arc(width*0.5, height*0.5, 200, 200, PI+HALF_PI, angle-HALF_PI);
    if(millis()-startMillis >= 59990) timing = false;

  } else {
    textSize(64);
    fill(255);
    text("Click to time",width/2,height/2)
  }
}
