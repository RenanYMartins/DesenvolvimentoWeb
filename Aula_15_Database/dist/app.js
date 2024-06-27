"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductRepository_1 = require("./repository/ProductRepository");
const repository = new ProductRepository_1.ProductRepository;
// repository.createTable();
// repository.insertProduct("bolinho", 8.99);
// repository.deleteProduct(1);
repository.updateProduct(3, "batata", 1.99);
