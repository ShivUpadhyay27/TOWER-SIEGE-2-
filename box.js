class Box {
        constructor(x, y, width, height) { 
          var option = {
              restitution : 0.4,
              frictin : 0.0,
              //isStatic : truw
          }
          this.visibility = 225 ;
          this.body = Bodies.rectangle(x,y,height,option) ;
          this.width = width ;
          this.height = height ;
          World.add(world,this.body) ;
          }

          display(){
            console.log(this.body.speed) ;
            if(this.body.speed < 3){
               var angle = this.body.angle ;
               var pos = this.body.position ;
               push() ;
               translate(pos.x,pos.y) ;
               rotate(angle) ;
               rectMade(CENTER) ;
               rect(0,0,this.width,this.height) ;
               pop() ;
            } else{
                World.remove(world,this.body) ;
                push() ;
                this.visibility = this.visibility - 5 ;
                pos() ;
            }
          }
        }