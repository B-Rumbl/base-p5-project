function setup() {
    const CELL_SIZE = 120;
    createCanvas(1200, 1200);
    // background(125);
    // noStroke();
    let x = 0;
    let y = 0;
    let xVar = 5;
    let yVar = 8;
    let wVar = 13;
    let hVar = 21;
    let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3];
    let curH = random(sizes);
    let curW = random(sizes);
    let col = [color('#B31583'), color('#FFDC1F'), color('#FF06B5'), color('#1FFBFF'), color('#0CB0B3')];
    strokeWeight(5);
    while (y < height) {
        while (x < width) {
            fill(random(col));
            rect(x, y, curW, curH);
            x += curW;
            let availW = width - x;
            curW = random(sizes);
            while (curW > availW) {
                curW -= CELL_SIZE;
            }
        }
        y += curH;
        // let availH = height - y;
        // curH = random(sizes);
        // while (curH > availH) {
        //     curH -= CELL_SIZE;
        // }
        x = 0;
    }
}