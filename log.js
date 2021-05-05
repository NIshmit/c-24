class Log{

    constructor(x,y,h,angle){
        var ground_options={
            isStatic:false,
            restitution:0.8,
            friction:1.2,
            density:1.0
          }
          this.x=x;
          this.y=y;
          this.width=20;
          this.height=h;
          this.body=Bodies.rectangle(x,y,20,h,ground_options);
          World.add(world,this.body);
          Matter.Body.setAngle(this.body, angle)
    
    
    }
    
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push ()
        translate (pos.x,pos.y)
        rotate (angle)
        fill ("brown");
        stroke ("green");
        strokeWeight (3)
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop ()
    
    
    }
    
    
    
    } 