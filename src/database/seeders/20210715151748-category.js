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
        await queryInterface.bulkInsert('Categories', [
            { name: "Camionetas", id: 1 },
            { name: "Descapotables", id: 2 },
            { name: "Compactos", id: 3 },
            { name: "SubCompactos", id: 4 },
            { name: "Deportivos", id: 5 },
            { name: "Urbanos", id: 6 }
        ])
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Categories', null, {})
    }
};