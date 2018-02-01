const axios = require("axios");
const db = require("../db/index.js");
const News = {};

// fetch all the sports data from the news API:
News.allNews = (req, res, next) => {
  axios({
    url:
      "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=3844e15ac77e47fcb1cdb2e08f435907",
    method: "get"
  })
    .then(response => {
      // store the data we got back from the
      // server in res.locals, and then
      // call next()
      res.locals.allNewsData = response.data;
      next();
    })
    .catch(err => {
      console.log("error encountered in News.allnews. error: ", err);
    });
};

News.allMyNews = (req, res, next) => {
  // const url = req.params.url;
  db
    .manyOrNone("SELECT * FROM News;")
    .then(data => {
      res.locals.allMyNewsData = data;
      next();
    })
    .catch(error => {
      console.log("error encountered in News.allMyNews. Error:", error);
      next(error);
    });
};

News.deleteNews = (req, res, next) => {
  db
    .none("DELETE FROM News WHERE id= $1;", [req.params.id])
    .then(() => {
      next();
    })
    .catch(error => {
      console.log("error encountered in News.deleteNews. Error:", error);
      next(error);
    });
};

News.updateNews = (req, res, next) => {
  console.log("in News.updateNews. req.body:", req.body);
  const read = req.body.checked === "true"; // converts from string to boolean
  const id = req.params.id;
  db
    .one("UPDATE News SET read=$1 WHERE id = $2 RETURNING read;", [read, id])
    .then(result => {
      res.locals.updateNews = result;
      next();
    })
    .catch(err => {
      console.log("Error encountered in News.updateNews.error:", err);
      next(err);
    });
};

News.saveNews = (req, res, next) => {
  console.log(req.body);
  // res.json(req.body);
  db
    .one("INSERT INTO News(url,title,read) VALUES($1,$2,$3) RETURNING id;", [
      req.body.url,
      req.body.title,
      false
    ])
    .then(result => {
      res.locals.newsId = result.id;
      next();
    })
    .catch(err => {
      console.log("Error encountered in News.saveNews.error:", err);
      next(err);
    });
};
module.exports = News;
