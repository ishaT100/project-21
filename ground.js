class Ground {
    
}
    constructor(x, y, width, height) 
      const options = {
        isStatic: true,
      };
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      Matter.World.add(world, this.body);
      this.width = width;
      this.height = height;



