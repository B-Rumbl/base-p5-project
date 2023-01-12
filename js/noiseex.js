// let noiseVal;
// let noiseScale = 0.02;

// function setup() {
//     createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//     background(0)
//     for (let y = 0; y < height; y++) {
//         for (let x = 0; x < width / 2; x++) {
//             noiseDetail(2, 0.2);
//             noiseVal = noise((mouseX + x) * noiseScale, (mouseY + y) * noiseScale);
//             stroke(noiseVal * 255);
//             point(x, y);
//             noiseDetail(8, 0.65);
//             noiseVal = noise((mouseX + x + width / 2) * noiseScale, (mouseY + y) * noiseScale);
//             stroke(noiseVal * 255);
//             point(x + width / 2, y);
//         }
//     }
// }

let noiseVal;
 let noiseScale = 0.2;
function setup() {
   createCanvas(1000, 1000);
 }
function draw() {
   background(0);
   for (let y = 0; y < height; y++) {
     for (let x = 0; x < width / 2; x++) {
       noiseDetail(2, 0.5);
       noiseVal = noise((mouseX + x) * noiseScale, (mouseY + y) * noiseScale);
       stroke(noiseVal * 255);
       point(x, y);
       noiseDetail(8, 0.65);
       noiseVal = noise(
         (mouseX + x + width / 2) * noiseScale,
         (mouseY + y) * noiseScale
       );
       stroke(noiseVal * 255);
       point(x + width / 2, y);
     }
   }
 }