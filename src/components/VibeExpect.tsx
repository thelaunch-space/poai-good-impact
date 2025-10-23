import vibe1 from "@/assets/vibe-1.png";
import vibe2 from "@/assets/vibe-2.png";
import vibe3 from "@/assets/vibe-3.png";
import vibe4 from "@/assets/vibe-4.jpg";

const VibeExpect = () => {
  const vibes = [
    { image: vibe1, alt: "Hackathon collaboration scene 1" },
    { image: vibe2, alt: "Hackathon collaboration scene 2" },
    { image: vibe3, alt: "Hackathon networking" },
    { image: vibe4, alt: "Hackathon teamwork" },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-center">
            Vibe you can expect
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vibes.map((vibe, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-shadow"
              >
                <img
                  src={vibe.image}
                  alt={vibe.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibeExpect;
