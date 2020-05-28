const { Router } = require("express");
const Image = require("../models").image;
const router = new Router();
const { toJWT, toData } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware")

router.get("/", authMiddleware,  async (req, res, next) => {
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


  router.get("/auth/messy", async (req, res, next) => {
    const auth = req.headers.authorization && req.headers.authorization.split(" ");
    if (auth && auth[0] === "Bearer" && auth[1]) {
      try {
        const data = toData(auth[1]);
      } catch (e) {
        res.status(400).send("Invalid JWT token");
      }
      const allImages = await Image.findAll();
      res.json(allImages);
    } else {
      res.status(401).send({
        message: "Please supply some valid credentials",
      });
    }
  });

module.exports = router;
