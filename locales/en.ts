import { ResumeData } from '../types';

export const en: ResumeData = {
    name: "Younis Yasser Kamal",
    title: "Software Developer | Full-Stack & Industrial Automation",
    typewriterTitles: ["Full-Stack Developer", "Industrial Automation Engineer", "Desktop App Specialist"],
    summary: "Professional Full-Stack Developer combining deep expertise in Python and JavaScript with a specialization in cross-platform Desktop applications, high-performance Web apps, and Industrial Automation. I excel at bridging the gap between software solutions and embedded systems (Arduino / PLC) to deliver integrated, efficient technical systems.",
    contact: {
        email: "yonsy205@gmail.com",
        phone: "+90 552 732 4029",
        location: "Samsun, Turkey",
        birthDate: "August 18, 2003",
    },
    highlights: [
        "Professional Desktop App Development (Electron, PyQt)",
        "Industrial Control Systems Design (PLC, Arduino)",
        "Interactive & Fast Web Interfaces (React, Next.js)",
        "Database Management & Integrated Software Projects"
    ],
    projects: [
        {
            title: "SmartClinic - Dental Management SaaS",
            technologies: ["React 19", "TypeScript", "NestJS", "TypeORM", "PostgreSQL", "i18next", "3D Dental Chart"],
            description: "Enterprise-grade SaaS platform for dental clinics featuring real-time appointment scheduling, interactive 3D dental charts (@react-three/fiber), patient records with HIPAA-compliant security, automated billing & invoicing, multi-language support (EN/AR/TR), and role-based access control (RBAC). Architected with offline-first approach and WebSocket for live notifications.",
            githubUrl: "https://github.com/younuskamal/smartclinic",
            demoUrl: "https://smartclinic-demo.vercel.app"
        },
        {
            title: "SmartPoint POS - Offline-First Point of Sale",
            technologies: ["Electron", "React", "NestJS", "SQLite", "TypeORM", "better-sqlite3", "Zustand"],
            description: "Cross-platform desktop POS system with advanced offline-first architecture. Features dynamic business profiles (Restaurant/Pharmacy/Retail), RBAC with context-aware permissions, FEFO inventory management for pharmacies, Kitchen Display System (KDS), shift management, cloud sync with offline queue, license management with HWID locking, and multi-language RTL support. Built with modular NestJS backend bundled inside Electron.",
            githubUrl: "https://github.com/younuskamal/smartpoint-pos",
            demoUrl: "https://github.com/younuskamal/smartpoint-pos/releases"
        },
        {
            title: "SourcePlus - License & Subscription Platform",
            technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Stripe API", "Hardware ID Verification"],
            description: "Secure cloud-based licensing system managing subscription plans, device activation/validation, HWID-based protection, automatic renewals, and real-time license status synchronization. Implements retry logic with exponential backoff, encrypted token storage, and supports trial/offline modes for seamless user experience.",
            githubUrl: "https://github.com/younuskamal/sourceplus"
        }
    ],
    aiCapabilities: [
        {
            title: "Local AI / Offline Intelligence",
            description: "Building AI-powered features that run locally without cloud dependency. Implementing offline-first AI models for privacy-critical applications, edge computing solutions, and systems requiring zero-latency responses.",
            tags: ["Local LLMs", "Offline AI", "Edge Computing", "Privacy-First"],
            icon: "Brain",
            applications: ["Smart POS decision support", "Real-time clinic diagnostics", "Offline translation", "Local data analysis"]
        },
        {
            title: "Python AI Integration",
            description: "Seamlessly integrating Python-based AI models with modern web and desktop applications. Building bridges between ML/AI backends (FastAPI, Flask) and production-ready frontends (React, Electron) with efficient API design and real-time data pipelines.",
            tags: ["Python", "FastAPI", "ML Models", "API Integration"],
            icon: "Cpu",
            applications: ["Predictive inventory systems", "Automated billing intelligence", "Patient risk assessment", "Smart recommendations"]
        },
        {
            title: "AI-Assisted Automation",
            description: "Creating intelligent automation systems that learn and adapt. Implementing smart workflows, automated decision-making, and self-optimizing processes within business applications to reduce manual work and increase accuracy.",
            tags: ["Smart Workflows", "AutoML", "Process Optimization", "Decision Support"],
            icon: "Sparkles",
            applications: ["Auto-categorization", "Smart scheduling", "Intelligent alerts", "Workflow optimization"]
        },
        {
            title: "Practical AI Systems",
            description: "Developing production-ready AI features integrated into real business systems. Focus on measurable ROI, user experience, and reliability—not theoretical models. Building AI that solves actual problems in POS, clinics, subscriptions, and enterprise software.",
            tags: ["Production AI", "Business Intelligence", "Real-world ML", "Applied AI"],
            icon: "Rocket",
            applications: ["Revenue forecasting", "Fraud detection", "Customer insights", "Smart dashboards"]
        },
        {
            title: "Face Recognition & Computer Vision",
            description: "Building camera-based intelligent systems using Python. Implementing face detection, recognition, and tracking for access control, attendance, and smart automation. Integrating computer vision with desktop/web applications and hardware control systems for real-world deployments.",
            tags: ["OpenCV", "Face Recognition", "Python", "Camera Control"],
            icon: "Eye",
            applications: ["Smart access control", "Automated attendance", "Security systems", "Visual interaction control"]
        }
    ],
    methodology: [
        {
            title: "Agile Development",
            description: "Rapid iterations and continuous adaptation to requirements.",
            icon: "Zap"
        },
        {
            title: "Clean Code",
            description: "Writing maintainable, readable, and scalable code.",
            icon: "Code"
        },
        {
            title: "User-Centric Design",
            description: "Intuitive interfaces and seamless user experience.",
            icon: "UserCheck"
        }
    ],
    experience: [
        {
            role: "Full-Stack & Desktop Application Developer",
            company: "Freelance / Tech Solutions",
            location: "Remote / Hybrid",
            description: [
                "Developing professional cross-platform desktop applications using Electron and Python (PyQt / Tkinter).",
                "Building dynamic, high-performance web applications using React.js, Next.js, and Node.js.",
                "Designing and implementing robust RESTful APIs and secure Back-End systems for data management.",
                "Managing and organizing data using SQLite and PostgreSQL databases to ensure efficiency and reliability."
            ]
        },
        {
            role: "Industrial Automation & Embedded Systems Engineer",
            company: "Industrial Engineering",
            location: "Samsun, Turkey",
            description: [
                "Programming and developing Embedded Systems and microcontroller logic using Arduino and C++.",
                "Developing complex industrial control logic using PLCs (Ladder Logic / STL) for production lines.",
                "Creating custom software automation tools to streamline workflows and reduce manual effort.",
                "Integrating electronic circuits and sensors with software interfaces for real-time monitoring and control."
            ]
        },
        {
            role: "Technical Support & Systems Specialist",
            company: "Technical Services",
            location: "Various Locations",
            description: [
                "Diagnosing and resolving complex software and hardware issues to ensure operational continuity.",
                "Optimizing computer systems and network performance for enterprise environments.",
                "Developing internal database solutions for inventory management and client tracking."
            ]
        }
    ],
    education: [
        {
            degree: "Computer Programming",
            institution: "Ondokuz Mayıs University",
            location: "Samsun, Turkey",
            keyValues: [
                "Graduated with honors, focusing on Software Engineering and Data Structures.",
                "Completed a distinguished graduation project in software systems development."
            ]
        },
        {
            degree: "Electrical & Electronics Engineering",
            institution: "Faculty of Engineering",
            location: "Samsun, Turkey",
            keyValues: [
                "Currently in advanced studies.",
                "Academic and practical focus on integrating Hardware with Software and Embedded Systems."
            ]
        }
    ],
    languages: [
        { name: "Arabic", level: "Native", proficiencyPercent: 100 },
        { name: "Kurdish", level: "Advanced", proficiencyPercent: 90 },
        { name: "Turkish", level: "C1 Certified (Fluent)", proficiencyPercent: 100 },
        { name: "English", level: "Advanced", proficiencyPercent: 90 }
    ],
    skills: [
        {
            category: "Web",
            items: ["React.js", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"]
        },
        {
            category: "Systems",
            items: ["Electron.js", "Python (PyQt)", "Arduino", "PLC", "C++"]
        },
        {
            category: "Tools",
            items: ["Git/GitHub", "Docker", "PostgreSQL", "SQLite", "Figma"]
        }
    ],
    ui: {
        sectionTitles: {
            highlights: "Key Highlights",
            projects: "Featured Projects",
            methodology: "Work Methodology",
            aiCapabilities: "AI Capabilities",
            experience: "Work Experience",
            education: "Education",
            languages: "Languages",
            skills: "Technical Skills",
            contact: "Contact",
            about: "Profile Summary"
        },
        labels: {
            roleLabel: "Current Focus",
            download: "Download Resume",
            availableForWork: "Available for Work"
        },
        codingTimer: {
            title: "Professional Coding Time",
            years: "Yrs",
            months: "Mos",
            days: "Days",
            hours: "Hrs",
            minutes: "Min",
            seconds: "Sec"
        }
    }
};
