function preload()
{
     song = loadSound("music.mp3");
}

function setup()
{
    video = createCapture(VIDEO);
    image(video,0,0,400,400);

    
    canvas = createCanvas(600,400);
    canvas.position(700,550);

    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on('pose' , gotPoses);
}

function play()
{
    sound.play();
}

function pause()
{
    sound.pause();
}

function stop()
{
    sound.stop();
}