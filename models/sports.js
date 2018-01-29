const axios = require("axios");
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

// // fetch a single new'ss data from the news API:
// News.oneNews = (req, res, next) => {
//   const name = req.params.title;
//   axios({
//     url: `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=3844e15ac77e47fcb1cdb2e08f435907${title}`,
//     method: "get"
//   })
//     .then(response => {
//       res.locals.newsData = response.data;
//       next();
//     })
//     .catch(err => {
//       console.log("error encountered in News.oneNews. error: ", err);
//     });
// };
module.exports = News;
