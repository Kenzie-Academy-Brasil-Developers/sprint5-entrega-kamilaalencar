import { User } from "../../entities/user.entities";
import { AppDataSource } from "../../data-source";

import bcrypt from "bcrypt";

const userUpdateService = async (
  name: string,
  email: string,
  password: string,
  age: Number,
  updated_at: Date,
  id: string
) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);

  if (!account) {
    throw new Error("User not found");
  }

  const newPassword = bcrypt.hashSync(password, 10);

  await userRepository.update(account!.id, {
    name: name,
    email: email,
    password: newPassword,
    age: age,
    updated_at: updated_at,
  });
  return true;
};

export default userUpdateService;
