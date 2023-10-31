const express = require('express')
const router = express.Router()
const {
    AddBook,
    ViewBooks,
    GetABook,
    UpdateABook,
    DeleteABook
} = require('./methods')

//All of our routes
router.get('/book', ViewBooks)
router.post('/book', AddBook)
router.get('/book/:id', GetABook)
router.put('/book/:id', UpdateABook)
router.delete('/book/:id', DeleteABook)

module.exports = router