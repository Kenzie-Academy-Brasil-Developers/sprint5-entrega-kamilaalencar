import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";

const userListOneService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);

  if (!account) {
    throw new Error("User not found");
  }

  return account;
};

export default userListOneService;
