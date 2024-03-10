const Image = require('@11ty/eleventy-img')
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')
const metagen = require('eleventy-plugin-metagen');
module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/css')
  eleventyConfig.addPassthroughCopy( "./src/favicon");
  eleventyConfig.addPassthroughCopy( "./src/images");

  eleventyConfig.addPlugin(eleventyNavigationPlugin)
  eleventyConfig.addPlugin(metagen);
  // Config for image component. See docs for img plug in - very similar to this.
  eleventyConfig.addShortcode('img', async function ({ src, alt, widths, className, imgDir, sizes = '100vw' }) {
    if (alt === undefined) {
      throw new Error(`Missing \`alt\` on responsive image from: ${src}`)
    }

    const IMAGE_DIR = imgDir || 'src/photos/'
    const metadata = await Image(IMAGE_DIR + src, {
      widths: widths || [640, 1920, 'auto'],
      formats: ['webp', 'jpeg'],
      urlPath: '/img/',
      outputDir: '_site/img',

      defaultAttributes: {
        loading: 'lazy',
        decoding: 'async'
      }
    })

    let imageAttributes = {
      alt,
      sizes,
      loading: 'lazy',
      decoding: 'async',
      class: className || '',
    }

    return Image.generateHTML(metadata, imageAttributes)
  })

  return {
    dir: {
      input: 'src',
      output: '_site',
      layouts: '_includes/layouts',
      includes: '_includes',
    },
    templateFormats: ['md', 'liquid', 'njk'],
    passthroughFileCopy: true
  }

}
