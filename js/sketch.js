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
    let length = 50;
    while (theta < maxAngle + offset) {
        //sine wave
        // amplitude = sin(theta - offset) * windowHeight/2
        amplitude = (theta - offset) / maxAngle * (windowHeight * 3)// this allows for smaller sine wave at left side of screen

        //bouncing white dots on the screen
        // for (i = length; i > 0; i--) {
        //     rotate(3);
        //     y = sin(theta - (i * 0.1)) * amplitude;
        //     fill(255);
        //     circle(x, y + height * 0.55, 5);
        // }
        for (i = length; i > 0; i--) {
            rotate(3);
            y = tan(theta - (i * 0.01)) * amplitude;
            fill(255 - (255 / length * i), 0, 150);
            circle(x, y + width * 0.55, (50 + i));
            rotate(5);
        }
        for (z = length; z > 0; z--) {
            rotate(8);
            y = sin(theta - (i * 0.1)) * amplitude;
            fill(255, 50, 150 - (255 / length * i));
            circle(z, y + width * 0.1, (10 + i));
            // rotate(5);
        }
        // for (i = length; i > 0; i--) {
        //     y = sin(theta - (i * 0.1)) * amplitude;
        //     fill(0, 255 - (255 / length * i), 50);
        //     circle(x, y + height * 0.55, 5);
        
        // }
        //  for(i = length; i > 0; i--){
        //     y = cos(theta - (i * 0.3)) * amplitude;
        //     fill(255, 255- (255/length * i), 0);
        //     circle(x, y + height * 0.89, 100);
        //  }

        theta += 0.2;
        x = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc
    theta = offset;
}
