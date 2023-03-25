var request = require("request");
var cheerio = require("cheerio");

function cheerioFetch() {
    function handleRequestData(err, htmlCode) {
      if (err) {
        console.log("Error in request");
      }

      // You need to load the html file in cheerio

      // Juery
      var dom = cheerio.load(htmlCode.body); // Dom Tree using html code

      var popular_repo = [];
      var repos = dom(".repo").text(); // 6 elements
      console.log(repos);

      var followerCount = dom(
        "a[href = 'https://github.com/Anshu-rai89?tab=followers']"
      ).find('.text-bold').text();
      console.log(followerCount);

      var name = dom(".p-name").text().trim();
      console.log(name);

      var title = dom(".p-note").text().trim();
      console.log(title);
    }

    request("https://github.com/Anshu-rai89", handleRequestData);
}

