var box1 , box2 , box3 , box4 , box5 , box6 , box7 , box8 , box9 , box10 , box11 , box12 , box13 , box14 ,
    box15 , box16 , box17 , box18 , box19 , box20 , box21 , box22 , box23 , box24 , box25 ;

    function preload(){
    }

    function setup() {
        imageMode(CENTER) ;
        image(polygon_Img , polygon.position.x , polygon.position.y , 40,40) ;

        polygon = Bodies.circ;arguments(50,200,20) ;
        World.add(world,polygon) ;

        slingshot = new slingshot(this.polygon , {x:100 , y:200}) ;

        box1 = createSprite(650,550,200,20);
        box1.shapeColor = "red" ;
      
        box2 = createSprite(540,510,20,100) ;
        box2.shapeColor = "red" ;
        
        box3 = createSprite(760,510,20,100) ;
        box3.shapeColor = "red" ;            
        
        box4 = createSprite(650,550,200,20);
        box4.shapeColor = "red" ;
      
        box5 = createSprite(540,510,20,100) ;
        box5.shapeColor = "red" ;
        
        box6 = createSprite(760,510,20,100) ;
        box6.shapeColor = "red" ;
        
        box7 = createSprite(650,550,200,20);
        box7.shapeColor = "red" ;


      
        box8 = createSprite(330,235,30,40) ;
        box8.shapeColor = "red" ;
        
        box9 = createSprite(360,235,30,40) ;
        box9.shapeColor = "red" ;
        
        box10 = createSprite(390,235,30,40);
        box10.shapeColor = "red" ;
      
        box11 = createSprite(420,235,30,40) ;
        box11.shapeColor = "red" ;
        
        box12 = createSprite(450,235,30,40) ;
        box12.shapeColor = "red" ;
        
        box13 = createSprite(360,195,30,40);
        box13.shapeColor = "red" ;
      
        box14 = createSprite(390,195,30,40) ;
        box14.shapeColor = "red" ;
        
        box15 = createSprite(420,195,30,40) ;
        box15.shapeColor = "red" ;
        
        box16 = createSprite(390,155,30,40);
        box16.shapeColor = "red" ;


      
        box17 = createSprite(540,510,20,100) ;
        box17.shapeColor = "red" ;
        
        box18 = createSprite(760,510,20,100) ;
        box18.shapeColor = "red" ;            
        
        box19 = createSprite(650,550,200,20);
        box19.shapeColor = "red" ;
      
        box20 = createSprite(540,510,20,100) ;
        box20.shapeColor = "red" ;
        
        box21 = createSprite(760,510,20,100) ;
        box21.shapeColor = "red" ;
        
        box22 = createSprite(650,550,200,20);
        box22.shapeColor = "red" ;
      
        box23 = createSprite(540,510,20,100) ;
        box23.shapeColor = "red" ;
        
        box24 = createSprite(760,510,20,100) ;
        box24.shapeColor = "red" ;
        
        box25 = createSprite(650,550,200,20);
        box25.shapeColor = "red" ;
    }

    function draw() {

    drawSprites();
    }
    
  function mouseDragged(){
     Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  }

  function mouseReleased(){
     slingshot.fly();
  }

   function keyPressed(){
      if(keyCode === 32){
           slingshot.attach(this.polygon) ;
      }
   }
