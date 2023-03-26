var request = require("request");
var cheerio = require("cheerio");


function handleRequestData(err, htmlCode) {
    if (err) {
        console.log("Error in request");
    }

    var $ = cheerio.load(htmlCode.body); // Dom Tree using html code

    var repositories = [];
    var repos = $(".Box-row").map((i, el) => {

        const title = $(el).find('.lh-condensed > a').text().trim();
        const desc = $(el).find('.col-9').text().trim();
        const url = $(el).find('.lh-condensed > a').text().trim();
        const starlen = $(el).find('a.Link--muted').text().trim().split('\n');
        const stars = $(el).find('a.Link--muted').text().trim().split('\n')[0];
        const forks = $(el).find('a.Link--muted').text().trim().split('\n')[starlen.length - 1].trim();
        const language = $(el).find('.repo-language-color + span ').text();

        // Push the data into the items array
        repositories.push({
            title,
            desc,
            url,
            stars,
            forks,
            language
        });

        console.log(repositories);
    });
}


function handleRequestData1(err, htmlCode) {
    if (err) {
        console.log("Error in request");
    }

    var $ = cheerio.load(htmlCode.body); // Dom Tree using html code

    var developers = [];
    var repos1 = $(".Box-row").map((i, el) => {

        const developername = $(el).find('.h3.lh-condensed > a').text().trim();
        const username = $(el).find('.f4.text-normal.mb-1').text().trim();
        const reponame = $(el).find('.h4.lh-condensed > a').text().trim();
        const description = $(el).find('.f6.color-fg-muted.mt-1').text().trim();


        // Push the data into the items array
        developers.push({
            developername,
            username,
            reponame,
            description
        });

          console.log(developers);

    });
}



request("https://github.com/trending", handleRequestData);
request("https://github.com/trending/developers", handleRequestData1);


