# Outside the Frame, an [eleventy](https://www.11ty.dev/) based photography portfolio

This is my personal photography portfolio created with Eleventy, a static site generator.

## Features

- Responsive images with the [eleventy-img](https://www.11ty.dev/docs/plugins/image/) plugin. Achieves good lighthouse scores despite large volume of high quality images
- Dark/Light theme based on users pre defined preference on their device
- Automatic page generation. galleries and photo information displayed from imported exif data.
- Will be fully responsive, JavaScript implementation is needed for a hamburger menu (although this is actually possible with a checkbox html element, I decided it would be better to wait until I can update it)
- Utilizes eleventy’s data cascade to enable gallery and pagination features
- Uses [eleventy-metagen ](https://github.com/tannerdolby/eleventy-plugin-metagen)for full meta generation using frontmatter and photo data.

## How to

Just paste your exported exif data for your photographs in json format (preferably pre parsed with [exiftool](https://exiftool.org/) to exclude as much bloat as necessary) in to the gallery.js photoExifData array, and drop the photos into the photos folder. I have currently set up two “tags” or genres, landscape and street, which are extracted from the exif data (tagged in my photo editor) to separate the images into separate galleries. The home page gallery is then generated from another tag applied in my photo editor to mark it as a featured image. All images can and should have alt tags added in the photo editor as well.


## Code style

- BEM css naming, but using some global styles and semantic elements as well.
- CSS properties ordered based on categories/relevance. I used the built in WebStorm recommendations. I am not a fan of alphabetical sorting of properties - but to each their own.

## Sources-

Code was inspired by a number of sources, including the eleventy documentation, mdn documentation and various blog posts with more specific help/tutorials. It was all applied to my own project and often altered significantly to suit my application, although the examples in the eleventy docs were usually very well suited to what I needed to do.

- Eleventy pagination - https://www.11ty.dev/docs/pagination/
- Eleventy image -https://www.11ty.dev/docs/plugins/image/
- [Photo gallery using exif data example](https://darthmall.net/weblog/2024/11ty-photo-gallery/).
  Helped me to see exactly how the image config should be set up. He imports all exif data directly from added images and parses it with a node package. I am doing that as part of my workflow with a script before adding and manually pasting in the json objects. I feel that gives me more control/obfuscates the data a bit less. I have a script already set up to do just this.
- [Evelenty base blog](https://github.com/11ty/eleventy-base-blog). Provided more context for pagination plugin
- [Eleventy data cascade](https://www.11ty.dev/docs/data-cascade/)
  In particular explained how easy it is to iterate over global data (in my case, gallery.js). Both in the context of pagination and the gallery loops.
- [Sticky Footer ](https://css-tricks.com/couple-takes-sticky-footer/)
  I knew I wanted to implement this without any position fixed to allow for changes in content in the future, so the flex stretch /the flex shorthand attribute approach worked well.
- CSS variables/flexbox/grid/semantic styling/resets/normalize/dark theme with variables and more - I took two excellent short css courses a number of years ago that I have made use of extensively. [Modern CSS Layouts](https://levelup.video/tutorials/modern-css-layouts) and [Modern CSS design systems ](https://levelup.video/tutorials/modern-css-design-systems)
- [Luxon date formatter](https://moment.github.io/luxon/api-docs/index.html#datetimetoformat) package. I had significant issues formatting the day
- [eleventy-plugin-metagen](https://github.com/tannerdolby/eleventy-plugin-metagen) Basically used as in the the docs.

## Known issues/future development

- Photos are currently sized to the correct aspect ratio via object-fit contain, which causes letterboxing, hence the photo info often being a little to low down in the relevant container. This is not ideal for the showcase pages in particular. Future fix will be to use height and width properties that eleventy image provides to dynamically set the correct size.
- Not yet fully optimized for mobile, as JavaScript for the hamburger menu was not allowed for this assignment
- A different order of the featured images on the home page for each page load would be a nice touch-again the JavaScript limitation here. 
