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
    description: "Award-winning fishing simulation that placed Top 20 in GMTK Game Jam 2024 out of thousands of entries. Featured by PC Gamer with innovative gameplay mechanics and cross-platform optimization.",
    longDescription: "Scale the Depths is an award-winning fishing simulation that achieved Top 20 placement in GMTK Game Jam 2024 out of thousands of entries. I developed innovative gameplay mechanics for fishing and customer service simulation featuring mythical creatures. The game features responsive UI systems and touch controls optimized for mobile devices (Android/iOS), with performance optimization through profiling and memory management across all platforms. Using FMOD, I created an immersive audio experience with original soundtrack and sound effects to enhance player engagement. I designed scalable game systems from the initial 48-hour game jam prototype to full commercial Steam release, implementing a pixel-art aesthetic with smooth gameplay mechanics optimized for both web and desktop platforms. Featured by PC Gamer as a standout fishing game, demonstrating strong market appeal and player engagement. I managed rapid iteration from prototype to polished commercial product based on community feedback.",
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
      { name: "FMOD", icon: "/Toni-Osho-Portfolio/icons/Fmod.png", color: "red" }
    ],
    liveLink: "https://store.steampowered.com/app/3198890/Scale_the_Depths/",
    categories: ["Game Development"]
  },
  {
    title: "Zeitghast",
    description: "Published commercial 2D platformer-shooter achieving 83% positive reviews on Steam. Built with Unity and C# featuring fast-paced action, weapon variety, and time-based gameplay mechanics.",
    longDescription: "Zeitghast is a commercially published 2D platformer-shooter that achieved 83% positive reviews on Steam. I architected the core game mechanics including player movement, combat systems, weapon variety, and innovative time-based gameplay mechanics using C# and Unity. The game features complex systems including a character controller with jumping and dashing mechanics, sophisticated enemy AI, level progression systems, and score-based gameplay designed for fast-paced action platforming. Using FMOD, I created an immersive audio experience with an original soundtrack and comprehensive sound effects to enhance player engagement. This project represents a complete game development cycle from initial concept through Steam release, where I managed both technical direction and feature implementation.",
    thumbnail: "/Toni-Osho-Portfolio/images/Projects/Zeitghast/Zeitgahst-1.jpg",
    images: [
      "/Toni-Osho-Portfolio/images/Projects/Zeitghast/Zeitgahst-1.jpg",
      "/Toni-Osho-Portfolio/images/Projects/Zeitghast/Zeitgahst-2.jpg",
      "/Toni-Osho-Portfolio/images/Projects/Zeitghast/Zeitgahst-3.jpg",
      "/Toni-Osho-Portfolio/images/Projects/Zeitghast/Zeitgahst-4.jpg",
      "/Toni-Osho-Portfolio/images/Projects/Zeitghast/Zeitgahst-5.jpg",
      "/Toni-Osho-Portfolio/images/Projects/Zeitghast/Zeitgahst-6.jpg",
      "/Toni-Osho-Portfolio/images/Projects/Zeitghast/Zeitgahst-7.jpg"
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=r8PjadkBUMY",
    technologies: [
      { name: "Unity", icon: "/Toni-Osho-Portfolio/icons/Unity.png", color: "gray" },
      { name: "C#", icon: "/Toni-Osho-Portfolio/icons/csharp.png", color: "purple" },
      { name: "FMOD", icon: "/Toni-Osho-Portfolio/icons/Fmod.png", color: "red" },
      { name: "Game Design", color: "green" },
      { name: "Steam Publishing", color: "blue" }
    ],
    liveLink: "https://store.steampowered.com/app/2593070/Zeitghast/",
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
    thumbnail: "",
    images: [],
    technologies: [
      { name: "C++", icon: "/Toni-Osho-Portfolio/icons/C++.png", color: "blue" },
      { name: "Network Programming", color: "green" },
      { name: "UDP Protocol", color: "purple" },
      { name: "System Programming", color: "gray" }
    ],
    githubLink: "https://github.com/Tosho1122/UDP-File-Transfer-Server-and-Client",
    categories: ["Software Development"]
  },
  {
    title: "Hotel Management System",
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
    githubLink: "",
    categories: ["Frontend", "Backend"]
  },
  {
    title: "Oil & Gas Field Management System",
    description: "Comprehensive web application for oil and gas field operations with React frontend and TypeScript architecture. Features field management, reservoir tracking, well monitoring, and daily production data reporting with role-based authentication.",
    longDescription: "A specialized oil and gas industry management application built with modern web technologies. The React frontend provides an intuitive interface for managing oil and gas fields, reservoirs, and wells with comprehensive daily production tracking. The application features user authentication with role-based access control, field and reservoir management with hierarchical relationships, well monitoring systems, and detailed reporting capabilities. Built with TypeScript for enhanced code reliability and maintainability, styled with Tailwind CSS for responsive design, and configured with strict type checking for production-grade quality.",
    thumbnail: "/Toni-Osho-Portfolio/images/Projects/Oil&Gas/Oil&GasReporting-0.png",
    images: [
      "/Toni-Osho-Portfolio/images/Projects/Oil&Gas/Oil&GasReporting-0.png",
      "/Toni-Osho-Portfolio/images/Projects/Oil&Gas/Oil&GasReporting-1.png",
      "/Toni-Osho-Portfolio/images/Projects/Oil&Gas/Oil&GasReporting-2.png",
      "/Toni-Osho-Portfolio/images/Projects/Oil&Gas/Oil&GasReporting-3.png",
      "/Toni-Osho-Portfolio/images/Projects/Oil&Gas/Oil&GasReporting-4.png",
      "/Toni-Osho-Portfolio/images/Projects/Oil&Gas/Oil&GasReporting-5.png"
    ],
    technologies: [
      { name: "React", icon: "/Toni-Osho-Portfolio/icons/React.png", color: "blue" },
      { name: "TypeScript", icon: "/Toni-Osho-Portfolio/icons/TypeScript.png", color: "blue" },
      { name: "Tailwind CSS", icon: "/Toni-Osho-Portfolio/icons/Tailwind.png", color: "blue" },
      { name: "JavaScript", icon: "/Toni-Osho-Portfolio/icons/JavaScript.png", color: "yellow" }
    ],
    githubLink: "",
    categories: ["Frontend"]
  },
  {
    title: "Equipment Maintenance Tracker",
    description: "Comprehensive web application for equipment maintenance management with Blazor Server frontend and ASP.NET Core architecture. Features equipment inventory tracking, work order management, maintenance scheduling, and analytics dashboard with real-time reporting.",
    longDescription: "A specialized industrial equipment maintenance management application built with modern .NET technologies. The Blazor Server frontend provides an interactive interface for managing equipment inventory, work orders, and maintenance schedules with comprehensive analytics and reporting. The application features equipment management with detailed specifications and maintenance tracking, work order system supporting preventive, corrective, emergency, inspection, and calibration tasks, real-time dashboard with key performance indicators, advanced search and filtering capabilities, and cost analysis reporting. Built with ASP.NET Core 8.0 for robust backend services, Entity Framework Core for data management, SQL Server for reliable data storage, and Bootstrap for responsive design. Includes comprehensive sample data for immediate evaluation and testing.",
    thumbnail: "/Toni-Osho-Portfolio/images/Projects/EQUIPMENT MAINTENANCE TRACKER/EQUIPMENT MAINTENANCE TRACKER 01.png",
    images: [
      "/Toni-Osho-Portfolio/images/Projects/EQUIPMENT MAINTENANCE TRACKER/EQUIPMENT MAINTENANCE TRACKER 01.png",
      "/Toni-Osho-Portfolio/images/Projects/EQUIPMENT MAINTENANCE TRACKER/EQUIPMENT MAINTENANCE TRACKER 02.png",
      "/Toni-Osho-Portfolio/images/Projects/EQUIPMENT MAINTENANCE TRACKER/EQUIPMENT MAINTENANCE TRACKER 03.png",
      "/Toni-Osho-Portfolio/images/Projects/EQUIPMENT MAINTENANCE TRACKER/EQUIPMENT MAINTENANCE TRACKER 04.png",
      "/Toni-Osho-Portfolio/images/Projects/EQUIPMENT MAINTENANCE TRACKER/EQUIPMENT MAINTENANCE TRACKER 05.png",
      "/Toni-Osho-Portfolio/images/Projects/EQUIPMENT MAINTENANCE TRACKER/EQUIPMENT MAINTENANCE TRACKER 06.png",
      "/Toni-Osho-Portfolio/images/Projects/EQUIPMENT MAINTENANCE TRACKER/EQUIPMENT MAINTENANCE TRACKER 07.png",
      "/Toni-Osho-Portfolio/images/Projects/EQUIPMENT MAINTENANCE TRACKER/EQUIPMENT MAINTENANCE TRACKER 08.png"
    ],
    technologies: [
      { name: "ASP.NET Core", icon: "/Toni-Osho-Portfolio/icons/DotNet.png", color: "purple" },
      { name: "Blazor Server", icon: "/Toni-Osho-Portfolio/icons/Blazor.png", color: "purple" },
      { name: "Entity Framework", icon: "/Toni-Osho-Portfolio/icons/EntityFramework.png", color: "blue" },
      { name: "SQL Server", icon: "/Toni-Osho-Portfolio/icons/SqlServer.png", color: "red" },
      { name: "C#", icon: "/Toni-Osho-Portfolio/icons/csharp.png", color: "green" },
      { name: "Bootstrap", icon: "/Toni-Osho-Portfolio/icons/Bootstrap.png", color: "purple" }
    ],
    githubLink: "https://github.com/Tosho1122/EquipmentMaintenanceTracker-Public",
    categories: ["Backend", "Frontend","Software Development"]
  },
  {
    title: "Kopi - Video Duplicate Detector",
    description: "Desktop application for detecting and managing duplicate video files using advanced computer vision and hashing algorithms. Features a PyQt5 GUI with parallel processing, content analysis, and smart duplicate grouping with thumbnail previews.",
    longDescription: "Kopi is a comprehensive video duplicate detection tool built with Python that helps users identify and manage duplicate video files efficiently. The application uses advanced computer vision techniques including perceptual hashing (pHash), content analysis, and frame comparison to detect similar videos even with different resolutions, formats, or compression settings. Built with PyQt5 for a modern desktop interface, the tool features parallel processing for fast scanning of large video collections, intelligent duplicate grouping with similarity scoring, thumbnail generation for visual verification, and flexible file management options including keep largest, delete duplicates, and move to trash functionality. The application supports multiple video formats through PyAV integration and provides detailed logging and progress tracking for large-scale operations.",
    thumbnail: "/Toni-Osho-Portfolio/images/Projects/KOPI/KOPI 01.png",
    images: [
      "/Toni-Osho-Portfolio/images/Projects/KOPI/KOPI 01.png",
      "/Toni-Osho-Portfolio/images/Projects/KOPI/KOPI 02.png",
      "/Toni-Osho-Portfolio/images/Projects/KOPI/KOPI 03.png"
    ],
    technologies: [
      { name: "Python", icon: "/Toni-Osho-Portfolio/icons/Python.png", color: "blue" },
      { name: "PyQt5", icon: "/Toni-Osho-Portfolio/icons/Qt.png", color: "green" },
      { name: "OpenCV", icon: "/Toni-Osho-Portfolio/icons/OpenCV.png", color: "red" },
      { name: "NumPy", icon: "/Toni-Osho-Portfolio/icons/NumPy.png", color: "blue" }
    ],
    githubLink: "https://github.com/Tosho1122/Kopi/",
    categories: ["Software Development"]
  }
];