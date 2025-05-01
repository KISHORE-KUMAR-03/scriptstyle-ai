
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Deaf Communication Enhancement",
    description: "A hackathon project focusing on enhancing communication for deaf people through innovative technology solutions.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "Hackathon",
    technologies: ["React", "TensorFlow", "SignLanguage API"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Agricultural AI Assistant",
    description: "AI-powered solution for crops, seeds, agricultural vehicles, weather forecasting, and plant needs monitoring.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Lanathon",
    technologies: ["Python", "Machine Learning", "IoT"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Personal Finance Manager",
    description: "A minimalist app to help users track expenses, set budgets, and achieve financial goals.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Mini Project",
    technologies: ["React Native", "Firebase", "Chart.js"],
    link: "#",
    github: "#"
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="container mx-auto">
      <h2 className="section-title">My Portfolio</h2>
      
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-2">
          {["All", "Hackathon", "Lanathon", "Mini Project"].map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={filter === category 
                ? "bg-primary text-primary-foreground" 
                : "border-white/20 hover:bg-white/10"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="glass-effect rounded-lg overflow-hidden group transition-all hover:transform hover:-translate-y-1"
          >
            <div className="relative h-60 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-4">
                  <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="rounded-full border-white/50 bg-black/50"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="icon"
                    variant="outline"
                    className="rounded-full border-white/50 bg-black/50"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <span className="inline-block text-xs font-semibold bg-white/10 px-3 py-1 rounded-full mb-3">
                {project.category}
              </span>
              <h3 className="text-xl font-bold mb-2 font-heading">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-xs bg-secondary px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
