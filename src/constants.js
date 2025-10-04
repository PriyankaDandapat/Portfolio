// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

//experience section logo
import ramcoLogo from "./assets/company_logo/ramcoLogo.png";
import ethnusLogo from "./assets/company_logo/ethnusLogo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";
import realestate_website from "./assets/work_logo/realestate_website.png";

//education section
import aps from "./assets/education_logo/aps.jpg";
import podarlogo from "./assets/education_logo/podarlogo.png";
import vitlogo from "./assets/education_logo/vitlogo.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Dotnet", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: ramcoLogo,
    role: "Software Developer 1",
    company: "Ramco Systems",
    date: "February 2025 - Present",
    desc: "As a Software Developer - 1 at Ramco Systems , I built 10+ reusable React components for a low-code UI platform, enhanced existing components like Dropdown and DatePicker to improve functionality by 30%, and implemented ARIA accessibility to boost usability by 20%. I leveraged GitHub Copilot to accelerate development by 30%, integrated libraries like Ant Design and Bryntum Scheduler, and optimized runtime performance for seamless subsystem integration. On the backend, I developed 8+ RESTful APIs using .NET, C#, CQRS, achieving 92%+ unit test coverage, and implemented 10+ RESTful APIs in MERN applications, rendering secure, dynamic data tables in React. This role strengthened my skills in frontend component design, API development, debugging, testing, and performance optimization in an agile enterprise environment.",
    skills: [
      "React.js",
      "React Testing Library",
      "Agile Development",
      ".NET Framework",
      "C#",
      "CQRS",
      "Dependency Injection",
      "Postman",
      "xUnit Testing",
      "Unit Testing & Code Coverage",
      "RESTful API Development",
      "MongoDB",
      "ExpressJs",
      "NodeJs",
      "SDLC Collaboration",
    ],
  },
  {
    id: 1,
    img: ethnusLogo,
    role: "Fullstack Internship",
    company: "Ethnus",
    date: "July 2023 - March 2024",
    desc: "Developed a Hospital Management System featuring profile creation, data updates, and doctor appointment booking. I built an interactive frontend using ReactJS and Bootstrap, implemented backend services and RESTful APIs with Node.js and Express.js, and used MongoDB for data storage. I integrated JWT authentication for secure access, employed React Router DOM for smooth navigation, and implemented role-based access control to ensure appropriate permissions for admins, doctors, and patients, enhancing both security and user management.",
    skills: [
      "ReactJS",
      "MongoDB",
      "ExpressJs",
      "NodeJs",
      "Bootstrap",
      "JavaScript",
      "JWT Authentication",
      "RESTful API development",
      "HTML",
      "CSS",
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "Real Estate Website",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: realestate_website,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github:
      "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "CS Prep",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: csprepLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "Email Validator NPM Package",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
];

export const education = [
  {
    id: 0,
    img: vitlogo,
    school: "Vellore Institute of Technology, Chennai",
    date: "June 2021 - June 2025",
    grade: "8.57 CGPA",
    desc: "I have completed my B.Tech in Computer Science and Engineering from Vellore Institute of Technology (VIT), Chennai, where I built a strong foundation in programming, software development, and core computer science principles. My coursework included Data Structures, Algorithms, Object-Oriented Programming, Computer Networks, Operating Systems, Database Management Systems, Web Development, and Software Engineering, which strengthened both my theoretical and practical understanding. I actively participated in clubs, events, and workshops, gaining valuable skills in event management, time management, and creative design as a member of the Enactus creative team. These experiences, along with exposure to diverse technical activities, played a pivotal role in enhancing my technical expertise, problem-solving abilities, and overall professional growth.",
    degree: "B.Tech in Computer Science and Engineering ",
  },
  {
    id: 1,
    img: aps,
    school: "Ahmedabad Public School International, Ahmedabad",
    date: "March 2020 - March 2021",
    grade: "88.66%",
    desc: "I completed my class 12 education from Ahmedabad Public School International, Ahmedabad, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: podarlogo,
    school: "Podar International School, Ahmedabad",
    date: "March 2018 - March 2019",
    grade: "90.1%",
    desc: "I completed my class 10 education from Podar International School, Ahmedabad, under the CBSE board.",
    degree: "CBSE(X)",
  },
];
