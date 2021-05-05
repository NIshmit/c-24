class Box{

    constructor(x,y,w,h){
        var ground_options={
            isStatic:false,
            restitution:0.5,
            friction:1.0,
            density:1.0
          }
          this.x=x;
          this.y=y;
          this.width=w;
          this.height=h;
          this.body=Bodies.rectangle(x,y,w,h,ground_options);
          World.add(world,this.body);
    
    
    }
    
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push ()
        translate (pos.x,pos.y)
        rotate (angle)
        fill ("brown");
        stroke ("brown");
        strokeWeight (3)
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop ()
    
    
    }
    
    
    
    } 