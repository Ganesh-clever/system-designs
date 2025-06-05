interface Database {
  save(data: string): void;
}

class MySQLDatabase implements Database {
  save(data: string): void {
    console.log(`Saving ${data} to MySQL`);
  }
}

class MongoDB implements Database {
  save(data: string): void {
    console.log(`Saving ${data} to MongoDB`);
  }
}

class App {
  constructor(private db: Database) {}

  run(data: string) {
    this.db.save(data);
  }
}

const app = new App(new MongoDB());
app.run("Ganesh");
