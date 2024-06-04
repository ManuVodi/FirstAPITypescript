import express from 'express';
const publisherRoute = express.Router();

import { createPublisherController } from '../create-publisher/create-publisher.controller';
import { deletePublisherController } from '../delete-publisher/delete-publisher.controller';

import { createPublisherUseCase } from '../create-publisher/create-publisher.useCase';
import { listPublisherUseCase } from '../list-publisher/list-publisher.useCase';
import { searchPublisherUseCase } from '../search-publisher/search-publisher.useCase';
import { deletePublisherUseCase } from '../delete-publisher/delete-publisher.useCase';

publisherRoute.post("/Editora/criarEditora", createPublisherController, createPublisherUseCase);
publisherRoute.get("/Editora/listarEditoras", listPublisherUseCase);
publisherRoute.get("/Editora/pesquisarEditora", searchPublisherUseCase);
publisherRoute.delete("/Editora/deletarEditora/:id", deletePublisherController, deletePublisherUseCase)

module.exports = publisherRoute;