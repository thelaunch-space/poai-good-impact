import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner-optimized.webp";

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero = ({ onRegisterClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Tech-For-Good Hackathon — <span className="text-primary">Poai</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-medium text-secondary">
                Innovate • Connect • Goa
              </p>
              <p className="text-xl text-muted-foreground">
                15th November, 10am–6pm
              </p>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
              Bringing technologists, domain experts, founders and creators together to solve local waste challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onRegisterClick}
                size="lg"
                className="rounded-full px-10 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Register Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-10 text-lg border-2 border-brown text-brown hover:bg-brown hover:text-brown-foreground"
                onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Schedule
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroBanner}
                alt="Tech-For-Good Hackathon collaboration"
                className="w-full h-auto object-cover"
                fetchPriority="high"
              />
              <div className="absolute top-6 right-6">
                <Button
                  onClick={onRegisterClick}
                  size="lg"
                  className="rounded-full px-8 shadow-2xl hover:shadow-xl transition-all backdrop-blur-sm"
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
