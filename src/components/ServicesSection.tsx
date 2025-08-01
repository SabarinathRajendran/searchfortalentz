import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Zap, Shield, Brain, Globe } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Precision Matching',
    description: 'Our AI algorithm matches candidates based on skills, culture fit, and growth potential.',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get qualified candidates in your pipeline within 48 hours of posting your requirements.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Screening',
    description: 'Advanced screening process that evaluates technical skills and soft skills automatically.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: '95% success rate with comprehensive background checks and skill verification.',
  },
  {
    icon: Users,
    title: 'Team Integration',
    description: 'We ensure cultural alignment and smooth integration with your existing team.',
  },
  {
    icon: Globe,
    title: 'Global Talent Pool',
    description: 'Access to worldwide talent network spanning 50+ countries and industries.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background" role="main" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Premier HR Recruitment Services - Why Companies Choose{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Search For Talentz
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We revolutionize talent acquisition and recruitment with cutting-edge AI technology and expert HR consulting, 
            delivering exceptional hiring results for forward-thinking companies across all industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}