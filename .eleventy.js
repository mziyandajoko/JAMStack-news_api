module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughConfig = ('./src/style.css');
    return {
        dir:{
            input: "src",
            output: "public"
        },
    };
}