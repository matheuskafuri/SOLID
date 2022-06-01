import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // should not be able to show user profile if user does not exist
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("User does not exist");
    }
    // show user profile
    return user;
  }
}

export { ShowUserProfileUseCase };
