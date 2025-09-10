import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { Image } from "@/components/image";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Mechanical Prototype",
      category: "3D Printing",
      date: "2024",
      description:
        "Complex mechanical prototype with moving parts and precision gears for automotive testing.",
      image: "/3d-printed-mechanical-prototype-with-gears-and-mov.jpg",
      tags: ["Functional Testing", "Automotive", "Precision Parts"],
      details:
        "This project involved creating a functional mechanical prototype with intricate gear systems. The challenge was achieving tight tolerances while maintaining smooth operation of all moving components.",
    },
    {
      id: 2,
      title: "Architectural Scale Model",
      category: "CAD Design",
      date: "2024",
      description:
        "Detailed architectural model for urban development presentation with removable sections.",
      image: "/custom-architectural-model-3d-printed-building-des.jpg",
      tags: ["Architecture", "Scale Modeling", "Presentation"],
      details:
        "A comprehensive architectural model featuring multiple buildings with detailed facades and landscaping. Each section was designed to be removable for interactive presentations.",
    },
    {
      id: 3,
      title: "Consumer Electronics Enclosure",
      category: "Product Design",
      date: "2024",
      description:
        "Sleek product enclosure design for consumer electronics with integrated cooling vents.",
      image: "/custom-product-design-3d-printed-consumer-electron.jpg",
      tags: ["Product Design", "Electronics", "Ergonomics"],
      details:
        "Custom enclosure design focusing on thermal management and user ergonomics. Multiple iterations were prototyped to achieve optimal form and function balance.",
    },
    {
      id: 4,
      title: "Manufacturing Jigs & Tools",
      category: "Custom Solutions",
      date: "2024",
      description:
        "Custom manufacturing tools and jigs for improved production efficiency and quality control.",
      image: "/3d-printed-custom-tools-and-jigs-manufacturing.jpg",
      tags: ["Manufacturing", "Quality Control", "Efficiency"],
      details:
        "Specialized tooling designed to streamline manufacturing processes. These custom jigs reduced assembly time by 40% while improving consistency and quality.",
    },
    {
      id: 5,
      title: "Artistic Sculpture",
      category: "Creative Design",
      date: "2024",
      description:
        "Complex geometric sculpture combining artistic vision with technical 3D printing capabilities.",
      image: "/artistic-3d-printed-sculpture-decorative-object.jpg",
      tags: ["Art", "Geometric Design", "Creative"],
      details:
        "An exploration of complex geometries and organic forms that push the boundaries of 3D printing technology while creating visually striking artistic pieces.",
    },
    {
      id: 6,
      title: "Automotive Replacement Parts",
      category: "Reverse Engineering",
      date: "2024",
      description:
        "Reverse-engineered automotive components for classic car restoration projects.",
      image: "/replacement-parts-3d-printed-automotive-components.jpg",
      tags: ["Reverse Engineering", "Automotive", "Restoration"],
      details:
        "Precise recreation of discontinued automotive parts through reverse engineering and 3D scanning. Each part maintains original specifications while improving durability.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-card/30 to-background overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our collection of 3D printing and CAD design projects,
            showcasing precision engineering and creative solutions across
            various industries.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fallback="/placeholder.svg"
                  aspectRatio={4 / 3}
                  fit="cover"
                  className="group-hover:scale-105 transition-transform duration-500"
                  lazy={false}
                  priority={project.id <= 2}
                />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                      <Tag className="h-3 w-3" />
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {project.details}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="group bg-transparent">
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6 text-balance">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Let's discuss how we can bring your ideas to life with precision 3D
            printing and expert CAD design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg">
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg bg-transparent"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
