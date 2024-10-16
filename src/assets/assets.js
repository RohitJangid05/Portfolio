import hero from './hero.png';
import rohit from './rohit.jpg';

import resturantApp from './resturantApp.jpg'
import weatherApp from './weatherApp.png'
import musicApp from './musicApp.png'
import landingApp from './landingApp.jpg'

import resturantVideo from './resturantVideo.mp4'
import weatherVideo from './weatherVideo.mp4'
import musicVideo from './musicVideo.mp4'
import landingVideo from './landingVideo.mp4'

export const heroImg = hero;
export const rohitImg = rohit;

export const data = [
  {
    id: 1,
    title: "Foodezy",
    image:resturantApp,
    video: resturantVideo,
    url: "https://resturant-app05.netlify.app",
    description: "Foodezy is a responsive restaurant application developed with React.js, allowing users to effortlessly explore menus, add and remove dishes to their cart, and complete their orders with ease.",
    ul:[
      "Responsive Design: Optimized for both mobile and desktop devices for a seamless user experience.",
      "Menu Browsing: Users can view a wide selection of dishes and easily search for their favorites",
      "Shopping Cart: Add products to the cart and manage selections before checkout.","Checkout Process: View the total purchase price and finalize orders smoothly.","User-Friendly Interface: Intuitive navigation ensures a pleasant experience for all users."]
  },{
    id: 2,
    title: "E-commerce Landing Page",
    image: landingApp,
    video: landingVideo,
    url:"https://rohitjangid05.github.io/LandingPage/",
    description: "The E-commerce Landing Page is a dynamic, animated web application developed using HTML, CSS, JavaScript, and GSAP. It offers an engaging shopping experience through smooth scrolling animations and an attractive layout.",
    ul: [
      "Responsive Design: Fully optimized for a seamless user experience across desktops, tablets, and mobile devices.",
      "Scrolling Animations: Utilizes GSAP to create smooth and eye-catching scrolling effects, enhancing user interaction as they browse.",
      "Product display: Intuitive layout allows users to easily explore different product categories",
    ]
  },
  {
    id: 3,
    title: "Weather App",
    image: weatherApp,
    video: weatherVideo,
    url: "https://weatheerr-appp.netlify.app/",
    description: "The Weather App is a responsive application built with React.js, providing users with real-time weather updates and a visually dynamic interface that changes based on weather conditions.",
    ul: [
      "Responsive Design: Optimized for both mobile and desktop devices for a seamless user experience.",
      "Real-Time Weather: Access up-to-date weather information for any location.",
      "Dynamic Background: Background color changes based on current weather conditions to enhance user experience.",
      "Background Music: Play background music that corresponds with the weather for a unique atmosphere.",
      "City Search: Easily search for weather updates by city name."
    ]
  },  {
    id: 4,
    title: "Music Player",
    image: musicApp,
    video: musicVideo,
    url:"https://rohitjangid05.github.io/musicPlayer/",
    description: "The Music Player is a responsive web application built with HTML, CSS, and JavaScript. It allows users to play, pause, and navigate through tracks while providing a visually appealing interface that changes images based on the currently playing music.",
    ul: [
      "Responsive Design: Optimized for various screen sizes, ensuring a seamless experience on desktops, tablets, and mobile devices.",
      "Track Navigation: Users can easily switch between the next and previous tracks with intuitive controls.",
      "Play and Pause Functionality: Simple buttons allow users to play and pause music effortlessly.",
      "Dynamic Images: The interface updates the album artwork according to the currently playing track, enhancing the user experience.",
      "User-Friendly Interface: An intuitive layout ensures easy access to all controls, making music playback enjoyable."
    ]
  },
  
];
