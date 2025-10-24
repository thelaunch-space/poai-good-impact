const Schedule = () => {
  const scheduleItems = [
    { time: "9.30-10.00", event: "Registration" },
    { time: "10.00-10.15", event: "Introduction to Poai, Hackathon overview" },
    { time: "10.15-10.30", event: "Speed Networking" },
    { time: "10.30-11.00", event: "2 Challenge Champions detail out the challenges (Aparna & ...)" },
    { time: "11.00-11.45", event: "Vibe Coding with Krishna Goutham" },
    { time: "11.45-12.00", event: "Break" },
    { time: "12.00-17.00", event: "Hackathon", highlight: true },
    { time: "15.00-15.30", event: "Challenge Champions Check-in" },
    { time: "17.00", event: "Hackathon ends" },
    { time: "17.00-17.30", event: "Judging" },
    { time: "17.30-18.00", event: "Judges announce winners" },
    { time: "18.00-18.15", event: "Closure & What's Next with Poai" },
  ];

  return (
    <section id="schedule" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Schedule
            </h2>
            <p className="text-2xl text-primary font-semibold">
              15th November, Saturday - 10am to 6.30pm
            </p>
          </div>

          <div className="bg-background rounded-2xl shadow-card overflow-hidden">
            <div className="divide-y divide-border">
              {scheduleItems.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 hover:bg-muted/50 transition-colors ${
                    item.highlight ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="font-bold text-primary sm:col-span-1">
                    {item.time}
                  </div>
                  <div className="text-foreground/80 sm:col-span-2 font-medium">
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
