import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowLeft,
  Printer,
  Box,
  Cog,
  Zap,
  Eye,
  CheckCircle,
  Clock,
  Shield,
  Award,
  Home,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Services() {
  const services = [
    {
      icon: Printer,
      title: "3D Printing Services",
      description: "High-quality additive manufacturing using state-of-the-art FDM and resin printing technologies.",
      image: "/3d-printed-mechanical-prototype-with-gears-and-mov.jpg",
      features: [
        "Rapid prototyping and production",
        "Multiple material options (PLA, ABS, PETG, Resin)",
        "Layer heights from 0.1mm to 0.3mm",
        "Build volumes up to 300x300x400mm",
        "Post-processing and finishing services",
        "Quality inspection and testing",
      ],
      pricing: "Starting from $15/hour + materials",
    },
    {
      icon: Box,
      title: "CAD Design & Modeling",
      description: "Professional computer-aided design services from initial concepts to production-ready models.",
      image: "/custom-architectural-model-3d-printed-building-des.jpg",
      features: [
        "Product design and development",
        "Technical drawings and blueprints",
        "3D modeling and visualization",
        "Design optimization for manufacturing",
        "File format conversion (STL, STEP, OBJ)",
        "Reverse engineering services",
      ],
      pricing: "Starting from $50/hour",
    },
    {
      icon: Cog,
      title: "Custom Solutions",
      description: "Tailored manufacturing solutions including jigs, fixtures, and specialized tooling.",
      image: "/3d-printed-custom-tools-and-jigs-manufacturing.jpg",
      features: [
        "Manufacturing jigs and fixtures",
        "Custom replacement parts",
        "Prototyping and testing",
        "Small batch production",
        "Assembly and finishing",
        "Quality control systems",
      ],
      pricing: "Quote on request",
    },
  ]

  const processes = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "We discuss your project requirements, timeline, and specifications to create a detailed plan.",
      duration: "1-2 days",
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Our team creates or refines CAD models, optimizing them for 3D printing and functionality.",
      duration: "2-5 days",
    },
    {
      step: "03",
      title: "Production & Quality Control",
      description: "High-precision 3D printing with continuous monitoring and quality checks throughout the process.",
      duration: "1-7 days",
    },
    {
      step: "04",
      title: "Finishing & Delivery",
      description: "Post-processing, quality inspection, and delivery of your finished products.",
      duration: "1-2 days",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-xl text-primary">
              Gt Print Lab
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/services" className="text-foreground font-medium">
                Services
              </Link>
              <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <ThemeToggle />
            </div>
            {/* Mobile theme toggle */}
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="bg-muted/30 border-b border-border">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-3">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground mb-8 group">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Services</span>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-card/30 to-background overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive 3D printing and CAD design solutions tailored to bring your innovative ideas to life with
            precision and quality.
          </p>
        </div>

        {/* Curved divider with darker tone */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-20 fill-muted/50">
            <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {service.pricing}
                    </span>
                  </div>
                  <Button size="lg" className="rounded-full">
                    Get Quote
                  </Button>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined workflow designed to deliver exceptional results on time and within budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process) => (
              <Card
                key={process.step}
                className="p-6 border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-background"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{process.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{process.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{process.description}</p>
                  <div className="inline-flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                    <Clock className="h-3 w-3" />
                    {process.duration}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Curved divider with darker tone */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-20 fill-muted/40">
            <path d="M0,120 C300,0 900,0 1200,120 L1200,0 L0,0 Z"></path>
          </svg>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Gt Print Lab</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with dedicated professionals who care about your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-muted-foreground text-sm">Quick delivery without compromising on quality</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Attention to Detail</h3>
              <p className="text-muted-foreground text-sm">Meticulous care in every aspect of production</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-muted-foreground text-sm">100% satisfaction guarantee on all projects</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
              <p className="text-muted-foreground text-sm">Years of experience in 3D printing and design</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6 text-balance">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Contact us today for a free consultation and quote on your 3D printing or CAD design needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg bg-transparent">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
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
