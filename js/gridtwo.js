let tex = [];


function preload(){
    let texNum = 5;
    for(let i = 1; i <= texNum; i++){
        // let texture = loadImage("images/texture00"+i+".png");//concatenation
        let j = loadImage(`images/texture00${i}.png`); //backticks are 'template literals' and '$' '{}' is string interpolation
        tex.push(j);//adds texture to textures array
    }
}

function setup(){
    createCanvas(1200,1200);
    background(155);
    const CELL_SIZE =  180;
    let x = 0;
    let y = 0;
    noStroke();
    while(y < height){
        while(x < width){
            tint(random(255));
            let j = random(tex);
            image(j, x, y, CELL_SIZE);
            x+=CELL_SIZE;
        }
        y+=CELL_SIZE;
        x=0;
    }
}