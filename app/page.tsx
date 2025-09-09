import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Printer, Box, Zap, Eye, Cog } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-primary">Gt Print Lab</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </a>
              <a href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-background"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 leading-tight">
            From Concept to
            <span className="text-primary block">Reality</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Professional 3D printing and CAD design services that bring your ideas to life with precision and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg group">
              <a href="/portfolio">View Portfolio</a>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg bg-transparent">
              Get Quote
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-20 fill-muted/40">
            <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">Precision Meets Innovation</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Welcome to Gt Print Lab, where cutting-edge 3D printing technology meets expert CAD design. I specialize
                in transforming your concepts into tangible, high-quality prototypes and finished products.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With years of experience in additive manufacturing and computer-aided design, I provide comprehensive
                solutions from initial concept development to final production-ready models.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Zap className="h-4 w-4" />
                  Fast Turnaround
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Eye className="h-4 w-4" />
                  Attention to Detail
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Cog className="h-4 w-4" />
                  Custom Solutions
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                <img
                  src="/minimalist-product-design-sketch-wireframe.jpg"
                  alt="CAD design and 3D printing process"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete 3D printing and design solutions for all your project needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Printer className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3D Printing Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                High-quality 3D printing using advanced FDM and resin technologies. From prototypes to functional parts.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Rapid prototyping</li>
                <li>• Functional parts production</li>
                <li>• Multiple material options</li>
                <li>• Post-processing services</li>
              </ul>
            </Card>

            <Card className="p-8 border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Box className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">CAD Design</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Professional computer-aided design services from concept sketches to production-ready models.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Product design & modeling</li>
                <li>• Technical drawings</li>
                <li>• Design optimization</li>
                <li>• File format conversion</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore a selection of projects showcasing precision 3D printing and innovative CAD design solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src="/3d-printed-mechanical-prototype-with-gears-and-mov.jpg"
                  alt="Mechanical Prototype"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Mechanical Prototype</h3>
              <p className="text-muted-foreground">3D Printing • Functional Testing</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src="/custom-architectural-model-3d-printed-building-des.jpg"
                  alt="Architectural Model"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Architectural Model</h3>
              <p className="text-muted-foreground">CAD Design • Scale Modeling</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src="/custom-product-design-3d-printed-consumer-electron.jpg"
                  alt="Product Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Product Enclosure</h3>
              <p className="text-muted-foreground">Product Design • Prototyping</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src="/3d-printed-custom-tools-and-jigs-manufacturing.jpg"
                  alt="Custom Tooling"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Custom Tooling</h3>
              <p className="text-muted-foreground">Manufacturing • Custom Solutions</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src="/artistic-3d-printed-sculpture-decorative-object.jpg"
                  alt="Artistic Piece"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Artistic Creation</h3>
              <p className="text-muted-foreground">Creative Design • Art & Decor</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src="/replacement-parts-3d-printed-automotive-components.jpg"
                  alt="Replacement Parts"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Replacement Parts</h3>
              <p className="text-muted-foreground">Reverse Engineering • Restoration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple process from concept to finished product
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Consultation</h3>
              <p className="text-muted-foreground text-sm">Discuss your project requirements and specifications</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-muted-foreground text-sm">Create or refine CAD models for optimal printing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Production</h3>
              <p className="text-muted-foreground text-sm">High-quality 3D printing with precision and care</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Delivery</h3>
              <p className="text-muted-foreground text-sm">Finished products with post-processing if needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-card relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6 text-balance">
            Ready to Bring Your Ideas to Life?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Get a free quote for your 3D printing or CAD design project today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg bg-transparent">
              <a href="/portfolio">View More Work</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-20 fill-muted/30">
            <path d="M0,120 C300,0 900,0 1200,120 L1200,0 L0,0 Z"></path>
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-xl text-primary mb-4 md:mb-0">Gt Print Lab</div>
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
            <p>&copy; 2024 Gt Print Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
