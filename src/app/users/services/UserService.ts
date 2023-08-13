import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { UserRepository } from "../repositories/UserRepository";

class UserService {
  constructor(private repository: UserRepository) {}

  async create(user: CreateUserDTO) {
    try {
      const createdUser = await this.repository.create(user);
      
      return {
        data: createdUser,
        message: "UserCreated",
        status: 201,
      };
   
    } catch (error: unknown) {
      return {
        error: true,
        message: "Internal server error",
        status: 400,
      };
    }
  }
}

export { UserService };
