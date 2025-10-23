const Footer = () => {
  return (
    <footer className="bg-brown text-brown-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="text-3xl font-bold">Poai</div>
            <p className="text-brown-foreground/80">
              Breaking bread over warm conversations
            </p>
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
