const router= require('express').Router();
const controller= require('../Controllers/EmployeeController');
router.get('/employee',controller.getEmployee)
router.post('/employee',controller.addEmployee)
router.get('/employee-detail/:id',controller.getEmployeeDetail)
router.put('/employee/:id',controller.editEmployee)
router.delete('/employee/:id',controller.deleteEmployee)


module.exports= router