import express from 'express'
const bookRoute = express.Router()

import { createBookController } from '../create-book/create-book.controller'
import { updateBookController } from '../update-book/update-book.controller';

import { createBookUseCase } from '../create-book/create-book.useCase'
import { listBooksUseCase } from '../list-books/list-books.useCase';
import { updateBookUseCase } from '../update-book/update-book.useCase';
import { searchBookUseCase } from '../search-book/search-book.useCase';

bookRoute.post("/Livro/criarLivro", createBookController, createBookUseCase);
bookRoute.get("/Livro/listarLivros", listBooksUseCase);
bookRoute.patch("/Livro/atualizarLivro/:id", updateBookController, updateBookUseCase);
bookRoute.get("/Livro/pesquisarLivros", searchBookUseCase)

module.exports = bookRoute