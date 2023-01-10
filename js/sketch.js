// let noiseScale=0.005;

// function setup() {
//     createCanvas(windowWidth, windowHeight)
// }

// function draw() {
//   background(0);
//   for (let x=0; x < windowWidth; x ++) {
//     let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale*3);
//     stroke(noiseVal*255, 0, 0);
//     line(x, mouseY+noiseVal*1000, x, height);
//     // xoff = xoff + 0.01;
//     // let n = noise(xoff) * (width * 2);
//     // line(n, 0, n, height);
//   }
// }






// //POINT EDITS BELOW
// //POINT EDITS BELOW
// //POINT EDITS BELOW
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
    // noStroke();
    // noFill();
    let length = 500;
    while (theta < maxAngle + offset) {
        let noiseVal = noise(theta + x)
        stroke(noiseVal*255, 0, 255, 255, 100);
        strokeWeight(amplitude*0.01);
        //sine wave
        // amplitude = sin(theta - offset) * windowHeight/2
        amplitude = (theta - offset) / maxAngle * (windowHeight * 0.5)// this allows for smaller sine wave at left side of screen

        // bouncing white dots on the screen
        // for (i = length; i > 0; i--) {
        //     rotate(3);
        //     y = sin(theta - (i * 0.1)) * amplitude;
        //     fill(255);
        //     circle(x, y + height * 0.55, 5);
        // }
        for (i = length * 0.8; i > 0; i--) {
            rotate(1.5);
            y = tan(theta - (i + 1)) * amplitude;
            fill(255 - (255 / length * i), 0, 150, 100);
            square(x, y + width * 0.55, (13 + i));
            // rotate(5);
            // let noiseVal = noise(theta + 1);
            // stroke(noiseVal*255, 0, 255)
            // line(z, theta + noiseval*150, z, height)
        }
        // for (c = length * 0.5; i < 0; c++) {
        //     y = tan(theta - (c * 0.01)) * amplitude;
        //     fill(0, 255 - (255 / length * c), 255);
        //     circle(x, y + width * 0.89, (8 + i));
        // }

        // for (z = length*0.1; z > 0; z--) {
        //     // rotate(2 + z);
        //     y = sin(theta - (i * 0.1)) * amplitude;
        //     fill(255, 50, 150 - (255 / length * i));
        //     circle(z + 1, y + width * 0.1, (10 + i));
        // }
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

        theta += 0.25;
        x = ((theta - offset) / maxAngle) * windowWidth;
        
    }
    offset += inc
    theta = offset;
}
