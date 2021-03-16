const router = require("express").Router();
const postRoutes = require("./posts");

// Post routes
router.use("/posts", postRoutes);

module.exports = router;
