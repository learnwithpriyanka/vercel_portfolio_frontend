import './SkillsSection.css';
export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'ri-code-s-slash-line',
      color: 'blue',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 90 },
        
      ]
    },
    {
      title: 'Backend',
      icon: 'ri-server-line',
      color: 'green',
      skills: [
        { name: 'Node.js', level: 90 },
        
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 80 },
        { name: 'Express.js', level: 85 }
      ]
    },
    {
      title: 'Programming Languages',
      icon: 'ri-smartphone-line',
      color: 'purple',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 75 },
        
        { name: 'C', level: 85 },
         { name: 'SQL', level: 80 },
        { name: 'JavaScript', level: 70 },
      ]
    },
    {
      title: ' Core Technologies',
      icon: 'ri-cloud-line',
      color: 'green',
      skills: [
        { name: ' Data Structures & Algorithms', level: 80 },
        { name: 'Object-Oriented Programming', level: 80 },
        { name: 'Database Management Systems', level: 80 },
        {name: 'Operating Systems', level: 80 },
        {name: 'Computer Networks', level: 80 },
       
      
  ]
},

{
  title: ' Tools & Platforms',
  icon: 'ri-cloud-line',
  color: 'orange',
  skills: [
    { name: 'Git', level: 80 },
    { name: 'GitHub', level: 80 },
    { name: 'Docker', level: 80 },
    {name: 'VS Code', level: 80 },
    {name: 'Cursor', level: 80 },
    {name: 'Postman', level: 80 },
    {name: 'AI Tools(ChatGPT, Gemini, etc.)', level: 80 },
  
],
}
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        progress: 'bg-blue-600'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        progress: 'bg-green-600'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        progress: 'bg-purple-600'
      },
      orange: {
        bg: 'bg-orange-100',
        text: 'text-orange-600',
        progress: 'bg-orange-600'
      },
      
     
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="skills-section py-16" id="skills">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2">Skills & Expertise</h2>
        <p className="mb-8 text-gray-600">
          Technologies and tools I use to bring ideas to life
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div key={category.title} className={`rounded-xl shadow-lg p-6 ${colorClasses.bg}`}>
                <div className={`mb-4 text-2xl font-bold ${colorClasses.text}`}>
                  {/* Icon placeholder: <i className={category.icon}></i> */}
                  {category.title}
                </div>
                <ul>
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skill.name} className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className={`text-xs ${colorClasses.text}`}>{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded">
                        <div
                          className={`h-2 rounded ${colorClasses.progress}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
             
        <h3 className='what' style={{textAlign:"center",background:""}}>What I Bring to Your Project</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 
          <div className="rounded-xl shadow p-6 bg-white text-center">
            {/* Icon placeholder */}
            <div className="text-3xl mb-2">💡</div>
            <h4 className="font-bold mb-1">Innovation</h4>
            <p>Creative solutions that push boundaries</p>
          </div>
          <div className="rounded-xl shadow p-6 bg-white text-center">
            {/* Icon placeholder */}
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="font-bold mb-1">Performance</h4>
            <p>Fast, optimized, and scalable applications</p>
          </div>
          <div className="rounded-xl shadow p-6 bg-white text-center">
            {/* Icon placeholder */}
            <div className="text-3xl mb-2">🎯</div>
            <h4 className="font-bold mb-1">User Focus</h4>
            <p>Intuitive experiences that users love</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}









