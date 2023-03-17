var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8c583cd3-7898-4a10-89e0-539ecb18524e"],"propsByKey":{"8c583cd3-7898-4a10-89e0-539ecb18524e":{"name":"fish_pink_1","sourceUrl":null,"frameSize":{"x":67,"y":47},"frameCount":2,"looping":true,"frameDelay":12,"version":"iFusKiN421OW6i6cUJdxlxbWbQ8tMLff","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":67,"y":94},"rootRelativePath":"assets/8c583cd3-7898-4a10-89e0-539ecb18524e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var atrapadas = 0;
var gameState="serve";

var thief = createSprite(20,382,30,30);
  thief.shapeColor="green";
  
var diamondBox = createSprite(380,20,30,30);
  diamondBox.shapeColor="blue";
  
var laser1 = createSprite(100,0,100,5);
  laser1.shapeColor = "green";
  
  
  
var laser2 = createSprite(300,400,100,5);
  laser2.shapeColor = "red";
  

  
  
var laser3 = createSprite(110,0,5,100);
  laser3.shapeColor = "brown";
  

  
var laser4 = createSprite(300,400,5,100);
  laser4.shapeColor = "yellow";
  
  


var block1 = createSprite(250, 70, 20, 20);
  block1.shapeColor = "white";
var block2 = createSprite(250, 130, 20, 20);
  block2.shapeColor = "white";
var block3 = createSprite(250, 190, 20, 20);
  block3.shapeColor = "white";
var block4 = createSprite(250, 250, 20, 20);
  block4.shapeColor = "white";
var block5 = createSprite(250, 310, 20, 20);
  block5.shapeColor = "white";
var block6 = createSprite(250, 370, 20, 20);
  block6.shapeColor = "white";

var block7 = createSprite(50,250, 20, 20);
  block7.shapeColor = "white";
var block8 = createSprite(110,250, 20, 20);
  block8.shapeColor = "white";
var block9 = createSprite(170,250, 20, 20);
  block9.shapeColor = "white";
var block10 = createSprite(230,250, 20, 20);
  block10.shapeColor = "white";
var block11 = createSprite(290,250, 20, 20);
  block11.shapeColor = "white";
var block12 = createSprite(350,250, 20, 20);
  block12.shapeColor = "white";

var block13 = createSprite(100, 50, 20, 20);
  block13.shapeColor = "white";
var block14 = createSprite(100, 110, 20, 20);
  block14.shapeColor = "white";
var block15 = createSprite(100, 170, 20, 20);
  block15.shapeColor = "white";
var block16 = createSprite(100, 230, 20, 20);
  block16.shapeColor = "white";
var block17 = createSprite(100, 290, 20, 20);
  block17.shapeColor = "white";
var block18 = createSprite(100, 350, 20, 20);
  block18.shapeColor = "white";

var block19 = createSprite(70,100, 20, 20);
  block19.shapeColor = "white";
var block20 = createSprite(130,100, 20, 20);
  block20.shapeColor = "white";
var block21 = createSprite(190,100, 20, 20);
  block21.shapeColor = "white";
var block22 = createSprite(260,100, 20, 20);
  block22.shapeColor = "white";
var block23 = createSprite(310,100, 20, 20);
  block23.shapeColor = "white";
var block24 = createSprite(370,100, 20, 20);
  block24.shapeColor = "white";

var block25 = createSprite(50,30, 20, 20);
  block25.shapeColor = "white";
var block26 = createSprite(110,30, 20, 20);
  block26.shapeColor = "white";
var block27 = createSprite(170,30, 20, 20);
  block27.shapeColor = "white";
var block28 = createSprite(230,30, 20, 20);
  block28.shapeColor = "white";
var block29 = createSprite(290,30, 20, 20);
  block29.shapeColor = "white";


