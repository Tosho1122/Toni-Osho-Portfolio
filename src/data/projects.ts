export interface Technology {
  name: string;
  icon?: string;
  color?: 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'gray';
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  images: string[];
  video?: string;
  youtubeUrl?: string;
  technologies: Technology[];
  liveLink?: string;
  githubLink?: string;
  categories: ('Backend' | 'Game Development' | 'Frontend' | 'Software Development')[];
}

export const projects: Project[] = [
  {
    title: "Scale the Depths",
    description: "Personal game project where I served as Lead Programmer, Sound Designer, and Composer. Developed using C# and Unity with focus on core game mechanics and performance optimization.",
    longDescription: "Scale the Depths is a comprehensive Unity game project where I took on multiple roles including Lead Programmer, Sound Designer, and Composer. The project showcases advanced game development techniques with C# scripting, custom game mechanics, and optimized performance for smooth gameplay. I crafted immersive soundscapes and original music to enhance the player experience while managing a multidisciplinary team to ensure high-quality deliverables.",
    thumbnail: "/Toni-Osho-Portfolio/images/scale-depths-1.jpg",
    images: [
      "/Toni-Osho-Portfolio/images/scale-depths-1.jpg",
      "/Toni-Osho-Portfolio/images/scale-depths-2.jpg",
      "/Toni-Osho-Portfolio/images/scale-depths-3.jpg",
      "/Toni-Osho-Portfolio/images/scale-depths-4.jpg",
      "/Toni-Osho-Portfolio/images/scale-depths-5.jpg",
      "/Toni-Osho-Portfolio/images/scaleTheDepths-6.jpg"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=OOywPGm2zCw",
    technologies: [
      { name: "Unity", icon: "/Toni-Osho-Portfolio/icons/Unity.png", color: "gray" },
      { name: "C#", icon: "/Toni-Osho-Portfolio/icons/csharp.png", color: "purple" },
      { name: "Game Design", color: "green" },
      { name: "Audio Design", color: "yellow" }
    ],
    categories: ["Game Development"]
  },
  {
    title: "Music Playing Web App",
    description: "Complete web application with React frontend and Node.js backend, integrated with MySQL database. Optimized database interactions and implemented collaborative development practices.",
    longDescription: "A full-stack music streaming web application built with modern technologies. The React frontend provides an intuitive user interface for browsing and playing music, while the Node.js backend handles API requests and database operations. I optimized SQL queries for improved performance and implemented collaborative development workflows using Git version control.",
    thumbnail: "/Toni-Osho-Portfolio/images/Projects/MusicWebApp/MusicAppScreenShot-1.png",
    images: [
      "/Toni-Osho-Portfolio/images/Projects/MusicWebApp/MusicAppScreenShot-2.png",
      "/Toni-Osho-Portfolio/images/Projects/MusicWebApp/MusicAppScreenShot-3.png",
      "/Toni-Osho-Portfolio/images/Projects/MusicWebApp/MusicAppScreenShot-1.png"
    ],
    technologies: [
      { name: "React", icon: "/Toni-Osho-Portfolio/icons/React.png", color: "blue" },
      { name: "Node.js", icon: "/Toni-Osho-Portfolio/icons/NodeJS.png", color: "green" },
      { name: "MySQL", icon: "/Toni-Osho-Portfolio/icons/MySQL.png", color: "blue" },
      { name: "JavaScript", color: "yellow" }
    ],
    githubLink: "https://github.com/RaiyanK23/Spoofify",
    categories: ["Frontend","Backend"]
  },
  {
    title: "UDP File Transfer Program",
    description: "Network programming project implementing UDP-based file transfer with packet segmentation, transmission, and reassembly. Includes error detection and packet loss handling.",
    longDescription: "A robust network programming solution that demonstrates advanced understanding of UDP protocols and file transfer mechanisms. The program efficiently handles large file transfers by implementing packet segmentation and reassembly algorithms. I incorporated error detection and packet loss recovery mechanisms to ensure reliable data transmission over unreliable network connections.",
    thumbnail: "/Toni-Osho-Portfolio/images/udp-transfer-thumb.jpg",
    images: [
      "/Toni-Osho-Portfolio/images/udp-transfer-1.jpg",
      "/Toni-Osho-Portfolio/images/udp-transfer-2.jpg"
    ],
    technologies: [
      { name: "C++", icon: "/Toni-Osho-Portfolio/icons/C++.png", color: "blue" },
      { name: "Network Programming", color: "green" },
      { name: "UDP Protocol", color: "purple" },
      { name: "System Programming", color: "gray" }
    ],
    githubLink: "https://github.com/toni-osho/udp-file-transfer",
    categories: ["Software Development"]
  },
  {
    title: "SimplyHotel Management System",
    description: "Complete hotel management web application with React frontend and FastAPI backend, integrated with MySQL database. Features comprehensive booking management, staff administration, security monitoring, and business analytics for hotel operations.",
    longDescription: "A full-stack hotel management system built with modern technologies. The React frontend provides an intuitive user interface for hotel staff to manage bookings, activate/deactivate room cards, monitor security alerts, and track business transactions. The FastAPI backend handles all API requests with comprehensive CRUD operations for bookings, staff management, visitor tracking, and security monitoring. The system includes role-based authentication (Owner/User permissions), real-time security alerts from IoT sensors, and detailed business insights. MySQL database optimizations ensure efficient data handling for hotel operations including booking management, staff administration, transaction tracking, and security monitoring.",
    thumbnail: "/Toni-Osho-Portfolio/images/Projects/Simply Hotel/SimplyHotel-1.png",
    images: [
      "/Toni-Osho-Portfolio/images/Projects/Simply Hotel/SimplyHotel-1.png",
      "/Toni-Osho-Portfolio/images/Projects/Simply Hotel/SimplyHotel-2.png",
      "/Toni-Osho-Portfolio/images/Projects/Simply Hotel/SimplyHotel-3.png",
      "/Toni-Osho-Portfolio/images/Projects/Simply Hotel/SimplyHotel-4.png",
      "/Toni-Osho-Portfolio/images/Projects/Simply Hotel/SimplyHotel-5.png",
      "/Toni-Osho-Portfolio/images/Projects/Simply Hotel/SimplyHotel-6.png"
    ],
    technologies: [
      { name: "React", icon: "/Toni-Osho-Portfolio/icons/React.png", color: "blue" },
      { name: "FastAPI", icon: "/Toni-Osho-Portfolio/icons/Fast Api.png", color: "green" },
      { name: "MySQL", icon: "/Toni-Osho-Portfolio/icons/MySQL.png", color: "blue" },
      { name: "JavaScript", icon: "/Toni-Osho-Portfolio/icons/JavaScript.png", color: "yellow" },
      { name: "Python", icon: "/Toni-Osho-Portfolio/icons/Python.png", color: "blue" },
      { name: "Tailwind CSS", icon: "/Toni-Osho-Portfolio/icons/Tailwind.png", color: "blue" },
      { name: "SQLAlchemy", color: "red" }
    ],
    githubLink: "https://github.com/your-username/SimplyHotel",
    categories: ["Frontend", "Backend"]
  }
];