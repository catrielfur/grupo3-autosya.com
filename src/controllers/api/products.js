const { validationResult } = require('express-validator');
const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { log } = require('console');
const { promiseImpl } = require('ejs');
const res = require('express/lib/response');
const Products = db.Products;
const fetch = require('node-fetch');


const apiProductController = {

    'list': (req, res) => {
        db.Product.findAll()  
    .then(products => {
            res.status(200).json({
                meta:{
                    status: 200,
                    total: products.length,
                    url: "api/products"
                },
                data:products
            })
        })
        .catch(error => res.send(error).status(500))
    },
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id)   
    .then(product => {
            res.status(200).json({
                meta:{
                    status: 200,
                    total: 1,
                    url: `api/products/detail/${req.params.id}`
                },
                data:product
            })
        })
        .catch(error => res.send(error).status(500))
    },
    'store': (req, res)=> {
        db.Product
        .create(req.body)
        .then(product => {
            return res.status(201).json({
                /* meta:{
                    status: 201,
                    total: 1,
                    url: 'api/products/store'
                }, */
                data:product,
                status:200,
                created: 'ok'
        })
    })
    .catch(error => res.status(500).json(error))
    },

    delete: (req, res) => {
        db.Product
        .destroy({
            where: {
                id: req.params.id
            }

        })
        .then(response => {
            return res.json(response);
        })
    },

    search: (req, res) => {
        db.Product
        .findAll({
            where: {
                name: { [Op.like]: '%' + req.query.name + '%'}
            }
        })
        .then(products => {
            return res.status(200).json({
                meta: {
                    total:products.length,
                    url: "api/products/search?"
                },
                data: products
            })
        })
    }
}


   /*  'destroy': function(req, res) {
        let productId = req.params.id;
        let productToRespond = db.Product.findByPk(productId)
        .then(product => {
            return product;
        });
        let destroyProduct = Products
        .destroy({where: {id: productId}, force: true})
        promise.all ([productToRespond, destroyProduct])
        .then(([product])=> {
                res.status(200).json({
                    meta:{
                        status: 200,
                        total: 1,
                        url: `api/products/delete/${productId}`
                    },
                    data:product
            })
            })
            .catch(error => res.status(500).json(error)) */
           // include: ['Images']
        

        /* await db.Image.destroy({ where: { product_id: product_id }, force: true });
        await db.Product.destroy({ where: { id: product_id }, force: true });
        return res.redirect('/products') */
    


module.exports = apiProductController;
