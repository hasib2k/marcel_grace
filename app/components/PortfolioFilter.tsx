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
  cardClassName?: string;
  techClassName?: string;
  buttonClassName?: string;
}

export default function PortfolioFilter({ projects, categories, cardClassName = '', techClassName = '', buttonClassName = '' }: PortfolioFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`font-body px-3 py-1.5 text-xs font-semibold tracking-wide rounded-lg border ${
              category === selectedCategory
                ? 'bg-gradient-to-r from-gray-900 to-gray-700 text-white border-gray-900 shadow-lg'
                : 'bg-gradient-to-br from-gray-50 to-gray-100 text-[#3C3D37] border-gray-200 shadow-md'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-8">
          <h2 className="font-heading text-sm md:text-base font-black text-[#181C14] mb-4 tracking-wider">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {featuredProjects.map((project) => (
              <div key={project.id} className={`bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-3 sm:p-4 shadow-lg rounded-xl ${cardClassName}`}>
                <div className="flex flex-col gap-2 mb-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xs sm:text-sm font-black text-[#181C14] tracking-wide">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-0.5 text-xs font-semibold bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg ${techClassName}`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <p className="font-body text-[#3C3D37] mb-3 text-xs leading-relaxed font-medium">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs font-semibold bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg ${techClassName}`}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-2 py-1 text-xs font-semibold bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg ${techClassName}`}>
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
          <h2 className="font-heading text-sm md:text-base font-semibold text-[#181C14] mb-4">
            {featuredProjects.length > 0 ? 'More Projects' : 'Projects'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {otherProjects.map((project) => (
              <div key={project.id} className={`bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-3 sm:p-4 shadow-lg rounded-xl ${cardClassName}`}>
                <div className="flex flex-col gap-2 mb-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xs sm:text-sm font-semibold text-[#181C14]">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-0.5 text-xs font-semibold bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg ${techClassName}`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <p className="font-body text-[#3C3D37] mb-3 text-xs leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className={`px-2 py-1 text-xs font-semibold bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg ${techClassName}`}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-2 py-1 text-xs font-semibold bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg ${techClassName}`}>
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
          <p className="font-body text-gray-400 text-xs md:text-sm">
            No projects found in the {selectedCategory} category.
          </p>
        </div>
      )}
    </>
  );
}
