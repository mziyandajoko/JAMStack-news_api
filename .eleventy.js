const {DateTime} = require("luxon");

module.exports = function(eleventyConfig) {
    // format date
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
      });

    eleventyConfig.addPassthroughCopy("./src/css/*.css");
    return {
        dir:{
            input: "src",
            output: "public",
        },
    };
}