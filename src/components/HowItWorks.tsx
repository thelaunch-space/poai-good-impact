import { CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    "You fill the form, picking your preferred challenges",
    "You can sign up solo or as a team",
    "If solo, we'll match you with others that have a similar focus or complimentary skill",
    "Your team could be a mix of in-person and online participants",
    "You'll be introduced to your team on a common mail thread the previous evening; we encourage you to set up your whatsapp group etc.",
    "Choose roles based on the skillset in the group and what you're looking to achieve within the timeframe",
    "Any solutions created should directly address the chosen challenge statement and be something that can be implemented at an individual / company level without needing core govt. or bureaucratic support",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-center">
            How does the Hackathon Work?
          </h2>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground/80 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>

          <div className="bg-secondary/10 border-2 border-secondary rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Timeline</h3>
            <p className="text-lg text-foreground/80">
              <strong>The hackathon runs from 10am to 5pm.</strong> Winners will be announced by 6pm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
