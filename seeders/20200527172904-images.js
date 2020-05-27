"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "images",
      [
        {
          title: "why",
          url:
            "https://live.staticflickr.com/7411/10482984273_a428e23b10_n.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "cat",
          url:
            "https://live.staticflickr.com/1723/41961964954_4ea8868289_c.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "sup",
          url: "https://live.staticflickr.com/1355/543343402_73f14632bd.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "brain",
          url: "https://live.staticflickr.com/3695/8888459158_3215797af6_z.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("images", null, {});
  },
};
