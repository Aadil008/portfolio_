import { useEffect, useState } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Typed.js is used in TerminalIntro component
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
// Projects component is used directly in App
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import TerminalIntro from './components/TerminalIntro';
import HexagonSkills from './components/HexagonSkills';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Initialize particles
  // const particlesInit = async (engine: any) => {
  //   await loadSlim(engine);
  // };

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  // Handle scroll and animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 200)) {
          const sectionId = section.getAttribute('id');
          if (sectionId) {
            current = sectionId;
          }
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  // GSAP animations
  useEffect(() => {
    if (!isLoading) {
      // Animate header elements
      gsap.from(".header-content h1", { 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        ease: "power3.out",
        delay: 0.2
      });
      
      gsap.from(".header-content h2", { 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        ease: "power3.out",
        delay: 0.4
      });
      
      gsap.from(".header-content p", { 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        ease: "power3.out",
        delay: 0.6
      });
      
      gsap.from(".header-content .cta-buttons", { 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        ease: "power3.out",
        delay: 0.8
      });
      
      // Scroll animations for sections
      gsap.utils.toArray('section').forEach((section: any) => {
        ScrollTrigger.create({
          trigger: section as Element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleClass: {targets: section as Element, className: 'active'},
          onEnter: () => {
            if (section.id) {
              setActiveSection(section.id);
            }
          },
          onEnterBack: () => {
            if (section.id) {
              setActiveSection(section.id);
            }
          }
        });
      });
    }
  }, [isLoading]);

  // Resume data
  const name = "SALEH AADIL";
  const contactInfo = {
    email: "Aadilsaleh1210@gmail.com",
    phone: "+91 7359182710",
    linkedin: "https://www.linkedin.com/in/saleh-aadil-6a4968294/",
    location: "Bharuch, Gujarat"
  };

  const summary = "Detail-oriented Cybersecurity Professional with expertise in network security, vulnerability assessment, and incident response. Proficient in security monitoring, threat analysis, and implementing security controls using industry-standard tools. Demonstrated ability to optimize security processes and reduce incident response times. Seeking to leverage technical skills and cybersecurity knowledge to enhance organizational security posture.";

  const experiences = [
    {
      title: "SOC ANALYST",
      company: "Techdefence, Vadodara",
      period: "December 2024 - Present",
      responsibilities: [
        "Monitored and analyzed security alerts using SIEM tools to detect and prioritize potential threats",
        "Performed triage and incident response activities, documenting findings according to security protocols",
        "Enhanced alert rules based on threat intelligence to reduce false positives by 30%",
        "Optimized escalation processes resulting in 25% improvement in incident response times",
        "Collaborated with security team members to implement preventative security measures"
      ]
    },
    {
      title: "CYBERSECURITY INTERN",
      company: "Prashunet PvtLtd., Remote",
      period: "June 2024 - September 2024",
      responsibilities: [
        "Conducted comprehensive network traffic analysis using Wireshark to identify and mitigate security threats",
        "Assisted senior security analysts with vulnerability assessments and penetration testing using industry tools",
        "Developed and implemented Python automation scripts reducing log scanning efforts by 50%",
        "Participated in security incident response drills and documentation of security procedures",
        "Contributed to weekly security reports highlighting potential vulnerabilities and remediation strategies"
      ]
    }
  ];

  const education = [
    {
      degree: "BACHELOR OF TECHNOLOGY (B.TECH)",
      field: "Computer Science Engineering with Specialization in Cyber Security",
      institution: "Parul University",
      graduation: "Graduation: 2025",
      gpa: "7.33"
    }
  ];

  const skills = [
    {
      category: "Security Tools",
      skills: "Wireshark, Metasploit, Nmap, Nessus, SIEM platforms, Burp Suite, OWASP ZAP",
      level: 90
    },
    {
      category: "Network Security",
      skills: "Firewall configuration, VPN implementation, IDS/IPS systems, network monitoring",
      level: 85
    },
    {
      category: "Programming & Scripting",
      skills: "Python, C++, Java, Bash, PowerShell",
      level: 80
    },
    {
      category: "Threat Management",
      skills: "Vulnerability assessment, penetration testing, incident response, threat hunting",
      level: 85
    },
    {
      category: "Cryptography",
      skills: "SSL/TLS implementation, PGP, public key infrastructure",
      level: 75
    },
    {
      category: "Compliance Knowledge",
      skills: "ISO 27001, NIST frameworks, GDPR requirements",
      level: 70
    },
    {
      category: "Cloud Security",
      skills: "AWS security services, Azure security controls",
      level: 75
    }
  ];

  const competencies = [
    "Vulnerability Assessment & Management",
    "Network Security Architecture",
    "Security Operations Center (SOC) Monitoring",
    "Incident Response & Remediation",
    "Penetration Testing & Ethical Hacking",
    "Security Risk Assessment",
    "Threat Intelligence Analysis"
  ];

  const projects = [
    {
      title: "Web Application Security Analysis",
      description: "Comprehensive security assessment of a web application using industry-standard tools to identify vulnerabilities and provide remediation strategies.",
      tools: "Burp Suite, OWASP ZAP",
      image: "/cyber-web-security.jpg",
      achievements: [
        "Conducted comprehensive security assessment of web application identifying 12 critical vulnerabilities",
        "Developed detailed remediation plan prioritizing vulnerabilities based on CVSS scoring",
        "Implemented security controls reducing overall application risk score by 40%",
        "Created documentation for secure development practices for future application releases"
      ]
    },
    {
      title: "Secure File Transfer System",
      description: "Designed and developed an encrypted file transfer system with multi-factor authentication to ensure data confidentiality and integrity.",
      tools: "Python, OpenSSL",
      image: "/secure-transfer.jpg",
      achievements: [
        "Designed and developed encrypted file transfer system ensuring data confidentiality and integrity",
        "Implemented multi-factor authentication reducing unauthorized access attempts by 95%",
        "Created audit logging functionality for comprehensive security monitoring",
        "Developed user documentation and conducted training sessions for system implementation"
      ]
    },
    {
      title: "Network Intrusion Detection System",
      description: "Custom IDS implementation for monitoring network traffic and detecting potential security threats in real-time.",
      tools: "Python, Scapy, Machine Learning",
      image: "/network-security.jpg",
      achievements: [
        "Developed a custom network intrusion detection system using machine learning algorithms",
        "Implemented real-time traffic analysis with 94% accuracy in threat detection",
        "Created a dashboard for security analysts to monitor and respond to alerts",
        "Reduced false positive rates by 45% compared to traditional signature-based systems"
      ]
    }
  ];

  const certifications = [
    "Cyber Security Virtual Experience Program - Forage (2024)",
    "Cybersecurity Job Simulation - Mastercard & New York Jobs CEO Council (July 2024)",
    "Cybersecurity Job Simulation - PWC (July 2024)",
    "Cybersecurity Analyst Job Simulation - TATA (July 2024)",
    "Cybersecurity Job Simulation - Telstra (July 2024)",
    "Shields Up: Cybersecurity Job Simulation - AIG (July 2024)"
  ];

  const additionalInfo = [
    {
      label: "Languages",
      value: "English (Fluent), Hindi (Fluent), Gujarati (Native)"
    },
    {
      label: "Date of Birth",
      value: "June 7, 2002"
    }
  ];

  // Particles configuration
  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#3b82f6",
      },
      links: {
        color: "#3b82f6",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: "bounce" as const,
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="cyber-spinner"></div>
          <div className="loading-text">
            <span>Initializing Security Protocol</span>
            <span className="dots">
              <span>.</span><span>.</span><span>.</span>
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
        {/* Particles background */}
        <div className="particles-container">
          <Particles
            id="tsparticles"
            options={particlesOptions}
            className="particles"
            init={async (engine) => {
              await loadSlim(engine);
            }}
          />
        </div>
        
        <NavBar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          activeSection={activeSection}
        />
        
        <div className="container mx-auto px-4 py-20">
          <section id="home" className="min-h-screen flex items-center relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              <TerminalIntro name={name} />
              <Header 
                name={name} 
                contactInfo={contactInfo} 
                darkMode={darkMode}
              />
            </motion.div>
          </section>
          
          <section id="about" className="min-h-screen py-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <About 
                summary={summary} 
                additionalInfo={additionalInfo}
                darkMode={darkMode}
              />
            </motion.div>
          </section>
          
          <section id="skills" className="min-h-screen py-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
                Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
              </h2>
              
              <HexagonSkills skills={skills} darkMode={darkMode} />
              
              <div className="mt-12">
                <Skills 
                  skills={skills} 
                  competencies={competencies}
                  darkMode={darkMode}
                />
              </div>
            </motion.div>
          </section>
          
          <section id="projects" className="min-h-screen py-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
                Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
              </h2>
              
              <div className="space-y-12">
                {projects.map((project, index) => (
                  <Tilt
                    key={index}
                    className="tilt-project"
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    perspective={1000}
                    transitionSpeed={1000}
                    scale={1.02}
                    gyroscope={true}
                  >
                    <div 
                      className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'} project-card`}
                      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="order-2 lg:order-1">
                          <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">{project.title}</h3>
                          <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                          
                          <div className="mb-4">
                            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Technologies Used:</span>
                            <p className="text-gray-700 dark:text-gray-300">{project.tools}</p>
                          </div>
                          
                          <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Key Achievements:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                            {project.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="order-1 lg:order-2 flex items-center justify-center">
                          <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center project-image">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30"></div>
                            <div className="z-10 text-center p-4">
                              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <h3 className="text-lg font-bold text-white">{project.title}</h3>
                              <p className="text-white/80 text-sm">Cybersecurity Project</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tilt>
                ))}
              </div>
            </motion.div>
          </section>
          
          <section id="experience" className="min-h-screen py-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Experience 
                experiences={experiences}
                darkMode={darkMode}
              />
            </motion.div>
          </section>
          
          <section id="education" className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Education 
                education={education}
                darkMode={darkMode}
              />
            </motion.div>
          </section>
          
          <section id="certifications" className="py-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Certifications 
                certifications={certifications}
                darkMode={darkMode}
              />
            </motion.div>
          </section>
          
          <section id="contact" className="min-h-screen py-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Contact 
                contactInfo={contactInfo}
                darkMode={darkMode}
              />
            </motion.div>
          </section>
          
          <footer className="text-center text-gray-500 dark:text-gray-400 text-sm py-8">
            © {new Date().getFullYear()} {name} | Cybersecurity Portfolio
            <div className="mt-2 text-xs">
              <span className="inline-block px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 mr-2">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                System Secure
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
