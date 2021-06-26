const scrape = require('website-scraper'); 
const websiteUrl = 'URL'; 
 
scrape({ 
    urls: [websiteUrl], 
    urlFilter: function (url) { 
        return url.indexOf(websiteUrl) === 0; 
    }, 
    recursive: true, 
    maxDepth: 50, 
    prettifyUrls: true, 
    filenameGenerator: 'bySiteStructure', 
    directory: './node-website' 
}).then((data) => { 
    console.log("Entire website succesfully downloaded"); 
}).catch((err) => { 
    console.log("An error ocurred", err); 
}); 

// But first , do:
// npm install website-scraper

// Create one index.js file and put the below code in it( name can be anything)

//
// const scrape = require('website-scraper'); 
// const websiteUrl = 'https://www.website-name/'; 
 
// scrape({ 
//     urls: [websiteUrl], 
//     urlFilter: function (url) { 
//         return url.indexOf(websiteUrl) === 0; 
//     }, 
//     recursive: true, 
//     maxDepth: 50, 
//     prettifyUrls: true, 
//     filenameGenerator: 'bySiteStructure', 
//     directory: './node-website' 
// }).then((data) => { 
//     console.log("Entire website succesfully downloaded"); 
// }).catch((err) => { 
//     console.log("An error ocurred", err); 
// }); 
//

// And in that directory run
// node index.js 

// This takes some time. So be patient and if everything goes well, you will get a message in your console: