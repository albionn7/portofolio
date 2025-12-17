import gatherly from "../assets/projects/gatherly.png";
import transactionApp from "../assets/projects/transactions.png";
import apiTransactions from "../assets/projects/api-transactions.png";
import weatherApp from "../assets/projects/weather-app.png";
import internshipPic from "../assets/projects/internship-proof.jpg";

export const HERO_CONTENT =
  "I build modern, fast, and user-focused web applications with a strong focus on clean code and scalable solutions.";

export const ABOUT_TEXT =
  "I am a dedicated Web Developer with over two years of hands-on experience building user-friendly and efficient web applications. I have worked with modern technologies such as React, TypeScript, Node.js, REST APIs, PostgreSQL, MongoDB, and WordPress. I enjoy collaborating in Agile environments, solving real-world problems, and continuously improving my skills to deliver high-quality digital solutions.";

export const EDUCATION = [
  {
    role: "Bachelor's Degree – Computer Science & Engineering",
    company: "University of Information Science and Technology",
    year: "Oct 2020 – Dec 2024",
    description:
      "Graduated, Focus on software engineering, algorithms, and modern web development.",
  },
  {
    role: "Science Program",
    company: "Yahya Kemal College",
    year: "Sep 2016 – May 2020",
    description: "Completed science-focused curriculum",
  },
];

export const EXPERIENCES = [
  {
    role: "Full Stack Engineering Intern",
    company: "Inspire11 — Tetovo, North Macedonia",
    year: "Mar 2025 – Jun 2025",
    description:
      "Built responsive UI components using React, integrated ASP.NET REST APIs, and collaborated in an Agile team using Jira.",
    proof: internshipPic,
  },
  {
    role: "Junior WordPress & Frontend Developer",
    company: "Eagle IT — Struga, North Macedonia",
    year: "May 2022 – Sep 2024",
    description:
      "Developed and maintained WordPress websites from scratch, implemented frontend features using HTML, CSS, JavaScript, and ensured responsive cross-device design.",
  },
  {
    role: "Participant — KT Ruby Engineering Incubator Program",
    company: "Kennedy Technology",
    year: "Nov 2021 – May 2022",
    description:
      "Completed a 7-month program focused on frontend and backend development with Ruby on Rails and team-based projects.",
  },
];

export const PROJECTS = [
  {
    title: "Event Management Platform",
    image: gatherly,
    description:
      "A full-stack event management platform built with modern web technologies, featuring event creation, management, and user interaction.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/albionn7/event_management",
    featured: true,
    live: "https://event-management-gamma-plum.vercel.app/",
  },
  {
    title: "Transaction App",
    image: transactionApp,
    description:
      "A frontend application for managing and tracking transactions with a clean and responsive UI.",
    technologies: ["React", "Vite", "JavaScript"],
    link: "https://github.com/albionn7/Transaction_App",
  },
  {
    title: "Transactions API",
    image: apiTransactions,
    description:
      "A RESTful API built with ASP.NET for handling transaction data and backend business logic.",
    technologies: ["ASP.NET", "REST API"],
    link: "https://github.com/albionn7/api_transactions",
  },
  {
    title: "Weather App",
    image: weatherApp,
    description:
      "A weather application that fetches and displays real-time weather data using an external API.",
    technologies: ["React", "API Integration"],
    link: "https://github.com/albionn7/weather-app",
    live: "https://albionn7.github.io/weather-app/",
  },
];

export const CONTACT = {
  address: "Struga, North Macedonia",
  phoneNo: "+387 189 3718",
  email: "albionnazari@hotmail.com",
};
