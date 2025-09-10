import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/image";
import Link from "next/link";
import CTA from "@/components/CTA/CTA";
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
  Quote,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Printer,
      title: "3D Printing Services",
      description:
        "High-quality additive manufacturing using state-of-the-art FDM technologies.",
      image: "/3d-printed-mechanical-prototype-with-gears-and-mov.jpg",
      features: [
        "Rapid prototyping and production",
        "Multiple material options (PLA, ABS, ASA, PETG, Nylon)",
        "Layer heights from 0.1mm to 0.3mm",
        "Build volumes up to 256x256x256mm",
        "Quality inspection and testing",
      ],
      pricing: "Starting from $15/hour + materials",
    },
    {
      icon: Box,
      title: "CAD Design & Modeling",
      description:
        "Professional computer-aided design services from initial concepts to production-ready models.",
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
      description:
        "Tailored manufacturing solutions including mechanisms, outdated parts and specialized tooling",
      image: "/3d-printed-custom-tools-and-jigs-manufacturing.jpg",
      features: [
        "Custom replacement parts",
        "Prototyping and testing",
        "Small batch production",
        "Assembly and finishing",
        "Quality control systems",
      ],
      pricing: "Quote on request",
    },
  ];

  const processes = [
    {
      step: "01",
      title: "Consultation & Planning",
      description:
        "We discuss your project requirements, timeline, and specifications to create a detailed plan.",
      duration: "1-2 days",
    },
    {
      step: "02",
      title: "Design & Development",
      description:
        "Our team creates or refines CAD models, optimizing them for 3D printing and functionality.",
      duration: "2-7 days",
    },
    {
      step: "03",
      title: "Production & Quality Control",
      description:
        "High-precision 3D printing with continuous monitoring and quality checks throughout the process.",
      duration: "1-3 days",
    },
    {
      step: "04",
      title: "Finishing & Delivery",
      description:
        "Post-processing, quality inspection, and delivery of your finished products.",
      duration: "1-2 days",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-15 bg-gradient-to-br from-card/30 to-background overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 group"
          ></Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive 3D printing and CAD design solutions tailored to bring
            your innovative ideas to life with precision and quality.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
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
                </div>
                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fallback="/placeholder.svg"
                    aspectRatio={4 / 3}
                    fit="cover"
                    rounded="lg"
                    shadow="sm"
                    priority={index === 0}
                    lazy={index > 0}
                  />
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
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined workflow designed to deliver exceptional results on
              time and within budget
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
                    <span className="text-2xl font-bold text-primary">
                      {process.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {process.description}
                  </p>
                  <div className="inline-flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                    <Clock className="h-3 w-3" />
                    {process.duration}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/*CTA Section*/}

      <CTA
        title="Ready to Start Your Project?"
        text="Contact us today for a free consultation and quote on your 3D printing or CAD design needs."
      />
    </>
  );
}
