import { Router } from "express";
import userCreateController from "../controllers/users/userCreate.controller";

const routes = Router();

routes.post("/users", userCreateController);
routes.get("/users");
routes.get("/users/:id");
routes.patch("/users/:id");
routes.delete("/users/:id");

export default routes;
