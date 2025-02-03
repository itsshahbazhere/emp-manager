const express = require('express');
const router = express.Router();

const { createEmployee } = require('../controller/createEmployee');
const { getEmployee } = require('../controller/getAllEmployee');
const { deleteEmployee } = require('../controller/deleteController')
const { updateEmployee } = require('../controller/updateContoller')

router.post('/createEmployee',createEmployee);
router.get('/getEmployee',getEmployee);
router.delete('/deleteEmployee/:id', deleteEmployee);
router.put('/updateEmployee/:id', updateEmployee);

module.exports = router;