noseY=0;
nosex=0;

function preload(){
lips=loadImage("https://i.postimg.cc/hPNF8mqn/l1.png");
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('PoseNet is Initialized');

}
function draw(){
image(video , 0 , 0 , 300 ,300 );
image(lips,nosex,noseY,50,30);
}

function take_snapshot(){
    save('Filter.png');
}
function gotPoses(results){
    if(results.length > 0) {
        noseY=results[0].pose.nose.y+20;
        nosex=results[0].pose.nose.x-25;
        console.log(results);
        console.log("nose x = "+ results[0].pose.nose.x);
        console.log("nose y = "+ results[0].pose.nose.y);
    }
}