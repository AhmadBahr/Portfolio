export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "/Ahmad Bahr_Résumé.pdf" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a LMS platform",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Super Tic-Tac-Toe",
    des: "Tic-tac-toe is a two-player game where players X and O take turns marking a 3x3 grid. This version enhances the traditional game with AI support and improved UI.",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Ultimate_tic-tac-toe_X_victory.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    githubLink: "https://github.com/AhmadBahr/LoginForm-SUPER-TicTacToeGame",
  },
  {
    id: 2,
    title: "Ryde",
    des: "Ryde is an Uber clone app, allowing users to book rides, track drivers in real-time, and make secure payments. Built to offer a seamless ride-sharing experience.",
    img: "https://www.itprobit.com/wp-content/uploads/2021/04/uber-clone.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    githubLink: "https://github.com/AhmadBahr/Ryde",
  },
  {
    id: 3,
    title: "Tesla Car",
    des: "A 3D interactive model of a Tesla car, showcasing its design and features. This project demonstrates the application of Three.js to create an immersive experience.",
    img: "https://i.pinimg.com/736x/f2/eb/b2/f2ebb20e28509ea8605d580e1a4af8f0.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    githubLink: "https://github.com/AhmadBahr/Tesla-Car",
  },
  {
    id: 4,
    title: "Sociopedia",
    des: "Sociopedia is a social media platform built with the MERN stack. It allows users to create profiles, connect with friends, and engage with posts through likes, comments, and shares.",
    img: "https://mike-palliparambil.vercel.app/portfolio/images/sociopedia-1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    githubLink: "https://github.com/AhmadBahr/Sociopedia",
  },
  {
    id: 5,
    title: "Pixel Quest",
    des: "PixelQuest is a 2D platformer game created using TypeScript and Kaboom.js. Featuring pixel art, players navigate through obstacles, collect items, and defeat enemies.",
    img: "https://raw.githubusercontent.com/AhmadBahr/PixelQuest/main/preview.png",
    iconLists: ["/react.svg", "/tail.svg", "/js.svg", "/api.svg"],
    githubLink: "https://github.com/AhmadBahr/PixelQuest",
  },
  {
    id: 6,
    title: "FinShark",
    des: "FinShark is a web application designed for investors to efficiently find financial documents without the distractions of short-term data, using modern web technologies.",
    img: "https://raw.githubusercontent.com/teddysmithdev/FinShark/refs/heads/master/homepage.png",
    iconLists: ["/react.svg", "/tail.svg", "/netlify.svg"],
    githubLink: "https://github.com/AhmadBahr/FinShark",
  },
  {
    id: 7,
    title: "Resource Manager",
    des: "Resource Manager is an Electron app that monitors system resources (CPU, RAM, GPU) in real-time. It offers comprehensive monitoring tools for development, testing, and deployment.",
    img: "https://images.hanselman.com/blog/Windows-Live-Writer/1da6eb78bdef_EDA9/image_3.png",
    iconLists: ["/react.svg", "/node.svg", "/mongo.svg", "/express.svg"],
    githubLink: "https://github.com/AhmadBahr/Resource-Manager",
  },
  {
    id: 8,
    title: "Code Carfter",
    des: "Code Carfter is an advanced code editor designed for efficient learning and development, supporting multiple programming languages and collaboration features.",
    img: "https://raw.githubusercontent.com/AhmadBahr/Code-Crafter/master/public/screenshot-for-readme.png", // Replace with image URL
    iconLists: ["/node.svg", "/js.svg", "/socket.svg"],
    githubLink: "https://github.com/AhmadBahr/Code-Crafter",
  },
];



export const testimonials = [
  {
    quote:
      "Working with Ahmad was a seamless experience. His technical expertise and creative approach brought our ideas to life, exceeding our expectations.",
    name: "Jihad Kandil",
    title: "CEO of QFLEAP",
  },
  {
    quote:
      "Ahmad's innovative thinking and dedication were evident in every aspect of our collaboration. I would highly recommend him to anyone looking for exceptional results.",
    name: "Ali Bou Melhem",
    title: "Project Manager of QFLEAP",
  },
  {
    quote:
      "Ahmad's ability to understand our requirements and translate them into functional, user-friendly solutions was remarkable. He truly made a difference in our project.",
    name: "Hussein Ayoub",
    title: "CEO of AYOUB COMPUTERS",
  },
  {
    quote:
      "Ahmad demonstrated an unmatched level of professionalism and technical acumen. The solutions he provided significantly improved our workflow.",
    name: "Nael Zaherdeen",
    title: "Head of CS Department of Modern University",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "FRONTEND WEB DEVELOPER",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    date: "Oct. 2023 - Oct. 2024",
    company: "QUANTUM FINTECH LEAP",
  },
  {
    id: 2,
    title: "IT TECHNICIAN (INTERNSHIP) ",
    desc: "Ensured the functionality and security of digital systems and hardware by performing regular diagnostics and updates",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    date: "Oct. 2022 – Feb. 2023",
    company: "AYOUB COMPUTERS",
  },
  {
    id: 3,
    title: "Learning Management System (LMS) Website Development",
    desc: "Designed and developed a fully functional Learning Management System (LMS) website, including features for course management, user authentication, and progress tracking.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    date: "Nov. 2024 - Present",
    company: "Freelance",
  },
  {
    id: 4,
    title: "VOLUNTEER",
    desc: "Assisted in organizing and managing university events while providing technical support for small-scale IT projects and platforms.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    date: "Nov. 2021 - Nov. 2022",
    company: "MODERN UNIVERSITY FOR BUSINESS AND SCIENCES",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/AhmadBahr", // Replace with the desired GitHub URL
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/AhmadBahr", // Replace with the desired LinkedIn URL
  },
];

