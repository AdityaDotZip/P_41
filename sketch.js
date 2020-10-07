const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;


var T1, T2, T3,T4;
var walkingImg;
var boy;
var boyB;
var light;
var maxDrops = 150;
var drops=[];

var engine, world;

function preload(){
    T1 = loadImage("images/T1.png");
    T2 = loadImage("images/T2.png");
    T3 = loadImage("images/T3.png");
    T4 = loadImage("images/T4.png");

    walkingImg = loadImage("images/a.png");
}

function setup(){
    var canvas = createCanvas(450, 750);
    engine = Engine.create();
    world = engine.world;
   
    for(var i = 0; i<maxDrops; i++){
        drops.push(new Rain(random(0, 400), random(0,750)));
    }

    boy = new Boy(225,450);

    boyB = createSprite(225, 580, 100, 400);
    boyB.addImage(walkingImg);
    boyB.scale = 0.5;
}

function draw(){
    background(0);
   
    Engine.update(engine);

    for(var i = 0; i < drops.length; i++){
        drops[i].display();
        drops[i].updatePos();
    }

    var t = Math.round(random(1, 4));

    if(frameCount % 150 === 0){

        light = createSprite(225, 150, 100, 50);
        light.lifetime = 19;
        light.scale = 0.5;
        console.log(light.x);

        switch(t){
            case 1:
                light.addImage(T1);
                break;
            case 2:
                light.addImage(T2);
                break;
            case 3:
                light.addImage(T3);
                break;
            case 4:
                light.addImage(T4);
                break;
            default : break;
        }
    }
    drawSprites();
}   