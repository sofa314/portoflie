
import React from 'react';
import Navbar from './components/Navbar';
import AIChat from './components/AIChat';
import { PROJECTS, EXPERIENCES, SKILL_MATRIX, PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 lg:pt-48 lg:pb-32 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-4">Software Engineer</h2>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#projects" className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 hover:-translate-y-1 transition-all">View Projects</a>
              <a href="#contact" className="px-8 py-3 border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all">Contact Me</a>
            </div>
            <div className="mt-10 flex justify-center lg:justify-start gap-6 text-2xl text-slate-400">
              <a href={PERSONAL_INFO.github} target="_blank" className="hover:text-slate-900 transition-colors"><i className="fa-brands fa-github"></i></a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" className="hover:text-indigo-600 transition-colors"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 bg-indigo-600 rounded-3xl rotate-6 absolute top-0 right-0 -z-10 opacity-10"></div>
            <img 
              src="https://picsum.photos/seed/engineer/600/600" 
              alt="Youssef Ali" 
              className="w-full max-w-md rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Project Deep-Dives</h2>
            <p className="text-slate-500">Real-world solutions combining hardware logic with software scale.</p>
          </div>
          <div className="space-y-24">
            {PROJECTS.map((project, idx) => (
              <div key={project.id} className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <img src={project.image} alt={project.title} className="relative rounded-2xl shadow-xl w-full" />
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                  <div>
                    <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-wide mb-2">Problem</h4>
                    <p className="text-slate-600">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-green-600 uppercase tracking-wide mb-2">Solution</h4>
                    <p className="text-slate-600">{project.solution}</p>
                  </div>
                  <div className="pt-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Matrix */}
      <section id="skills" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Skill Matrix</h2>
            <p className="text-slate-500">A comprehensive view of my full-stack and embedded capabilities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILL_MATRIX.map((cat) => (
              <div key={cat.title} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600 text-xl">
                  <i className={`fa-solid ${cat.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.skills.map(skill => (
                    <li key={skill} className="flex items-center text-slate-600 text-sm">
                      <i className="fa-solid fa-check text-green-500 mr-2 text-xs"></i>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Experience Journey</h2>
            <p className="text-slate-500">The evolution of my professional career.</p>
          </div>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 group-[.is-active]:bg-indigo-600 text-slate-500 group-[.is-active]:text-indigo-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <i className={`fa-solid ${exp.icon} text-sm`}></i>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[45%] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">{exp.company}</div>
                    <time className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">{exp.duration}</time>
                  </div>
                  <div className="text-slate-900 font-semibold mb-2">{exp.role}</div>
                  <div className="text-slate-500 text-sm">{exp.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[3rem] p-12 lg:p-20 text-center text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-indigo-900/40 rounded-full blur-3xl"></div>
          
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 relative z-10">Let's Build Something<br/>Amazing Together</h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto relative z-10">
            Currently open to new opportunities in Full-Stack Development, AI Integration, and Embedded Systems.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold text-lg hover:-translate-y-1 transition-all shadow-xl shadow-indigo-900/20"
            >
              Send an Email
            </a>
            <div className="flex items-center gap-4">
               <a href={PERSONAL_INFO.github} target="_blank" className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all">
                 <i className="fa-brands fa-github text-2xl"></i>
               </a>
               <a href={PERSONAL_INFO.linkedin} target="_blank" className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all">
                 <i className="fa-brands fa-linkedin text-2xl"></i>
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        <div className="mt-4 text-xs text-slate-300">Built with React, Tailwind, and Gemini AI</div>
      </footer>

      {/* AI Assistant */}
      <AIChat />
    </div>
  );
};

export default App;
