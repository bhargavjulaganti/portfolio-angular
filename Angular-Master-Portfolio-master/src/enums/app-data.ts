import { EducationSection } from "../interfaces/education.interface";
import { ExternalSite } from "../interfaces/external-site.interface"
import { ProjectSection } from "../interfaces/project.interface";
import { SkillSection } from "../interfaces/skill-section.interface";
import { ExperienceSection } from "../interfaces/work-experience.interface";
import { AssetPaths } from "./asset-paths.enum";

// Social media links to show
const SocialMediaLinks: ExternalSite[] = [
    {
        name: "Github",
        link: "https://github.com/dhruvilrathod",
        simpleIconName: "github",
        backgroundColor: "#181717",
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/dhruvilrathod/",
        simpleIconName: "linkedin", // this icon is not available in simple icon v14
        backgroundColor: "#0066c8", // manually checked
    },
    {
        name: "LeetCode",
        link: "https://leetcode.com/dhruvilrathod/",
        simpleIconName: "leetcode",
        backgroundColor: "#FFA116",
    },
    {
        name: "Gmail",
        link: "mailto:thedhruvilrathod@gmail.com",
        simpleIconName: "gmail",
        backgroundColor: "#EA4335",
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/dhruvil.rthd/",
        simpleIconName: "instagram",
        backgroundColor: "#FF0069",
    }
]

// Fullstack skills
const FullstackSkills: ExternalSite[] = [
    {
        name: "Angular",
        link: "https://angular.dev/",
        simpleIconName: "angular",
        backgroundColor: "#ea2848",
    },
    {
        name: "HTML5",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        simpleIconName: "html5",
        backgroundColor: "#E34F26",
    },
    {
        name: "CSS3",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        simpleIconName: "css3",
        backgroundColor: "#1572B6",
    },
    {
        name: "Sass",
        link: "https://sass-lang.com/",
        simpleIconName: "sass",
        backgroundColor: "#CC6699",
    },
    {
        name: "NodeJS",
        link: "https://nodejs.org/",
        simpleIconName: "nodedotjs",
        backgroundColor: "#5FA04E",
    },
    {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        simpleIconName: "javascript",
        backgroundColor: "#F7DF1E",
    },
    {
        name: "ExpressJS",
        link: "https://expressjs.com/",
        simpleIconName: "express",
        backgroundColor: "#000000",
    },
    {
        name: "ThreeJS",
        link: "https://threejs.org/",
        simpleIconName: "threedotjs",
        backgroundColor: "#000000",
    },
    {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
        simpleIconName: "tailwindcss",
        backgroundColor: "#06B6D4",
    },
    {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        simpleIconName: "bootstrap",
        backgroundColor: "#7952B3",
    },
    {
        name: "PrimeNG",
        link: "https://primeng.org/",
        simpleIconName: "primeng",
        backgroundColor: "#DD0031",
    },
];

// Fullstack section
const FullstackSection: SkillSection = {
    sectionTitle: "Fullstack Development",
    imagePath: AssetPaths.FULL_STACK_DEVELOPMENT_SVG,
    skillLinks: FullstackSkills,
    skillsList: [
        "Building responsive website front-end using Angular",
        "Developing custom and interactive 3D websites",
        "Creating application backend in Node, Express & NestJS",
        "Managing data safely with PostgreSQL, MongoDB and OracleDB",
    ]
}

// Could skills
const CloudSkills: ExternalSite[] = [
    {
        name: "GCP",
        link: "https://cloud.google.com/",
        simpleIconName: "googlecloud",
        backgroundColor: "#4285F4",
    },
    {
        name: "AWS",
        link: "https://aws.amazon.com/",
        simpleIconName: "amazonwebservices",
        backgroundColor: "#232F3E",
    },
    {
        name: "Firebase",
        link: "https://firebase.google.com/",
        simpleIconName: "firebase",
        backgroundColor: "#FFCA28",
    },
    {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
        simpleIconName: "postgresql",
        backgroundColor: "#336791",
    },
    {
        name: "MongoDB",
        link: "https://www.mongodb.com/",
        simpleIconName: "mongodb",
        backgroundColor: "#47A248",
    },
    {
        name: "Docker",
        link: "https://www.docker.com/",
        simpleIconName: "docker",
        backgroundColor: "#1488C6",
    },
    {
        name: "Render",
        link: "https://render.com/",
        simpleIconName: "render",
        backgroundColor: "#000000",
    },
    {
        name: "Heroku",
        link: "https://www.heroku.com/",
        simpleIconName: "heroku",
        backgroundColor: "#430098",
    },
];

