class Ground{

constructor(x,y,w,h){
    var ground_options={
        isStatic:true
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
    fill ("green");
    stroke ("brown");
    strokeWeight (3)
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);


}



} 