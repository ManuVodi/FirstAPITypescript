import express from 'express';
const authorRoute = express.Router();

import { createAuthorController } from '../create-author/create-author.controller';
import { deleteAuthorController } from '../delete-author/delete-author.controller';

import { createAuthorUseCase } from '../create-author/create-author.useCase';
import { listAuthorUseCase } from '../list-authors/listAuthor.useCase';
import { deleteAuthorUseCase } from '../delete-author/delete-autor.useCase';
import { searchAuthorUseCase } from '../search-author/search-author.useCase';
import { updateAuthorController } from '../update-author/update-author.controller';
import { updateAuthorUseCase } from '../update-author/update-author.useCase';

authorRoute.post("/Autor/criarAutor", createAuthorController, createAuthorUseCase);
authorRoute.get("/Autor/listarAutores", listAuthorUseCase);
authorRoute.delete("/Autor/deletarAutor/:id", deleteAuthorController, deleteAuthorUseCase);
authorRoute.get("/Autor/pesquisarAutor", searchAuthorUseCase);
authorRoute.put("/Autor/atualizarAutor/:id", updateAuthorController, updateAuthorUseCase)

module.exports = authorRoute;