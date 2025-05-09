'use client';
import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroBackground from "@/components/HeroBackground";
import TypewriterText from '@/components/TypewriterText';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiExternalLink } from 'react-icons/fi';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

const skills = {
  programming: ["JavaScript", "Python", "Java"],
  frontend: ["React.js", "Next.js","Bootstrap", "Tailwind CSS", "Figma", "Redux"],
  backend: ["Node.js", "Express.js", "MongoDB", "MySQL", "RESTful APIs"],
  devops: ["AWS", "CI/CD", "Vercel"],
  tools: ["VS Code", "Git", "Linux", "ChatGPT APIs", "Gemini APIs"],
  ai: ["Prompt Engineering", "LLM Integration", "AI-Assisted Development", "Automated Testing"]
};

const projects = [
  {
    title: "Personal Portfolio",
    description: "Modern Portfolio Website with 3D Effects",
    details: [
      "Developed a responsive portfolio website with modern UI/UX and 3D animations",
      "Leveraged AI tools to accelerate development time by 40%",
      "Implemented smooth transitions and interactive elements using Framer Motion",
      "Optimized performance scoring 95+ on Google Lighthouse metrics"
    ],
    tech: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS", "AI Tools"],
    github: "https://github.com/Venkata-Giridhar-Garikipati/portfolio",
    demo: "https://venkata-giridhar.vercel.app"
  },
  {
    title: "Study Smart",
    description: "AI-Powered Learning Management System",
    details: [
      "Built an AI-driven LMS that generates study materials, flashcards, quizzes, and Q&A, improving learning efficiency.",
      "Integrated a 24/7 AI chatbot for real-time doubt resolution, boosting user engagement by 30%.",
      "Utilized AI to automate content generation, reducing content creation time by 60%"
    ],
    tech: ["Next.js", "Inngest", "Drizzle ORM", "Gemini API", "Stripe"],
    github: "https://github.com/Venkata-Giridhar-Garikipati/study-smart",
    demo: "https://study-smart-ai.vercel.app"
  },
  {
    title: "Foodies",
    description: "Food Delivery Platform",
    details: [
      "Designed and developed a real-time order tracking system with secure authentication, achieving 99.9% uptime.",
      "Optimized system performance, reducing load times by 50% and improving responsiveness."
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/Venkata-Giridhar-Garikipati/foodies",
     demo: "https://food-delivery-frontend-zof4.onrender.com/"
  },
  {
    title: "FinTrackr",
    description: "Borrower Tracking System",
    details: [
      "Developed a loan management system with real-time tracking, automated reports, and secure authentication.",
      "Enhanced system scalability, reducing load times by 50% and improving responsiveness."
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/Venkata-Giridhar-Garikipati/fintrackr",
     demo: "https://fintrackr-ctc8.onrender.com/"
  },
  {
    title: "Fake News Prediction",
    description: "AI-Powered Misinformation Detection",
    details: [
      "Implemented a TF-IDF-based machine learning model, achieving 92% accuracy.",
      "Applied k-fold cross-validation and continuous monitoring to enhance reliability."
    ],
    tech: ["Python", "Scikit-learn", "TF-IDF", "Machine Learning"],
    github: "https://github.com/Venkata-Giridhar-Garikipati/Fake-news"
  },
  {
    title: "VVIT College Website",
    description: "Modern College Website with Interactive UI",
    details: [
      "Designed and developed a modern, responsive website for Vasireddy Venkatadri Institute of Technology",
      "Created interactive department pages and course information sections with dynamic content loading",
      "Optimized images and assets reducing load time by 45% and improving user experience"
    ],
    tech: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Content Management"],
    github: "https://github.com/Venkata-Giridhar-Garikipati/UI_VVIT",
    demo: "https://ui-vvit.vercel.app/"
  }
];

const experienceData = [
  {
    title: "Java Full Stack Web Development Intern",
    company: "Infosys Springboard",
    date: "Feb 2025 - Mar 2025",
    color: "#64ffda",
    icon: "💻",
    points: [
      "Developed AuctionBazaar platform with 30% backend efficiency improvement",
      "Designed RESTful APIs for user authentication and bidding system",
      "Integrated email notifications improving system reliability by 25%",
      "Implemented responsive UI with seamless backend integration",
      "Reduced system errors by 40% through testing and debugging"
    ]
  }
];

const aboutData = {
  description: `I'm a passionate Full Stack Developer specializing in building exceptional digital experiences. 
  Currently pursuing B.Tech in Computer Science & Engineering (AI & ML) at VVIT with a GPA of 8.3/10.0.`,
  education: [
    {
      school: "Vasireddy Venkatadri Institute of Technology (VVIT)",
      degree: "B.Tech in Computer Science & Engineering (AI & ML)",
      date: "Oct 2022 - Present",
      gpa: "8.3/10.0",
      courses: ["Data Structures", "Machine Learning", "Web Technologies", "Database Management Systems"]
    },
    {
      school: "Dr. Zakir Hussain Junior College",
      degree: "Intermediate (11th-12th)",
      date: "2020 - 2022",
      score: "934/1000"
    }
  ]
};

const educationSection = (
  <section id="education" className="py-20 px-8 md:px-24">
    <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12 text-center">
      Education Journey
    </h2>
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#64ffda]" />
      
      {aboutData.education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`relative flex ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          } mb-8`}
        >
          {/* Timeline Dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#64ffda] rounded-full" />
          
          {/* Content Box */}
          <div className={`w-5/12 ${
            index % 2 === 0 ? 'pr-8' : 'pl-8'
          }`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#112240] p-6 rounded-lg shadow-xl border border-[#64ffda]/20"
            >
              <h3 className="text-[#64ffda] font-mono text-lg font-bold">{edu.school}</h3>
              <p className="text-slate-lighter mt-2">{edu.degree}</p>
              <p className="text-slate text-sm mt-1">{edu.date}</p>
              {edu.gpa && (
                <div className="mt-2 bg-navy/50 px-3 py-1 rounded inline-block">
                  <span className="text-[#64ffda] text-sm">GPA: {edu.gpa}</span>
                </div>
              )}
              {edu.score && (
                <div className="mt-2 bg-navy/50 px-3 py-1 rounded inline-block">
                  <span className="text-[#64ffda] text-sm">Score: {edu.score}</span>
                </div>
              )}
              {edu.courses && (
                <div className="mt-3 pt-3 border-t border-[#64ffda]/20">
                  <p className="text-slate-light text-sm font-mono">Coursework:</p>
                  <p className="text-slate text-sm mt-1">{edu.courses.join(" • ")}</p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const roles = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Tech Innovator"
];

const socialLinks = [
  { name: 'GitHub', icon: FiGithub, url: 'https://github.com/Venkata-Giridhar-Garikipati' },
  { name: 'LinkedIn', icon: FiLinkedin, url: 'https://linkedin.com/in/Venkata-Giridhar-Garikipati' },
  { name: 'Email', icon: FiMail, url: 'mailto:venkatagiridhargarikipati@gmail.com' },
  { name: 'Twitter', icon: FiTwitter, url: '#' },
];

// Add this helper component for animations
const AnimatedSection = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  const handleDownload = (e) => {
    e.preventDefault();
    window.open('https://drive.google.com/file/d/1-eNK63Ubg4m4IYmhEGwkAUlv00ar60AT/view?usp=sharing', '_blank');
};

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <motion.div 
        className="min-h-screen bg-[#0a192f] text-[#8892b0]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        
        {/* Hero Section */}
        <motion.section 
          id="about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative min-h-screen flex flex-col justify-center px-8 md:px-24 py-16 pt-24 overflow-hidden"
        >
          <HeroBackground />
          <div className="relative z-10 backdrop-blur-md py-12 px-8 rounded-xl bg-navy/20 border border-slate/10 shadow-xl">
            <motion.p 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#64ffda] font-mono mb-4"
            >
              Hi, I am
            </motion.p>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Venkata Giridhar Garikipati
            </motion.h1>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold text-slate mb-6"
            >
              I am a{' '}
              <TypewriterText words={roles} speed={100} />
            </motion.div>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl text-lg text-slate-light leading-relaxed"
            >
              I am a motivated and versatile individual, always eager to take on new challenges. 
              With a passion for learning I am dedicated to delivering high-quality results. 
              With a positive attitude and a growth mindset, I am ready to make a meaningful 
              contribution and achieve great things.
            </motion.p>

            {/* Social Links and Resume */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-light hover:text-[#64ffda] transition-colors relative group"
                    whileHover={{ scale: 1.1 }}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-[#112240] text-[#64ffda] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
              
              <motion.button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#64ffda] text-[#64ffda] rounded-md hover:bg-[#64ffda]/10 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <HiOutlineDocumentDownload className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Education Section */}
        {educationSection}

        {/* Skills Section */}
        <section id="skills" className="py-20 px-8 md:px-24 bg-[#112240]">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#ccd6f6] mb-12 text-center"
            >
              Skills & Technologies
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items], categoryIndex) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#0a192f] p-6 rounded-lg border border-[#233554] hover:border-[#64ffda] transition-colors"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#64ffda] text-2xl">
                      {category === 'programming' && '⌨️'}
                      {category === 'frontend' && '🎨'}
                      {category === 'backend' && '⚙️'}
                      {category === 'devops' && '🚀'}
                      {category === 'tools' && '🛠️'}
                      {category === 'ai' && '🤖'}
                    </span>
                    <h3 className="text-[#64ffda] font-mono text-lg capitalize">{category}</h3>
                  </div>
                  <motion.ul 
                    className="grid grid-cols-2 gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    {items.map((item, index) => (
                      <motion.li
                        key={item}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span className="text-[#64ffda] opacity-75">▹</span>
                        <span className="text-slate-light hover:text-[#64ffda] transition-colors">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-8 md:px-24">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12 text-center">
              Professional Experience
            </h2>
            
            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-[#112240] p-8 rounded-lg shadow-xl border border-[#233554] hover:border-[#64ffda] transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{exp.icon}</span>
                    <div>
                      <h3 className="text-[#64ffda] font-mono text-xl font-bold">{exp.title}</h3>
                      <p className="text-slate-light">{exp.company} | {exp.date}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.points.map((point, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start group"
                      >
                        <span className="text-[#64ffda] mr-4 mt-1 transform group-hover:scale-125 transition-transform">▹</span>
                        <span className="text-slate-light group-hover:text-white transition-colors">{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div 
                    className="mt-6 pt-6 border-t border-[#233554] flex justify-end"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="https://drive.google.com/file/d/14PTX7ALyeOxfGHeQn1cgl-PbtbXUtJDU/view?usp=sharing"
                      className="text-[#64ffda] flex items-center gap-2 hover:gap-3 transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      View Certificate
                      <span>→</span>
                    </motion.a>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-8 md:px-24 bg-[#112240]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-[#ccd6f6]">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.title}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#0a192f] rounded-lg p-6 flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-[#ccd6f6]">{project.title}</h3>
                    <div className="flex items-center gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-[#64ffda] hover:text-[#64ffda]/80"
                      >
                        <FiGithub className="w-5 h-5" />
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="text-[#64ffda] hover:text-[#64ffda]/80"
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <p className="text-slate-light mb-4">{project.description}</p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="text-[#64ffda] mr-2 mt-1">▹</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#233554]">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs text-[#64ffda] bg-[#112240] px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-8 md:px-24 text-center">
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-8">Get In Touch</h2>
          <div className="max-w-md mx-auto">
            <p className="mb-8">
              Currently open for new opportunities. Feel free to reach out!
            </p>
            <motion.a
              href="mailto:venkatagiridhargarikipati@gmail.com"
              className="inline-block px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Say Hello
            </motion.a>
          </div>
        </section>
      </motion.div>
    </>
  );
}
