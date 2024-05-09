let pic = [];
let numPic = 13;
// let img; // This will store the loaded images

function preload() {
  
  for (let i=0; i<numPic-1; i++){
     pic[i] =loadImage('imgs/' +(i+1)+'.jpg');
  }
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  background(0);
  noStroke();
  frameRate(5);  // Only draw once
}

function draw() {

  for (let i = 0; i <2; i++) {
 
      let ffx = random(0, width);  // X position
  let ffy = random(0, height);  // Y position
  
  let img = random(pic);  // Choose a random image from loaded images
  
    
    let w = random(70,200);
    let h = w/(img.width/img.height); 
    
    image(img, ffx, ffy, w, h);  // Draw the image at random size
  }
}