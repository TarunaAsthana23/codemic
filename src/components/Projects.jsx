import React, { useState } from 'react';
import './Projects.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaGithub, FaBootstrap, FaJava, FaReact,
} from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

const projectsData = [
  {
    id: 1,
    title: 'Amazon Clone',
    image: '/Set/Images/Amazon.png',
    description: 'An e-commerce website clone created using HTML, CSS, and JavaScript.',
    tools: ['html', 'css', 'js', 'github', 'vscode', 'vercel'],
    repoLink: 'https://github.com/TarunaAsthana23/Amazon_Clone',
  },
  {
    id: 2,
    title: 'Event Management',
    image: '/Set/Images/Event Management.png',
    description: 'An event management website developed using HTML, CSS, JavaScript, and TypeScript.',
    tools: ['html', 'css', 'js', 'bootstrap', 'github', 'vscode', 'vercel'],
    repoLink: 'https://github.com/TarunaAsthana23/Event-Management',
    vercelLink: 'https://event-management-tarunaasthana23-taruna-asthanas-projects.vercel.app/',
  },
  {
    id: 3,
    title: 'Apparent Clone',
    image: '/Set/Images/Apparent.png',
    description: 'A clone of Apparent Technologies Inc. official website built using HTML, CSS, and JavaScript.',
    tools: ['html', 'css', 'js', 'github', 'vscode', 'vercel'],
    repoLink: 'https://github.com/TarunaAsthana23/Apparent_Clone-Website',
    vercelLink: 'https://apparent-git-main-taruna-asthanas-projects.vercel.app/',
  },
  {
    id: 4,
    title: 'Handling Form Submission',
    image: '/Set/Images/S1.png',
    description: 'A project to handle form submission using Java.',
    tools: ['java', 'github', 'vscode', 'vercel'],
    repoLink: 'https://github.com/TarunaAsthana23/handling-form-submission',
  },
  {
    id: 5,
    title: 'My Portfolio',
    image: '/Set/Images/My Portfolio.png',
    description: 'A personal portfolio website created using React.js.',
    tools: ['html', 'css', 'js', 'github', 'vscode', 'vercel', 'react'],
    repoLink: 'https://github.com/TarunaAsthana23/My_Portfolio.git',
    vercelLink: 'https://my-portfolio-tarunaasthana23-taruna-asthanas-projects.vercel.app/',
  },
  {
    id: 6,
    title: 'Portfolio',
    image: '/Set/Images/Portfolio.png',
    description: 'A personal portfolio website created using React.js.',
    tools: ['html', 'css', 'js', 'github', 'vscode', 'vercel', 'react'],
    repoLink: 'https://github.com/TarunaAsthana23/PORTFOLIO.git',
    vercelLink: 'https://portfolio-tarunaasthana23-taruna-asthanas-projects.vercel.app/',
  },
  {
    id: 7,
    title: 'Portfolio 2',
    image: '/Set/Images/Portfolio.png',
    description: 'Another personal portfolio project.',
    tools: ['html', 'css', 'js', 'github', 'vscode', 'vercel', 'react'],
    repoLink: 'https://github.com/TarunaAsthana23/PORTFOLIO.git',
    vercelLink: 'https://portfolio-tarunaasthana23-taruna-asthanas-projects.vercel.app/',
  },
  {
    id: 8,
    title: 'Portfolio 3',
    image: '/Set/Images/Portfolio.png',
    description: 'Another personal portfolio project.',
    tools: ['html', 'css', 'js', 'github', 'vscode', 'vercel', 'react'],
    repoLink: 'https://github.com/TarunaAsthana23/PORTFOLIO.git',
    vercelLink: 'https://portfolio-tarunaasthana23-taruna-asthanas-projects.vercel.app/',
  },
];

const iconMap = {
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  js: <FaJs />,
  bootstrap: <FaBootstrap />,
  github: <FaGithub />,
  vscode: <VscVscode />,
  java: <FaJava />,
  react: <FaReact />,
  vercel: <SiVercel />,
};

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 6);

  return (
    <section id="projects" className="py-5">
    {/* <section id="projects" className="py-5 bg-light"> */}
      <div className="container text-center py-5">
        <h1 className="projects-title fw-bold ">Our Projects</h1>
        <div className="underline mx-auto my-2 mb-5"></div>

        <div className="row g-4 justify-content-center">
          {displayedProjects.map((project) => (

            <div key={project.id} className="col-12 col-sm-6 col-md-4 ">

              <div className="project-card text-center p-4">
                <img src={project.image} alt={project.title} className="card-img-top project-img" />
                <div className="card-body d-flex flex-column">
                  <h5 className="Pro_1 mt-3">{project.title}</h5>
                  <p className="Parh_1 mt-3">{project.description}</p>
                  <div className="underline_1 mx-auto my-2"></div>
                  <h6 className="Pro_2 mt-3">TOOLS</h6>
                  <div className="underline_1 mx-auto my-2"></div>
                  <div className="tools mt-3">
                    {project.tools.map((tool, i) => (
                      <span key={i}>{iconMap[tool]}</span>
                    ))}
                  </div>
                  <div className=" RepVer mt-3 d-flex flex-column gap-2 text-center">
                    <a href={project.repoLink} target="_blank" rel="noreferrer" className="btn btn-sm">
                    {/* <a href={project.repoLink} target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm"> */}
                      <FaGithub className="me-1" /> Repository
                    </a>
                    {project.vercelLink && (
                      <a href={project.vercelLink} target="_blank" rel="noreferrer" className="btn btn-sm">
                      {/* <a href={project.vercelLink} target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-sm"> */}
                        <SiVercel className="me-1" /> Vercel
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projectsData.length > 6 && (
          <div className="view">
            <button className="view-btn mb-5" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'View Less' : 'View More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
