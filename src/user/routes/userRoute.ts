import express from 'express';
const routeUser = express.Router();

const createUserController = require('../controllers/createUserController');
const listUserController = require('../controllers/listUserController');
const deleteUserController = require('../controllers/deleteUserController');

const createUserUseCase = require('../useCases/createUserUseCase');
const listUserUseCase = require('../useCases/listUserUseCase');
const deleteUserUseCase = require('../useCases/deleteUserUseCase');

routeUser.post("/criarUsuario", [createUserController, createUserUseCase]);
routeUser.get("/listarUsuarios", [listUserController, listUserUseCase]);

module.exports = routeUser;