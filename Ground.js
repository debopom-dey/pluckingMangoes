class Ground{
    constructor(x,y,width,height){
       var options={
       isStatic:true
  
      }
  
      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;
      this.body= Bodies.rectangle(x,y,width,height,options)
      World.add(world,this.body)
  
    }
  
    display(){
      var paperpos= this.body.position;
      push()
      translate(paperpos.x,paperpos.y);
      rectMode(CENTER);
      //strokeWeight(3);
      fill(26,70,3);
      rect(0,0,this.width, this.height);
      pop()
  }
  
  
  
  }
  