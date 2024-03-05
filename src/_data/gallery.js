const photoExifData = [
    {
        "title": "Water Boy",
        "tag": "street",
        "homePage": true,
        "date": "October 20, 2013",
        "credit": "Photo by Tom Caraher",
        "src": "street/water-boy.jpg",
        "alt": "Young man with a trolly of large water bottles smoking a cigarette walking through Hong Kong",
    },
    {
        "title": "City Jungle",
        "tag": "street",
        "homePage": true,
        "date": "October 20, 2013",
        "credit": "Photo by Tom Caraher",
        "src": "street/city-jungle.jpg",
        "alt": "Lined up bamboo scaffolding with car in shot",
    },
    {
        "title": "Red Light Green Light",
        "tag": "street",
        "homePage": true,
        "date": "October 20, 2013",
        "credit": "Photo by Tom Caraher",
        "src": "street/red-light-green-light.jpg",
        "alt": "Lined up bamboo scaffolding with car in shot",
    },
    {
        "title": "Weekly Shop",
        "tag": "street",
        "homePage": false,
        "date": "October 20, 2013",
        "credit": "Photo by Tom Caraher",
        "src": "street/weekly-shop.jpg",
        "alt": "Lined up bamboo scaffolding with car in shot",
    },
    {
        "title": "Tree Contemplation",
        "tag": "landscape",
        "homePage": true,
        "date": "October 20, 2013",
        "credit": "Photo by Tom Caraher",
        "src": "landscape/contemplating-a-tree.jpg",
        "alt": "Lined up bamboo scaffolding with car in shot",
    },
    {
        "title": "Foggy Mountain Dew",
        "tag": "landscape",
        "homePage": false,
        "date": "October 20, 2013",
        "credit": "Photo by Tom Caraher",
        "src": "landscape/foggy-mountain-dew.jpg",
        "alt": "Lined up bamboo scaffolding with car in shot",
    }
]

const gallery = photoExifData.map(obj => {
    return {
        ...obj,
        imgDir: "/photos/"

    };
});


module.exports = function () {
    return gallery;
};