img = "";
nosex = 0;
nosey = 0;
mariox = 325;
marioy = 325;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');

	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);

}

function modelLoaded()
{
	console.log('Model is Loaded!');
}

function gotPoses(results)
{
	if(results.length > 0)
	{
       nosex = results[0].pose.nose.x;
	   nosey = results[0].pose.nose.y;
	   console.log('nosex = ' + nosex + ' nosey = ' + nosey);
	}
}

function draw() {
	game()
}






