const express = require('express')
const { doQuery } = require('./db')
const app = express()
const port = 3000

app.set('view engine', 'pug');

// select something
app.get('/', (req, res) => {
    res.render('index', {
        message: 
                `
                Hello from Express && MySQL || MariaDB
                Use this URLs:
                /users
                /users/<id>
                /books
                /books/<id>
            `
    });
})

// select all users
app.get('/users', async (req, res) => {
    const result = await doQuery('id,username,firstname,lastname','users');
    res.render('index', {
        message: 'Users',
        data: result
    })
})
// select a user by id
app.get('/users/:id', async (req, res) => {
    const result = await doQuery('id,username,firstname,lastname','users',(req.params.id ?? 0));
    res.send({
        data: result
    })
})
// select all books
app.get('/books', async (req, res) => {
    const result = await doQuery('id,name','books');
    res.render('index', {
        message: 'Books',
        data: result
    })
})
// select a book by id
app.get('/books/:id', async (req, res) => {
    const result = await doQuery('id,name','books',(req.params.id ?? 0));
    res.send({
        data: result
    })
})

// connection.end()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