// Could section
const CloudSection: SkillSection = {
    sectionTitle: "Cloud Infra-Architecture",
    imagePath: AssetPaths.CLOUD_INFRASTRUCTURE_SVG,
    skillLinks: CloudSkills,
    skillsList: [
        "Experience working on multiple cloud platforms including GCP, AWS, FireBase, and Render",
        "Hosting and maintaining websites on FireBase hosting and GoDaddy along with integration of databases",
        "Setting up email triggers and Googlesheet integration for streamline client inquiry",
    ]
}

// Design skills
const DesignSkills: ExternalSite[] = [
    {
        name: "Adobe XD",
        link: "https://adobexdplatform.com/",
        simpleIconName: "adobexd",
        backgroundColor: "#FF2BC2",
    },
    {
        name: "Figma",
        link: "https://figma.com/",
        simpleIconName: "figma",
        backgroundColor: "#F24E1E",
    },
    {
        name: "Adobe Illustrator",
        link: "https://www.adobe.com/au/products/illustrator.html/",
        simpleIconName: "adobeillustrator",
        backgroundColor: "#FF7C00",
    },
    {
        name: "Adobe Photoshop",
        link: "https://www.adobe.com/products/photoshop.html/",
        simpleIconName: "adobephotoshop",
        backgroundColor: "#001e36",
    },
];

// Design section
const DesignSection: SkillSection = {
    sectionTitle: "UI/UX Design",
    imagePath: AssetPaths.UI_UX_DESIGN_SVG,
    skillLinks: DesignSkills,
    skillsList: [
        "Designing highly attractive and responsive user interface for web applications",
        "Customizing logo designs, creating visiting cards and virtual cards from scratch",
        "Creating the flow of application functionalities to optimize user experience",
    ]
}

// Design skills
const DigitalSolutionSkills: ExternalSite[] = [

];

// Design section
const DigitalSolutionSection: SkillSection = {
    sectionTitle: "Digital Solutions & Consultancy",
    imagePath: AssetPaths.DIGITAL_SOLUTIONS_SVG,
    skillLinks: DigitalSolutionSkills,
    skillsList: [
        "Streamlining business operations with tools like Jira, offering automated workflows, and data-driven insights.",
        "Centralizing business data within secure, interconnected platforms to facilitate informed decision-making",
        "Helping local businesses enable real-time communication and task coordination through MS Teams and Outlook",
    ]
}

// Personal projects
const PersonalProjects: ProjectSection = {
    sectionTitle: "My Projects",
    sectionSubtitle: "🚀 Showcasing innovative solutions and real-world applications built with cutting-edge technologies.",
    entities: [
        {
            title: "Web-Based 3D IFC File Viewer",
            coverImagePath: AssetPaths.PROJECT_THREEJS_IFC_VIEWER,
            liveLink: "https://dhruvilrathod.github.io/webifcviewer/",
            githubLink: "https://github.com/dhruvilrathod/three_ifc_angular",
            description: "🧱 This tool enables seamless visualization of IFC files in your browser. Toggle elements, explore real-time details by hovering, search and highlight elements, and interact with ease for a dynamic 3D experience.",
            techStack: ["Angular", "ThreeJS", "ExpressJS", "Heroku"],
            year: 2022
        },
        {
            title: "Customizable Multi-Select Dropdown",
            coverImagePath: AssetPaths.PROJECT_CUSTOM_DROPDOWN,
            githubLink: "https://github.com/dhruvilrathod/custom-dropdown/tree/resource-tree-utility",
            description: "🌲 An Angular-based, asynchronous multi-select dropdown designed for tree-structured data with custom validation. It's a powerful replacement for jQuery's Select2.",
            techStack: ["Angular", "TypeScript", "SCSS"],
            year: 2023,
            branch: "resource-tree-utility"
        },
        {
            title: "Learning Management System",
            coverImagePath: AssetPaths.PROJECT_LMS_APP,
            githubLink: "https://github.com/dhruvilrathod/lms-asite",
            description: "📚 A production-grade frontend for a Learning Management System, designed with scalability in mind to deliver a seamless and efficient user experience.",
            techStack: ["Angular", "PrimeNG", "Tailwind", "Figma"],
            year: 2023
        },
        {
            title: "Angular + NestJS Boilerplate",
            coverImagePath: AssetPaths.PROJECT_ANGULAR_NEST_DOCKER,
            githubLink: "https://github.com/dhruvilrathod/sample-angular-nest",
            description: "🛠️ A production-grade boilerplate integrating Angular, NestJS, and Nginx for seamless fullstack development. Perfect for kickstarting robust and scalable web applications.",
            techStack: ["Angular", "NestJS", "NgINX", "Docker"],
            year: 2023
        },
        {
            title: "Hospital Management System Dashboard",
            coverImagePath: AssetPaths.PROJECT_HMS_APP,
            githubLink: "https://github.com/freelancer-dhruvil/hms-demo",
            description: "🏥 Transformed Figma designs into a fully functional, user-friendly dashboard for a Hospital Management System, ensuring precision and intuitive interface.",
            techStack: ["Angular", "PrimeNG", "PrimeFlex", "Figma"],
            year: 2024
        },
        {
            title: "Cross-Platform Music Player",
            coverImagePath: AssetPaths.PROJECT_MUSIC_PLAYER,
            githubLink: "https://github.com/dhruvilrathod/music_player",
            description: "🎵 Developed with Angular and NestJS, this music player evolved into a fullstack app and was wrapped with ElectronJS for a seamless desktop experience.",
            techStack: ["Angular", "NestJS", "ElectronJS", "ExpressJS"],
            year: 2023
        }
    ]
}

