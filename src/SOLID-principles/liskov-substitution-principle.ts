interface Bird {
  move(): void;
}

class FlyingBird implements Bird {
  move() {
    console.log("Flying in the sky");
  }
}

class RunningBird implements Bird {
  move() {
    console.log("Running on land");
  }
}

function makeBirdMove(bird: Bird) {
  bird.move(); 
}

makeBirdMove(new FlyingBird()); 
makeBirdMove(new RunningBird()); 
