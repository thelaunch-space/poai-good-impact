import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Calendar } from "lucide-react";

// Update this with your Make.com webhook URL
const WEBHOOK_URL = "YOUR_MAKE_COM_WEBHOOK_URL_HERE";

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Valid phone number required"),
  portfolio: z.string().optional(),
  attendanceMode: z.string().min(1, "Please select how you'll join"),
  aboutYourself: z.string().optional(),
  aiQuestions: z.string().optional(),
  challenges: z.array(z.string()).min(1, "Please select at least one challenge"),
  teamName: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to proceed",
  }),
});

type FormData = z.infer<typeof formSchema>;

const RegistrationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      portfolio: "",
      attendanceMode: "",
      aboutYourself: "",
      aiQuestions: "",
      challenges: [],
      teamName: "",
      consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    try {
      console.log("Form data:", data);
      
      // Send data to Make.com webhook
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          portfolio: data.portfolio,
          attendanceMode: data.attendanceMode,
          aboutYourself: data.aboutYourself,
          aiQuestions: data.aiQuestions,
          challenges: data.challenges,
          teamName: data.teamName,
          consent: data.consent,
          timestamp: new Date().toISOString(),
        }),
      });
      
      setIsSubmitted(true);
      toast.success("Registration successful! Check your email for confirmation.");
    } catch (error) {
      console.error("Webhook error:", error);
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const addToCalendar = () => {
    const event = {
      title: "Poai Tech-For-Good Hackathon",
      description: "Join us for a day of innovation and impact",
      location: "Goa",
      startDate: "2024-11-15T10:00:00",
      endDate: "2024-11-15T18:00:00",
    };
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startDate.replace(/[-:]/g, '')}/${event.endDate.replace(/[-:]/g, '')}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  if (isSubmitted) {
    return (
      <section id="register" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-3xl shadow-card p-12 text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-foreground">
                Thanks - you're registered!
              </h2>
              <p className="text-lg text-foreground/80">
                We'll send a confirmation email with event details & calendar invite.
              </p>
              <Button
                onClick={addToCalendar}
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Add to Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Register Now
            </h2>
            <p className="text-lg text-muted-foreground">
              Secure your spot for the hackathon
            </p>
          </div>

          <div className="bg-card rounded-3xl shadow-card p-8 sm:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} className="rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Email Id *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} className="rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Phone Number *</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+91 1234567890" {...field} className="rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="portfolio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">LinkedIn / Github / Portfolio Link *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="https://..." 
                          {...field} 
                          className="rounded-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="attendanceMode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">I'll join the hackathon *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Select attendance mode" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="in-person">In person</SelectItem>
                          <SelectItem value="online">Online</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="aboutYourself"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Tell us about yourself and why you'd like to do the hackathon</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about yourself and your interest in this hackathon..." 
                          {...field} 
                          className="rounded-xl min-h-[100px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="aiQuestions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Any questions about building solutions with Ai?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Share any questions or thoughts about AI solutions..." 
                          {...field} 
                          className="rounded-xl min-h-[80px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="challenges"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-foreground font-semibold">Challenge Options *</FormLabel>
                      </div>
                      {[
                        { id: "fashion-circular", label: "Fashion Waste: Circular Design - Pre-Production & Concept Stage" },
                        { id: "fashion-postconsumer", label: "Fashion Waste: Post-Consumer Waste Management & Segregation" },
                        { id: "home-1", label: "Home/Commercial Waste: Option 1" },
                        { id: "home-2", label: "Home/Commercial Waste: Option 2" },
                      ].map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="challenges"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0 mb-3"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, item.id])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.id
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal text-sm cursor-pointer">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="teamName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Team Name (if registering as a team)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your team name" {...field} className="rounded-xl" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border-2 border-border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-foreground/80">
                          I consent to Poai storing my details for event communications. *
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {isLoading ? "Submitting..." : "Complete Registration"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
