import {
    contact,
    git,
    github,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    react,
    redux,
    typescript,
    riverpod,
    flutter,
    dart,
    firebase,
    parisdisneyshuttle,
    company,
    sysres,
    bash,
    c,
    docker,
    golang,
    java,
    linux,
    maven,
    mysql,
    php,
    sonarqube,
    medium,
    sfsa,
    flatwork,
    ceeserver,
    teasubsidy,
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

export const educations = [
    {
        title: "Bachelor of Science(hons) in Computer Science",
        company_name: "University of Colombo School of Computing",
        icon: company,
        iconBg: "#b7e4c7",
        date: "Since 2021",
        points: [
            "CGPA: 3.79",
            "Relevant Coursework: Data Structures, Algorithms, Operating Systems, Computer Networks, Database Management Systems, Software Engineering, Computer Architecture, Compiler Design, and Theory of Computation.",
        ],
    },
    {
        title: "Advanced Level",
        company_name: "Taxila Central College Horana",
        icon: company,
        iconBg: "#b7e4c7",
        date: "2019",
        points: [
            "Stream: Physical Science",
            "Results:",
            "Combined Mathematics: A",
            "Physics: B",
            "Chemistry: B",
        ],
    },
    {
        title: "Ordinary Level",
        company_name: "Royal College Panadura",
        icon: company,
        iconBg: "#b7e4c7",
        date: "2016",
        points: [
            "Results: 9A's",
        ],
    },
];

export const BlogDetails = [
    {
        title: "Parallelized Blocked Matrix Multiplication using OpenMP",
        hosted_site: "Medium",
        icon: medium,
        iconBg: "#8B35E150",
        date: "27 November 2024",
        link: "https://medium.com/@cj.ptsz/parallelized-blocked-matrix-multiplication-using-openmp-97a4bc620a47",
        points: [
            "What is OpenMP and example usage",
            "Optimize Simple matrix multiplication using Blocked matrix multiplication",
            "Analysing the better approach to parallelize the blocked matrix multiplication",
            "Results and performance comparison using simple graphs",
        ],
    },
    {
        title: "Creating C shared libraries for Linux",
        hosted_site: "Medium",
        icon: medium,
        iconBg: "#8B35E150",
        date: "14 Augest 2023",
        link: "https://medium.com/dev-genius/creating-c-shared-libraries-for-linux-42ccc75af0d4",
        points: [
            "Creating shared libraries in C to reuse across all our C codebases.",
            "Using header files",
            "what is a shared library and how to create & compile one.",
            "How to reuse shared libraries in C code",
            "Published in Dev Genius",
        ],
    },
    {
        title: "Intro to Compilers",
        hosted_site: "Medium",
        icon: medium,
        iconBg: "#8B35E150",
        date: "8 June 2023",
        link: "https://medium.com/@cj.ptsz/intro-to-compilers-46e6dea0c3e4",
        points: [
            "Need of a compiler",
            "What is a compiler",
            "Structure of a compiler",
            "Phases of a compiler",
            "Simple comparison with interpreters",
        ],
    },
    {
        title: "Design Patterns",
        hosted_site: "Medium",
        icon: medium,
        iconBg: "#8B35E150",
        date: "5 June 2023",
        link: "https://medium.com/@cj.ptsz/design-patterns-bff7522cffc5",
        points: [
            "Need of a design pattern",
            "What is a design pattern",
            "Advantages of using design patterns",
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
        iconUrl: '',
        theme: 'btn-back-blue',
        name: 'Dehati',
        description: 'Decentralized Encrypted Host-based Application-level Tunneling Infrastructure is a research project I have done in SysRes research group as an research intern that aims to provide a peer-to-peer decentralized network for secure private communication using Golang.',
        link: '',
        isOSS: false,
    },
    {
        iconUrl: sfsa,
        theme: 'btn-back-green',
        name: 'SFSA',
        description: 'Simulator for Scheduling Algorithms is an ongoing simple project that can be used to simulate different scheduling algorithms and visualize how the memory, registers, and other components of an operating system work together. Under the hood, this uses a C program (virtual machine) that can read simple assembly-like instructions and execute',
        link: 'https://github.com/GrandLine404/SFSA-server',
        isOSS: true,
    },
    {
        iconUrl: ceeserver,
        theme: 'btn-back-red',
        name: 'Cee-Lightnening Server',
        description: 'Cee-Lightnening Server is a simple web server like apache that cab serve html pages as well as json responses like an API, but it is written solely in C. It is a simple open source project that I started to learn how web servers work behind the seen.',  
        link: 'https://github.com/CJ-404/CeeLightning-Server',
        isOSS: true,
    },
    {
        iconUrl: flatwork,
        theme: 'btn-back-yellow',
        name: 'Flatwork',
        description: 'Flatwork is a mobile application for project management and real-time collaboration using chats, tasks, and file sharing.',
        link: '',
        isOSS: false,
    },
    {
        iconUrl: '',
        theme: 'btn-back-blue',
        name: 'gll-app',
        description: 'gll-app is an ongoing mobile application for employee management and video learning platform for an Organization.',
        link: '',
        isOSS: false,
    },
    {
        iconUrl: '',
        theme: 'btn-back-green',
        name: 'PGPR System',
        description: 'Postgraduate Program Review System is a web application for automating the process of reviewing the postgraduate programs in government universities in Sri Lanka.',
        link: '',
        isOSS: false,
    },
    {
        iconUrl: teasubsidy,
        theme: 'btn-back-red',
        name: 'Tea Subsidy System',
        description: 'Tea Subsidy System is a web application for automating the process of providing subsidies to the tea farmers/ tea land owners in Sri Lanka. This is a leaarning project which created a simple MVC framework using pure PHP, JS and HTML without the help of any framworks or libraries to learn the basics & foundation of web development frameworks.',
        link: '',
        isOSS: false,
    },
    {
        iconUrl: '',
        theme: 'btn-back-yellow',
        name: 'Parser for a simple programming language',
        description: 'A learning project using Bison and Flex to learn how compilers parse the code according to the language grammar and generate the abstract syntax tree to execute the code.',
        link: 'https://github.com/Ramith-D-Rodrigo/Flex-Bison',
        isOSS: true,
    }
];

export const achivements = [
    {
        iconUrl: '',
        theme: 'btn-back-blue',
        name: 'Director\'s List',
        description: 'Awarded Director\'s List 2 times for years 2022 and 2023 for maintaining overall GPA above 3.7',
        link: '',
        hasProof: false,
    },
    {
        iconUrl: '',
        theme: 'btn-back-green',
        name: 'MadHack 2.0 - 2023',
        description: 'Won the All-Island 2nd place in the MadHack 2.0 hackathon organized by the University of Colombo School of Computing.',
        link: '',
        hasProof: false,
    },
    {
        iconUrl: '',
        theme: 'btn-back-red',
        name: 'FreshHack 2023',
        description: 'participated in the FreshHack 2023 hackathon organized by the University of Kelaniya.',
        link: '',
        hasProof: false,
    },
    {
        iconUrl: '',
        theme: 'btn-back-red',
        name: 'Mora Kings BLITZ International Open Rating Chess Tournament 2024',
        description: 'Placed under top 250 rank and opened rating by drawing a match against a rated player',
        link: '',
        hasProof: false,
    },
];