import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  web_development,
  android_development,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  chatapp,
  nodejs,
  mongodb,
  git,
  sql,
  ecommerce,
  my_image,
  drumkit,
  competitive_programming,
  weatherapp,
  github,
  link,
  kotlin,
} from "../assets";

export const navLinks = [
   {
    id: "home",
    title: "Home",
  },
  {
    id: "about-education",
    title: "About",
  },
  {
    id:"skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Competitive Programmer",
    icon: web,
  },
  {
    title: "Andorid App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "KOTLIN",
    icon: kotlin,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
];

const experiences = [
     {
    title: "Android App Developer",
    company_name: "",
    icon: android_development,
    iconBg: "#383E56",
    date: "Sept 2024 - Now",
    points: [
      "Developing and maintaining Android applications using Kotlin and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Managed version control with Git and focused on web performance and security.",
      "Kept up-to-date with the latest android development trends and technologies for continuous improvement.",
      "develop different web applications and websites like - Weather-App, Chat-App etc...",
    ],
  },
  {
    title: "Web Developer",
    company_name: "",
    icon: web_development,
    iconBg: "#383E56",
    date: "May 2023 - Now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Managed version control with Git and focused on web performance and security.",
      "Kept up-to-date with the latest web development trends and technologies for continuous improvement.",
      "develop different web applications and websites like - ShoppingCart, Password Generator, iBlog, Parallax Effect etc...",
    ],
  },

  {
    title: "Competitive Programming",
    company_name: "",
    icon: competitive_programming,
    iconBg: "#383E56",
    date: "March 2022 - Now",
    points: [
      "Solve 1000+ problems on Various Online Platforms",
      "Participated in 70+ online Contests",
      "Solve 380+ problems on Codeforces",
      "Solve 180+ problems on Codechef",
      "Solve 180+ problems on Geeks For Geeks",
      "Solve 300+ problems on LeetCode",
      "Max. CodeChef Rating - 1556 (2 star) under handle",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Anjal optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
   name: "Weather App (Android)",
description: `A Kotlin-based Android application that provides real-time weather information for any location. It allows users to search for cities and view current temperature, humidity, wind speed, and detailed weather conditions.`,
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "XML",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/keshanjal/WeatherApp.git",
    link: link,
  },
  {
   name: "Chat App (Android)",
description: `A real-time chat application developed in Kotlin for Android. It features user authentication, real-time messaging, and profile management using Firebase services such as Firebase Authentication, Realtime Database, and Firebase Storage.`,
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "XML",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/keshanjal/ChatAppication.git",
    link: link,
   
  },
  {
    name: "Drum Kit (Web)",
    description:  `A simple and interactive web application that allows users to play different drum sounds by clicking on buttons or pressing corresponding keys on the keyboard. It showcases basic HTML, CSS, and JavaScript skills.`,
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: drumkit,
    source_code_link: "https://github.com/keshanjal/Drum-Kit",
    link: link,
    deploy_link: "https://keshanjal.github.io/Drum-Kit/",
  },
   {
  name: "Ecommerce (Web)",
description: `A full-stack Ecommerce web application built using React.js for the frontend, Redux for state management, and Node.js with Express.js for the backend. It allows users to browse products, add them to a cart, manage orders, and make secure payments.`,
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/keshanjal/ECommerce",
    link: link,
  },
  
];

export { services, technologies, experiences, testimonials, projects };
