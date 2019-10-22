var eddie;
var time;
var loadTime;
var playTime; 
var amp, level;
var heart;
var heart2;
var cloud;
var s=4;

function preload() {
 eddie = loadSound("eddiemyluv2.mp3");
 heart = loadImage("heart.png")
 heart2 = loadImage("heart2.png")
 cloud = loadImage("cloud.png")
}

function setup() {
 createCanvas(800,600);


 if (eddie.isLoaded()) {
    loadTime = millis();
    print(loadTime);
    eddie.play();
amp = new p5.Amplitude();

}



}


function draw() {
background(255,182,193);
    mappedColor = map(level,0,1,0,255);
 background(mappedColor,60);


    playTime = millis() - loadTime;
    //print(playTime);
    level = amp.getLevel();
    print(level);

    cSize = map(level,0,1,0,255);

    //if (playTime > 1200) {
    //background("gray");
   // }







push(); 

if (playTime > 12500){
   background(127,10,17);
   imageMode(CENTER);
   image(heart2,400,300,cSize+30,cSize+30);
}else {
   imageMode(CENTER);
   image(heart,400,300,cSize+62,cSize+62)
}

pop();
push();
if (playTime > 15000){
  imageMode(CENTER);
  image(cloud,400,-400+s)
   s+=4
 
}
if (playTime > 20000){
   background(0);
}
pop();

background(mappedColor,60);

//push();
//circle(width/2,height/2,cSize);
//circ
//pop();
}

