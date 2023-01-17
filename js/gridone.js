function setup() {
    const CELL_SIZE = 233;
    createCanvas(1200,1200);
    background(125);
    noStroke();
    let x = 0;
    let y = 0;
    let xVar = 5;
    let yVar = 8;
    let wVar = 13;
    let hVar = 21;
    let sizes = [CELL_SIZE, CELL_SIZE 8 2, CELL_SIZE * 3];
    let curH = random(sizes)
    let curW = random(sizes)
    let col = [color('#B31583'), color ('#FFDC1F'), color('#FF06B5'), color('#1FFBFF'), color('#0CB0B3')]
    while(y < height) {
        while(x < width){
            fill(random(col))
            // rect(x+random(-xVar, xVar), y + random(-yVar, yVar), CELL_SIZE + random (-wVar, wVar), CELL_SIZE + random(-hVar, hVar));
            rect(x, y, curW, curH);
            x+= curW;
        }
        y+= curH;
        x = 0;
    }
}
