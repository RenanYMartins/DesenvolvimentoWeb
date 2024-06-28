import { ProductRepository } from "./repository/ProductRepository";
import { tableExist } from "./database/mysql";

const repository: ProductRepository = new ProductRepository();

repository.createTable();
// repository.insertProduct("bolinho", 15.30);





// async function delay(ms: number): Promise<void> {
//     return new Promise<void>(
//         (resolve, reject) => {
//             setTimeout(() => {
//                 if (ms > 2000) {
//                     console.log("Operação concluída após " + ms / 1000 + " segundos.");
//                     resolve();
//                 } else {
//                     console.log("Tempo insuficiente para concluir a operação.");
//                     reject();
//                 }
//             }, ms)
//         })
// }

// async function test() {
//     try {
//         console.log("Antes da execução do delay....");
//         await delay(3000);
//     } catch(err) {
//         console.log("Ocorreu um erro: ", err);
//     } finally {
//         console.log("Depois da execução do delay....");
//     }
// }

// test();