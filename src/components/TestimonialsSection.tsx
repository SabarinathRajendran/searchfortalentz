import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'TechCorp',
    content: 'Search For Talentz transformed our hiring process. We found our lead developer in just 2 days!',
    rating: 5,
    initials: 'SC',
  },
  {
    name: 'Michael Rodriguez',
    role: 'HR Director',
    company: 'InnovateLabs',
    content: 'The quality of candidates is exceptional. Their AI matching is incredibly accurate.',
    rating: 5,
    initials: 'MR',
  },
  {
    name: 'Emma Thompson',
    role: 'Startup Founder',
    company: 'GrowthCo',
    content: 'As a startup, we needed the right talent fast. They delivered beyond our expectations.',
    rating: 5,
    initials: 'ET',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-background" role="region" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Client Success Stories - What Our{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Recruitment Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of satisfied companies who have transformed their talent acquisition and hiring process with our expert HR recruitment services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-border">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}