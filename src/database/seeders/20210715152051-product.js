'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Products', [
            { name: "AUDI Q5 xx", description: "es un auto nuevo", price: 100, stock: 2, categories_id: 2, id: 1, brands_id: 1, colors_id: 1, Modelos_id: 1 },
            { name: "AUDI Q5", description: "es un auto nuevo", price: 200, stock: 1, categories_id: 2, id: 2, brands_id: 1, colors_id: 1, Modelos_id: 1 },
            { name: "AUDI Q5", description: "es un auto nuevo", price: 200, stock: 1, categories_id: 2, id: 3, brands_id: 1, colors_id: 1, Modelos_id: 1 },
            { name: "AUDI Q5", description: "es un auto nuevo", price: 200, stock: 1, categories_id: 2, id: 4, brands_id: 1, colors_id: 1, Modelos_id: 1 },
            { name: "AUDI Q5", description: "es un auto nuevo", price: 200, stock: 1, categories_id: 2, id: 5, brands_id: 1, colors_id: 1, Modelos_id: 1 },
            { name: "AUDI Q5", description: "es un auto nuevo", price: 200, stock: 1, categories_id: 2, id: 6, brands_id: 1, colors_id: 1, Modelos_id: 1 },
            { name: "AUDI Q5", description: "es un auto nuevo", price: 200, stock: 1, categories_id: 2, id: 7, brands_id: 1, colors_id: 1, Modelos_id: 1 },
            { name: "AUDI Q5", description: "es un auto nuevo", price: 200, stock: 1, categories_id: 2, id: 8, brands_id: 1, colors_id: 1, Modelos_id: 1 },
            { name: "AUDI Q5", description: "es un auto nuevo", price: 200, stock: 1, categories_id: 2, id: 9, brands_id: 1, colors_id: 1, Modelos_id: 1 },
            { name: "AUDI Q5", description: "es un auto nuevo", price: 200, stock: 1, categories_id: 2, id: 10, brands_id: 1, colors_id: 1, Modelos_id: 1 },
        ])
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Products', null, {})
    }
};