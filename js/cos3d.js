let colVar;
let boxSize;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    colVar = abs(sin(frameCount * 0.001) * 255); // this makes the color move up to 255 and then go back down again, abs means absolute, doesn't dip below into the trough of the sine wave
    boxSize = abs(cos(frameCount * 0.01) * 200)
    // if(colVar > 255) {
    //     colVar = 0;
    // }
    background(0);
    rotateY(frameCount * 0.002);// speed of the particles

    //FOR loops are for executing code multiple times, with the numbers inside the loop brackets inform the computer how many times to run the loop

    for (let j = 0; j < 5; j++) {
        push();
        for (let i = 0; i < 50; i++) {
            translate(
                sin(frameCount * 0.001 + (j * 2)) * 100,
                sin(frameCount * 0.001 + (j * 0.5)) * 100,
                i * 0.25
            );
            // noStroke();
            noFill();
            stroke(colVar);
            strokeWeight(10 + (5* boxSize))
            // fill(255 - (255 / colVar * i), 0, 150);
            rotateZ(frameCount * 0.02);
            // rotateX(frameCount * 0.02)
            push();
            box(1 + (10 / boxSize*0.2), 1 + (10 / boxSize*.3), 1 + (10 / boxSize*.5));
            // sphere(20 * (10 + boxSize), 8, 8);
            pop();
        }
        pop();
    }
}