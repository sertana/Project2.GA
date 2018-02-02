const express = require("express");
const router = express();
const News = require("../models/sports.js");
var moment = require("moment");

router.get("/", News.allNews, (req, res) => {
  var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  res.render("allnews", {
    allNewsData: res.locals.allNewsData.articles,
    time: currentTime
  });
});
//this part of the code was written with the help of tims gardner
router.get("/saved", News.allMyNews, (req, res) => {
  console.log("in GET at allnews/saved. res.locals:", res.locals);
  res.locals.allMyNewsData.forEach(articleData => {
    if (articleData.read) {
      articleData.checkboxHtml = "checked";
    }
  });
  res.render("mylist", {
    allMyNewsData: res.locals.allMyNewsData
  });
});

router.post("/", News.saveNews, (req, res) => {
  res.json({ id: res.locals.newsId });
});

router.delete("/saved/:id", News.deleteNews, (req, res) => {
  res.json({ id: req.params.id });
});

router.put("/saved/:id", News.updateNews, (req, res) => {
  res.json(res.locals.updateNews);
});

module.exports = router;
