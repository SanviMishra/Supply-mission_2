class Basket{
    constructor(x,y,width,height){
       var options={
           isStatic:true
        }
        this.body=Bodies.rectangle(x, y,width,height);
        this.width=width;
         this.height=height;
        World.add(world,this.body);
    }
    display(){
        
        var pos =this.body.position;
        var angle=this.body.angle;
        push();
        
        //rotate(angle);
        fill("red");
        
        rectMode(CENTER);
        rect(pos.x,pos.y, this.width, this.height);
        pop();

      }
    }
