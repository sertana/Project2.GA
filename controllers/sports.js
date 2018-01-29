const express = require("express");
const router = express();
const News = require("../models/sports.js");

router.get("/", News.allNews, (req, res) => {
  res.render("allnews", { allNewsData: res.locals.allNewsData.articles });
});

module.exports = router;
