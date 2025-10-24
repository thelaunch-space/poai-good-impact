import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import asnLogo from "@/assets/asn-logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate submission - replace with actual mailing list integration
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Thanks for subscribing!");
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <footer className="bg-brown text-brown-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Supported by</h3>
            <div className="flex justify-center">
              <a href="https://www.asiastartupnetwork.com/" target="_blank" rel="noopener noreferrer">
                <img src={asnLogo} alt="Asia Startup Network" className="h-20" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-xl font-semibold">Poai</div>
              <p className="text-brown-foreground/80">
                Breaking bread over warm conversations about technology
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Join our mailing list</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl bg-brown-foreground/10 border-brown-foreground/20 text-brown-foreground placeholder:text-brown-foreground/50"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>

          <div className="text-center text-sm text-brown-foreground/60 pt-8 border-t border-brown-foreground/20">
            © 2024 Poai. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
