
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Phone, Mail, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    emailjs.init("NhPuVZVVKs9OWnCWw");
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        "service_m7vjw7j",
        "template_wvp3kig",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "NhPuVZVVKs9OWnCWw"
      );
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 9442969578",
      link: "tel:+919442969578"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "kishores0987@gmail.com",
      link: "mailto:kishores0987@gmail.com"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "LinkedIn Profile",
      link: "https://linkedin.com"
    }
  ];

  return (
    <div className="container mx-auto">
      <h2 className="section-title">Contact Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <h3 className="text-2xl font-bold mb-6 font-heading">Let's Connect</h3>
          <p className="text-gray-300 mb-8">
            I'm currently open for new project inquiries, collaborations, and opportunities. Feel free to reach out through any of the following channels:
          </p>
          
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                className="flex items-center p-4 glass-effect rounded-lg hover:bg-white/10 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <Card className="glass-effect p-8">
            <h3 className="text-2xl font-bold mb-6 font-heading">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Your Name" 
                    required
                    className="bg-white/5 border-white/10 focus:border-white/30"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your Email" 
                    required
                    className="bg-white/5 border-white/10 focus:border-white/30"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input 
                  id="subject" 
                  type="text" 
                  placeholder="Subject" 
                  required
                  className="bg-white/5 border-white/10 focus:border-white/30"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your Message" 
                  rows={5}
                  required
                  className="bg-white/5 border-white/10 focus:border-white/30"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