// Freelancing projects
const FreelancingProjects: ProjectSection = {
    sectionTitle: "Freelancing",
    sectionSubtitle: "🚀 Transforming Ideas into Digital Solutions: Tailored Websites, Custom CMS, and More!",
    entities: [
        {
            title: "Kiwi Finance",
            coverImagePath: AssetPaths.PROJECT_KIWI_FINANCE,
            liveLink: "https://kiwifinance.com.au/",
            description: "💰 Developed a tailored website for a new Perth-based finance and mortgage broking business, combining modern design with a focus on accessibility and client engagement.",
            techStack: ["Angular", "MongoDB", "NestJS", "Firebase"],
            year: 2025
        },
        {
            title: "RAS Finance Website + CMS",
            coverImagePath: AssetPaths.PROJECT_RAS_FINANCE,
            liveLink: "https://rasfinance.com.au/",
            description: "📈 Designed a bespoke website for a leading South Australia-based finance and mortgage broking business, showcasing services with a sleek, client-focused design.",
            techStack: ["Angular", "MongoDB", "NestJS", "Firebase"],
            year: 2024
        },
        {
            title: "Acquire Conveyancing Website",
            coverImagePath: AssetPaths.PROJECT_ACQUIRE_CONVEYANCING,
            liveLink: "https://acquireconveyancing.com.au/",
            description: "🏡 Crafted a tailored website for a South Australia-based conveyancing business, delivering a professional online presence with user-friendly design and local appeal.",
            techStack: ["Angular", "Tailwind", "Firebase"],
            year: 2023
        },
    ]
}


// Job experience
const JobExperience: ExperienceSection = {
    experienceSectionTitle: "Work Experience",
    experiences: [
        {
            orgLink: "https://acquireconveyancing.com.au/",
            orgLogoPath: AssetPaths.WORK_ACQUIRE_LOGO,
            orgName: "Acquire Conveyancing",
            positions: [
                {
                    positionName: "Conveyancing Assistant",
                    duration: "Apr 2024 - Present",
                    location: "Adelaide, SA",
                    locationType: "On-Site",
                    jobType: "Part-time",
                    workPoints: [
                        "Ensured secure management of sensitive data with top-notch IT support. 🔒",
                        "Streamlined property searches by liaising with government agencies. 🏡",
                        "Prepared legal documents like Cooling Off Forms, Nominations, and Addendums. 📝",
                        "Optimized software workflows with precise data entry and customized templates in CATS and PEXA. ⚙️",
                    ]
                }
            ]
        },
        {
            orgLink: "https://www.asite.com/",
            orgLogoPath: AssetPaths.WORK_ASITE_LOGO,
            orgName: "Asite Solution",
            positions: [
                {
                    positionName: "Jr Software Engineer",
                    duration: "Jun 2023 - Mar 2024",
                    location: "Ahmedabad, India",
                    locationType: "Hybrid",
                    jobType: "Full-time",
                    workPoints: [
                        "Built the Issue Tracker feature for the cBIM unit, integrating 30+ Angular components like side pane, image carousel, and quill editor. 🚀📋",
                        "Designed a robust Angular reactive form and a customizable async dropdown for efficient file-folder tree searches, enhancing Record Retention Policy. 📂🔍",
                        "Debugged and unit-tested code using Karma & Jasmine, achieving an impressive 96% coverage. 🐞✅",
                    ]
                }
            ]
        }
    ]
}

