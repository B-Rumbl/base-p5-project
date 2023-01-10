let x = 0;
let y = 0;
let theta = 0;
let inc = 0.05; // amount to increment the offset each frame
let offset = 0; //amount offset from beginning of wave
let amplitude;
let freq;
let maxAngle;

function setup() {
    amplitude = windowHeight * 0.25;
    freq = windowWidth * 0.25;
    maxAngle = (windowWidth / freq) * TWO_PI;
    createCanvas(windowWidth, windowHeight);
    
}
function draw() {
    background(0);
    // noStroke();
    
    while (theta < maxAngle + offset) {
        //sine wave
        y = sin(theta) * amplitude;
        fill(255, 0, 255);
        circle(x, y + height * 0.5, 500);
        // rotate(2);
        //cosine wave
        y = cos(theta) * amplitude;
        fill(150, 0, 255);
        circle(x, y + height * 0.5, 500);
        // rotate(4);
        //tangent
        y = tan(theta) * amplitude;
        fill(255, 0, 150);
        square(x, y + height * 0.5, 350);
        // rotate(6)
        theta += 0.2;
        x = ((theta-offset) / maxAngle) * windowWidth;
    }
    offset += inc
    theta = offset;
}
