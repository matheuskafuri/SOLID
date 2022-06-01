import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // should not be able to turn user admin true if user does not exist
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("User does not exist");
    }
    // turn user admin true
    const admin = this.usersRepository.turnAdmin(user);
    return admin;
  }
}

export { TurnUserAdminUseCase };