// Freenacing Experience
const FreelancingExperience: ExperienceSection = {
    experienceSectionTitle: "Freelancing",
    experiences: [
        {
            orgLink: "https://kiwifinance.com.au/",
            orgLogoPath: AssetPaths.WORK_KIWI_LOGO,
            orgName: "Kiwi Finance",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2025",
                    location: "Perth, WA",
                    locationType: "Remote",
                    jobType: "Contract",
                    workPoints: [
                        "Designed and developed an SEO-friendly website with financial calculators, and a custom contact form tailored to Astute Financial's requirements. 🌐📊",
                        "Streamlined data collection and client inquiries by integrating the contact form with Google Sheets and Gmail. 📋",
                    ]
                }
            ]
        },
        {
            orgLink: "https://rasfinance.com.au/",
            orgLogoPath: AssetPaths.WORK_RAS_LOGO,
            orgName: "RAS Finance",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2024",
                    location: "Adelaide, SA",
                    locationType: "Hybrid",
                    jobType: "Contract",
                    workPoints: [
                        "Built a dynamic website featuring financial calculators, a CMS for articles, and a sleek contact form. 📊📝",
                        "Streamlined client inquiries by integrating the contact form with Google Sheets and Gmail. 📧📋✨",
                    ]
                }
            ]
        },
        {
            orgLink: "https://acquireconveyancing.com.au/",
            orgLogoPath: AssetPaths.WORK_ACQUIRE_LOGO,
            orgName: "Acquire Conveyancing",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2023",
                    location: "Adelaide, SA",
                    locationType: "Remote",
                    jobType: "Contract",
                    workPoints: [
                        "Crafted a professional logo, business cards, and responsive website using Illustrator. 🎨💼",
                        "Set up a custom domain email and Office 365 with SharePoint for seamless operations. 📧🔗",
                        "Developed and hosted an SEO-friendly website with a contact form to boost online presence. 🌐📈",
                    ]
                }
            ]
        },
    ]
}

// Internships Experience
const InternshipExperience: ExperienceSection = {
    experienceSectionTitle: "Internships",
    experiences: [
        {
            orgLink: "https://asite.com/",
            orgLogoPath: AssetPaths.WORK_ASITE_LOGO,
            orgName: "Asite Solution",
            positions: [
                {
                    positionName: "UI Developer Intern",
                    duration: "Feb 2023 - May 2023",
                    location: "Ahmedabad, India",
                    locationType: "Hybrid",
                    jobType: "Full-time",
                    workPoints: [
                        "Led an 11-member team to design and implement the frontend architecture of an LMS using Angular, following the latest methodologies and best practices. 🚀💻",
                        "Gained expertise in Angular, jQuery, SCSS, and DSA through personalized training and hands-on assignments during the internship. 🌟📊✨",
                    ]
                },
                {
                    positionName: "Software Engineering Intern",
                    duration: "Jun 2022 — Jul 2022",
                    location: "Ahmedabad, India",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "Developed an innovative 3D IFC file viewer using Three.js, applying DSA concepts to create a tree-like structure for exploring model internals. 🌐🌳📐",
                        "Deployed the Node.js backend on Heroku and hosted the frontend on GitHub Pages for seamless accessibility. 🚀💻✨",
                    ]
                }
            ]
        },
        {
            orgLink: "https://workxmate.com/",
            orgLogoPath: AssetPaths.WORK_WORKXMATE_LOGO,
            orgName: "WorkXMate Technologies Pvt. Ltd.",
            positions: [
                {
                    positionName: "Angular Developer Internship",
                    duration: "Feb 2022 — Mar 2022",
                    location: "Noida, India",
                    locationType: "Remote",
                    jobType: "Part-time",
                    workPoints: [
                        "Designed and implemented an optimized, cross-browser-compatible Attendance Management Module. 🌐✔️",
                        "Built a RESTful Node.js server integrated with Oracle DB for seamless code migration. 🚀📊",
                        "Developed intuitive web forms with robust validation and error handling for a smooth user experience. 🖋️⚙️✨",
                    ]
                }
            ]
        },
    ]
}

// Community Involvement
const CommunityInvolvement: ExperienceSection = {
    experienceSectionTitle: "Community Involvement",
    experiences: [
        {
            orgLink: "https://adventofcode.com/",
            orgLogoPath: AssetPaths.WORK_ADVENT_OF_CODE_LOGO,
            orgName: "Advent of Code",
            positions: [
                {
                    positionName: "Problem Solver",
                    duration: "Dec 2024",
                    workPoints: [
                        "Completed all Advent of Code 2024 problems within a personal deadline of 1 day each, showcasing strong DSA and problem-solving skills. 📅🎯",
                        "Leveraged Python libraries like heapq and networkx to solve complex challenges efficiently and effectively. 🧩",
                    ]
                }
            ]
        },
    ]
}

