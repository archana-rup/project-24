class Box{
    constructor(){
        var options={
            isStatic:true
        }
        this.bodyBottom=Bodies.rectangle(1000,650,200,20,options);
        this.width1=200;
        this.height1=20;
        
        this.bodyLeft=Bodies.rectangle(900,610,20,100,options);
        this.width2=20;
        this.height2=100;

        this.bodyRight=Bodies.rectangle(1100,610,20,100,options);
        this.width3=20;
        this.height3=100;

        World.add(world,this.bodyBottom);
        World.add(world,this.bodyLeft);
        World.add(world,this.bodyRight);
        

    }

    display(){
var bottom=this.bodyBottom.position;
var left=this.bodyLeft.position;
var right=this.bodyRight.position;

rectMode(CENTER);
fill("red");
rect(bottom.x,bottom.y,this.width1,this.height1);
rect(left.x,left.y,this.width2,this.height2);
rect(right.x,right.y,this.width3,this.height3);

    }
}