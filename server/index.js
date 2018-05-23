const express = require('express');
const bodyParser = require('body-parser')
const ctrl = require('./controllers/users')

const app = express();

const port = 3005;

app.use(bodyParser.json())

app.get(`/api/users`, ctrl.read)
app.post(`/api/users`, ctrl.create)
app.delete(`/api/users/:id`, ctrl.delete)

app.listen(3005, () => {
    console.log('Ay this is port' + port)
})