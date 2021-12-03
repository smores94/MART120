//x and y for my player
var characterX = 30;
var characterY = 50;

//define key codes for each letter
var shapeX;
var shapeY;
var shapeXSpeed;
var shapeYSpeed;

//create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

function setup() 
{
  createCanvas(500, 600);
  shapeXSpeed = math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shapeYSpeed = math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  
}

function draw() 
{
    background(251, 227, 164);
    stroke(5)
    fill(164, 248, 251);

    //call Borders
    createBorders();

    //call Character
    createCharacter();    

    //call characterMovement
    createcharacterMovement();

    //Call checkoutofbounds
    createcheckoutofbounds();
  
    //Call exitmessage
    createexitmessage();

    //call block
    createblock();

    //call randomspeed
    createrandomspeed();

    //call createmoveshape
    createmoveshape();


    //call checkifplayerleft
    createcheckifplayerleft();

    //call mouseclicked
    createmouseclicked();

    //call shapewithmouseclick
    createshapewithmouseclick();

    //call mouseproblem
    createmouseproblem();

      //enemy
      fill(104, 35, 103);
      //draw enemy
      circle(shapeX,shapeY,20);

}


function Borders()
{
//top border
rect(0,0,width,10);
//left border
rect(0,0,10,height);
//bottom border
rect(0,height-10,width,10);
//right border
rect(width-10,0,10,height-50);
//exit message
text ("Exit", width-50,height-50)
}    

function Character()
{
  //character
  fill(164, 220, 251);
  square(characterX,characterY, 50);
    
}

function characterMovement()
{ 
    //handle the arrow keys
    if (keyIsDown(LEFT_ARROW)) 
    {
        characterX -= 5;
      }
    
      if (keyIsDown(RIGHT_ARROW)) 
      {
        characterX += 5;
      }
    
      if (keyIsDown(UP_ARROW)) 
      {
        characterY -= 5;
      }
    
      if (keyIsDown(DOWN_ARROW)) 
      {
        characterY += 5;
      }
    
     
}
     function randomspeed()
     //random speed
     {
     shapeXSpeed = math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1)();
     shapeYSpeed = math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1)();
     }
     function block()
     //fill with color shape
     {
     fill (249,107,3);
     circle (shapeX,shapeY,10);
     fill (255, 204, 100);
     rect (20, 20, 60, 60);
     }
     function moveshape()
     //move shape
     {
     shapeX += shapeXSpeed;
     shapeY += shapeYSpeed;
     }

 

     function randomspeed()
     //random speed
     {
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     }

     function checkifplayerleft()
     //check if player has left exit
     {
     if (characterX > width && characterY > width-50);
     
      fill(0);
      stroke(5);   
      textSize(32);
      text ("You Win!", width/2-50, height/2-50);

    }
    function shapewithmouseclick()
    //create shape with mouseclick
    {
    fill(120,130,140);
    circle(mouseShapeX,mouseShapeY,25);
    }
    function mouseclicked()
    {
    mouseShapeX = mousex
    mouseShapeY = mousey
    }
 
    function exitmessage()    {
    textSize(16);
    text("You Win!",width-50,height-50);
    }

     function checkoutofbounds()
     {

     if (shapeX > width)
     {      
         shapeX = 0;
     }
     if (shapeX < width)
     {     
         shapeX = 0;
     }
     if (shapeY > height)
     {     
         shapeY = 0;
     }
     
     if (shapeY < height)
     {
         shapeY = 0;
     }
    }
     function mouseproblem()
    //mouse problem
    {
    if (x >= 300) 
    {
      x = 50;
    }
    
    if (y >= 300) 
    {
      y = 50;
    }
    if (diameter < 200) 
    {
      diameter += 2;
    } 
    else if (diameter >= 200) 
    {
      diameter = 25;
    }
  
    ellipse(mousex, mousey, 15, 50);
   
  }
     
    

  
    /*
     function keyPressed() {
         if (keyCode === LEFT_ARROW){
             characterX -= 10;
         
     }
     else if (keyCode === RIGHT_ARROW){
        characterX -= 10;
     }
    
    else if (keyCode === UP_ARROW){
       characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW){
        characterY -= 10;
    }
    */  
    
     
     
    