const express = require("express");
const router = express.Router();
const classLogic = require("../BL/classLogic");

router.get("/getclasses", async (req, res) => {
  const classes = await classLogic.getAllClassForTeacher();
  res.send(classes);
});
