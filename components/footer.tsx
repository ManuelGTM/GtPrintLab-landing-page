export function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-bold text-xl text-primary mb-4 md:mb-0">
            Gt Print Lab
          </div>
          <div className="flex space-x-6 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2025 Gt Print Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
