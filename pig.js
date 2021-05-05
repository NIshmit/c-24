class Pig{

    constructor(x,y){
        var ground_options={
            isStatic:false,
            restitution:0.5,
            friction:1.0,
            density:1.0
          }
          this.x=x;
          this.y=y;
          this.width=50;
          this.height=50;
          this.body=Bodies.rectangle(x,y,50,50,ground_options);
          World.add(world,this.body);
    
    
    }
    
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push ()
        translate (pos.x,pos.y)
        rotate (angle)
        fill ("green");
        stroke ("brown");
        strokeWeight (3)
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop ()
    
    
    }
    
    
    
    } 