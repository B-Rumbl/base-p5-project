// //POINT EDITS BELOW
let x = 0;
let y = 0;
let theta = 0;
let inc = 0.008; // amount to increment the offset each frame
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
    let length = 100;
    while (theta < maxAngle + offset) {
        //sine wave
        amplitude = sin(theta - offset) * windowHeight/2
        amplitude = (theta - offset) / maxAngle * (windowHeight * 3)// this allows for smaller sine wave at left side of screen
        // 
    
        for (i = length*.8; i > 0; i--) {
            y = tan(theta - (i * 0.01)) * amplitude;
            fill(255 - (255 / length * i), 0, 150);
            circle(x, y + width * 0.55, (10 + i));
        }
        for (z = length*0.1; z > 0; z--) {
            y = sin(theta - (i * 0.1)) * amplitude;
            fill(255, 50, 150 - (255 / length * i));
            circle(z + 1, y + width * 0.1, (10 + i));
        }

        theta += 0.2;
        x = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc
    theta = offset;
}