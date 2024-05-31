import express from 'express';
const authorRoute = express.Router();

import { createAuthorController } from '../create-author/create-author.controller';
import { deleteAuthorController } from '../delete-author/delete-author.controller';

import { createAuthorUseCase } from '../create-author/create-author.useCase';
import { listAuthorUseCase } from '../list-authors/listAuthor.useCase';
import { deleteAuthorUseCase } from '../delete-author/delete-autor.useCase';
import { searchAuthorUseCase } from '../search-author/search-author.useCase';

authorRoute.post("/Autor/criarAutor", createAuthorController, createAuthorUseCase);
authorRoute.get("/Autor/listarAutores", listAuthorUseCase);
authorRoute.delete("/Autor/deletarAutor/:id", deleteAuthorController, deleteAuthorUseCase);
authorRoute.get("/Autor/pesquisarAutor", searchAuthorUseCase)

module.exports = authorRoute;