import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    riverpod,
    flutter,
    dart,
    firebase,
    parisdisneyshuttle,
    company,
    sysres,
    aws,
    bash,
    c,
    cpp,
    docker,
    golang,
    java,
    jenkins,
    linux,
    maven,
    mysql,
    php,
    sonarqube,
    springboot,
    medium,
} from "../assets/icons";

export const skills = [
    // {
    //     imageUrl: css,
    //     name: "CSS",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    // {
    //     imageUrl: html,
    //     name: "HTML",
    //     type: "Frontend",
    // },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Frontend",
    },
    {
        imageUrl: dart,
        name: "Dart",
        type: "Frontend",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: riverpod,
        name: "Riverpod",
        type: "State Management",
    },
    // {
    //     imageUrl: aws,
    //     name: "AWS",
    //     type: "Cloud Computing",
    // },
    {
        imageUrl: bash,
        name: "Bash",
        type: "scripting",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Backend",
    },
    // {
    //     imageUrl: cpp,
    //     name: "C++",
    //     type: "Backend",
    // },
    {
        imageUrl: docker,
        name: "Docker",
        type: "containerization",
    },
    {
        imageUrl: golang,
        name: "Go",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    // {
    //     imageUrl: jenkins,
    //     name: "Jenkins",
    //     type: "CI/CD",
    // },
    {
        imageUrl: linux,
        name: "Linux",
        type: "Environment",
    },
    {
        imageUrl: maven,
        name: "Maven",
        type: "Build Automation",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: sonarqube,
        name: "SonarQube",
        type: "Continuous Integration",
    },
    // {
    //     imageUrl: springboot,
    //     name: "Spring Boot",
    //     type: "Backend",
    // },
];

export const experiences = [
    {
        title: "Research Intern",
        company_name: "SysRes@UCSC",
        icon: sysres,
        iconBg: "#8B35E150",
        date: "November 2023 - May 2024",
        points: [
            "Researching and implementing on DEHATI - Decentralized Encrypted Host-based Application-level Tunneling Infrastructure",
            "Exercise independent judgment in selecting methods, techniques, and evaluation criteria for obtaining results.",
            "Assisting in the preparation of research papers and reports.",
            "Ability to work in a self-deciplined manner and to work with minimal supervision.",
        ],
    },
    {
        title: "Part-time Fullstack Developer",
        company_name: "parisdisneyshuttle",
        icon: parisdisneyshuttle,
        iconBg: "#fbc3bc",
        date: "Feb 2024 - Dec 2024",
        points: [
            "Developing and maintaining business web-application using Angular.js, PHP, and MySQL.",
            "Integrated latest-PHP modules to the legacy codebase.",
            "Improve & debug the existing codebase.",
            "Developed a new feature to the existing system.",
        ],
    },
    {
        title: "Mobile Application Developer",
        company_name: "DecodeLabs",
        icon: company,
        iconBg: "#b7e4c7",
        date: "since Dec 2024",
        points: [
            "Developing and maintaining Mobile Applications using Flutter, Firebase, and Riverpod.",
            "Designing the mobile application Architecture and implementing the best practices leveraging the feature-first MVVM architecture.",
            "Participating in the code reviews and providing constructive feedback to other developers.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to deliver high-quality products.",
        ],
    },
];

export const BlogDetails = [
    {
        title: "Blog 1",
        hosted_site: "Medium",
        icon: medium,
        iconBg: "#8B35E150",
        date: "November 2023",
        points: [
            "Points on the blog post",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/CJ-404',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/charith-jayarangana-27bb51212/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];