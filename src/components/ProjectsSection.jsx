import './ProjectSection.css';

import { useState } from 'react';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Web Apps', 'Mobile Apps', 'UI/UX'];

  const projects = [
    {
      id: 1,
      title: 'PadhaiXpress',
      category: 'Web Apps',
      description: 'Modern e-commerce solution with React and Node.js',
      image: 'https://readdy.ai/api/search-image?query=Modern%20innovation%20platform%20interface%20on%20laptop%20screen%2C%20clean%20project%20management%20dashboard%20layout%2C%20professional%20web%20design%20with%20collaboration%20tools%20and%20project%20displays%2C%20contemporary%20UI%20design%20with%20blue%20and%20white%20color%20scheme&width=800&height=600&seq=project-innovience&orientation=landscape',
      tags: ['React', 'Node.js', 'JavaScript','MongoDB','Express.js','RESTful APIs','JWT','Bcrypt','Razorpay'],
      link: 'https://padhaixpress.in/',
      isDeployed: true
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'Web Apps',
      description: 'Modern e-commerce solution with React and Node.js',
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20on%20laptop%20screen%2C%20clean%20product%20gallery%20layout%2C%20professional%20web%20design%20with%20shopping%20cart%20and%20product%20displays%2C%20contemporary%20UI%20design&width=800&height=600&seq=project-1&orientation=landscape',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      isDeployed: true
    },
    // {
    //   id: 3,
    //   title: 'Task Management App',
    //   category: 'Mobile Apps',
    //   description: 'Intuitive task management with real-time collaboration',
    //   image: 'https://readdy.ai/api/search-image?query=Mobile%20task%20management%20app%20interface%20on%20smartphone%2C%20organized%20todo%20lists%20and%20productivity%20dashboard%2C%20clean%20mobile%20UI%20design%20with%20task%20cards%20and%20progress%20tracking&width=800&height=600&seq=project-2&orientation=landscape',
    //   tags: ['React Native', 'Firebase', 'Redux'],
    //   link: '#',
    //   isDeployed: true
    // },
    {
      id: 4,
      title: 'Brand Identity System',
      category: 'UI/UX',
      description: 'Complete brand identity and design system',
      image: 'https://readdy.ai/api/search-image?query=Brand%20identity%20design%20mockups%20with%20logo%20variations%2C%20color%20palettes%2C%20and%20typography%20samples%2C%20professional%20branding%20materials%20layout%2C%20design%20system%20documentation&width=800&height=600&seq=project-3&orientation=landscape',
      tags: ['Figma', 'Adobe CC', 'Branding'],
      link: '#',
      isDeployed: true
    },
    // {
    //   id: 5,
    //   title: 'Analytics Dashboard',
    //   category: 'Web Apps',
    //   description: 'Real-time analytics dashboard with data visualization',
    //   image: 'https://readdy.ai/api/search-image?query=Analytics%20dashboard%20interface%20with%20charts%20and%20graphs%2C%20data%20visualization%20on%20computer%20screen%2C%20modern%20business%20intelligence%20dashboard%20with%20colorful%20charts%20and%20metrics&width=800&height=600&seq=project-4&orientation=landscape',
    //   tags: ['Vue.js', 'D3.js', 'Python'],
    //   link: '#',
    //   isDeployed: true
    // },
    // {
    //   id: 6,
    //   title: 'Social Media App',
    //   category: 'Mobile Apps',
    //   description: 'Social networking platform with modern features',
    //   image: 'https://readdy.ai/api/search-image?query=Social%20media%20mobile%20app%20interface%20showing%20feed%20and%20posts%2C%20modern%20social%20networking%20app%20design%20on%20phone%20screen%2C%20clean%20social%20media%20UI%20with%20user%20profiles%20and%20content%20cards&width=800&height=600&seq=project-5&orientation=landscape',
    //   tags: ['Flutter', 'PostgreSQL', 'AWS'],
    //   link: '#',
    //   isDeployed: true
    // }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects-section py-16" id="projects">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
        <p className="mb-8 text-gray-600">
          A showcase of my recent work across web development, mobile apps, and design
        </p>
        {/* Filters */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn${activeFilter === filter ? ' active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
            key={project.id}
            onClick={() => {
              if (project.isDeployed && project.link && project.link !== '#') {
                window.open(project.link, '_blank', 'noopener,noreferrer');
              } else {
                handleProjectClick(project);
              }
            }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 group cursor-pointer"
          >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                {project.isDeployed && (
                  <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded mb-2">Live</span>
                )}
                <div className="text-sm text-gray-500 mb-1">{project.category}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-700">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
              aria-label="Close"
            >
              &times;
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tags.map((tag) => (
                <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">{tag}</span>
              ))}
            </div>
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
              >
                Visit Site
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
                  
            
          
   