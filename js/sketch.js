// //POINT EDITS BELOW
// //POINT EDITS BELOW
// //POINT EDITS BELOW
let x = 0;
let y = 0;
let theta = 0;
let inc = 0.01; // amount to increment the offset each frame
let offset = 0; //amount offset from beginning of wave
let amplitude;
let freq;
let maxAngle;

function setup() {
    amplitude = windowHeight * 0.5;
    freq = windowWidth * 0.5;
    maxAngle = (windowWidth / freq) * PI;
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    background(0);
    noStroke();
    // noFill();
    let length = 600;
    while (theta < maxAngle + offset) {
        let noiseVal = noise(10)
        stroke(noiseVal*255, 0, 0, 255);
        strokeWeight(amplitude*0.003);
        //sine wave
        // amplitude = sin(theta - offset) * windowHeight/2
        amplitude = (theta - offset) / maxAngle * (windowHeight * 0.5)// this allows for smaller sine wave at left side of screen

        for (i = length * 0.8; i > 0; i--) {
            rotate(1.5);
            y = sin(theta - (i + 1)) * freq;
            fill(255, 0, 00, noiseVal*100);
            square(x, y + width * 0.55, (5 + i*0.2));
            // rotate(5);
            // let noiseVal = noise(theta + 1);
            // stroke(noiseVal*255, 0, 255)
            // line(z, theta + noiseval*150, z, height)
        }
        theta += 0.25;
        x = ((theta - offset) / maxAngle) * windowWidth;
        
    }
    offset += inc
    theta = offset;
}
