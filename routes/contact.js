//require express
const express = require ('express')
//routes
const router = express.Router()
const Contact = require ('../models/Contact')
const controllers = require('../controllers/contact.controllers')

// *** routes***

router.post('/', controllers.postContact) 
router.get('/', controllers.getAllContacts) 
router.get('/:id', controllers.getOneContact)
router.delete('/:id', controllers.DeleteOneContact)
router.put('/:id', controllers.UpdateOneContact)



module.exports = router