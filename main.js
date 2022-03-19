song1 = "";
song2 = "";
function setup(){
canvas = createCanvas(600,500);
canvas.position(550,200);
video = createCapture(VIDEO);
video.hide();
}
function draw(){
    image(video,0,0,600,500);
}

function preload(){
    song1= loadSound("Heatwaves.mp3");
   song2 = loadSound("Shadow Of Mine.mp3");
}
function playsong1(){
  song1.play();
  song2.stop();
  document.getElementById("Song_name").innerHTML = "Song Name: Heatwaves";
}
function playsong2(){
  song2.play();
  song1.stop();
  document.getElementById("Song_name").innerHTML = "Song Name: Shadow Of Mine";
}