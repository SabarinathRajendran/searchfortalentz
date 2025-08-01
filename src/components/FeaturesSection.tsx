import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  'AI-powered candidate matching',
  'Real-time interview scheduling',
  'Comprehensive skill assessments',
  'Cultural fit analysis',
  'Global talent marketplace',
  'Dedicated account management',
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-3 py-1">
                Advanced Technology
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Streamlined Hiring with{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Smart Features
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Our platform combines artificial intelligence with human expertise to deliver 
                an unparalleled talent acquisition experience.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="group">
                Explore All Features
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card rounded-3xl p-8 shadow-elegant">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Hiring Process</h3>
                  <p className="text-muted-foreground">Real-time analytics and insights</p>
                </div>
                
                {/* Mock Dashboard */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm">Active Job Postings</span>
                    <Badge variant="default">12</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm">Candidates in Pipeline</span>
                    <Badge variant="default">48</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm">Interviews Scheduled</span>
                    <Badge variant="default">7</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <span className="text-sm font-medium">Ready to Hire</span>
                    <Badge className="bg-primary text-primary-foreground">3</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}