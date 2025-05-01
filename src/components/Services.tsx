
import React from 'react';
import { Card } from '@/components/ui/card';
import { Layout, Layers, Code } from 'lucide-react';

const serviceItems = [
  {
    icon: <Layout className="h-10 w-10" />,
    title: "UI/UX Design",
    description: "Creating intuitive, accessible, and visually appealing interfaces for web and mobile applications."
  },
  {
    icon: <Layers className="h-10 w-10" />,
    title: "Frontend Development",
    description: "Building responsive, performant web applications with modern JavaScript frameworks."
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Software Development",
    description: "Full-stack development with a focus on clean, maintainable code and efficient solutions."
  }
];

const Services = () => {
  return (
    <div className="container mx-auto">
      <h2 className="section-title">Services</h2>
      
      <div className="text-center mb-16">
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Currently exploring future service offerings while focusing on building experience and expertise in design and development.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceItems.map((service, index) => (
          <Card 
            key={index}
            className="glass-effect p-8 text-center hover:bg-white/5 transition-all"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
