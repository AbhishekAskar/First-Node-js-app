const express = require('express');

const router = express.Router();

router.get('/shop', (req, res, next) => {
    res.send("<h1>This is shop route</h1>")
});

router.get('/',(req, res, next) => {
    res.send("<h1>Hello from Express</h1>")
});

module.exports = router;