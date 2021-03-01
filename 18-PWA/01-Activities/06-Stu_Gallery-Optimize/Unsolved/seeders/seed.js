var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/imageperformance", {
  useNewUrlParser: true
});

var imageSeed = [
  {
    description: "Day At The Library",
    image: "/assets/images/1.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Forests Overhead",
    image: "/assets/images/2.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Brick Wall",
    image: "/assets/images/3.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Abstract Door In The Wall",
    image: "/assets/images/4.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Focused Ring",
    image: "/assets/images/5.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Taxi Cab",
    image: "/assets/images/6.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Notre Dame",
    image: "/assets/images/7.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Ethereal Pathway",
    image: "/assets/images/8.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Cutting The Ribbon On Opening Day",
    image: "/assets/images/9.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Skwad",
    image: "/assets/images/10.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Floating Book",
    image: "/assets/images/11.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Finding Answers",
    image: "/assets/images/12.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Flyers On Wall",
    image: "/assets/images/13.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Caution, Wet Floor",
    image: "/assets/images/14.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "At The Edge",
    image: "/assets/images/15.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Museum",
    image: "/assets/images/16.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Foggy Morning",
    image: "/assets/images/17.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Look Up",
    image: "/assets/images/18.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "City",
    image: "/assets/images/19.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Parking Garage",
    image: "/assets/images/20.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Giraffe",
    image: "/assets/images/21.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "On The Rocks",
    image: "/assets/images/22.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Airplane Puddle",
    image: "/assets/images/23.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Good Boy",
    image: "/assets/images/24.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Hydrophobic",
    image: "/assets/images/25.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Snap",
    image: "/assets/images/26.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Space Rock",
    image: "/assets/images/27.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Count The Rings",
    image: "/assets/images/28.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Ice Cream",
    image: "/assets/images/29.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Cactus",
    image: "/assets/images/30.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Hammy",
    image: "/assets/images/31.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Bottom Of The Slide",
    image: "/assets/images/32.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Railroad",
    image: "/assets/images/33.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Frosty Window",
    image: "/assets/images/34.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Feathers",
    image: "/assets/images/35.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Awesomeness",
    image: "/assets/images/36.jpg",
    rating: 0,
    date: new Date(Date.now())
  }
];

db.Image.deleteMany({})
  .then(() => db.Image.collection.insertMany(imageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
