import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown, Code, Briefcase, GraduationCap, Award, User } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  
  // Create refs for each section
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to scroll to a section
  const scrollToSection = (sectionName) => {
    setActiveSection(sectionName);
    const targetRef = sectionRefs[sectionName];
    if (targetRef && targetRef.current) {
      const offsetTop = targetRef.current.offsetTop - 80; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Intersection Observer to update active section based on scroll position
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -80px 0px', // Account for navbar
      threshold: 0.3
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const skills = {
    languages: ['C', 'C++', 'Java', 'Python', 'SQL'],
    frontend: ['HTML', 'CSS', 'JavaScript', 'React JS', 'TypeScript'],
    backend: ['NodeJS', 'MongoDB', 'Express JS'],
    tools: ['VS Code', 'GitHub', 'Git', 'Windows', 'Linux']
  };

  const projects = [
    {
      title: 'Echo Basket',
      tech: 'ReactJS, ExpressJS, MongoDB, Redux, Axios',
      period: 'Jul 2024 – Aug 2024',
      highlights: [
        'Built full-stack e-commerce site with secure auth and real-time cart',
        '30% faster payment processing with enhanced security',
        'Deployed scalable backend infrastructure with 50% performance optimization'
      ],
      github: 'https://github.com/Hiomio/Ecommerce_Website/tree/master',
      live : 'https://echo-basket.vercel.app/'
    },
      {
    title: 'Trips Travel',
    tech: 'MERN Stack',
    period: 'Aug 2024 - Oct 2024',
    highlights: [
      'Fully functional & responsive travel management platform with separate user and admin panels.',
      'Users can browse, book travel itineraries, and submit reviews and ratings.',
      'Admins can manage trips, bookings, and oversee platform activity with secure authentication.'
    ],
    github: 'https://github.com/Hiomio/Trip-Travels', // Add the link when available
    live : 'https://trips-travel.vercel.app/'
  },
  {
    title: 'MovieDB',
    tech: 'ReactJS, Redux Toolkit, Firebase, MongoDB, NodeJS, ExpressJS, TMDB API',
    period: 'Nov 2024 - Dec 2024',
    highlights: [
      'Developed a full-stack movie streaming platform allowing users to browse, watch trailers, and save movies for later.',
      'Used TMDB API for dynamic content, Firebase for authentication, and MongoDB for storing user movie lists.',
      'Implemented responsive design with Sass and state management with Redux Toolkit.'
    ],
    github: 'https://github.com/Hiomio/Mern_Movie_App',
    live: 'https://moviedb-ed.vercel.app/' // Add your actual live link here
  },
  {
    title: 'Doctor Appointment System',
    tech: 'ReactJS, ExpressJS, MongoDB, NodeJS',
    period: ' Jan 2025 - Feb 2025',
    highlights: [
      'Created a healthcare appointment system with features like login/register, forgot password, and calendar scheduling.',
      'Implemented doctor and appointment management (Add, Edit, List) with secure authentication.',
      'Structured with clear navigation and modular components to enhance maintainability and scalability.'
    ],
    github: 'https://github.com/Hiomio/Hospital-Management' // Replace with actual repo link
  },
  {
    title: 'Luxe Bistro',
    tech: 'MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS)',
    period: 'Jul 2023 – Nov 2023',
    highlights: [
      'Built a responsive restaurant ordering platform with dynamic menus and cart management.',
      'Enabled user registration, secure login, and order tracking features.',
      'Implemented real-time updates for order status and a seamless checkout experience.'
    ],
    github: 'https://github.com/Hiomio/MERN_STACK_RESTAURANT',
     // Replace if different
     live : 'https://mern-stack-restaurant-gray.vercel.app/'
  }


  ];

  const experience = [
    {
      company: 'Silzila Technologies',
      role: 'Frontend Developer',
      period: 'Apr 2025 – Present',
      type: 'Remote',
      highlights: [
        'Redesigned 5+ HTML tables using React.js, MUI, and Tailwind CSS',
        'Built interactive features like sorting, pagination, and filtering',
        'Connected frontend with backend using Axios and hooks'
      ]
    },
    {
      company: 'Frugato Chocolate',
      role: 'MERN Stack Intern',
      period: 'Sep 2024 – Dec 2024',
      type: 'Remote',
      highlights: [
        'Crafted feature-rich e-commerce frontend with React.js',
        'Engineered backend APIs boosting data efficiency by 40%',
        'Integrated Razorpay reducing checkout time by 30%'
      ]
    }
  ];

  const achievements = [
    'Earned 2★ rating (Max: 1586) on CodeChef',
    'Attained 4★ rating (1848) on Leetcode - Top 6%',
    '17th place in CodeRush Challenge 2024',
    '68th position in Code Combat 2.0 among 2,000+ competitors',
    'Solved 500+ DSA problems across multiple platforms'
  ];

  const ScrollIndicator = () => (
    <div style={{
      position: 'absolute',
      bottom: '32px',
      left: '50%',
      transform: 'translateX(-50%)',
      animation: 'bounce 2s infinite',
      cursor: 'pointer'
    }} onClick={() => scrollToSection('about')}>
      <ChevronDown style={{ width: '24px', height: '24px', color: 'rgba(255, 255, 255, 0.7)' }} />
    </div>
  );

  const styles = {
    container: {
      backgroundColor: '#1f2937',
      color: 'white',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(31, 41, 55, 0.95)',
      backdropFilter: 'blur(8px)',
      zIndex: 50,
      borderBottom: '1px solid #374151'
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    },
    navContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 0'
    },
    logo: {
      fontSize: '20px',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #60a5fa, #a855f7)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      cursor: 'pointer'
    },
    navMenu: {
      display: 'flex',
      gap: '32px'
    },
    navLink: {
      color: '#d1d5db',
      textDecoration: 'none',
      transition: 'color 0.3s',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      fontSize: '16px',
      fontFamily: 'inherit'
    },
    navLinkActive: {
      color: '#60a5fa'
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      background: 'linear-gradient(135deg, #1f2937, rgba(30, 58, 138, 0.2), rgba(91, 33, 182, 0.2))'
    },
    heroContent: {
      textAlign: 'center',
      transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 1s ease-out'
    },
    profilePic: {
      width: '128px',
      height: '128px',
      margin: '0 auto 24px',
      borderRadius: '50%',
      background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 'bold',
      marginBottom: '16px',
      background: 'linear-gradient(to right, #60a5fa, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    heroSubtitle: {
      fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
      color: '#d1d5db',
      marginBottom: '32px'
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginBottom: '32px'
    },
    socialLink: {
      padding: '12px',
      borderRadius: '50%',
      transition: 'background-color 0.3s',
      textDecoration: 'none',
      color: 'white'
    },
    socialLinkBlue: {
      backgroundColor: '#2563eb'
    },
    socialLinkGray: {
      backgroundColor: '#374151'
    },
    section: {
      padding: '80px 0'
    },
    sectionAlt: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)'
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '16px',
      background: 'linear-gradient(to right, #60a5fa, #a855f7)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    sectionDivider: {
      width: '96px',
      height: '4px',
      background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
      margin: '0 auto 64px'
    },
    aboutGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '48px',
      alignItems: 'center'
    },
    educationInfo: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '24px'
    },
    educationIcon: {
      width: '32px',
      height: '32px',
      color: '#60a5fa',
      marginRight: '16px',
      flexShrink: 0
    },
    educationTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '4px'
    },
    aboutText: {
      color: '#d1d5db',
      lineHeight: 1.7
    },
    grayText: {
      color: '#9ca3af'
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px'
    },
    skillCard: {
      backgroundColor: '#1f2937',
      padding: '24px',
      borderRadius: '8px'
    },
    skillTitle: {
      fontSize: '1.125rem',
      fontWeight: 600,
      marginBottom: '12px',
      color: '#60a5fa',
      textTransform: 'capitalize'
    },
    skillTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    },
    skillTag: {
      padding: '4px 12px',
      backgroundColor: '#374151',
      borderRadius: '16px',
      fontSize: '0.875rem',
      color: '#d1d5db'
    },
    experienceList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    },
    experienceCard: {
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
      padding: '32px',
      borderRadius: '8px',
      transition: 'background-color 0.3s'
    },
    experienceHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '16px'
    },
    experienceRole: {
      display: 'flex',
      alignItems: 'center'
    },
    experienceIcon: {
      width: '24px',
      height: '24px',
      color: '#60a5fa',
      marginRight: '12px'
    },
    roleTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '4px'
    },
    companyName: {
      color: '#60a5fa'
    },
    experiencePeriod: {
      textAlign: 'right'
    },
    periodText: {
      color: '#d1d5db',
      marginBottom: '4px'
    },
    typeText: {
      color: '#9ca3af'
    },
    highlightList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    highlightItem: {
      color: '#d1d5db',
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '8px'
    },
    highlightDot: {
      width: '8px',
      height: '8px',
      backgroundColor: '#60a5fa',
      borderRadius: '50%',
      margin: '8px 12px 0 0',
      flexShrink: 0
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '32px'
    },
    projectCard: {
      backgroundColor: '#1f2937',
      padding: '32px',
      borderRadius: '8px',
      transition: 'all 0.3s'
    },
    projectHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px'
    },
    projectTitleArea: {
      display: 'flex',
      alignItems: 'center'
    },
    projectIcon: {
      width: '24px',
      height: '24px',
      color: '#a855f7',
      marginRight: '12px'
    },
    projectTitle: {
      fontSize: '1.25rem',
      fontWeight: 600
    },
    projectLink: {
      padding: '8px',
      backgroundColor: '#374151',
      borderRadius: '50%',
      transition: 'background-color 0.3s',
      textDecoration: 'none',
      color: 'white',
      display: 'inline-flex'
    },
    projectTech: {
      color: '#60a5fa',
      marginBottom: '8px'
    },
    projectPeriod: {
      color: '#9ca3af',
      marginBottom: '16px'
    },
    projectDot: {
      width: '8px',
      height: '8px',
      backgroundColor: '#a855f7',
      borderRadius: '50%',
      margin: '8px 12px 0 0',
      flexShrink: 0
    },
    achievementsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px'
    },
    achievementCard: {
      background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.3), rgba(91, 33, 182, 0.3))',
      padding: '24px',
      borderRadius: '8px',
      transition: 'all 0.3s'
    },
    achievementContent: {
      display: 'flex',
      alignItems: 'flex-start'
    },
    achievementIcon: {
      width: '24px',
      height: '24px',
      color: '#fbbf24',
      margin: '4px 12px 0 0',
      flexShrink: 0
    },
    achievementText: {
      color: '#d1d5db'
    },
    contactText: {
      fontSize: '1.25rem',
      color: '#d1d5db',
      marginBottom: '48px',
      maxWidth: '800px',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center'
    },
    contactLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '32px',
      marginBottom: '48px',
      flexWrap: 'wrap'
    },
    contactLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 24px',
      borderRadius: '8px',
      transition: 'background-color 0.3s',
      textDecoration: 'none',
      color: 'white'
    },
    contactLinkEmail: {
      backgroundColor: '#2563eb'
    },
    contactLinkPhone: {
      backgroundColor: '#059669'
    },
    contactIcon: {
      width: '20px',
      height: '20px'
    },
    footer: {
      padding: '32px 0',
      borderTop: '1px solid #374151',
      textAlign: 'center',
      color: '#9ca3af'
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateX(-50%) translateY(0);
            }
            40% {
              transform: translateX(-50%) translateY(-10px);
            }
            60% {
              transform: translateX(-50%) translateY(-5px);
            }
          }
          
          .nav-link:hover {
            color: white !important;
          }
          
          .social-link:hover {
            opacity: 0.8;
          }
          
          .experience-card:hover {
            background-color: rgba(31, 41, 55, 0.7) !important;
          }
          
          .project-card:hover {
            background-color: rgba(55, 65, 81, 0.5) !important;
            transform: scale(1.02);
          }
          
          .project-link:hover {
            background-color: #4b5563 !important;
          }
          
          .achievement-card:hover {
            background: linear-gradient(135deg, rgba(30, 58, 138, 0.5), rgba(91, 33, 182, 0.5)) !important;
          }
          
          .contact-link:hover {
            opacity: 0.9;
          }
          
          @media (max-width: 768px) {
            .nav-menu {
              display: none !important;
            }
            .about-grid {
              grid-template-columns: 1fr !important;
            }
            .skills-grid {
              grid-template-columns: 1fr !important;
            }
            .projects-grid {
              grid-template-columns: 1fr !important;
            }
            .achievements-grid {
              grid-template-columns: 1fr !important;
            }
            .contact-links {
              flex-direction: column !important;
              align-items: center !important;
            }
          }
        `}
      </style>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.navContent}>
            <div 
              style={styles.logo}
              onClick={() => scrollToSection('home')}
            >
              Himabindhu
            </div>
            <div style={styles.navMenu} className="nav-menu">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  style={{
                    ...styles.navLink,
                    ...(activeSection === item.toLowerCase() ? styles.navLinkActive : {})
                  }}
                  className="nav-link"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={sectionRefs.home}
        id="home"
        style={styles.hero}
      >
        <div style={styles.heroContent}>
           <div style={styles.profilePic}>
  <img 
    src="/profile.jpeg" 
    alt="Profile" 
    style={{ 
      width: '200px', 
      height: '200px', 
      borderRadius: '50%', 
      objectFit: 'cover' 
    }} 
  />
</div>

          <h1 style={styles.heroTitle}>
            Kaluri Himabindhu
          </h1>
          <p style={styles.heroSubtitle}>
            Frontend Developer & Problem Solver
          </p>
          <div style={styles.socialLinks}>
            <a href="mailto:blessykaluri@gmail.com" style={{...styles.socialLink, ...styles.socialLinkBlue}} className="social-link">
              <Mail style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://linkedin.com/in/kaluri-himabindhu-9378b927a/" style={{...styles.socialLink, ...styles.socialLinkBlue}} className="social-link">
              <Linkedin style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://github.com/Hiomio" style={{...styles.socialLink, ...styles.socialLinkGray}} className="social-link">
              <Github style={{ width: '24px', height: '24px' }} />
            </a>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* About Section */}
      <section 
        ref={sectionRefs.about}
        id="about"
        style={{...styles.section, ...styles.sectionAlt}}
      >
        <div style={styles.navContainer}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={styles.sectionTitle}>
              About Me
            </h2>
            <div style={styles.sectionDivider}></div>
          </div>
          
          <div style={styles.aboutGrid} className="about-grid">
            <div>
              <div style={styles.educationInfo}>
                <GraduationCap style={styles.educationIcon} />
                <div>
                  <h3 style={styles.educationTitle}>Education</h3>
                  <p style={styles.aboutText}>Indian Institute of Information Technology, Bhagalpur</p>
                  <p style={styles.grayText}>B.Tech in Computer Science </p>
                  <p style={styles.grayText}>Dec 2021 - Jun 2025</p>
                </div>
              </div>
              <p style={styles.aboutText}>
                I'm a passionate full-stack developer with expertise in the MERN stack. 
                I love solving complex problems and building scalable web applications. 
                My journey in competitive programming has sharpened my problem-solving skills, 
                achieving a 4★ rating on LeetCode and solving 500+ DSA problems.
              </p>
            </div>
            
            <div style={styles.skillsGrid} className="skills-grid">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} style={styles.skillCard}>
                  <h4 style={styles.skillTitle}>{category}</h4>
                  <div style={styles.skillTags}>
                    {skillList.map((skill) => (
                      <span key={skill} style={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        ref={sectionRefs.experience}
        id="experience"
        style={styles.section}
      >
        <div style={styles.navContainer}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={styles.sectionTitle}>
              Experience
            </h2>
            <div style={styles.sectionDivider}></div>
          </div>
          
          <div style={styles.experienceList}>
            {experience.map((exp, index) => (
              <div key={index} style={styles.experienceCard} className="experience-card">
                <div style={styles.experienceHeader}>
                  <div style={styles.experienceRole}>
                    <Briefcase style={styles.experienceIcon} />
                    <div>
                      <h3 style={styles.roleTitle}>{exp.role}</h3>
                      <p style={styles.companyName}>{exp.company}</p>
                    </div>
                  </div>
                  <div style={styles.experiencePeriod}>
                    <p style={styles.periodText}>{exp.period}</p>
                    <p style={styles.typeText}>{exp.type}</p>
                  </div>
                </div>
                <ul style={styles.highlightList}>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} style={styles.highlightItem}>
                      <span style={styles.highlightDot}></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section 
  ref={sectionRefs.projects}
  id="projects"
  style={{ ...styles.section, ...styles.sectionAlt }}
>
  <div style={styles.navContainer}>
    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
      <h2 style={styles.sectionTitle}>Projects</h2>
      <div style={styles.sectionDivider}></div>
    </div>
    
    <div style={styles.projectsGrid} className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} style={styles.projectCard} className="project-card">
          <div style={styles.projectHeader}>
            <div style={styles.projectTitleArea}>
              <Code style={styles.projectIcon} />
              <h3 style={styles.projectTitle}>{project.title}</h3>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              {project.github && (
                <a 
                  href={project.github}
                  style={styles.projectLink}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink style={{ width: '16px', height: '16px' }} />
                </a>
              )}
              {project.live && (
                <a 
                  href={project.live}
                  style={styles.projectLink}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🌐 Live
                </a>
              )}
            </div>
          </div>
          <p style={styles.projectTech}>{project.tech}</p>
          <p style={styles.projectPeriod}>{project.period}</p>
          <ul style={styles.highlightList}>
            {project.highlights.map((highlight, i) => (
              <li key={i} style={styles.highlightItem}>
                <span style={styles.projectDot}></span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section 
        ref={sectionRefs.contact}
        id="contact"
        style={{...styles.section, ...styles.sectionAlt}}
      >
        <div style={styles.navContainer}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={styles.sectionTitle}>
              Get In Touch
            </h2>
            <div style={styles.sectionDivider}></div>
            
            <p style={styles.contactText}>
              I'm always interested in new opportunities and exciting projects. 
              Let's connect and build something amazing together!
            </p>
            
          <div style={{ ...styles.contactLinks, justifyContent: 'center' }} className="contact-links">
  <a 
    href="mailto:blessykaluri@gmail.com"
    style={{ ...styles.contactLink, ...styles.contactLinkEmail }}
    className="contact-link"
  >
    <Mail style={styles.contactIcon} />
    <span>blessykaluri@gmail.com</span>
  </a>
</div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.navContainer}>
          <p>
            © 2025 Kaluri Himabindhu. Crafted with ❤️ 
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
