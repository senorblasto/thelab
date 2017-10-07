function setup() {
    size(700, 800);
    ellipseMode(RADIUS);
    strokeWeight(2);
    background(0);
}

function draw() {

    ellipse(mouseX, mouseY, 30);
    fill(77, 99, 99, 100);
    for (var i = 0; i < 120; i++) {
        if (i == 119) {
            background(0);

        }

    }

}