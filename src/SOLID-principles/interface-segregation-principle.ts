interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

class Human implements Workable, Eatable {
  work() {
    console.log("Human is working");
  }
  eat() {
    console.log("Human is eating");
  }
}

class Robot implements Workable {
  work() {
    console.log("Robot is working");
  }
}
