import hero from './hero.png';
import rohit from './rohit.jpg';

import resturantApp from './resturantApp.jpg'
import weatherApp from './weatherApp.png'
import musicApp from './musicApp.png'
import landingApp from './landingApp.jpg'
import gradientApp from './gradientApp.png'
import filmFinderApp from './filmFinderApp.png'

import resturantVideo from './resturantVideo.mp4'
import weatherVideo from './weatherVideo.mp4'
import musicVideo from './musicVideo.mp4'
import landingVideo from './landingVideo.mp4'
import gradientVideo from './gradientVideo.mp4'
import filmFinderVideo from './filmFinderVideo.mp4'

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
  },{
    id: 3,
    title: "filmFinder",
    image: filmFinderApp, 
    video: filmFinderVideo,
    url: "https://rohitjangid05.github.io/Pagination/", 
    description: "The Pagination System is a web application showcasing a simple and efficient way to navigate large datasets. Built using HTML, CSS, and JavaScript, this project fetches data from an API and displays it in a structured manner with seamless page navigation.",
    ul: [
        "Dynamic Data Fetching: Retrieves and displays data from an external API.",
        "Interactive Pagination: Users can easily navigate between pages to view the data.",
        "Structured Layout: Displays content in an organized and visually appealing format.",
        "Responsive Design: Provides a consistent user experience across mobile and desktop devices.",
        "User-Friendly Navigation: Intuitive pagination controls for easy interaction."
    ]
  },
  {
    id: 4,
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
    id: 5,
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
  },{
    id: 6,
    title: "Gradient Generator",
    image: gradientApp, 
    video: gradientVideo,
    url: "https://rohitjangid05.github.io/ColorGenerator/", 
    description: "The Gradient Generator is a user-friendly web application that enables users to create and customize beautiful gradients effortlessly. Users can choose from various color options and see real-time previews of their designs.",
    ul: [
        "Color Customization: Select and mix colors to create unique gradient combinations.",
        "Real-Time Preview: Instantly see how your chosen colors blend together in a gradient.",
        "Download Feature: Save your gradients as images for use in other projects.",
        "Responsive Design: Works seamlessly on both mobile and desktop devices for on-the-go creativity.",
        "User-Friendly Interface: Simple navigation allows users of all skill levels to create stunning gradients."
    ]
},

];
