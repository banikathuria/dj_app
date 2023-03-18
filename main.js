leftwristx=""
leftwristy=""
rightwristx=""
rightwristy=""
song=""
function preload(){
song=loadSound("music.mp3")
}
function setup(){
canvas=createCanvas(500,500)
canvas.position(500,175)
video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video,modelLoaded)
posenet.on("pose",gotPoses)
}
function draw(){
image(video,0,0,500,500)
fill("red")
circle(leftwristx,leftwristy,20)
leftwristy_no=Number(leftwristy)
removedecimal=floor(leftwristy_no)
volume=removedecimal/500
song.setVolume(volume)
document.getElementById("sound_volume").innerHTML= "Volume="+volume 
fill("red")
circle(rightwristx,rightwristy,20)
if(rightwristy>0 && rightwristy<=100){
    song.rate(0.5)
    document.getElementById("sound_speed").innerHTML="Speed= 0.5x"
    }
    else if(rightwristy>100 && rightwristy<=200){
        song.rate(1.0)
        document.getElementById("sound_speed").innerHTML="Speed= 1.0x"
}
else if(rightwristy>200 && rightwristy<=300){
    song.rate(1.5)
    document.getElementById("sound_speed").innerHTML="Speed= 1.5x"
}
if(rightwristy>300 && rightwristy<=400){
    song.rate(2.0)
    document.getElementById("sound_speed").innerHTML="Speed= 2.0x"
}
if(rightwristy>400 && rightwristy<=500){
    song.rate(2.5)
    document.getElementById("sound_speed").innerHTML="Speed= 2.5x"
}
}
function start(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}
function stop(){
    song.pause()
}
function modelLoaded(){
    console.log("model is loaded")
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result)
        leftwristx=result[0].pose.leftWrist.x
        leftwristy=result[0].pose.leftWrist.y
        rightwristx=result[0].pose.rightWrist.x
        rightwristy=result[0].pose.rightWrist.y
        
        console.log(rightwristx)
        console.log(rightwristy)
    }

}