//ADD names of group members at top of sketch 
//Please have each group member DUPLICATE THIS SKETCH and have it saved in your accounts
//Everyone will be submitting their versions individually 
//There are ~24 bugs + version control 
//please add a comment to what was fixed or adjusted for each one. Note that you may need to delete stuff. 
let nyan;
let noNyan;
let circles = [];


let colors = [
  [255, 0, 0], // red 
  [255, 165, 0], // orange 
  [255, 255, 0], // yellow
  [0, 255, 0], // green
  [0, 0, 255], // blue
  [148, 0, 211], // purple
  [150, 150, 150], // grey 
  [100, 100, 100], // darker grey 
  [255, 182, 193], // pink 
  [255, 105, 180], // hot pink  // added a color cod
  [255, 228, 181], // beige 
  [0, 0, 0], // black 
  [255, 255, 255] // white 
];

let playbackRate = 1.0;


async function setup () {
  createCanvas(400, 400);
  background(noNyan);
  nyan = await loadSound('medias/nyanCat.mp3');
  noNyan = await loadImage('medias/nyancatless.gif');
  // sprinkles = await loadImage('sprinkles.jpg'); not existing as of now.
}

function draw () {


  // Draw all circles
  for (let circle of circles) {
    fill(circle.color);
    ellipse(circle.x, circle.y, 50, 50); // splling errors
  }



}

function mousePressed () {
  let c = random(colors);
  let newCircle = {
    x: mouseX,
    y: mouseY,
    color: color(c[0], c[1], c[2])
  };
  circles.push(newCircle);
  nyan.setVolume(0.5); // spelling errors
  nyan.rate(playbackRate); // spelling errors
  nyan.loop();

}

function mouseReleased () {
  nyan.stop();
}

function keyPressed () {
  if (keyCode === UP_ARROW) // had a : 
  // require three = for all statements below 3
  {
    playbackRate += 0.1;
    nyan.rate(playbackRate);

  } else if (keyCode === DOWN_ARROW) { // down arrow needed to be all caps.
    playbackRate = max(0.1, playbackRate - 0.2);
    nyan.rate(playbackRate);
  } else if (keyCode === LEFT_ARROW) {
    playbackRate = playbackRate * 1;
    nyan.rate(playbackRate);
  }
}