// Calling the required libraries
const request = require("request-promise");
const cheerio = require("cheerio");

// Making a request using the library installed
request("https://www.bullion-rates.com/gold/INR/2007-1-history.htm", (
    error, response, html) => {
        // Checking to make sure an error isn't apparent
        if(!error && response.statusCode==200) {
            const $ = cheerio.load(html);
        }
    })