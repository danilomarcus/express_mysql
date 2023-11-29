const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'sistema'
})

function connected() {
    connection.connect((err) => {
        if (err) throw err;
        console.log('connected as id ' + connection.threadId);
    });
}

function select(attributes, table, id) {
    return new Promise((resolve, reject) => {

        let sql = `SELECT ${attributes} FROM ${table}`;
        if(id != null) {
            sql = `${sql} WHERE id = ${id} `;
        }
        let query = connection.query(sql, (error, result, fields) => {
            if(error) return reject(error);
            resolve(Object.values(JSON.parse(JSON.stringify(result))));
        });
    });
}

async function doQuery(attributes, table, id) {
    try {
        return await select(attributes, table, id);        
    } catch (error) {
        return error 
    }
}

module.exports = {connection, connected, doQuery};