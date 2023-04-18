(async()=>{
    const db = require ("./db");
    console.log("Começou");

    console.log('Criar');
    const result = await db.insertCustomer({nome:"Yasmin", idade: 18, uf:"SP"});
    console.log(result);

    console.log('Ler');
    const clientes = await db.selectCustomers();
    console.log(clientes);

    console.log('Atualizar');
    const result2 = await db.updateCustomer(6, {nome:'Joao', idade: 19 , uf:"RJ"});
    console.log(result2);

    console.log('Deletar');
    const result3 = await db.deleteCustomer(7);
    console.log(result3);

})();

    