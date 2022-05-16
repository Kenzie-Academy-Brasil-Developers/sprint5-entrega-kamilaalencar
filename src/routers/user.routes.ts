import { Router } from "express";

const routes = Router();
// criação de usuario
routes.post("/users");
// listar todos os usuarios
routes.get("/users");
// listar um usuario
routes.get("/users/:id");
// atualizar os dados do usuario
routes.patch("/users/:id");
// deletar usuario
routes.delete("/users/:id");

export default routes;
