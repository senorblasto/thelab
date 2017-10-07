var value = 0;
var valu = 0;
var x = 0;
var y = 0;
var p = 0;
var t = 2;
var time = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(122, 255);

}

function draw() {

}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
    time += 1;
    nate();
    line(x, y + 90, mouseX, mouseY);
    stroke(x, y, y * 40, 100);

}

function mouseClicked() {
    x = mouseX;
    y = mouseY;

}

function mouseReleased() {
    time = 0;
}






function nate() {
    background(0, 0, 0, 1);
    line(mouseX / 2, 2 * y, x * 2, mouseY / 2);

    ellipse(mouseX, mouseY, time / 4);
    fill(0, 255 - time, mouseY);
    stroke(x, y, y * 40, 100);


}