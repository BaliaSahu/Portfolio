import html from './assets/html.png'
import css from './assets/css.png'
import javascript from './assets/javascript.png'
import reactjs from './assets/react.png'
import tailwind from './assets/tailwind.png'
import bootstrap from './assets/bootstrap.png'
import springboot from './assets/springboot.png'
import mysql from './assets/mysql.png'
import spring from './assets/spring.png'
import mongodb from './assets/mongodb.png'
import java from './assets/java.png'
import postman from './assets/Postman.png'
import vsCode from './assets/VSCode.png'
import eclipse from './assets/eclipse.png'
import github from './assets/github-sign.png'
import netlify from './assets/netlify.png'
import intel from './assets/intel.png'
import jspiders from './assets/jspiders.jpg'
import foodDel from './assets/foodDel.png'
import gietlogo from './assets/gietlogo.webp'
import ku from './assets/ku.webp'
import lcs from './assets/lcs.webp'
import bseOdisha from './assets/bseOdisha.webp'
import jobp from './assets/jobp.png'
import portImage from './assets/portImage.png'
import image from './assets/image.png'

export const SkillInfo = [
    {
        title : 'Frontend',
        skills:[
            {name: 'HTML', logo:html },
            {name: 'CSS', logo:css },
            {name:'JavaScript', logo:javascript},
            {name:'React.js', logo:reactjs},
            {name:'Tailwind CSS',logo:tailwind},
            {name:'Bootstrap',logo:bootstrap}
        ]
    },
    {
        title: 'Backend',
        skills:[
            {name:'Springboot', logo: springboot},
            {name:'Spring', logo:spring},
            {name:'MySql', logo:mysql},
            {name:'MongoDb', logo: mongodb}
        ]
    },
    {
        title: 'Languages',
        skills:[
            {name:'Java',logo:java},
            {name:'JavaScript',logo:javascript},
        ]
    },
    {
        title: 'Tools',
        skills:[
            {name:'GitHub',logo:github},
            {name:'VS Code',logo:vsCode},
            {name:'Postman',logo:postman},
            {name:'Eclipse',logo:eclipse},
            {name:'Netlify',logo:netlify},
            {name:'Compass',logo:mongodb},
            {name:'Intelli IDEA',logo:intel}
        ]
    }
]
export const experiences=[
    {
        id:0,
        img:jspiders,
        role:"Java Full Stack Developer",
        company:"Jspiders",
        date:"April 2025 - November 2025",
        desc:"As a Java Full Stack Developer Trainee at JSpiders, I underwent intensive hands-on training through the Incubation Program, focused on building strong foundations in both backend and frontend technologies. My role involved learning, implementing, and practicing end-to-end application development using Java-based technologies and modern web development tools.",
        skills:[
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Java",
            "Mongodb",
            "Sql",
            "Spring",
            "Springboot",
            "ReactJs"
        ]
    }
]
export const projects=[
    {
        id:0,
        title:"Food Delivery Application",
        description:"A Food Delivery Application developed using Spring Boot for the backend and React.js with Bootstrap for the frontend. The application allows users to browse restaurants, view menus, place orders, and track order status. I implemented REST APIs in Spring Boot for authentication, menu management, and order processing, and built a responsive UI in React using Bootstrap. The project also included features like user login, cart management, and secure communication between frontend and backend",
        image:foodDel,
        tags:["JAVA","SPRINGBOOT","REACTJS","BOOTSTRAP","MONGODB"],
        github:"https://github.com/BaliaSahu",
        webapp:"https://foodcourtuserr.netlify.app/"
    },
    {
        id:1,
        title:"Job Portal Application",
        description:"A full-stack job portal application built with ReactJS, Bootstrap, and Spring Boot, using MongoDB as the database. The application supports JWT-based authentication and provides separate interfaces for Recruiters and Job Seekers.",
        image:jobp,
        tags:["JAVA","SPRINGBOOT","REACTJS","BOOTSTRAP","MONGODB"],
        github:"https://github.com/BaliaSahu/JobPortal-FullStack",
        webapp:"https://jobcrackk.netlify.app"
    },
    {
        id:2,
        title:"Portfolio",
        description:"This is my personal portfolio website, built using React and Tailwind CSS, designed to showcase my professional journey and technical skills. The website includes detailed sections about my education, work experience, and projects, providing recruiters and visitors a comprehensive overview of my abilities.",
        image:portImage,
        tags:["REACTJS","TAILWIND-CSS"],
        github:"https://github.com/BaliaSahu/Portfolio",
        webapp:"https://baliasahu.netlify.app"
    },
    {
        id:3,
        title:"PasteBin",
        description:"This is a Pastebin-like web application built using Spring Boot, React.js, and MongoDB.The application allows users to create text pastes and share them using a unique URL.",
        image:image,
        tags:["REACTJS","TAILWIND-CSS"],
        github:"https://github.com/BaliaSahu/pastebin-app",
        webapp:"https://pasteb.netlify.app"
    },
    { 
        id:4,
        title:"Blogging Application",
        description:"A Blogging Application developed using the MERN stack. It allows users to register, log in, create, edit, and delete blog posts. The frontend was built using React.js, while the backend was developed using Node.js and Express.js. MongoDB was used for data storage. The application supports authentication, role-based access, and a responsive user interface.",
        image:"",
        tags:["JAVASCRIPT","EXPRESS","REACTJS","CSS","NODEJS","MONGODB"],
        github:"https://github.com/BaliaSahu",
        webapp:""
    }
]
export const education=[
    {
        id:0,
        img:gietlogo,
        school:"Giet University, Gunupur",
        date:"Sept 2023 - June 2025",
        grade:"8.78 CGPA",
        desc:"I completed my MCA from GIET University, Gunupur, with a strong focus on software development and full-stack technologies. My academic journey helped me build a solid foundation in programming, database management, and web application development. I have applied these skills by working on real-world projects using modern technologies.",
        degree:"Master of Computer Application - MCA"
    },
    {
        id:1,
        img:ku,
        school:"Kalahandi University, Kalahandi",
        date:"August 2020 - June 2023",
        grade:"7.9 CGPA",
        desc:"I completed my Bachelor of Science (B.Sc.) in Computer Science from Kalahandi University, Kalahandi, where I built a strong foundation in programming, computer fundamentals, and problem-solving. My coursework helped me understand core concepts of computer science and prepared me for advanced studies and practical application development.",
        degree:"Bachelor of Science - BSC (Computer Science)"
    },
    {
        id:2,
        img:lcs,
        school:"Lambodar Higher secondary school of science, Chichaiguda",
        date:"Sept 2018 - August 2020",
        grade:"",
        desc:"I completed my +2 education under CHSE from Lambodar College of Science, Chichaiguda, where I studied core subjects with a focus on science and analytical thinking. This stage of education helped me build a strong academic foundation for higher studies in computer science.",
        degree:"+2"
    },{
        id:3,
        img:bseOdisha,
        school:"Sandhikuliary high school, Sandhikuliary",
        date:"May 2018 ",
        grade:"",
        desc:"I completed my 10th standard under BSE Odisha, where I gained a strong foundation in core academic subjects. This stage of education helped develop my discipline, problem-solving ability, and learning mindset.",
        degree:"School"
    }
]