import { Request, Response } from "express";
import userUpdateService from "../../services/users/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, age, updated_at } = req.body;
    const { id } = req.params;

    const user = await userUpdateService(
      name,
      email,
      password,
      age,
      updated_at,
      id
    );

    return res.status(200).json({ message: "Updated user" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userUpdateController;
