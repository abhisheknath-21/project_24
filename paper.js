class Paper {
    constructor(x, y) {
      var options = {
          isStatic : false,
          restitution :0.3,
          friction: 0.5,
          density:1.2,  
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;

     Matter.Bodies.circle(x,y, 50);

      World.add(world, this.body);
    }
    display(){

      rectMode(CENTER);
      fill(255);
      strokeWeight(5);
      stroke("blue");
      rect(100, 240, this.width, this.height);
    }
  };