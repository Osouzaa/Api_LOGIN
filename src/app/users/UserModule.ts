import { UserController } from "./controllers/UserController";
import { UserModel } from "./entities/User";
import { UserRepository } from "./repositories/UserRepository";
import { UserService } from "./services/UserService";

class UserModule {
  static build() {
    const repository = new UserRepository(UserModel);
    const service = new UserService(repository);
    const controller = new UserController(service);

    return { repository, service, controller };
  }
}

export { UserModule };
