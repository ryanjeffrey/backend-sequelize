'use strict';

// const db = require('../models');
module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    // await db.Genre.bulkCreate();
    await queryInterface.bulkInsert('Genres', [
      {
        name: 'Action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Adventure',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Romance',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Horror',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Thriller',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sci-fi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Comedy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Drama',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
