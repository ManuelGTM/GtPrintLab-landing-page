import { Zap, Eye, Shield, Award } from "lucide-react";

export function ChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Gt Print Lab
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of working with dedicated professionals
            who care about your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast Turnaround</h3>
            <p className="text-muted-foreground text-sm">
              Quick delivery without compromising on quality
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Attention to Detail</h3>
            <p className="text-muted-foreground text-sm">
              Meticulous care in every aspect of production
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
            <p className="text-muted-foreground text-sm">
              100% satisfaction guarantee on all projects
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
            <p className="text-muted-foreground text-sm">
              Years of experience in 3D printing and design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
