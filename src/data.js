import { GiWalkieTalkie } from "react-icons/gi";
import { BsJournalAlbum } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { TfiHome } from "react-icons/tfi";
import npr from "./images/newsLogos/npr.png";
import usaToday from "./images/newsLogos/usaToday.png";
import abcNews from "./images/newsLogos/abcNews.png";
import apNews from "./images/newsLogos/apNews.png";
import cnnNews from "./images/newsLogos/cnnNews.png";
import cbsNews from "./images/newsLogos/cbsNews.png";
import nbcNews from "./images/newsLogos/nbcNews.png";

import building from "./images/tech-Images/building.jpg";
import chips from "./images/tech-Images/chips.jpg";
import devices from "./images/tech-Images/devices.jpg";
import dimensionWeb from "./images/tech-Images/dimensionWeb.jpg";
import iphone from "./images/tech-Images/iphone.jpg";
import laptop from "./images/tech-Images/laptop.jpg";
import robot from "./images/tech-Images/robot.jpg";
import ps4 from "./images/tech-Images/ps4.jpg";

export const navItems = [
  { id: 1, text: "HOME", icon: <TfiHome />, link: "/" },
  { id: 2, text: "PHOTO", icon: <BsJournalAlbum />, link: "/photos" },
  { id: 3, text: "FORUM", icon: <GiWalkieTalkie />, link: "/forum" },
  { id: 4, text: "ABOUT", icon: <FaBook />, link: "/about" },
];

export const newsOutlets = [
  { id: 1, url: "https://www.npr.org/", icon: npr, text: "NPR" },
  {
    id: 2,
    url: "https://www.usatoday.com/",
    icon: usaToday,
    text: "USA Today",
  },
  { id: 3, url: "https://abcnews.go.com/", icon: abcNews, text: "ABC News" },
  { id: 4, url: "https://apnews.com/", icon: apNews, text: "AP News" },
  { id: 5, url: "https://edition.cnn.com/", icon: cnnNews, text: "CNN News" },
  { id: 6, url: "https://www.cbsnews.com/", icon: cbsNews, text: "CBS News" },
  { id: 7, url: "https://www.nbc.com/", icon: nbcNews, text: "NBC News" },
];

export const techImages = [
  { id: 1, img: building, text: building },
  { id: 2, img: devices, text: devices },
  { id: 3, img: chips, text: chips },
  { id: 4, img: robot, text: robot },
  { id: 5, img: iphone, text: iphone },
  { id: 6, img: dimensionWeb, text: dimensionWeb },
  { id: 7, img: ps4, text: ps4 },
  { id: 8, img: laptop, text: building },
];
