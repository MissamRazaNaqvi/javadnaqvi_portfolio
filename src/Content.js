// import images
import Hero_person from "./assets/images/Hero/person.png";

import python from "./assets/images/Skills/python.png";
import java from "./assets/images/Skills/java.png";
import javascript from "./assets/images/Skills/javascript.png";
import cpp from "./assets/images/Skills/cpp.png";
import dotnet from "./assets/images/Skills/dotnet.png";
import html5 from "./assets/images/Skills/html5.png";
import css3 from "./assets/images/Skills/css3.png";
import reactjs from "./assets/images/Skills/react.png";
import angular from "./assets/images/Skills/angular.png";
import opencv from "./assets/images/Skills/opencv.png";
import springboot from "./assets/images/Skills/springboot.png";
import bootstrap from "./assets/images/Skills/bootstrap.png";
import sql from "./assets/images/Skills/sql.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import rdbms from "./assets/images/Skills/rdbms.png";

import project1 from "./assets/images/projects/project1.png";
import project2 from "./assets/images/projects/project2.png";
import person_project from "./assets/images/projects/person.png";

import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#education",
      icon: RiServiceLine,
    },
    {
      link: "#experience",
      icon: RiProjectorLine,
    },
    {
      link: "#projects",
      icon: MdOutlinePermContactCalendar,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Developer",
    firstName: "Your",
    lastName: "Name",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experience in Software Development",
      },
      {
        count: "10+",
        text: "Projects Completed",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Python",
        para: "Proficient in Python for various programming tasks and automation.",
        logo: python,
      },
      {
        name: "Java",
        para: "Experienced in Java for backend development.",
        logo: java,
      },
      {
        name: "JavaScript",
        para: "Skilled in JavaScript for web development.",
        logo: javascript,
      },
      {
        name: "C++",
        para: "Knowledgeable in C++ for system-level programming.",
        logo: cpp,
      },
      {
        name: ".NET",
        para: "Familiar with .NET framework for application development.",
        logo: dotnet,
      },
      {
        name: "HTML5",
        para: "Expert in HTML5 for creating web pages.",
        logo: html5,
      },
      {
        name: "CSS3",
        para: "Proficient in CSS3 for styling web pages.",
        logo: css3,
      },
      {
        name: "React",
        para: "Experienced in React for building user interfaces.",
        logo: reactjs,
      },
      {
        name: "Angular",
        para: "Skilled in Angular for developing front-end applications.",
        logo: angular,
      },
      {
        name: "OpenCV",
        para: "Knowledgeable in OpenCV for computer vision tasks.",
        logo: opencv,
      },
      {
        name: "Spring Boot",
        para: "Experienced in Spring Boot for backend development.",
        logo: springboot,
      },
      {
        name: "Bootstrap",
        para: "Proficient in Bootstrap for responsive design.",
        logo: bootstrap,
      },
      {
        name: "SQL",
        para: "Experienced in SQL for database management.",
        logo: sql,
      },
      {
        name: "MongoDB",
        para: "Skilled in MongoDB for NoSQL database management.",
        logo: mongodb,
      },
      {
        name: "RDBMS",
        para: "Knowledgeable in RDBMS for relational database management.",
        logo: rdbms,
      },
    ],
    icon: MdArrowForward,
  },
  education: {
    title: "Education",
    subtitle: "MY ACADEMIC BACKGROUND",
    education_content: [
      {
        institution: "Conestoga College",
        degree: "Post Grad in Web Development",
        location: "Kitchener, ON",
        gpa: "CGPA: 3.88",
      },
      {
        institution: "Bhavnagar University",
        degree: "Bachelor of Computer Applications",
        location: "Mahuva, Gujarat",
        percentage: "Percentage: 7.8/10",
      },
    ],
  },
  experience: {
    title: "Experience",
    subtitle: "MY WORK EXPERIENCE",
    experience_content: [
      {
        position: "AI Engineer Internship",
        company: "RadicalX",
        location: "Toronto, ON",
        duration: "Nov 2023 - Feb 2024",
        details: [
          "Researched and recommended the adoption of advanced algorithms in machine learning to optimize model accuracy, leading to a 30% increase in overall performance metrics within the AI initiatives.",
          "Contributed to a team of 5 interns to execute projects in deep learning, resulting in a 40% improvement in project completion time through effective task delegation and project management strategies.",
          "Proficient in coding with Python and PowerShell, leveraging scripting languages to automate tasks and streamline processes, enhancing operational efficiency.",
        ],
      },
      {
        position: "Software Developer",
        company: "Haniya Business Solutions",
        location: "Mahuva, Gujarat",
        duration: "Jul 2021 - Aug 2022",
        details: [
          "Developed and implemented innovative user interface designs for 7+ client websites, resulting in a 20% increase in user engagement metrics.",
          "Leveraged software development skills to integrate and enhance endpoint security tools within client applications, ensuring robust protection against potential threats.",
          "Played a key role in providing 24x7 support and coordinating recovery efforts during critical incidents, ensuring minimal disruption to business operations and timely resolution of issues.",
          "Excelled in a Production Support role, effectively prioritizing and resolving operational issues to maintain uninterrupted service for internal clients, resulting in enhanced client satisfaction.",
        ],
      },
      {
        position: "Software Developer Internship",
        company: "Haniya Business Solutions",
        location: "Mahuva, Gujarat",
        duration: "Jan 2021 - Jun 2021",
        details: [
          "Assisted in the development of user interfaces for multiple projects, improving overall user experience and increasing website traffic by 15%.",
          "Demonstrated strong problem-solving skills in resolving complex technical issues and providing second-level support, contributing to the stability and reliability of production systems.",
          "Actively participated in team code reviews, contributing to the maintenance of clean code practices and ensuring cross-browser compatibility for all website features.",
          "Supported testing efforts by identifying and resolving 15 software bugs before product release, ensuring a seamless user experience.",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "SoleMate - Ecommerce Application",
        image: project1,
        details: [
          "Collaborated with a cross-functional team to optimize the Android e-commerce app, resulting in a 40% increase in performance metrics, including speed and reliability.",
          "Implemented Firebase Authentication within the application to enhance security measures, leading to an 80% reduction in unauthorized access attempts and ensuring user data privacy.",
          "Led backend development efforts using Java and managed databases with Firebase to support seamless functionality within the e-commerce application; utilized Android Studio for efficient application development.",
        ],
      },
      {
        title: "Drivetest Scheduler - Kiosk Application",
        image: project2,
        details: [
          "Developed and executed a comprehensive plan to integrate role-based access control features into the existing system, resulting in a 40% reduction in scheduling errors.",
          "Utilized React, Node.js, Express, and MongoDB to streamline user management processes and enhance system security measures, leading to a 50% increase in efficiency.",
          "Led the team in the successful implementation of secure user management protocols, resulting in a 20% increase in system efficiency while maintaining data integrity.",
        ],
      },
    ],
  },
  certifications: {
    title: "Certifications",
    subtitle: "MY CERTIFICATIONS",
    certifications_content: [
      {
        name: "Programming with JavaScript",
        provider: "META",
      },
      {
        name: "Introduction to Front-end Development",
        provider: "META",
      },
      {
        name: "Introduction to Back-end Development",
        provider: "META",
      },
    ],
  },
  contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "your-email@example.com",
        icon: GrMail,
        link: "mailto:your-email@example.com",
      },
      {
        text: "+123 456 7890",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "your-instagram",
        icon: BsInstagram,
        link: "https://www.instagram.com/your-instagram/",
      },
    ],
  },
  footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
