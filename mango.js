class Mango{
    constructor(x,y,r)
        {
            var opt={
            isStatic:true,
            restitution:0,
            friction:1
            }
        
        this.body=Bodies.circle(x,y,r,opt)
        this.r=r
        this.image=loadImage("mango.png")
        World.add(world,this.body)
    }
    display()
    {
        var pos =this.body.position;

    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle)
    imageMode(RADIUS);
    image(this.image,0,0,this.r,this.r)
    pop();
    }
}