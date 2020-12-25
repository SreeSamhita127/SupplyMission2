class Samhita {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var me =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(me.x, me.y, this.width, this.height);
    }
  };