class lines {
    constructor(x, y, width, height) {
      var Lineoptions = {
          'restitution':0,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, Lineoptions);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var me = this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(me.x, me.y, this.width, this.height);
    }
  };
