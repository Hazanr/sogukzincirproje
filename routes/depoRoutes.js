const express = require('express');
const router = express.Router();
const depoController = require('../controllers/depoController');

router.get('/depolar', depoController.getDepolar);
router.post('/stok-guncelle', depoController.updateStok);

module.exports = router;