import { Button } from '@/components/ui/button';
import InterviewScene3D from './InterviewScene3D';
import { ArrowRight, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Trusted by 500+ companies</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Find the{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Perfect Talent
                </span>
                {' '}for Your Team
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                We connect top companies with exceptional talent through our AI-powered matching system. 
                Transform your hiring process with precision, speed, and quality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Hiring Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Success Stories
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">48hrs</div>
                <div className="text-sm text-muted-foreground">Avg. Hire Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Talents Placed</div>
              </div>
            </div>
          </div>

          {/* Right 3D Scene */}
          <div className="relative h-[600px] animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl blur-3xl"></div>
            <div className="relative h-full rounded-3xl overflow-hidden shadow-elegant">
              <InterviewScene3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}