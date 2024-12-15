const PORTFOLIO_INFO = {
  personal: {
    name: "Anu Bilegdemberel",
    email: "anu.bnda@gmail.com",
    location: "Irvine, CA",
    title: "UX Engineering Student",
    summary: "Motivated software engineering student seeking an internship to apply expertise in Flutter, AWS, and IoT development. Passionate about creating innovative, user-focused applications that make a positive impact."
  },
  skills: {
    programming: ["Dart", "Python", "C++", "JavaScript", "HTML/CSS"],
    backend: ["PostgreSQL", "Node.js", "REST APIs"],
    frontend: ["Flutter", "CSS", "HTML", "JavaScript"],
    cloud: ["AWS (Rekognition, Kinesis, DynamoDB)", "IoT Sensor Integration"],
    design: ["Figma", "Framer", "Procreate"],
    other: ["User Personas", "User Journeys"]
  },
  experience: [
    {
      company: "PBL Program - Kookmin University",
      position: "Front-end developer & Product designer",
      duration: "Sep 2024 - Dec 2024",
      location: "Irvine, CA",
      highlights: [
        "Developed Rootin, an IoT-based plant care system with iOS app integration",
        "Integrated Firebase Cloud Messaging (FCM) improving notifications by 30%",
        "Connected Raspberry Pi with soil moisture sensors, achieving 90% user satisfaction",
        "Built reusable Flutter widgets with multilingual support",
        "Optimized API handling reducing development cycles by 30%"
      ]
    },
    {
      company: "PBL Program - Kookmin University",
      position: "LLM Project Lead",
      duration: "Sep 2024 - Dec 2024",
      location: "Irvine, CA",
      highlights: [
        "Designed LLM-powered recipe generator improving dietary recommendations by 20%",
        "Led front-end development and product design",
        "Implemented efficient app architecture reducing development cycles by 25%"
      ]
    },
    {
      company: "PBL Program - Kookmin University",
      position: "AWS Backend Developer",
      duration: "Sep 2024 - Dec 2024",
      location: "Irvine, CA",
      highlights: [
        "Developed real-time content moderation system with 95% accuracy",
        "Reduced operational costs by 15% while maintaining scalability",
        "Engineered AWS Kinesis pipeline for peak traffic handling"
      ]
    }
  ],
  education: {
    degree: "Bachelor's Degree in Software Engineering",
    school: "Kookmin University",
    location: "Seoul, South Korea",
    graduation: "2027 (Expected)",
    duration: "2023 - Present"
  },
  languages: [
    { language: "English", proficiency: "Professional" },
    { language: "Chinese", proficiency: "Professional" },
    { language: "Korean", proficiency: "Professional" },
    { language: "Mongolian", proficiency: "Native" }
  ]
};

module.exports = PORTFOLIO_INFO; 