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
import ramcoLogo from "./assets/company_logo/ramcoLogo.png";
import ethnusLogo from "./assets/company_logo/ethnusLogo.png";

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
