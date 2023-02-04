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