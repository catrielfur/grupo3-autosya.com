'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            description: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            price: {
                allowNull: false,
                type: Sequelize.DECIMAL
            },
            stock: {
                allowNull: false,
                type: Sequelize.INTEGER
            },


            categories_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'categories',
                    key: 'id'
                }
            },
            brands_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'brands',
                    key: 'id'
                }
            },
            colors_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'colors',
                    key: 'id'
                }
            },
            Modelos_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Modelos',
                    key: 'id'
                }
            },

        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Products');
    }
};