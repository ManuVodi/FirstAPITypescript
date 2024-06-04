import express from 'express';
const genderRoute = express.Router();

import { createGenderController } from '../create-gender/create-gender.controller';
import { deleteGenderController } from '../delete-gender/delete-gender.controller';
import { updateGenderController } from '../update-gender/update-gender.controller';

import { createGenderUseCase } from '../create-gender/create-gender.useCase';
import { listGenderUseCase } from '../list-genders/list-gender.useCase';
import { searchGenderUseCase } from '../search-gender/search-gender.useCase';
import { deleteGenderUseCase } from '../delete-gender/delete-gender.useCase';
import { updateGenderUseCase } from '../update-gender/update-gender.useCase';

genderRoute.post("/Genero/criarGenero", createGenderController, createGenderUseCase);
genderRoute.get("/Genero/listarGenero", listGenderUseCase);
genderRoute.get("/Genero/pesquisarGenero", searchGenderUseCase);
genderRoute.delete("/Genero/deletarGenero/:id", deleteGenderController, deleteGenderUseCase);
genderRoute.put("/Genero/atualizarGenero/:id", updateGenderController, updateGenderUseCase);

module.exports = genderRoute;
