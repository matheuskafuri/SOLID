import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Should not be able to a non existing user get list of all users
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("User does not exist");
    }
    // Should not be able to a non admin user get list of all users
    if (!user.admin) {
      throw new Error("User is not admin");
    }
    // List all users
    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
