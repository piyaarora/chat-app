const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server is running up ');
});

module.exports = router;