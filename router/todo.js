const express = require('express')
const router = express.Router();

const { isAuthenticated } = require('../controllers/auth')
const { getTodoAll } = require('../mongodb/db')
const { addTodoUser, deleteTodoUser, editTodoUser } = require('../controllers/user')

router.get('/', isAuthenticated, async(req, res) => {
    let db = await getTodoAll(req.user.id)
    if (db) {
        res.render('todo/index', {
            todos: db
        })
    } else {
        res.send('Internal Server Error')
    } 
})
router.post('/', isAuthenticated, addTodoUser)

router.get('/add', isAuthenticated, (req,res) => {
    res.render('todo/add'); 
});

router.post('/delete', isAuthenticated, deleteTodoUser)

router.get('/edit/:id', isAuthenticated, (req,res) => {
    res.render('todo/edit', {
        _id: req.params.id
    }); 
});

router.post('/edit', isAuthenticated, editTodoUser)

module.exports = router