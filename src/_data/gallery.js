const { DateTime } = require("luxon");

// photo data, copied from exif tool command on batch of photos extracting details. fold in the json to see end of file for parsing function
const photoExifData = [
  {
    "SourceFile": "about-to-cross-a-line.jpg",
    "Title": "About to Cross a Line",
    "ImageDescription": "Hong Kong",
    "CreateDate": "2013:03:28 07:06:37",
    "AltTextAccessibility": "Woman waiting to cross tram line",
    "Subject": [
      "hong kong",
      "portfolio",
      "portfolio-feature",
      "street",
      "voyager"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 400,
    "Aperture": 4.0,
    "ShutterSpeedValue": "1/210",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "alone.jpg",
    "Title": "Alone",
    "ImageDescription": "Positano, Amalfi Coast, Italy",
    "CreateDate": "2023:04:21 21:09:50",
    "AltTextAccessibility": "Dog sitting alone in an alleyway",
    "Subject": [
      "portfolio",
      "street",
      "portfolio-feature"
    ],
    "FocalLength": "9.0 mm",
    "ISO": 2000,
    "Aperture": 2.8,
    "ShutterSpeedValue": "1/20",
    "Make": "Apple",
    "Model": "iPhone 14 Pro",
    "Lens": "iPhone 14 Pro back triple camera 6.86mm f/1.78"
  },
  {
    "SourceFile": "bird-in-flight.jpg",
    "Title": "Bird In Flight",
    "ImageDescription": "Duncannonn Beach, Wexford, Ireland",
    "CreateDate": "2023:02:24 15:10:42",
    "AltTextAccessibility": "silhouetted bird in flight over water, framed by clouds",
    "Subject": [
      "landscape",
      "portfolio"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 200,
    "Aperture": 8.0,
    "ShutterSpeedValue": "1/4000",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "business-as-usual.jpg",
    "Title": "Business As Usual",
    "ImageDescription": "Hong Kong",
    "CreateDate": "2013:03:28 07:24:33",
    "AltTextAccessibility": "Buildings",
    "Subject": [
      "hong kong",
      "portfolio",
      "portfolio-feature",
      "street",
      "voyager"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 400,
    "Aperture": 5.0,
    "ShutterSpeedValue": "1/320",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "castlegregory.jpg",
    "Title": "Castlegregory",
    "ImageDescription": "Mt. Brandon, Kerry, Ireland",
    "CreateDate": "2017:05:08 14:13:28",
    "AltTextAccessibility": "Panorama",
    "Subject": [
      "landscape",
      "portfolio"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 200,
    "Aperture": 16.0,
    "ShutterSpeedValue": "1/60",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "ghosts-of-charlie.jpg",
    "Title": "Ghosts of Charlie",
    "ImageDescription": "Paris",
    "CreateDate": "2015:02:16 16:36:18",
    "AltTextAccessibility": "Blurry Skaters in front of Charlie Hebdo banner",
    "Subject": [
      "portfolio",
      "street"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 1000,
    "Aperture": 16.0,
    "ShutterSpeedValue": "1/4",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "checking-me-out.jpg",
    "Title": "Checking Me Out",
    "ImageDescription": "Hiking Mt Brandon",
    "CreateDate": "2017:05:08 11:56:26",
    "AltTextAccessibility": "Sheep looking at camera",
    "Subject": [
      "Brandon",
      "Hiking",
      "landscape",
      "portfolio",
      "portfolio-feature"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 200,
    "Aperture": 16.0,
    "ShutterSpeedValue": "1/110",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "cloud-mountain.jpg",
    "Title": "Cloud Mountain",
    "ImageDescription": "Positano, Amalfi Coast, Italy",
    "CreateDate": "2023:04:22 09:43:31",
    "AltTextAccessibility": "Mountain with similar shaped cloud mirrored",
    "Subject": [
      "Italy Holidays Positano",
      "landscape",
      "portfolio"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 200,
    "Aperture": 9.0,
    "ShutterSpeedValue": "1/550",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "cloud-top.jpg",
    "Title": "Cloud Top",
    "ImageDescription": "Path of the Gods, Amalfi, Italy",
    "CreateDate": "2023:04:23 11:57:12",
    "AltTextAccessibility": "High on mountain looking down to another wrapped in cloud",
    "Subject": [
      "landscape",
      "portfolio"
    ],
    "FocalLength": "6.9 mm",
    "ISO": 100,
    "Aperture": 1.8,
    "ShutterSpeedValue": "1/12000",
    "Make": "Apple",
    "Model": "iPhone 14 Pro",
    "Lens": "iPhone 14 Pro back triple camera 6.86mm f/1.78"
  },
  {
    "SourceFile": "crossing-wakes.jpg",
    "Title": "Crossing Wakes",
    "ImageDescription": "Santorini",
    "CreateDate": "2018:06:27 14:08:24",
    "AltTextAccessibility": "Crossing Wakes",
    "Subject": [
      "landscape",
      "portfolio"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 400,
    "Aperture": 16.0,
    "ShutterSpeedValue": "1/300",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "cruise-lines.jpg",
    "Title": "Cruise Lines",
    "ImageDescription": "Norway",
    "CreateDate": "2013:05:06 13:08:05",
    "AltTextAccessibility": "Rocky beach leading to cruise ship, with frozen waterfall spiral up in the background",
    "Subject": [
      "Fjord",
      "Flam",
      "Hiking",
      "Norway",
      "landscape",
      "mountains",
      "portfolio",
      "vision"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 400,
    "Aperture": 6.4,
    "ShutterSpeedValue": "1/450",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "fjord-bliss.jpg",
    "Title": "Fjord Bliss",
    "ImageDescription": "Flam, Norway",
    "CreateDate": "2013:05:06 12:56:34",
    "AltTextAccessibility": "Fjord with mountains in background",
    "Subject": [
      "Fjord",
      "Flam",
      "Hiking",
      "Norway",
      "landscape",
      "mountains",
      "portfolio",
      "vision"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 400,
    "Aperture": 9.0,
    "ShutterSpeedValue": "1/500",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "glass-water-and-mountain-falls.jpg",
    "Title": "Glass Water and Mountain Falls",
    "ImageDescription": "Flam, Norway",
    "CreateDate": "2013:05:06 12:52:10",
    "AltTextAccessibility": "Glass Water and Mountain Falls",
    "Subject": [
      "Fjord",
      "Flam",
      "Hiking",
      "Norway",
      "landscape",
      "mountains",
      "portfolio",
      "vision"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 400,
    "Aperture": 6.4,
    "ShutterSpeedValue": "1/350",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "guard-duty.jpg",
    "Title": "Guard Duty",
    "ImageDescription": "Paris",
    "CreateDate": "2015:02:18 17:19:33",
    "AltTextAccessibility": "Small dog on base of large pillar",
    "Subject": [
      "portfolio",
      "street"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 800,
    "Aperture": 2.0,
    "ShutterSpeedValue": "1/100",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "happy-donkey.jpg",
    "Title": "Happy Donkey",
    "ImageDescription": "Cleggan, Co Galway, Ireland",
    "CreateDate": "2015:06:11 09:16:17",
    "AltTextAccessibility": "Photo of happy donkey",
    "Subject": [
      "landscape",
      "portfolio"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 800,
    "Aperture": 2.8,
    "ShutterSpeedValue": "1/680",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "hoth.jpg",
    "Title": "Hoth",
    "ImageDescription": "Mt. Leinster. Carlow/Wexford, Ireland",
    "CreateDate": "2023:01:15 15:34:28",
    "Subject": [
      "landscape",
      "portfolio"
    ],
    "FocalLength": "6.9 mm",
    "ISO": 80,
    "Aperture": 1.8,
    "ShutterSpeedValue": "1/2300",
    "Make": "Apple",
    "Model": "iPhone 14 Pro",
    "Lens": "iPhone 14 Pro back triple camera 6.86mm f/1.78"
  },
  {
    "SourceFile": "secrets.jpg",
    "Title": "Secrets",
    "ImageDescription": "Paris Metro",
    "CreateDate": "2015:02:15 20:29:21",
    "AltTextAccessibility": "man on paris metro",
    "Subject": [
      "portfolio",
      "portfolio-feature",
      "street"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 3200,
    "Aperture": 2.0,
    "ShutterSpeedValue": "1/80",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "looking-out.jpg",
    "Title": "Looking Out",
    "ImageDescription": "Santorini, Greece",
    "CreateDate": "2018:06:29 18:44:33",
    "AltTextAccessibility": "person looks at sea from a sailboat",
    "Subject": [
      "landscape",
      "portfolio"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 800,
    "Aperture": 16.0,
    "ShutterSpeedValue": "1/1600",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "monolithic.jpg",
    "Title": "Monolithic",
    "ImageDescription": "Mt. Brandon, Kerry, Ireland",
    "CreateDate": "2017:05:08 12:26:37",
    "AltTextAccessibility": "Imposing mountain with light across it",
    "Subject": [
      "landscape",
      "portfolio",
      "portfolio-feature"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 200,
    "Aperture": 11.0,
    "ShutterSpeedValue": "1/70",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "more-mountain-lakes.jpg",
    "Title": "More Mountain Lakes",
    "ImageDescription": "Norway",
    "CreateDate": "2013:05:22 11:39:53",
    "AltTextAccessibility": "Mountain Lake",
    "Subject": [
      "landscape",
      "portfolio"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 400,
    "Aperture": 5.6,
    "ShutterSpeedValue": "1/320",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "mountain-gaps.jpg",
    "Title": "Mountain Gaps",
    "ImageDescription": "Norway",
    "CreateDate": "2013:05:06 13:05:58",
    "AltTextAccessibility": "Lake with mountain in background",
    "Subject": [
      "Fjord",
      "Flam",
      "Hiking",
      "Norway",
      "landscape",
      "mountains",
      "portfolio",
      "portfolio-feature",
      "vision"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 400,
    "Aperture": 8.0,
    "ShutterSpeedValue": "1/640",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "naptime.jpg",
    "Title": "Naptime",
    "ImageDescription": "Positano, Amalfi Coast, Italy",
    "CreateDate": "2023:04:22 10:52:02",
    "AltTextAccessibility": "Sleeping artist at his stall on the street",
    "Subject": [
      "Italy Holidays Positano",
      "portfolio",
      "street"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 200,
    "Aperture": 4.5,
    "ShutterSpeedValue": "1/240",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "outpost.jpg",
    "Title": "Outpost",
    "ImageDescription": "Norway",
    "CreateDate": "2013:05:06 13:02:54",
    "AltTextAccessibility": "Tree and cabin looking over fjord",
    "Subject": [
      "landscape",
      "portfolio"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 400,
    "Aperture": 6.4,
    "ShutterSpeedValue": "1/420",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "ridgid.jpg",
    "Title": "Rigid",
    "ImageDescription": "Hiking Mt Brandon, Kerry, Ireland",
    "CreateDate": "2017:05:08 12:26:27",
    "AltTextAccessibility": "Panorama of ridgeline",
    "Subject": [
      "landscape",
      "Brandon",
      "Hiking",
      "portfolio"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 200,
    "Aperture": 11.0,
    "ShutterSpeedValue": "1/170",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "selfie-stick.jpg",
    "Title": "Selfie Stick",
    "ImageDescription": "Paris",
    "CreateDate": "2015:02:16 13:45:33",
    "AltTextAccessibility": "guy with selfie stick in front of the lourve",
    "Subject": [
      "portfolio",
      "street"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 200,
    "Aperture": 7.1,
    "ShutterSpeedValue": "1/400",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "sharp-angles.jpg",
    "Title": "Sharp Angles",
    "ImageDescription": "Hong Kong",
    "CreateDate": "2013:03:28 07:04:09",
    "AltTextAccessibility": "Buildings",
    "Subject": [
      "hong kong",
      "portfolio",
      "street",
      "voyager"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 400,
    "Aperture": 9.0,
    "ShutterSpeedValue": "1/500",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "snowy-silhouette.jpg",
    "Title": "Snowy Silhouette",
    "ImageDescription": "Norway",
    "CreateDate": "2013:05:06 13:35:57",
    "AltTextAccessibility": "Snow capped mountain in black and white",
    "Subject": [
      "Fjord",
      "Flam",
      "Hiking",
      "Norway",
      "landscape",
      "mountains",
      "portfolio",
      "vision"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 400,
    "Aperture": 11.0,
    "ShutterSpeedValue": "1/800",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "sunset-mountain.jpg",
    "Title": "Sunset Mountain",
    "ImageDescription": "Santorini, Greece",
    "CreateDate": "2018:06:29 20:12:05",
    "AltTextAccessibility": "Sun setting behind mountain from boat",
    "Subject": [
      "landscape",
      "portfolio"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 800,
    "Aperture": 14.0,
    "ShutterSpeedValue": "1/900",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "the-last-of-us-part-2.jpg",
    "Title": "The Last of Us part 2",
    "ImageDescription": "Boolavogue, Co Wexford, Ireland",
    "CreateDate": "2023:03:02 16:48:13",
    "AltTextAccessibility": "The Last of Us part 2",
    "Subject": [
      "landscape",
      "portfolio"
    ],
    "FocalLength": "6.9 mm",
    "ISO": 500,
    "Aperture": 1.8,
    "ShutterSpeedValue": "1/40",
    "Make": "Apple",
    "Model": "iPhone 14 Pro",
    "Lens": "iPhone 14 Pro back triple camera 6.86mm f/1.78"
  },
  {
    "SourceFile": "the-last-of-us.jpg",
    "Title": "The Last of Us",
    "ImageDescription": "Boolavogue, Co Wexford, Ireland",
    "CreateDate": "2023:03:02 16:49:40",
    "AltTextAccessibility": "The Last of Us",
    "Subject": [
      "landscape",
      "portfolio"
    ],
    "FocalLength": "6.9 mm",
    "ISO": 400,
    "Aperture": 1.8,
    "ShutterSpeedValue": "1/45",
    "Make": "Apple",
    "Model": "iPhone 14 Pro",
    "Lens": "iPhone 14 Pro back triple camera 6.86mm f/1.78"
  },
  {
    "SourceFile": "the-long-road.jpg",
    "Title": "The Long Road",
    "ImageDescription": "Mt. Leinster. Carlow/Wexford, Ireland",
    "CreateDate": "2023:01:15 16:17:37",
    "AltTextAccessibility": "A road on the hike up Mt. Leinster, with the trees and fog in the background",
    "Subject": [
      "landscape",
      "portfolio",
      "portfolio-feature"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 500,
    "Aperture": 8.0,
    "ShutterSpeedValue": "1/100",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "tidal-sky.jpg",
    "Title": "Tidal Sky",
    "ImageDescription": "Duncannonn Beach, Wexford, Ireland",
    "CreateDate": "2023:02:24 15:03:17",
    "AltTextAccessibility": "Tide receding on beach creating little pool with the sky reflected.",
    "Subject": [
      "landscape",
      "portfolio"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 200,
    "Aperture": 8.0,
    "ShutterSpeedValue": "1/250",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "tree-contemplation.jpg",
    "Title": "Tree Contemplation",
    "ImageDescription": "Mt. Leinster. Carlow/Wexford, Ireland",
    "CreateDate": "2023:01:15 14:50:57",
    "AltTextAccessibility": "A dead tree in fog with the sun in the background",
    "Subject": [
      "landscape",
      "portfolio",
      "portfolio-feature"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 200,
    "Aperture": 7.1,
    "ShutterSpeedValue": "1/420",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "two-friends.jpg",
    "Title": "Two Friends",
    "ImageDescription": "Mt. Brandon, Kerry, Ireland",
    "CreateDate": "2017:05:08 11:55:54",
    "AltTextAccessibility": "Mt. Brandon, Kerry, Ireland",
    "Subject": [
      "landscape",
      "portfolio",
      "portfolio-feature"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 200,
    "Aperture": 16.0,
    "ShutterSpeedValue": "1/125",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "valleys.jpg",
    "Title": "Valleys",
    "ImageDescription": "Mt. Brandon, Kerry, Ireland",
    "CreateDate": "2017:05:08 11:15:14",
    "AltTextAccessibility": "Mt. Brandon, Kerry, Ireland",
    "Subject": [
      "landscape",
      "portfolio"
    ],
    "FocalLength": "23.0 mm",
    "ISO": 200,
    "Aperture": 16.0,
    "ShutterSpeedValue": "1/170",
    "Make": "FUJIFILM",
    "Model": "FinePix X100",
    "Lens": "Fujinon 23mm f/2"
  },
  {
    "SourceFile": "watch-your-step.jpg",
    "Source": "watch-your-step.jpg",
    "Title": "Watch Your Step",
    "ImageDescription": "Path of the Gods, Amalfi, Italy",
    "CreateDate": "2023:04:23 13:44:32",
    "AltTextAccessibility": "Steep cliff path",
    "Subject": [
      "landscape",
      "portfolio"
    ],
    "FocalLength": "6.9 mm",
    "ISO": 100,
    "Aperture": 1.8,
    "ShutterSpeedValue": "1/16000",
    "Make": "Apple",
    "Model": "iPhone 14 Pro",
    "Lens": "iPhone 14 Pro back triple camera 6.86mm f/1.78"
  }
]

// Formats the exifDate into a readable string. Using luxon npm package as these exif dates come very abnormally formatted I think
const formatDate = (exifDate) => {
  const dt = DateTime.fromFormat( exifDate , "yyyy:MM:dd HH:mm:ss");
  return dt.toFormat("DDD");
}

const gallery = photoExifData.map(photo => {

  return {
    title: photo.Title,
    // Checks if the exif keywords(called Subject in exif for some reason) contain the relevant tags, puts them in relevant folder/slug in _site via pagination permalink
    tag: photo.Subject.includes('landscape') ? 'landscape' : photo.Subject.includes('street') ? 'street' : '',
    // Checks if photo has been tagged to be featured
    homePage: photo.Subject.includes('portfolio-feature'),
    date: formatDate(photo.CreateDate),
    location: photo.ImageDescription,
    src: photo.SourceFile,
    alt: photo.AltTextAccessibility || "",
    imgDir: './src/photos/',
    FocalLength: photo.FocalLength,
    ISO: photo.ISO + " ISO",
    Aperture: "f/" + photo.Aperture,
    ShutterSpeed: photo.ShutterSpeedValue,
    Make: photo.Make,
    Model: photo.Model,
    Lens: photo.Lens,

  }
})
// console.log(gallery);
module.exports = function () {
  return gallery
}

// const dt = DateTime.fromFormat("2023:04:23 13:44:32", "yyyy:MM:dd HH:mm:ss");
// const formatted = dt.toFormat("dd/MM/yyyy");
// console.log(formatted);
// {
//     "title": "Foggy Mountain Dew",
//   "tag": "landscape",
//   "homePage": false,
//   "date": "October 20, 2013",
//   "credit": "Photo by Tom Caraher",
//   "src": "landscape/foggy-mountain-dew.jpg",
//   "alt": "Lined up bamboo scaffolding with car in shot",
// }