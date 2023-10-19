leftWristX = 0;
rightWristX = 0;
difference = 0;



function setup() 
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550, 550);
    canvas.position(580,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() 
{
    background('#FF0000'); 
    text('Size', 100, 100);
    textSize(difference);
    fill('black');  
    
    console.log(difference);
}

function modelLoaded() 
{
    console.log('PoseNet Is Initiallized!');
}

function gotPoses(results) 
{
    if (results.length > 0) 
    {
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}