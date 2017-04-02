var len = 75;
var angle = 0;
var slider;
var h1;
var p1;

function setup() {
	angle = 0.36;
	h1 = createElement("h1", "This is a Fractal Tree !! ");
	p1 = createElement("h3", "Angle :" + angle);
	createCanvas(400, 400);
	createP("Adjust the slider to change the angle !!");
	slider = createSlider(0, PI, angle, 0.01);
	createP("Done by Mouli !!");

}

function draw() {
	background(51, 90);
	translate(width / 2, height);
	angle = slider.value();
	p1.html("Angle :" + angle);
	line(width / 2, height, width / 2, height - len);
	stroke(0, 255, 0);
	branch(100)
}

function branch(len) {
	line(0, 0, 0, -len);
	translate(0, -len);
	if (len > 3) {
		push();
		rotate(angle);
		branch(len * 0.67);
		pop();
		push();
		rotate(-angle);
		branch(len * 0.67);
		pop();
	}
}
