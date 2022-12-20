const express = require("express");

const userRouter = require("./userRouter");
const typeRouter = require("./typeRouter");
const brandRouter = require("./brandRouter");
const productRouter = require("./productRouter");

const router = express.Router();

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/product", productRouter);

module.exports = router;
