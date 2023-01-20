let colors;
let x = 0;
let y = 0;

function setup() {
    colors = [color('#B31583'), color('#FFDC1F'), color('#FF06B5'), color('#1FFBFF'), color('#0CB0B3')];
    createCanvas(windowWidth, windowHeight);
    background(random(colors));
    // frameRate(30);
    // while (y < height) {
    //     while (x < width) {
    //         noStroke();
    //         tint(random(colors));
    //         let j = random(tex);
    //         // rotate(PI * 0.5)
    //         // image(j, x, y, CELL_SIZE);
    //         let x1 = x + random(CELL_SIZE);
    //         let y1 = y;
    //         let x2 = x;
    //         let y2 = y + random(CELL_SIZE);
    //         let x3 = x + random(CELL_SIZE);
    //         let y3 = y + CELL_SIZE;
    //         let r = random(CELL_SIZE * 0.25);
    //         fill(random(colors));
    //         triangle(x1, y1, x2, y2, x3, y3);
    //         fill(random(colors));
    //         stroke(255)
    //         strokeWeight(random(5, 10))
    //         ellipse(x1, y1, r);
    //         ellipse(x2, y2, r);
    //         ellipse(x3, y3, r);
    //         // rotate(windowWidth, windowHeight);
    //         x += CELL_SIZE;
    //     }
    //     // rotate(random)
    //     y += CELL_SIZE;
    //     x = 0;
    // }
}
function draw() {
    const CELL_SIZE = x + random(50, 200);
    y = x * 0.5;
    for (i = 0; i < 100; i++) {
        for (j = 0; j < 100; j++) {
            noStroke();
            //defining the variables below means that the "random" points remain the same for where x1, x2, y1, y2 etc are rendered
            fill(random(colors));
            // fill(random(10, 255));
            let x1 = x + random(CELL_SIZE);
            let y1 = y;
            let x2 = x;
            let y2 = y + random(CELL_SIZE);
            let x3 = x + random(CELL_SIZE);
            let y3 = y + CELL_SIZE;
            let r = random(10, 25);
            // noFill();
            stroke(random(colors));
            strokeWeight(random(5, 10));
            strokeJoin(ROUND);
            triangle(x1, y1, x2, y2, x3, y3);
            fill(random(colors));
            // fill(255);
            // noFill();
            // stroke(random(50, 255));
            noStroke();
            strokeWeight(random(5, 10));
            ellipse(x1, y1, r);
            ellipse(x2, y2, r);
            ellipse(x3, y3, r);
            x += CELL_SIZE;
        }
        y += CELL_SIZE;
        x = 0;
    }
}