function draw() {
  background(rgb(0, 255, 243));
  
  //Mostrar puntuación
  
  stroke(rgb(174, 209, 53));
  fill(rgb(255, 255, 255 ));
  textSize(19);
  text("Capturadas:"+atrapadas,215,15);
  
  // texto para que el jugador sepa como comenzar
  
  
  
  if (gameState =="serve"){
    
  textSize(16.5)
  stroke(rgb(174, 209, 53));
  fill(rgb(0, 0, 0 ));
  text("¡Bienvenido presiona la espaciadora para comenzar!",10,215);
  
  if (keyDown("space")) {
    laser1.velocityY = 4;
    laser2.velocityY = -6;
    laser3.velocityX = 10;
    laser4.velocityX = -8;
    
    gameState="play";
    ;
    
   }
  
  }
  
  if (gameState =="play"){
   if(keyIsDown(RIGHT_ARROW)){
    thief.velocityX = 3.5;
    thief.velocityY = 0;
    
  }
if(keyIsDown(LEFT_ARROW)){
    thief.velocityX = -3.5;
    thief.velocityY = 0;
  }
if(keyIsDown(UP_ARROW)){
    thief.velocityX = 0;
    thief.velocityY = -3.5;
  }
if(keyIsDown(DOWN_ARROW)){
    thief.velocityX = 0;
    thief.velocityY = 3.5;
  }  
   if ((atrapadas==4 || thief.isTouching(diamondBox))){
    gameState="end";
   }

  }
  
    if (gameState =="end"){
    stroke(rgb(174, 209, 53));
    fill(rgb(0, 0, 0 ));
    textSize(24);
    text("Fin del juego", 40, 150);
    laser1.velocityY = 0;
    laser2.velocityY = 0;
    laser3.velocityX = 0;
    laser4.velocityX = 0;
    thief.velocityX = 0;
    thief.velocityY = 0;
    }
  
  createEdgeSprites();
  thief.bounceOff(edges);
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  laser3.bounceOff(edges);
  laser4.bounceOff(edges);
  thief.collide(block1);
  thief.collide(block2);
  thief.collide(block3);
  thief.collide(block4);
  thief.collide(block5);
  thief.collide(block6);
  thief.collide(block7);
  thief.collide(block8);
  thief.collide(block9);
  thief.collide(block10);
  thief.collide(block11);
  thief.collide(block12);
  thief.collide(block13);
  thief.collide(block14);
  thief.collide(block15);
  thief.collide(block16);
  thief.collide(block17);
  thief.collide(block18);
  thief.collide(block19);
  thief.collide(block20);
  thief.collide(block21);
  thief.collide(block22);
  thief.collide(block23);
  thief.collide(block24);
  thief.collide(block25);
  thief.collide(block26);
  thief.collide(block27);
  thief.collide(block28);
  thief.collide(block29);
  
if(keyIsDown(RIGHT_ARROW)){
    thief.velocityX = 3.5;
    thief.velocityY = 0;
    
  }
if(keyIsDown(LEFT_ARROW)){
    thief.velocityX = -3.5;
    thief.velocityY = 0;
    
  }
if(keyIsDown(UP_ARROW)){
    thief.velocityX = 0;
    thief.velocityY = -3.5;
    
  }
if(keyIsDown(DOWN_ARROW)){
    thief.velocityX = 0;
    thief.velocityY = 3.5;
    
  }  

if (laser1.isTouching(thief))  {
  atrapadas = atrapadas +1
  thief.x = 20;
  thief.y = 382;
  
}

if (laser2.isTouching(thief))  {
  atrapadas = atrapadas +1
  thief.x = 20;
  thief.y = 382;
}

if (laser3.isTouching(thief))  {
  atrapadas = atrapadas +1
  thief.x = 20;
  thief.y = 382;
}

if (laser4.isTouching(thief))  {
  atrapadas = atrapadas +1
  thief.x = 20;
  thief.y = 382;
}



    drawSprites();

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
