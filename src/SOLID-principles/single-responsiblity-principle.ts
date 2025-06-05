import { container } from "../decorator/dependancy-injection/containerDI";
import { Injectable } from "../decorator/dependancy-injection/injectable";

@Injectable()
class User {
  saveUser(user: string) {
    console.log(`User data gotttt stored:${user}`);
  }
}

@Injectable()
class EmailService {
  triggerEmail(user: string) {
    console.log(`Email triggered for this user:${user}`);
  }
}

@Injectable()
class Logger {
  log(user: string) {
    console.log(`[INFO]:${user} user data is stored successfully.`);
  }
}

@Injectable()
class ManageService {
  
  constructor(
    private userService: User,
    private emailService: EmailService,
    private logger: Logger) {}

  process(user: string) {
    this.userService.saveUser(user);
    this.emailService.triggerEmail(user);
    this.logger.log(user);
  }
}

const userS = container.resolve<ManageService>(ManageService);
console.log(userS.process('Ganesh'));