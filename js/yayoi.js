let colors;
let x = 0;
let y = 0;
let fr = 13;
let CELL_SIZE = 150;
let sizes = [CELL_SIZE, CELL_SIZE * 0.25, CELL_SIZE * 0.5, CELL_SIZE * 0.75];

function setup() {
    createCanvas(windowWidth, windowHeight);
    colors = [color('#165C9C'), color('#EB0A00'), color('#D9E820'), color('#EB9400'), color('FFFFFF')];
    frameRate(fr);
    background(random(colors));
    noStroke();
    ellipseMode(CENTER);

}

function draw() {
    // y = x * 2;// this piece of code enables the random animation of the circle elements
    // background(random(colors));//this allows the background to change colours at the same time as the circles
    fill(random(colors));
    
    for (i = 0; i < 20; i++) {
        CELL_SIZE = random(20, 120);
        
        for (j = 0; j < 100; j++) {
            circle(x*1.2, y*1.2, CELL_SIZE*0.75);
            x += CELL_SIZE;
        }

        y += CELL_SIZE;
        x = 0;
    }

}