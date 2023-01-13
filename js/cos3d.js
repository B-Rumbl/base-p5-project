let colVar;
let boxSize;
let sphereSize;
let strokeSize;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    colVar = abs(sin(frameCount * 0.005) * 255); // this makes the color move up to 255 and then go back down again, abs means absolute, doesn't dip below into the trough of the sine wave. Changing the multiple of the frame count changes the speed of frequency of colour
    boxSize = abs(cos(frameCount * 0.01) * 500) //this alters the size of the box with each frame
    strokeSize = abs(sin(frameCount*0.05)); //this alters the size of the strokes on each frame using the "sin" formula
    sphereSize = abs(tan(frameCount*1) * 0.1); //this will change the size of the sphere inrelation to stroke size
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
                sin(frameCount * 0.001 + (j * 0.2)) * 100,
                sin(frameCount * 0.001 + (j * 0.5)) * 100,
                i * 0.25
            );
            // noStroke();
            noFill();
            stroke(colVar);
            strokeWeight(10 + (boxSize* 2)) //this increases the length of the lines coming from the edges of the cube
            // fill(255 - (255 / colVar * i), 0, 150);
            // rotateZ(frameCount * 0.02);
            pop()
            rotateX(frameCount * 0.02)
            push();
            box(10 + (10 / boxSize*0.2), 1 + (10 / boxSize*.3), 1 + (10 / boxSize*.5)); //this creates a cross with the stroke on the cubes edges that extend beyond the edges parameter
            stroke(0);
            strokeWeight(strokeSize*0.5);
            sphere(100 + (sphereSize*0.5), 10, 10);
            // sphere(20 * (10 + boxSize), 8, 8);
            pop();
        }
        pop();
    }

}