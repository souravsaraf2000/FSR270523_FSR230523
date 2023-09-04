import YoutubeApp from "./components/YoutubeApp/YoutubeApp";

const Home = () => {
  const data = [
    {
      "id": 1,
      "title": "Adventure in the Wilderness",
      "thumbnailUrl": "https://picsum.photos/200/300",
      "likes": 1500,
      "views": 25000,
      "channelName": "Nature Explorers",
      "channelLogoUrl": "https://picsum.photos/50/50"
    },
    {
      "id": 2,
      "title": "Cooking Masterclass: Italian Cuisine",
      "thumbnailUrl": "https://picsum.photos/200/301",
      "likes": 2000,
      "views": 30000,
      "channelName": "Culinary Delights",
      "channelLogoUrl": "https://picsum.photos/51/51"
    },
    {
      "id": 3,
      "title": "Historical Wonders: Ancient Rome",
      "thumbnailUrl": "https://picsum.photos/200/302",
      "likes": 1800,
      "views": 27000,
      "channelName": "History Unearthed",
      "channelLogoUrl": "https://picsum.photos/52/52"
    },
    {
      "id": 4,
      "title": "Space Exploration: Journey to the Stars",
      "thumbnailUrl": "https://picsum.photos/200/303",
      "likes": 2200,
      "views": 32000,
      "channelName": "Cosmic Voyages",
      "channelLogoUrl": "https://picsum.photos/53/53"
    },
    {
      "id": 5,
      "title": "Artistic Expressions: Abstract Painting",
      "thumbnailUrl": "https://picsum.photos/200/304",
      "likes": 1600,
      "views": 28000,
      "channelName": "Artistic Creations",
      "channelLogoUrl": "https://picsum.photos/54/54"
    },
    {
      "id": 6,
      "title": "Fitness and Wellness: Yoga for Beginners",
      "thumbnailUrl": "https://picsum.photos/200/305",
      "likes": 1900,
      "views": 29000,
      "channelName": "Healthy Living",
      "channelLogoUrl": "https://picsum.photos/55/55"
    },
    {
      "id": 7,
      "title": "Travel Diaries: Exploring Southeast Asia",
      "thumbnailUrl": "https://picsum.photos/200/306",
      "likes": 2100,
      "views": 31000,
      "channelName": "Wanderlust Adventures",
      "channelLogoUrl": "https://picsum.photos/56/56"
    },
    {
      "id": 8,
      "title": "Tech Talk: The Future of Artificial Intelligence",
      "thumbnailUrl": "https://picsum.photos/200/307",
      "likes": 1700,
      "views": 26000,
      "channelName": "Tech Insights",
      "channelLogoUrl": "https://picsum.photos/57/57"
    },
    {
      "id": 9,
      "title": "Healthy Recipes: Nutritious Smoothies",
      "thumbnailUrl": "https://picsum.photos/200/308",
      "likes": 2400,
      "views": 33000,
      "channelName": "Healthy Eats",
      "channelLogoUrl": "https://picsum.photos/58/58"
    },
    {
      "id": 10,
      "title": "Gaming Unleashed: Fortnite Championships",
      "thumbnailUrl": "https://picsum.photos/200/309",
      "likes": 2000,
      "views": 29000,
      "channelName": "Game Masters",
      "channelLogoUrl": "https://picsum.photos/59/59"
    },
    {
      "id": 11,
      "title": "Exploring Wildlife: Safari Adventures",
      "thumbnailUrl": "https://picsum.photos/200/310",
      "likes": 1800,
      "views": 27000,
      "channelName": "Wildlife Wonders",
      "channelLogoUrl": "https://picsum.photos/60/60"
    },
    {
      "id": 12,
      "title": "Science Explained: The Human Brain",
      "thumbnailUrl": "https://picsum.photos/200/311",
      "likes": 2500,
      "views": 35000,
      "channelName": "Science Enthusiasts",
      "channelLogoUrl": "https://picsum.photos/61/61"
    },
    {
      "id": 13,
      "title": "Thrilling Adventures: Mountain Climbing",
      "thumbnailUrl": "https://picsum.photos/200/312",
      "likes": 2200,
      "views": 32000,
      "channelName": "Adventure Seekers",
      "channelLogoUrl": "https://picsum.photos/62/62"
    },
    {
      "id": 14,
      "title": "Creative Photography: Capturing Moments",
      "thumbnailUrl": "https://picsum.photos/200/313",
      "likes": 1600,
      "views": 28000,
      "channelName": "Photography Enthusiasts",
      "channelLogoUrl": "https://picsum.photos/63/63"
    },
    {
      "id": 15,
      "title": "Mindful Living: Meditation for Inner Peace",
      "thumbnailUrl": "https://picsum.photos/200/314",
      "likes": 1900,
      "views": 29000,
      "channelName": "Mindfulness Moments",
      "channelLogoUrl": "https://picsum.photos/64/64"
    },
    {
      "id": 16,
      "title": "Tech Insights: The Future of Quantum Computing",
      "thumbnailUrl": "https://picsum.photos/200/315",
      "likes": 2100,
      "views": 31000,
      "channelName": "Quantum Tech Explorers",
      "channelLogoUrl": "https://picsum.photos/65/65"
    },
    {
      "id": 17,
      "title": "Travel Diaries: European Adventures",
      "thumbnailUrl": "https://picsum.photos/200/316",
      "likes": 1700,
      "views": 26000,
      "channelName": "European Explorers",
      "channelLogoUrl": "https://picsum.photos/66/66"
    },
    {
      "id": 18,
      "title": "Healthy Recipes: Plant-Based Cooking",
      "thumbnailUrl": "https://picsum.photos/200/317",
      "likes": 2400,
      "views": 33000,
      "channelName": "Plant-Based Cuisine",
      "channelLogoUrl": "https://picsum.photos/67/67"
    },
    {
      "id": 19,
      "title": "Gaming Unleashed: Esports Championships",
      "thumbnailUrl": "https://picsum.photos/200/318",
      "likes": 2000,
      "views": 29000,
      "channelName": "Esports Titans",
      "channelLogoUrl": "https://picsum.photos/68/68"
    },
    {
      "id": 20,
      "title": "History Revisited: The Renaissance Era",
      "thumbnailUrl": "https://picsum.photos/200/319",
      "likes": 1800,
      "views": 27000,
      "channelName": "Renaissance Chronicles",
      "channelLogoUrl": "https://picsum.photos/69/69"
    },
    {
      "id": 21,
      "title": "Gaming Unleashed: Fortnite Championships",
      "thumbnailUrl": "https://picsum.photos/200/309",
      "likes": 2000,
      "views": 29000,
      "channelName": "Game Masters",
      "channelLogoUrl": "https://picsum.photos/59/59"
    }
  ]
  
  return <YoutubeApp data = {data}/>
}

export default Home;
