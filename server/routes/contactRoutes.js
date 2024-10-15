/* contactRoutes.js, Ligeng Cai, 301286463, 10/13/2024 */
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/', contactController.getAllContacts);            // GET all contacts
router.get('/:id', contactController.getContactById);         // GET a contact by ID
router.post('/', contactController.addContact);               // POST a new contact
router.put('/:id', contactController.updateContact);          // PUT to update a contact by ID
router.delete('/:id', contactController.deleteContact);       // DELETE a contact by ID

module.exports = router;
