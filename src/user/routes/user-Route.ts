import express from 'express';
const routeUser = express.Router();

import { createUserController } from '../create-user/create-user.controller';
import { updateUserController } from "../update-user/update-user.controller";
import { deleteUserController } from '../delete-user/delete-user.controller';

import { createUserUseCase } from '../create-user/create-user.useCase';
import { listUserUseCase } from '../list-users/list-user.useCase';
import { updateUserUseCase } from "../update-user/update-user.useCase";
import { searchUserUseCase } from '../search-user/search-user.useCase';
import { deleteUserUseCase } from '../delete-user/delete-user.useCase';

routeUser.post("/Usuario/criarUsuario", createUserController, createUserUseCase);
routeUser.get("/Usuario/listarUsuarios", listUserUseCase);
routeUser.patch("/Usuario/atualizarUsuario/:id", updateUserController, updateUserUseCase);
routeUser.get("/Usuario/pesquisarUsuario", searchUserUseCase);
routeUser.delete("/Usuario/deletarUsuario/:id", deleteUserController, deleteUserUseCase);

module.exports = routeUser;