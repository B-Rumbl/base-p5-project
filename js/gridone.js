function setup() {
    const CELL_SIZE = 144;
    createCanvas(1200,1200);
    background(125);
    noStroke();
    let x = 0;
    let y = 0;
    let xVar = 5;
    let yVar = 8;
    let wVar = 13;
    let hVar = 21;
    let col = [color('#B31583'), color ('#FFDC1F'), color('#FF06B5'), color('#1FFBFF'), color('#0CB0B3')]
    while(y < height) {
        while(x < width){
            fill(random(col))
            rect(x+random(-xVar, xVar), y + random(-yVar, yVar), CELL_SIZE + random (-wVar, wVar), CELL_SIZE + random(-hVar, hVar));
            x+= CELL_SIZE;
        }
        y+= CELL_SIZE;
        x = 0;
    }
}
