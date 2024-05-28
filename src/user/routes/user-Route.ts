import express from 'express';
const routeUser = express.Router();

import { createUserController } from '../create-user/create-user.controller';
import { listUserController } from '../list-users/list-user.controller';
import { updateUserController } from "../update-user/update-user.controller";

import { createUserUseCase } from '../create-user/create-user.useCase';
import { listUserUseCase } from '../list-users/list-user.useCase';
import { updateUserUseCase } from "../update-user/update-user.useCase";

routeUser.post("/criarUsuario", createUserController, createUserUseCase);
routeUser.get("/listarUsuarios", listUserController, listUserUseCase);
routeUser.patch("/atualizarUsuario/:id", updateUserController, updateUserUseCase);

module.exports = routeUser;