

// const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const Image = require("@11ty/eleventy-img");
const metagen = require("eleventy-plugin-metagen");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/css");
  // eleventyConfig.addPassthroughCopy("./src/images");

  eleventyConfig.addPlugin(metagen);

  eleventyConfig.addShortcode("img", async function ({ src, alt, widths, className, imgDir, sizes = "100vw" }) {
    if (alt === undefined) {
      throw new Error(`Missing \`alt\` on responsive image from: ${src}`);
    }
    
    const IMAGE_DIR = imgDir || "./src/photos/";
    const metadata = await Image(IMAGE_DIR + src, {
      widths: widths || [640, 1024 , 1920, "auto"],
      formats: ["webp", "jpeg"],
      urlPath: "/img/",
      outputDir: "_site/img",
      // filenameFormat: function (src, width) {
      //   const extension = path.extname(src);
      //   const name = path.basename(src, extension);
    
      //   return `${name}-${width}w.${format}`;
      // },
      defaultAttributes: {
        loading: "lazy",
        decoding: "async"
      }
      
    });


    let imageAttributes = {
			alt,
			sizes,
			loading: "lazy",
			decoding: "async",
      class: className || '',
		};

    
    return Image.generateHTML(metadata, imageAttributes);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      layouts: "_includes/layouts",
      includes: "_includes",
    },
    templateFormats: ["md", "liquid", "njk"],
    passthroughFileCopy: true
  }

  // Previous standard attempts

  // eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
  //   outputDir: "./_site/img/",
  // 	// which file extensions to process
  // 	extensions: "html",

  // 	// Add any other Image utility options here:

  // 	// optional, output image formats
  // 	// formats: ["webp"],
  // 	formats: ["auto"],

  // 	// optional, output image widths
  // 	widths: ["auto"],

  // 	// optional, attributes assigned on <img> override these values.
  // 	defaultAttributes: {
  // 		loading: "lazy",
  // 		decoding: "async"
  // 	}
  // });
  // eleventyConfig.addShortcode("image", async function(src, alt, sizes) {
  // 	let metadata = await Image(src, {
  // 		widths: [300, 600],
  // 		formats: ["avif", "jpeg"]
  // 	});

  // 	let imageAttributes = {
  // 		alt,
  // 		sizes,
  // 		loading: "lazy",
  // 		decoding: "async",
  // 	};

  // 	// You bet we throw an error on a missing alt (alt="" works okay)
  // 	return Image.generateHTML(metadata, imageAttributes);
  // });


};
