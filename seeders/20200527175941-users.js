'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
return queryInterface.bulkInsert(
  "users",
  [
    {
      email: "mit@me.com",
      password: "mit",
      fullName: "mit",
      createdAt: new Date(),
      updatedAt: new Date(),
    },        
    {
      email: "mut@me.com",
      password: "mut",
      fullName: "mut",
      createdAt: new Date(),
      updatedAt: new Date(),
    },   
    {
      email: "mat@me.com",
      password: "mat",
      fullName: "mat",
      createdAt: new Date(),
      updatedAt: new Date(),
    },   
    {
      email: "met@me.com",
      password: "met",
      fullName: "met",
      createdAt: new Date(),
      updatedAt: new Date(),
    },  
  ],
  {}
)
  },

  down: (queryInterface, Sequelize) => {
return queryInterface.bulkDetele("users", null, {})
  }
};
