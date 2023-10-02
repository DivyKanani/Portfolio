/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Divy's Portfolio",
  description:
    "Where I love to showcase my work and passion for Computer Science.",
  og: {
    title: "Divy Kanani Portfolio",
    type: "website",
    url: "http://vjspranav.dev/",
  },
};

//Home Page
const greeting = {
  title: "Divy Kanani",
  logo_name: "Divy Kanani",
  nickname: "DivyKanani",
  // and loves to teach
  subTitle:
    "Embracing the dynamic world of software development and DevOps, I'm a recent graduate driven by a fervor for crafting efficient, scalable solutions. With a solid foundation in coding and a penchant for automation, I'm poised to optimize workflows and elevate projects to new heights. From web applications to system architectures, I'm committed to creating robust, user-centric solutions. Let's collaborate and drive innovation together!",
  resumeLink:
    "https://drive.google.com/file/d/1rcqXnT-njeMxJXqG1ZPV_DyJHRhI9uBc/view",
  portfolio_repository: "https://github.com/DivyKanani",
  githubProfile: "https://github.com/DivyKanani",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Divykanani",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/Divykanani/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:divykanani9@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",
        "⚡ Creating application backend in Java, Node & Express",
        "⚡ Experience with SQL and NoSQL databases",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-spring",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "fa6-brands:node",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on AWS cloud platforms",
        "⚡ AWS Certified Developer - Associate",
        "⚡ Deploying and maintaining projects on AWS along with CI/CD integration",
        "⚡ Experience with serverless architecture",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "cloudformation",
          fontAwesomeClassname: "logos:aws-cloudformation",
          style: {
            color: "#FF9900",
            backgroundColor: "#000000",
          },
        },
        // lambda
        {
          skillName: "Lambda",
          fontAwesomeClassname: "logos:aws-lambda",
          style: {
            color: "#FF9900",
            backgroundColor: "#000000",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#623CEA",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "RDS",
          fontAwesomeClassname: "logos:aws-rds",
          style: {
            color: "#FF9900",
            backgroundColor: "#000000",
          },
        },
        {
          skillName: "DynamoDB",
          fontAwesomeClassname: "logos:aws-dynamodb",
          style: {
            color: "#FF9900",
            backgroundColor: "#000000",
          },
        },
        {
          skillName: "Cloudwatch",
          fontAwesomeClassname: "logos:aws-cloudwatch",
          style: {
            color: "#FF9900",
            backgroundColor: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Cleveland State University",
      subtitle: "Bachelor of Science in Computer Science",
      logo_path: "csu_logo.png",
      alt_name: "CSU",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ Minor in Mathematics",
        "⚡ GPA 3.81/4.00",
        "⚡ President's List, Research Assistant (Algorithms)",
      ],
      website_link: "http://csuohio.edu",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Developer - Associate",
      subtitle: "Amazon Web Services",
      logo_path: "aws-certified-developer.png",
      certificate_link:
        "https://www.credly.com/badges/e6a48340-3230-49ec-9608-117bdf6fa608/public_url",
      alt_name: "AWS",
      color_code: "#FFFFFF",
    },
    {
      title: "Full Stack Java Developer",
      subtitle: "Udemy",
      logo_path: "Udemy_logo.svg.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-57e8c425-3999-4b8b-aa13-94908ccbf68c/",
      alt_name: "Udemy",
      color_code: "#FFFFFF",
    },
    {
      title: "AWS Cloud Essential",
      subtitle: "AWS | Coursera",
      logo_path: "aws.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/WUKWZ9AE874T",
      alt_name: "AWS",
      color_code: "#FFFFFF",
    },
    {
      title: "Databases for Backend",
      subtitle: "Meta | Coursera",
      logo_path: "meta-logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/LQH7YV9TYH85",
      alt_name: "Meta",
      color_code: "#FFFFFF",
    },
    {
      title: "Python",
      subtitle: "Meta | Coursera",
      logo_path: "meta-logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/T7X73VQSDDS9",
      alt_name: "Meta",
      color_code: "#FFFFFF",
    },
    {
      title: "Version Control",
      subtitle: "Meta | Coursera",
      logo_path: "meta-logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6YHA82NCHPVM",
      alt_name: "Meta",
      color_code: "#FFFFFF",
    },
    {
      title: "Advance React JS",
      subtitle: "Codecademy",
      logo_path: "codecademy.png",
      certificate_link:
        "https://www.codecademy.com/profiles/divyKanani9754843545/certificates/13ffe064f6504262a9e9e3cf76be9bf3",
      alt_name: "Codecademy",
      color_code: "#FFFFFF",
    },
    {
      title: "Express JS",
      subtitle: "Codecademy",
      logo_path: "codecademy.png",
      certificate_link:
        "https://www.codecademy.com/profiles/divyKanani9754843545/certificates/85396dd6e2e850ab34e904243aa464c6",
      alt_name: "Codecademy",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description: "All my internships, teaching and research roles.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Intern, DevOps Engineer",
          company: "Hyland Software",
          company_url: "https://www.hyland.com/en",
          logo_path: "Hyland.jfif",
          duration: "May 2023 - August 2023",
          location: "Cleveland, OH",
          description:
            "Implement CI/CD pipelines and automated infrastructure provisioning using tools like GitHub actions, Terraform, and Docker, resulting in a 40% reduction in deployment time compared to manual setups.Assisted in migrating legacy on-premises applications to the AWS cloud platform, resulting in a significant reduction of over 67% in monthly infrastructure expenses. Implemented resource tagging system for a substantial AWS infrastructure, tagging over 1000+ resources, enabling efficient resource management, and cost allocation across multiple projects. Supported in monitoring and maintaining multiple production environments, significantly improving uptime and contributing to a notable reduction in incident response time.",
        },
      ],
    },
    {
      title: "Teaching and Research Roles",
      experiences: [
        {
          title: "Algorithm Research Assistant",
          company: "Cleveland State University",
          company_url: "https://csuohio.edu/",
          logo_path: "csu_logo.png",
          duration: "Summer 2022",
          location: "Cleveland, OH",
          description:
            "Conducted research on the one-center problem of uncertain points on cactus graphs, a facility location problem. Designed a prune-and-search algorithm to solve the problem efficiently, with a time complexity of O(|G| + mn log(mn)). Supported Studied the impact of uncertainty in real-world measurement on facility location problem, and demonstrated the practical application of proposed algorithm, showcasing it potential for real-life situation.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Virtual Experiences",
      experiences: [
        {
          title: "Advanced Software Engineering Virtual Experience",
          company: "Walmart Global Tech X The Forage",
          company_url:
            "https://www.linkedin.com/company/google-developer-student-clubs-iiit-hyderabad/?originalSubdomain=in",
          logo_path: "walmart_logo.jpg",
          duration: "May 2022",
          location: "Online",
          description:
            "Generated a novel data structure on a problem, to improve performance and keeping the memory usage minimal. Constructed UML class diagram and ERD for software architecture and design a relational database to satisfy a complexcollection of requirements. Used Python and sqlite3 module for Data munging, extracted the relevant data and munge it into format that fits the database schema.",
          color: "#0C9D58",
        },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "Everything I've worked on.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Research",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Computing the Center of Uncertain Points on Cactus Graphs",
      createdAt: "August 2022",
      description:
        "Facility locatons play an important role in operatons research due to its wide applicatons in reallife situatons. Recently, due to the observaton that many real-world measurements are inherently accompanied with uncertainty, facility locatons on uncertain demand data have atracted anincreasing amount of atenton. In this project, we study the one-center problem on the cactusgraphs, one of the classical facility locaton problem, on uncertain points. We design a prune-and search algorithm for the problem.",
      url:
        "https://drive.google.com/file/d/1o21LK2-KbKw6wzKV1G1Nv3H0kxB4Wx1_/view?usp=sharing",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_placeholder_user.png",
    description:
      "Contact me for any queries or collaboration. I am always available for a chat. You can also ask me about my projects, research or anything you want to know.",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
