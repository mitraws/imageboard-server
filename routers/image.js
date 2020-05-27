const { Router } = require("express");
const Image = require("../models").image;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const image = await Image.findAll();
    res.send(image);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const image = await Image.create(req.body);
    res.json(image);
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
    try {
      const image = await Image.findOne();
      res.send(image);
    } catch (e) {
      next(e);
    }
  });

  router.get("/", (req, res, next) => {
    const limit = Math.min(req.query.limit || 25, 500);
    const offset = req.query.offset || 0;
  
    Image.findAndCountAll({ limit, offset })
      .then((result) => res.send({ images: result.rows, total: result.count }))
      .catch((error) => next(error));
  });

module.exports = router;
