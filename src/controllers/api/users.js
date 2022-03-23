//Definamos el Bcrypt.
const bcryptjs = require('bcryptjs');
// ESTO SERIA EL GESTOR DEL MODELO
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const path = require('path');



//Traigo el validator desde el middleware
const {
	validationResult
} = require('express-validator');



const apiUsersController = {
    'profile': (req, res) => {
        db.User.findAll()  
            .then(users => {
                //poner un status(200) es una buena práctica.
                res.status(200).json({
                    meta:{
                        status: 200,
                        total: users.length,
                        url: "api/users"


                    },
                    data: users


            })
            })
        },

    
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.status(200).json({
                    meta:{
                        status: 200,
                        total: 1,
                        url: `api/genres/detail/${req.params.id}`
                    },
                    data:genre
                
            });
    })

}
}


module.exports = apiUsersController;