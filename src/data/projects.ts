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
  category: 'Data Analysis' | 'Game Development' | 'Full Stack Development' | 'Software Development';
}

export const projects: Project[] = [
  {
    title: "Scale the Depths",
    description: "Personal game project where I served as Lead Programmer, Sound Designer, and Composer. Developed using C# and Unity with focus on core game mechanics and performance optimization.",
    longDescription: "Scale the Depths is a comprehensive Unity game project where I took on multiple roles including Lead Programmer, Sound Designer, and Composer. The project showcases advanced game development techniques with C# scripting, custom game mechanics, and optimized performance for smooth gameplay. I crafted immersive soundscapes and original music to enhance the player experience while managing a multidisciplinary team to ensure high-quality deliverables.",
    thumbnail: "/src/assets/images/scale-depths-1.jpg",
    images: [
      "/src/assets/images/scale-depths-1.jpg",
      "/src/assets/images/scale-depths-2.jpg",
      "/src/assets/images/scale-depths-3.jpg",
      "/src/assets/images/scale-depths-4.jpg",
      "/src/assets/images/scale-depths-5.jpg",
      "/src/assets/images/scaleTheDepths-6.jpg"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=OOywPGm2zCw",
    technologies: [
      { name: "Unity", icon: "/src/assets/icons/Unity.png", color: "gray" },
      { name: "C#", icon: "/src/assets/icons/csharp.png", color: "purple" },
      { name: "Game Design", color: "green" },
      { name: "Audio Design", color: "yellow" }
    ],
    category: "Game Development"
  },
  {
    title: "Music Playing Web App",
    description: "Complete web application with React frontend and Node.js backend, integrated with MySQL database. Optimized database interactions and implemented collaborative development practices.",
    longDescription: "A full-stack music streaming web application built with modern technologies. The React frontend provides an intuitive user interface for browsing and playing music, while the Node.js backend handles API requests and database operations. I optimized SQL queries for improved performance and implemented collaborative development workflows using Git version control.",
    thumbnail: "/images/music-app-thumb.jpg",
    images: [
      "/images/music-app-1.jpg",
      "/images/music-app-2.jpg",
      "/images/music-app-3.jpg"
    ],
    technologies: [
      { name: "React", icon: "/src/assets/icons/React.png", color: "blue" },
      { name: "Node.js", icon: "/src/assets/icons/NodeJS.png", color: "green" },
      { name: "MySQL", icon: "/src/assets/icons/MySQL.png", color: "blue" },
      { name: "JavaScript", color: "yellow" }
    ],
    githubLink: "https://github.com/RaiyanK23/Spoofify",
    category: "Full Stack Development"
  },
  {
    title: "UDP File Transfer Program",
    description: "Network programming project implementing UDP-based file transfer with packet segmentation, transmission, and reassembly. Includes error detection and packet loss handling.",
    longDescription: "A robust network programming solution that demonstrates advanced understanding of UDP protocols and file transfer mechanisms. The program efficiently handles large file transfers by implementing packet segmentation and reassembly algorithms. I incorporated error detection and packet loss recovery mechanisms to ensure reliable data transmission over unreliable network connections.",
    thumbnail: "/images/udp-transfer-thumb.jpg",
    images: [
      "/images/udp-transfer-1.jpg",
      "/images/udp-transfer-2.jpg"
    ],
    technologies: [
      { name: "C++", icon: "/src/assets/icons/C++.png", color: "blue" },
      { name: "Network Programming", color: "green" },
      { name: "UDP Protocol", color: "purple" },
      { name: "System Programming", color: "gray" }
    ],
    githubLink: "https://github.com/toni-osho/udp-file-transfer",
    category: "Software Development"
  }
];