const mysql = require("mysql2/prmise");
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

const connect = await mysql.createConnection({
    host:'localhost',
    port: 3000,
    user:'root',
    password:'fatec',
    database:'crud'
});

console.log('Conectado');
global.connection = connection;
return global.connection;
}

async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('select');
    return rows;
}
async function selectCustomers(){
    const conn = await connect();
    const sql ='Criar';
    const values = [cliente.nome, cliente.idade, cliente.uf];
    return await conn.query(sql,values);
}