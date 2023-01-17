let x = 0;
let y = 0;

function setup() {
    createCanvas(windowWidth - 100, windowHeight - 100);
    colors = [color('#B31583'), color('#FFDC1F'), color('#FF06B5'), color('#1FFBFF'), color('#0CB0B3')];
    let slide = abs(sin(frameCount * 0.5) * 15);
}




function draw() {
    while (y < height) {
        while (x < width) {
            let CELL_SIZE = 50;
            let x1 = x + sin(slide);
            let y1 = y;
            let x2 = x;
            let y2 = y + slide(CELL_SIZE);
            let x3 = x + slide(CELL_SIZE);
            let y3 = y + CELL_SIZE;
            let r = slide(CELL_SIZE * 0.25);
            fill(random(colors));
            triangle(x1, y1, x2, y2, x3, y3);
            fill(random(colors));
            stroke(255)
            strokeWeight(random(5, 10))
            ellipse(x1, y1, r);
            ellipse(x2, y2, r);
            ellipse(x3, y3, r);
            x += CELL_SIZE;
        }
    }
}