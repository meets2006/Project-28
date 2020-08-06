class Tree{
    constructor(x,y)
    {
        var opt={
           isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,opt)
        this.w=width
        this.h=height
        this.image=loadImage("tree.png")
        World.add(world,this.body)
    }
    display()
    {
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
    }
}