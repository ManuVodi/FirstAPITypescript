import express from 'express';
const routeUser = express.Router();

const createUserController = require('../controllers/createUserController');
const listUserController = require('../controllers/listUserController');
const updateUserController = require('../controllers/updateUserController');
const disableUserController = require('../controllers/disableUserController');

const createUserUseCase = require('../useCases/createUserUseCase');
const listUserUseCase = require('../useCases/listUserUseCase');
const updateUserUseCase = require('../useCases/updateUserUseCase');
const disableUserUseCase = require('../useCases/disableUserUseCase');

routeUser.post("/criarUsuario", [createUserController, createUserUseCase]);
routeUser.get("/listarUsuarios", [listUserController, listUserUseCase]);

module.exports = routeUser;