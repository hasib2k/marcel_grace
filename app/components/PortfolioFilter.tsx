'use client';

import { useState } from 'react';

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="glass-card p-4 md:p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="skill-tag text-xs">{project.category}</span>
                </div>
                
                <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="glass-card p-4 md:p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="skill-tag text-xs">{project.category}</span>
                </div>
                
                <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
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
