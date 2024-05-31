import express from 'express';
const genderRoute = express.Router();

import { createGenderController } from '../create-gender/create-gender.controller';
import { deleteGenderController } from '../delete-gender/delete-gender.controller';

import { createGenderUseCase } from '../create-gender/create-gender.useCase';
import { listGenderUseCase } from '../list-genders/list-gender.useCase';
import { searchGenderUseCase } from '../search-gender/search-gender.useCase';
import { deleteGenderUseCase } from '../delete-gender/delete-gender.useCase';

genderRoute.post("/Genero/criarGenero", createGenderController, createGenderUseCase);
genderRoute.get("/Genero/listarGenero", listGenderUseCase);
genderRoute.get("/Genero/pesquisarGenero", searchGenderUseCase);
genderRoute.delete("/Genero/deletarGenero/:id", deleteGenderController, deleteGenderUseCase);

module.exports = genderRoute;
