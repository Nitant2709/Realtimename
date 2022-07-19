noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,650);
    canvas=createCanvas(550,500);
    canvas.position(920,120);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#672cf2');
    fill('#5bdcf0');
    stroke('#f2c84b');
    square(noseX,noseY,difference);
    document.getElementById("square_side").innerHTML="Width and Height of the square will be "+ difference +"px";
}
function modelLoaded(){
    console.log('PoseNet is initialised');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX);
        difference=floor(leftWristX-rightWristX);
    }
    
}
