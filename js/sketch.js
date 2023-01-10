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
    background(0, 255, 234);
    noStroke();
    let length = 10;
    while (theta < maxAngle + offset) {
        //sine wave
        // amplitude = sin(theta - offset) * windowHeight/2
        amplitude = (theta-offset) / maxAngle * windowHeight // this allows for smaller sine wave at left side of screen
         for(i = length; i > 0; i--){
            y = sin(theta - (i * 0.1)) * amplitude;
            fill(255 - (255/length * i), 0, 150);
            circle(x, y + height * 0.5, 100);
         }
         for(i = length; i > 0; i--){
            y = cos(theta - (i * 0.01)) * amplitude;
            fill(255, 255- (255/length * i), 0);
            circle(x, y + height * 0.5, 100);
         }
        // rotate(2);
        theta += 0.2;
        x = ((theta-offset) / maxAngle) * windowWidth;
    }
    offset += inc
    theta = offset;
}
