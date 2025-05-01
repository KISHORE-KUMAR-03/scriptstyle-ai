
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const skills = [
  "UX/UI Design", 
  "Responsive Web Development", 
  "Interface Design",
  "Hackathons",
  "Lanathons",
  "User Research"
];

const About = () => {
  return (
    <div className="container mx-auto">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4 font-heading">Who am I?</h3>
          <p className="text-gray-300 mb-6">
            I'm Kishore Kumar M, a UX/UI Designer and Software Engineer with a passion for crafting intuitive digital experiences. I enjoy participating in hackathons and lanathons where I can collaborate with others to create innovative solutions.
          </p>
          <p className="text-gray-300 mb-8">
            My approach combines technical knowledge with creative design principles to build user-friendly interfaces that not only look great but function flawlessly. When I'm not designing or coding, I find inspiration in music that keeps me creative and motivated.
          </p>
          
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-3 font-heading">Education</h4>
            <p className="text-gray-300">
              B.E. in Software Engineering<br />
              KSR College of Engineering (2023-2027)
            </p>
          </div>
          
          <Button
            asChild
            variant="outline"
            className="w-fit border-white/20 hover:bg-white/10"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 font-heading">My Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} className="glass-effect p-6 hover:bg-white/10 transition-all group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:bg-white/20 transition-all">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h4 className="font-semibold">{skill}</h4>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
