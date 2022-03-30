const { validationResult } = require('express-validator');
const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { log } = require('console');


const apiProductController = {

    products: function (req, res) {
        db.products.findAll()
        .product(
            {
                ...req.body
            }
        )
    .then(product => {
            res.status(200).json({
                meta:{
                    status: 200,
                    total: products.length,
                    url: "api/products"
                },
                data:product
            })
        })
        .catch(error => res.send(error).status(500))
    }
}

/* let apiProductController = {

    products: function (req, res) {
        db.products.findAll()
    .then(product => {
            res.status(200).json({
                meta:{
                    status: 200,
                    total: products.length,
                    url: "api/products"
                },
                data:product
            })
        })
    }
} */



module.exports = apiProductController;




/*         product = function (req, res) {
            Products
        .products(
            {
            id: req.params.id,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            }
        )
        .then((product)=> {
                res.status(201).json({
                    meta:{
                        status: 201,
                        total: 1,
                        url: "api/products"
                    },
                    data: product
                })
            }
        );
   
        return res.json({ product });

    } .catch (error=> res.send(error);

    }
}, */
