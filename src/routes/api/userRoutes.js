//Users de API

const express = require('express');
const router = express.Router();
const path = require('path');

const apiUsersController = require(path.resolve(__dirname,'../../controllers/api/users')) 

//middlewares
const uploadFile = require('../../middlewares/multerUserMiddleware')
const validations = require('../../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../../middlewares/guestMiddleware');
const authMiddleware = require('../../middlewares/authMiddleware');
const loginValidation = require('../../middlewares/validateLoginMiddleware');

/* //Mostrar el register
router.get('/register', guestMiddleware, userController.showRegister);  

//Procesar el registro
router.post('/register', uploadFile.single('avatar'), validations, userController.processRegister);

//formulario de login
router.get('/login', userController.show);

// Procesar el login
router.post('/login', loginValidation, userController.loginProcess); */

// Perfil de Usuario
router.get('/profile/', authMiddleware, apiUsersController.profile);

/* // Logout
router.get('/logout/', userController.logout); */


//router.get('/users/edit/:id', apiUsersController.editUserScreen);


module.exports = router;