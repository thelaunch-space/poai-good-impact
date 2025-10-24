import aparnaPortrait from "@/assets/aparna-portrait-optimized.webp";
import krishnaPortrait from "@/assets/krishna-portrait-optimized.webp";
import karnPortrait from "@/assets/karn-portrait-optimized.webp";
import { Linkedin } from "lucide-react";

const ChallengeChampions = () => {
  const champions = [
    {
      name: "Aparna Bhatnagar Saxena",
      title: "CEO, TORAJAMELO",
      image: aparnaPortrait,
      bio: "The CEO of TORAJAMELO, she has cemented its identity as a slow ethical lifestyle business, with a BCorp certification, PETA Vegan approved stamp, and Forum Fair Trade Indonesia membership. In 2023 she founded AHANA, a showcase of curated ethical brands. She is also the co-founder of Vriksh Impact Partners, a boutique impact investment and advisory firm in India, and the Indonesia Lead of Asia Startup Network.",
      linkedin: "https://www.linkedin.com/in/aparna-saxena/",
    },
    {
      name: "Krishna Goutham",
      title: "Tech Operator & Product Builder",
      image: krishnaPortrait,
      bio: "He had a remarkably diverse 10-year journey at BYJU'S, starting as a video editor and eventually led 300+ product and curriculum teams. Today he runs tech operations solo for small businesses, ships AI-first MVPs in weeks, and has built 15+ live products using tools like Bolt.new and Claude. He mentors non-technical founders and coaches students building apps for Ivy League admissions.",
      linkedin: "https://www.linkedin.com/in/krishna-goutham/",
    },
    {
      name: "Karn Malhotra",
      title: "Founder, ThisIsCreativeAi",
      image: karnPortrait,
      bio: "The founder of ThisIsCreativeAi, his present focus is 'Founder Led Marketing' for tech founders and 'Leadership Branding' for corporate executives. A 3x founder, his core experience over 20+ years is in Marketing, Entrepreneurship & Product Building. He previously ran 9 editions of 'Designothon' - a 'design for good' initiative to help NGO's in a 1 day hackathon format; impacting 100+ NGO's through 400+ creators. He is also the India Lead of Asia Startup Network and now building Poai in Goa.",
      linkedin: "https://www.linkedin.com/in/karnmalhotra/",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Challenge Champions
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet the experts guiding your journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {champions.map((champion, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={champion.image}
                    alt={champion.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <a 
                      href={champion.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-primary transition-colors group"
                    >
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {champion.name}
                      </h3>
                      <Linkedin className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                  <p className="text-primary font-semibold">{champion.title}</p>
                  <p className="text-foreground/80 leading-relaxed">{champion.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeChampions;
