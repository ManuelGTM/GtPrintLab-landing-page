import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Zap, Users, Award, Target, Home, ChevronRight } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export default function About() {
  const teamMembers = [
    {
      name: "Gabriel Torres",
      role: "Founder & Lead Engineer",
      description: "Expert in CAD design and 3D printing with over 2 years of experience in precision manufacturing.",
      image: "/professional-cad-workstation-3d-modeling-software.jpg",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every project is executed with meticulous attention to detail and accuracy.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace cutting-edge technology to deliver superior results.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to understand and exceed their expectations.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every project we undertake.",
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
              <Link href="/about" className="text-foreground font-medium">
                About
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
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
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Breadcrumb navigation */}
        <div className="bg-muted/30 border-b border-border">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-3">
            <nav className="flex items-center space-x-2 text-sm">
              <Link
                href="/"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground font-medium">About</span>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-card/30 to-background overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">About Gt Print Lab</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Precision meets innovation in every project we undertake. We specialize in transforming ideas into reality
            through advanced 3D printing and expert CAD design.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded with a passion for precision engineering and innovative design, Gt Print Lab has grown from a
                small workshop to a trusted partner for businesses and individuals seeking high-quality 3D printing and
                CAD design services.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe that every project, no matter how complex, deserves meticulous attention to detail and a
                commitment to excellence that exceeds expectations.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                <Image
                  src="/professional-cad-workstation-3d-modeling-software.jpg"
                  alt="Professional CAD design workspace"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-card-foreground mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card
                key={value.title}
                className="p-6 text-center border-0 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to bringing your vision to life
            </p>
          </div>

          <div className="flex justify-center">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="p-8 max-w-md border-0 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-6 flex items-center justify-center">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6 text-balance">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Let's discuss how we can help bring your next project to life with precision and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg bg-transparent">
              <Link href="/portfolio">View Our Work</Link>
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
            <p>&copy; 2025 Gt Print Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
