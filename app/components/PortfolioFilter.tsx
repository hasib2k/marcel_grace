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
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium rounded-none border ${buttonClassName} ${
              category === selectedCategory
                  ? 'bg-[#697565] text-white border-[#697565]'
                : 'bg-white text-black border-[#697565] hover:bg-[#ECDFCC] hover:text-black'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-16">
          <h2 className="text-xs md:text-lg font-semibold text-black mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className={`bg-white border-l-4 border-[#697565] p-4 sm:p-6 shadow-none rounded-none ${cardClassName}`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <h3 className="text-xs sm:text-base font-bold text-black">
                    {project.title}
                  </h3>
                  <span className={`inline-block px-2 py-0.5 text-[10px] font-medium bg-[#697565] text-white border border-[#697565] rounded-none ${techClassName}`}>
                    {project.category}
                  </span>
                </div>
                
                <p className="text-black mb-4 text-xs md:text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className={`px-2 py-0.5 text-[10px] font-medium bg-[#697565] text-white border border-[#697565] rounded-none ${techClassName}`}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-2 py-0.5 text-[10px] font-medium bg-[#697565] text-white border border-[#697565] rounded-none ${techClassName}`}>
                      +{project.technologies.length - 3} more
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
          <h2 className="text-xs md:text-lg font-semibold text-black mb-8">
            {featuredProjects.length > 0 ? 'More Projects' : 'Projects'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className={`bg-white border-l-4 border-[#697565] p-4 sm:p-6 shadow-none rounded-none ${cardClassName}`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <h3 className="text-xs sm:text-base font-bold text-black">
                    {project.title}
                  </h3>
                  <span className={`inline-block px-2 py-0.5 text-[10px] font-medium bg-[#697565] text-white border border-[#697565] rounded-none ${techClassName}`}>
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4 text-xs md:text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className={`px-2 py-0.5 text-[10px] font-medium bg-[#697565] text-white border border-[#697565] rounded-none ${techClassName}`}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-2 py-0.5 text-[10px] font-medium bg-[#697565] text-white border border-[#697565] rounded-none ${techClassName}`}>
                      +{project.technologies.length - 3} more
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
          <p className="text-gray-400 text-xs md:text-sm">
            No projects found in the {selectedCategory} category.
          </p>
        </div>
      )}
    </>
  );
}
