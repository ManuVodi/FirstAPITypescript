import express from 'express'
const bookRoute = express.Router()

import { createBookController } from '../create-book/create-book.controller'

import { createBookUseCase } from '../create-book/create-book.useCase'
import { listBooksUseCase } from '../list-books/list-books.useCase';

bookRoute.post("/Livro/criarLivro", createBookController, createBookUseCase);
bookRoute.get("/Livro/listarLivros", listBooksUseCase);

module.exports = bookRoute