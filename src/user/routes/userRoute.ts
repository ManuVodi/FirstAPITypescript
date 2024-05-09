import express from 'express';
const routeUser = express.Router();

const createUserController = require('../controllers/createUserController');
const searchUserController = require('../controllers/searchUserController');
const deleteUserController = require('../controllers/deleteUserController');

const createUserUseCase = require('../useCases/createUserUseCase');
const searchUserUseCase = require('../useCases/searchUserUseCase');
const deleteUserUseCase = require('../useCases/deleteUserUseCase');

routeUser.post("/criarUsuario", [createUserController, createUserUseCase]);

module.exports = routeUser;