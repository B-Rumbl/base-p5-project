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
    createCanvas(windowWidth - (50), windowHeight - (50));
    background(random(colors));
    const CELL_SIZE = 20;
    let x = 0;
    let y = 0;
        noStroke();
    while (y < height) {
        while (x < width) {
            tint(random(colors));
            let j = random(tex);
            // rotate(PI * 0.5)
            image(j, x, y, CELL_SIZE);
            // rotate(windowWidth, windowHeight);
            x += CELL_SIZE;
        }
        // rotate(random)
        y += CELL_SIZE;
        x = 0;
    }
  
}
function draw() {
}