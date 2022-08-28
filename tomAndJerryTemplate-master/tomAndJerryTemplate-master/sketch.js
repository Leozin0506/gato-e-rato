var bgImg;
var cat,catImg1,catImg2,catImg3,catImg4;
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadImage("images/cat2.png");
    catImg3 = loadImage("images/cat3.png");
    catImg4 = loadImage("images/cat4.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadImage("images/mouse2.png");
    mouseImg3 = loadImage("images/mouse3.png");
    mouseImg4 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("gato sentado",catImg1);
    cat.scale = 0.2;
    mouse = createSprite(180,600);
    mouse.addAnimation("ratoQ",mouseImg1);
    mouse.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("gato feliz", catImg4);
        cat.changeAnimation("gato feliz");
        mouse.addAnimation("rato feliz", mouseImg4);
        mouse.changeAnimation("rato feliz");
    }


    keyPressed();
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("rato provocando", mouseImg3);
        mouse.changeAnimation("rato provocando");
        cat.addAnimation("gato andando", catImg2);
        cat.changeAnimation("gato andando");

        cat.velocityX = -5;
    }
}
