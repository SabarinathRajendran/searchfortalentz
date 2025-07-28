import { Separator } from '@/components/ui/separator';
import { Linkedin, Twitter, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/202a09b8-8214-4823-8c73-0d05ae2b6322.png" 
                alt="Search For Talentz Logo" 
                className="w-8 h-8 object-contain"
              />
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Search For Talentz
              </h3>
            </div>
            <p className="text-muted-foreground">
              Connecting exceptional talent with forward-thinking companies worldwide.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Talent Acquisition</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Executive Search</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contract Staffing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Talent Assessment</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Industries</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Finance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Manufacturing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@searchfortalentz.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 Search For Talentz. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}