let x = 0;
let y = 0;
let theta = 0;
let inc = 0.001; // amount to increment the offset each frame
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
    noFill();
    let length = 233;
    while (theta < maxAngle + offset) {
        stroke(255);
        strokeWeight(5);
        //sine wave
        // amplitude = sin(theta - offset) * windowHeight/2
        amplitude = (theta - offset) / maxAngle * (windowHeight * 0.5)// this allows for smaller sine wave at left side of screen
        for (i = length * 0.8; i > 0; i--) {
            rotate(3);
            y = tan(theta - (i + 1)) * amplitude;
            circle(x, y + width * 0.55, (89 + i));
        }

        theta += 0.25;
        x = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc
    theta = offset;
}