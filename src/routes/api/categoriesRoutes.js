const express = require('express');
const router = express.Router();
const path = require('path');

const apiCategoriesController = require(path.resolve(__dirname,'../../controllers/api/categories'));
// Traigo el Middleware de multer
//const upload = require('../middlewares/multerProductsMiddleware')

//const upload = require(path.resolve(__dirname,'../../middlewares/multerProductsMiddleware'))

//const validationProduct = require('../../middlewares/validateProductMiddleware')


router.get('/', apiCategoriesController.categories);
/* router.get('/detail/:id', apiProductController.detail);
router.get('/search', apiProductController.search);
router.post('/', apiProductController.store); 
router.delete('/delete/:id', apiProductController.delete); */


module.exports = router;