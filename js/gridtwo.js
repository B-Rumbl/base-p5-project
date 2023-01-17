let tex = [];
let colors;


function preload() {
    let texNum = 5;
    for (let i = 1; i <= texNum; i++) {
        // let texture = loadImage("images/texture00"+i+".png");//concatenation
        let j = loadImage(`images/texture00${i}.png`); //backticks are 'template literals' and '$' '{}' is string interpolation
        tex.push(j);//adds texture to textures array
    }
}

function setup() {
    colors = [color('#B31583'), color('#FFDC1F'), color('#FF06B5'), color('#1FFBFF'), color('#0CB0B3')]
    createCanvas(1200, 1200);
    // background(155);
    const CELL_SIZE = 60;
    let x = 0;
    let y = 0;
    noStroke();
    while (y < height) {
        while (x < width) {
            tint(random(colors));
            let j = random(tex);
            image(j, x, y, CELL_SIZE);
            // rotate(random(90))
            x += CELL_SIZE;
        }
        y += CELL_SIZE;
        x = 0;
    }
}