
export default function App() {
  const projects = [
    {
      name: 'Movie Recommendation System',
      description: 'Chatbot built with RAG pipeline to recommend movies based on natural langauge',
      link: 'https://github.com/swe-students-fall2025/5-final-smova/tree/main',
      tech: ['HTML', 'CSS', 'JS','MongoDB', 'Vector Databases (weaviate)', 'OpenAI dev tools', 'Docker', 'Flask']
    },
    {
      name: 'ResNet-101 for Art Classification',
      description: 'Neural network to classify paintings based on era (97% accuracy)',
      link: 'https://github.com/vaishnavi-suresh/artNeuralNet',
      tech: ['PyTorch', 'AWS EC2']
    },
    {
      name: '2024 US Election Keyword Extraction Model',
      description: 'Isolated keywords using YAKE and vector similarity based on a subset of scraped news articles',
      link: 'https://github.com/vaishnavi-suresh/terminologyextraction',
      tech: ['Python', 'YAKE', 'Word2Vec', 'Selenium']
    },
    {
      name: 'Task Manager',
      description: 'Task manager application for Android',
      link: 'https://github.com/vaishnavi-suresh/task-manager-app',
      tech: ['Dart.js', 'Node.js', 'PostgreSQL', 'Express']
    },
    {
      name: 'Package Installation CLI',
      description: 'Processes natural language in the command line and automates package installation',
      link: 'https://github.com/vaishnavi-suresh/packageInstaller',
      tech: ['Click', 'Ollama', 'Ruby']
    }
    
  ];

  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'SQL',
    'Git',
    'Docker',
    'C',
    'C++',
    'Java',
    'Mongo',
    'Vector Databases / RAG',
    'PyTorch',
    'Express',
    'Dart',
    'Click',
    'Ruby',
    'Flask'
    
  ];

  const interests = [
    'Running',
    'Reading',
    'Art History',
    'Coffee',
    'House Music',
    'Crochet'
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <button onClick={() => scrollToSection('about')} className="nav-button">
            About
          </button>
          <button onClick={() => scrollToSection('skills')} className="nav-button">
            Skills
          </button>
          <button onClick={() => scrollToSection('interests')} className="nav-button">
            Interests
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-button">
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-button">
            Contact
          </button>
          <a href="https://github.com/vaishnavi-suresh/resume/blob/master/Vaishnavi_Suresh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume">
            View Resume
          </a>
        </div>
      </nav>

      <div className="main-content">
        {/* Header with Photo and About */}
        <header className="header">
          <div className="header-flex">
            <div className="header-text">
              <h1>Vaishnavi Suresh</h1>
              <p className="tagline">
                Senior studying finance + CS @ NYU 
              </p>
              
              <div className="about-inline">
                <h2>About</h2>
                <p>
                  I am a full stack developer interested in ML and security. I am looking for ways to learn more about interesting applications of ML
                </p>
                <p>
                  When I'm not working on school or projects, I spend my time playing CTF and keeping up with papers. 
                </p>
              </div>
            </div>
            <img 
              src={'/img/image.png'}
              alt="Vaishnavi Suresh"
              className="profile-img"
            />
          </div>
        </header>

        {/* Skills */}
        <section id="skills" className="section">
          <h2>Skills</h2>
          <p>{skills.join(' • ')}</p>
        </section>

        {/* Interests */}
        <section id="interests" className="section">
          <h2>Interests</h2>
          <p>{interests.join(' • ')}</p>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="projects-list">
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {project.name}
                </a>
                <p className="project-description">
                  {project.description}
                </p>
                <p className="project-tech">
                  {project.tech.join(' • ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer with Socials */}
        <footer id="contact" className="footer">
          <div className="footer-links">
            <a href="mailto:vaishnavi.suresh@stern.nyu.edu" className="footer-link">
              Email
            </a>
            <a href="https://github.com/vaishnavi-suresh" target="_blank" rel="noopener noreferrer" className="footer-link">
              GitHub
            </a>
            <a href="https://linkedin.com/in/sureshvaishnavi" target="_blank" rel="noopener noreferrer" className="footer-link">
              LinkedIn
            </a>
            <a href="https://github.com/vaishnavi-suresh/resume/blob/master/Vaishnavi_Suresh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">
              Resume
            </a>
          </div>
          <p>© 2025</p>
        </footer>
      </div>
    </div>
  );
}