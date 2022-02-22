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
        await queryInterface.bulkInsert('Modelos', [
            { name: "2021", id: 1 },
            { name: "2020", id: 2 },
            { name: "2019", id: 3 },
            { name: "2018", id: 4 },
            { name: "2017", id: 5 },
        ])
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Modelos', null, {})
    }
};