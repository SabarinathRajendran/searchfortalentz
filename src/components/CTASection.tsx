import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-gradient-hero text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Ready to Find Your Next
              <br />
              Star Employee?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Join thousands of companies who trust Search For Talentz to build their dream teams. 
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="secondary" size="lg" className="group">
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-primary-foreground/60">
            <span>✓ No credit card required</span>
            <span>✓ 14-day free trial</span>
            <span>✓ Cancel anytime</span>
          </div> */}
        </div>
      </div>
    </section>
  );
}