// Degrees
const BachelorsDegree: EducationSection = {
    degreeName: "Bachelor of Engineering",
    majorName: "Computer Engineering",
    duration: "Jul 2019 - May 2023",
    universityName: "Gujarat Technological University (GTU)",
    campusName: "VGEC",
    logoImagePath: AssetPaths.EDUCATION_GTU_LOGO,
    gpa: "6.9 / 7.0",
    websiteLink: "https://www.gtu.ac.in/",
    studyPoints: [
        "Studied foundational subjects like Data Structures, Database Management Systems, Discrete Mathematics, and Operating Systems, building a strong base in computer science. 🧠💻",
        "Explored Object-Oriented Programming, Software Engineering, Computer Networks, and Microprocessor & Interfacing, bridging software development with hardware understanding. ⚙️",
        "Gained insights into Big Data Analytics, Artificial Intelligence, Data Mining, and Data Visualization, equipping skills for modern computing challenges. 🚀📊",
    ]
}

const MastersDegree: EducationSection = {
    degreeName: "Master of Information Technology",
    majorName: "Cyber Security",
    duration: "Feb 2024 - Dec 2025",
    universityName: "University of South Australia (UniSA)",
    campusName: "Mawson Lakes",
    logoImagePath: AssetPaths.EDUCATION_UNISA_LOGO,
    gpa: "6.7 / 7.0",
    websiteLink: "https://i.unisa.edu.au/students/",
    studyPoints: [
        "Built expertise in Security Principles, Network Infrastructure, and Risk Management, laying a solid foundation in cybersecurity fundamentals. 🔐",
        "Gained deep knowledge in Security Architecture, Network Security, and Critical Infrastructure Protection, alongside insights into Cyber Criminal Behavior and Australian Cyber Law. ⚙️🛡️",
        "Developed strategic skills through Consultancy, Enterprise Security, and hands-on labs experience with tech-giants including Cisco and FortiGate. 🚀",
    ]
}



export const AppConfig = {
    loaderSplashAnimation: true,        // enable or disable splash screen at the initialization of website
    logoName: "Dhruvil Rathod",         // Signature font logo name in header
    name: "Dhruvil Rathod",             // your name
    emailId: "thedhruvilrathod@gmail.com",  // your email id

    // Google Form Contact Link
    googleFormContactLink: "https://docs.google.com/forms/d/e/1FAIpQLSfMOsQhl_Lci5s_qrYN-LEWlJ3NoBag-Uyf17IGktExA5KDpw/viewform?usp=header",

    // Home page
    professionalTitle: "Development | Cyber Security | Freelancing",
    professionalSummary: "A results-driven software engineer with expertise in full-stack development of high-quality user-centric solutions in agile environments.",
    githubProfile: "https://github.com/dhruvilrathod",              // Your github profile link
    portfolioRepository: "https://github.com/dhruvilrathod/Angular-Master-Portfolio",        // Your portfolio repository link
    socialMedia: SocialMediaLinks,      // use from above
    aboutMe: [                          // all the sections you want to show under "What I do?". 
        FullstackSection,
        CloudSection,
        DesignSection,
        DigitalSolutionSection,
    ],

    // Projects page
    projectsPageTitle: "Projects & Freelancing",    // Title of projects page
    projectsPageDescription: "My projects leverage a diverse range of cutting-edge technology tools. I specialize in building data science solutions and seamlessly deploying them as web applications using robust cloud infrastructure.",
    projectSections: [                  // Define and add a custom section if needed
        FreelancingProjects,
        PersonalProjects,
    ],

    // Experience page
    experiencePageTitle: "Work, Internships and Involvements",
    experiencePageDescription: "💼 From Corporate Giants to Creative Freelance Projects: A Journey Through Internships, Challenges, Innovation and Community Invovements.",
    experienceSections: [               // Define and add a custom section if needed
        JobExperience,
        InternshipExperience,
        FreelancingExperience,
        CommunityInvolvement,
    ],

    // Education page
    educationPageTitle: "Degrees and Qualifications",
    educationPageDescription: "🎓 A Journey of Continuous Learning: Building Skills, Solving Problems, and Shaping the Future 🌟",
    educationSections: [
        MastersDegree,
        BachelorsDegree,
    ],

}
