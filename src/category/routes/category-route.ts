import express from 'express';
const routerCategory = express.Router();

import { createCategoryController } from '../create-category/create-category.controller';
import { deleteCategoryController } from '../delete-category/delete-category.controller';
import { updateCategoryController } from '../update-category/update-category.controller';

import { createCategoryUseCase } from '../create-category/create-category.useCase';
import { listCatagoriesUseCase } from '../list-category/list-categories.useCase';
import { searchCategoryUseCase } from '../search-category/search-category.useCase';
import { deleteCategoryUseCase } from '../delete-category/delete-category.useCase';
import { updateCategoryUseCase } from '../update-category/update-category.useCase';

routerCategory.post("/Categoria/criarCategoria", createCategoryController, createCategoryUseCase);
routerCategory.get("/Categoria/listarCategorias", listCatagoriesUseCase);
routerCategory.get("/Categoria/pesquisarCategoria", searchCategoryUseCase);
routerCategory.delete("/Categoria/deletarCategoria/:id", deleteCategoryController, deleteCategoryUseCase);
routerCategory.put("/Categoria/atualizarCategoria/:id", updateCategoryController, updateCategoryUseCase);

module.exports = routerCategory;
