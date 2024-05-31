import express from 'express';
const authorRoute = express.Router();

import { createAuthorController } from '../create-author/create-author.controller';

import { createAuthorUseCase } from '../create-author/create-author.useCase';
import { listAuthorUseCase } from '../list-authors/listAuthor.useCase';
import { deleteAuthorController } from '../delete-author/delete-author.controller';
import { deleteAuthorUseCase } from '../delete-author/delete-autor.useCase';

authorRoute.post("/Autor/criarAutor", createAuthorController, createAuthorUseCase);
authorRoute.get("/Autor/listarAutores", listAuthorUseCase);
authorRoute.delete("/Autor/deletarAutor/:id", deleteAuthorController, deleteAuthorUseCase);

module.exports = authorRoute;