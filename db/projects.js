import codeQuiz from "/public/images/codeQuiz.png";
import fashionFusion from "/public/images/fashionFusion.png";
import memeGenerator from "/public/images/memeGenerator.png";
import noteApp from "/public/images/noteApp.png";
import travelJournal from "/public/images/travelJournal.png";
import weatherDashboard from "/public/images/weatherDashboard.png";

const projects = [
  {
    title: "Fashion Fusion",
    description: "This is project 1",
    imgUrl: fashionFusion,
    url: "https://fashion-fusion-fdbc9c87836b.herokuapp.com/",
    githubUrl: "https://github.com/itcreativeusa/fashion-fusion",
    description: "Fashion-Fusion is an eCommerce platform specializing in clothing, where garments are organized by colors. This App was built using MERN stack.",
  },
  {
    title: "Note-App",
    description: "This is project 2",
    imgUrl: noteApp,
    url: "https://note-master-714-cdec4815ebd5.herokuapp.com/",
    githubUrl: "https://github.com/Fenaum/note-take-app",
    description: "Note-App is a responsive note taking application using Express.js to apply the CRUD operation.",
  },
  {
    title: "Meme Generator",
    description: "This is project 1",
    imgUrl: memeGenerator,
    url: "https://memesify-be2bdd38706f.herokuapp.com//",
    githubUrl: "https://github.com/Fenaum/meme-generator",
    description: "A meme generator to create customized memes, This app was built using React and a public Meme API to fetch the meme data.",
  },
  {
    description: "",
    title: "Weather Dashboard",
    description: "This is project 2",
    imgUrl: weatherDashboard,
    url: "https://fenaum.github.io/weather-dashboard-api/",
    githubUrl: "https://github.com/Fenaum/weather-dashboard-api",
    description: "A basic JavaScript application that generate weather information based on city using Open Weather API.",
  },
  {
    title: "Coding Quiz Game",
    description: "This is project 1",
    imgUrl: codeQuiz,
    url: "https://fenaum.github.io/coding-quiz-uh/",
    githubUrl: "https://github.com/Fenaum/coding-quiz-uh",
    description: "A basic Coding Quiz App using Vanilla Javascript.",
  },
  {
    title: "Travel Journal",
    description: "This is project 2",
    imgUrl: travelJournal,
    url: "https://travel-journal-react-342a400076d8.herokuapp.com/",
    githubUrl: "https://github.com/Fenaum/react-travel-journal",
    description: "A travel Journal Application built through React and Javascript.",
  },
];

export default projects;
