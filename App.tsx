
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
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Navigation */}
      <nav className="border-b border-gray-300 py-4 px-6 sm:px-12">
        <div className="max-w-2xl flex flex-wrap gap-4">
          <button onClick={() => scrollToSection('about')} className="underline hover:no-underline">
            About
          </button>
          <button onClick={() => scrollToSection('skills')} className="underline hover:no-underline">
            Skills
          </button>
          <button onClick={() => scrollToSection('interests')} className="underline hover:no-underline">
            Interests
          </button>
          <button onClick={() => scrollToSection('projects')} className="underline hover:no-underline">
            Projects
          </button>
          <button onClick={() => scrollToSection('contact')} className="underline hover:no-underline">
            Contact
          </button>
          <a href="https://github.com/vaishnavi-suresh/resume/blob/master/Vaishnavi_Suresh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="ml-auto px-4 py-1 bg-black text-white hover:bg-gray-800 transition-colors">
            View Resume
          </a>
        </div>
      </nav>

      <div className="p-6 sm:p-12 pt-12 sm:pt-16">
        <div className="max-w-2xl">
          {/* Header with Photo */}
          <header className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">Vaishnavi Suresh</h1>
                <p className="text-base sm:text-lg">
                  Senior studying finance + CS @ NYU 
                </p>
              </div>
              <img 
                src="/components/img/image.png"
                alt="Vaishnavi Suresh"
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover border-2 border-black flex-shrink-0"
              />
            </div>
          </header>

          {/* About */}
          <section id="about" className="mb-16">
            <h2 className="text-xl mb-4">About</h2>
            <p className="leading-relaxed mb-4">
              I am a full stack developer interested in ML and security. I am looking for ways to learn more about interesting applications of ML
            </p>
            <p className="leading-relaxed">
              When I'm not working on school or projects, I spend my time playing CTF and keeping up with papers. 
            </p>
          </section>

          {/* Skills */}
          <section id="skills" className="mb-16">
            <h2 className="text-xl mb-4">Skills</h2>
            <p>{skills.join(' • ')}</p>
          </section>

          {/* Interests */}
          <section id="interests" className="mb-16">
            <h2 className="text-xl mb-4">Interests</h2>
            <p>{interests.join(' • ')}</p>
          </section>

          {/* Projects */}
          <section id="projects" className="mb-16">
            <h2 className="text-xl mb-4">Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index}>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg underline hover:no-underline"
                  >
                    {project.name}
                  </a>
                  <p className="mt-1 text-gray-600">
                    {project.description}
                  </p>
                  <p className="mt-1 text-gray-600 text-sm">
                    {project.tech.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer with Socials */}
          <footer id="contact" className="text-sm text-gray-600 border-t border-gray-300 pt-6">
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-4">
              <a href="mailto:vaishnavi.suresh@stern.nyu.edu" className="underline hover:no-underline">
                Email
              </a>
              <a href="https://github.com/vaishnavi-suresh" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                GitHub
              </a>
              <a href="https://linkedin.com/in/sureshvaishnavi" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                LinkedIn
              </a>
              <a href="https://github.com/vaishnavi-suresh/resume/blob/master/Vaishnavi_Suresh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                Resume
              </a>
            </div>
            <p>© 2025</p>
          </footer>
        </div>
      </div>
    </div>
  );
}