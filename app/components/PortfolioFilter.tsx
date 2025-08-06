'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  codeUrl: string;
  liveUrl: string;
  featured: boolean;
}

interface PortfolioFilterProps {
  projects: Project[];
  categories: string[];
}

export default function PortfolioFilter({ projects, categories }: PortfolioFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-200 ${
              category === selectedCategory
                ? 'bg-primary text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Featured Projects</h2>
          <div className="space-y-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="glass-card p-8 hover:scale-105 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <span className="skill-tag text-sm">{project.category}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="skill-tag text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <Link
                        href={project.codeUrl}
                        target="_blank"
                        className="btn-secondary flex items-center gap-2"
                      >
                        <FiGithub size={16} />
                        View Code
                      </Link>
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="btn-primary flex items-center gap-2"
                      >
                        <FiExternalLink size={16} />
                        Live Demo
                      </Link>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1 flex items-center justify-center">
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Project Preview</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-white mb-8">
            {featuredProjects.length > 0 ? 'More Projects' : 'Projects'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-full h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Project Preview</span>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="skill-tag text-xs">{project.category}</span>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="skill-tag text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Link
                    href={project.codeUrl}
                    target="_blank"
                    className="btn-secondary flex items-center gap-1 text-sm flex-1 justify-center"
                  >
                    <FiGithub size={14} />
                    Code
                  </Link>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="btn-primary flex items-center gap-1 text-sm flex-1 justify-center"
                  >
                    <FiExternalLink size={14} />
                    Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">
            No projects found in the {selectedCategory} category.
          </p>
        </div>
      )}
    </>
  );
}
