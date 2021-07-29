const express = require('express')
const router = express.Router();
const passport = require('passport');

const { registerUser, deleteUserAccount } = require('../controllers/user')
const { notAuthenticated } = require('../controllers/auth')

router.get('/register', notAuthenticated, (req, res) => {
    res.render('register');
});
router.post('/register', registerUser)

router.get('/login', notAuthenticated, (req, res) => {
    res.render('login')
})
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/todo',
        failureRedirect: '/users/login',
        failureFlash: true,
        passReqToCallback: true // failureFlash: true
    })(req, res, next);
});

router.get('/logout', (req,res) => {
    req.logout();
    res.redirect('/users/login');
});

router.get('/delete', (req, res) => {
    res.render('delete')
})
router.post('/delete', deleteUserAccount)

module.exports = router