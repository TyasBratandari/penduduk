'use strict'

const express = require('express')
const pendudukController = require('../controllers/penduduk.controllers')
const router = new express.Router();

router.get("/index", pendudukController.index )
router.post("/add", pendudukController.add)
router.delete("/delete", pendudukController.delete)


module.exports = router