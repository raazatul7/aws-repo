import aboutImage from "./assets/aboutImage.png";
import proj_mySamaj from "./assets/mysamaj.jpeg";
import proj_loyalTech from "./assets/loyalTech.jpeg";
import proj_spiri from "./assets/spiri.jpeg";
import proj_rememberLikes from "./assets/rememberLikes.jpeg";
import proj_soon from "./assets/soon.jpeg";
export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template
  name: "atulrajgupta",
  headerTagline: [
    //Line 1 For Header
    "Hi 👋 You found me! I am Atul.",
    //Line 2 For Header
    "Software Dev ",
    //Line 3 For Header
    "from India",
  ],
  //Contact Email
  contactEmail: "raazatul7@gmail.com",
  // Add Your About Text Here
  abouttext:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutImage: aboutImage,
  //Change This To Hide The Image of About Section (True Or False)
  ShowAboutImage: true, //true or false (Change Here)
  // Change Projects Here
  projects: [
    {
      id: 1,
      title: "Project One",
      service: "Mobile Application",
      imageSrc: proj_mySamaj,
      url: "#",
    },
    {
      id: 2,
      title: "Loyal Techs",
      service: "Mobile Application",
      imageSrc: proj_loyalTech,
      url: "#",
    },
    {
      id: 3,
      title: "Soon",
      service: "Mobile Application",
      imageSrc: proj_soon,
      url: "#",
    },
    {
      id: 4,
      title: "Spiri",
      service: "Mobile Application",
      imageSrc: proj_spiri,
      url: "#",
    },
    {
      id: 5,
      title: "Remember Likes",
      service: "Mobile Application",
      imageSrc: proj_rememberLikes,
      url: "#",
    },
  ],
  social: [
    // Add Or Remove The Link Accordingly
    {
      name: "Github",
      url: "https://github.com/raazatul7",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/raazatul7",
    },
    {
      name: "LinkedIn",
      url: "linkedin.com/in/atul-raj-gupta-3a03a921",
    },
  ],
};
