//Definamos el Bcrypt.
//const bcryptjs = require('bcryptjs');
// ESTO SERIA EL GESTOR DEL MODELO
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
//const path = require('path');


const apiCategoriesController = {
    'categories': (req, res) => {
        db.Category.findAll() 
            .then(categories => {
                //poner un status(200) es una buena práctica.
                res.status(200).json({
                    meta:{
                        status: 200,
                        total: categories.length,
                        url: "api/categories"

                    },
                    data: categories


            })
            })
        }

    
/*     'detail': (req, res) => {
        db.User.findByPk(req.params.id)
            .then(users => {
                res.status(200).json({
                    meta:{
                        status: 200,
                        total: 1,
                        url: `api/users/${req.params.id}`
                    },
                    data: users
                
            });
    })
 */
}


module.exports = apiCategoriesController;