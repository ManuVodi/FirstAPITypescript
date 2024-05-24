import express from 'express';
const routeUser = express.Router();

const createUserController = require('../controllers/createUserController');
const listUserController = require('../controllers/listUserController');
const disableUserController = require('../controllers/disableUserController');

const createUserUseCase = require('../useCases/createUserUseCase');
const listUserUseCase = require('../useCases/listUserUseCase');
const disableUserUseCase = require('../useCases/disableUserUseCase');

routeUser.post("/criarUsuario", [createUserController, createUserUseCase]);
routeUser.get("/listarUsuarios", [listUserController, listUserUseCase]);

module.exports = routeUser;