class Ball{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            
        }
        this.image=loadImage("paper.png")
        this.body = Bodies.rectangle(x, y,50,50, options);
      this.width = 50;
      this.height = 50;
    World.add(world, this.body);
    
}
display(){
  var pos =this.body.position;
  var angle = this.body.angle;
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  strokeWeight(3)
  stroke("blue")
  fill("red");
  image(this.image,0, 0, this.width, this.height);
  pop();
}
};
