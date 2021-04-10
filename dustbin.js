class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
          restitution :0,
          friction: 0.5,
          density:1.2,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }
    display(){

      rectMode(CENTER);
      //fill(255);
      //strokeWeight(5);
     // stroke("blue");
      rect(width/2, height-50, this.width, this.height);
    }
  };