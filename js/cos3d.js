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
    strokeSize = abs(sin(frameCount * 0.05)); //this alters the size of the strokes on each frame using the "sin" formula
    sphereSize = abs(sin(frameCount * 0.01) * 20); //this will change the size of the sphere in relation to stroke size, whilst the amount of frameCount multiplier changes the speed at which this occurs
    background(0);
    rotateY(frameCount * 0.002);// speed of the particles rotation on the Y axis

    //FOR loops are for executing code multiple times, with the numbers inside the loop brackets inform the computer how many times to run the loop

    //changing the amount within the 'j < 1' to other numbers alters the amount of iterations of the object. This is handy if one wants to create a particular shape and movement on the screen frst and then create an array of them with these numbers
    for (let j = 0; j < 5; j++) {
        push();
        for (let i = 0; i < 10; i++) {
            translate(
                sin(frameCount * 0.001 + (j * 0.2)) * 500,//the distance between each iteration of the shape, increasing the last multiplier in the sequence to a greater number increases the amount of space between each iteration
                sin(frameCount * 0.001 + (j * 0.5)) * 100,
                i * 0.25
            );
            // noStroke();
            noFill();
            stroke(colVar)
            // stroke(255 - (255 / colVar * i), 0, 150);
            strokeWeight(10 + (boxSize)) //this increases the length of the lines coming from the edges of the cube. Using the box size equation makes the size of the crosses grow and shrink
            rotateZ(frameCount * 0.005);//changing the line position of this code dramatically alters the look of the piece. Placing it on line 40 alters it completely to a grid like appearance. 
            // fill(255 - (255 / colVar * i), 0, 150); //this is to change the colour of the white crosses to blue and pink, with the colorVal making it pulse between how much blue and pink there is. 
            rotateX(frameCount * 0.02)//commenting this out makes the appearance of the visuals appear completely different aswell, whilst also leaving the rotateZ function in place. 
            push();
            box(10 - (10 / boxSize * 0.2), 1 + (10 / boxSize * .3), 1 + (10 / boxSize * .5)); //this creates a cross with the stroke on the cubes edges that extend beyond the edges parameter
            stroke(0 );//this determines the colour of the stroke on the sphere
            strokeWeight(1 + (strokeSize * 2));
            sphere(10 + (sphereSize * 5), 10, 10);
            // sphere(20 * (10 + boxSize), 8, 8);
            pop();
        }
        pop();
    }

}