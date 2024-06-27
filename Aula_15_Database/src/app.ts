import { ProductRepository } from "./repository/ProductRepository";

const repository : ProductRepository = new ProductRepository;

// repository.createTable();
// repository.insertProduct("bolinho", 8.99);
// repository.deleteProduct(1);
repository.updateProduct(3, "batata", 1.99);