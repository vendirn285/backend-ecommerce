'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'product_galleries',
      [
        {
          product_id: '1',
          photo_url: 'https://i.ibb.co/qWMcWvT/product-1.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: '1',
          photo_url: 'https://i.ibb.co/WD2q0HT/product-1b.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: '1',
          photo_url: 'https://i.ibb.co/194HFSN/product-1c.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: '2',
          photo_url: 'https://i.ibb.co/W0wwzQ3/product2a.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: '2',
          photo_url: 'https://i.ibb.co/G92HscM/product2b.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: '2',
          photo_url: 'https://i.ibb.co/xCQx1QW/product2c.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: '3',
          photo_url: 'https://i.ibb.co/mcjpQKT/product3a.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: '3',
          photo_url: 'https://i.ibb.co/qrsLM9x/product3b.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          product_id: '3',
          photo_url: 'https://i.ibb.co/9Gyzc68/product3c.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product_galleries', null, {})
  },
}
