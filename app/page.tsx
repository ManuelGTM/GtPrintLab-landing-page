"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Printer, Box, Zap, Eye, Cog, ChevronDown } from "lucide-react";
import { Image } from "@/components/image";
import CTA from "@/components/CTA/CTA";
import {
  translations,
  type Language,
  getTranslation,
} from "@/lib/translations";
import Link from "next/link";
import { QuoteDialog } from "@/components/Dialog/QuoteDialog";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0] as Language;
    if (translations[browserLang]) {
      setLanguage(browserLang);
    }
  }, []);

  const t = (key: string) => getTranslation(language, key);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-background"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance mb-4 sm:mb-6 leading-tight">
            From Concept to
            <span className="text-foreground block">Reality</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 text-pretty max-w-2xl mx-auto px-4">
            Professional 3D printing and CAD design services that bring your
            ideas to life with precision and innovation
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 mb-4">
            <QuoteDialog />
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg bg-transparent w-full sm:w-auto border-2 hover:bg-primary/5"
            >
              <Link href="/portfolio">See Succesfull Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-4 sm:mb-6">
                {t("about.title")}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                {t("about.description1")}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                {t("about.description2")}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Zap className="h-4 w-4" />
                  {t("about.fastTurnaround")}
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Eye className="h-4 w-4" />
                  {t("about.attentionToDetail")}
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Cog className="h-4 w-4" />
                  {t("about.customSolutions")}
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
                <Image
                  src="../public/CurtainClip.jpeg"
                  alt="Professional CAD design workspace showing technical drawings and 3D modeling software for precision engineering and product development"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              {t("socialProof.title")}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              {t("socialProof.subtitle")}
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">
                {t("socialProof.projectsCompletedNumber")}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                {t("socialProof.projectsCompleted")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">
                {t("socialProof.clientSatisfactionNumber")}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                {t("socialProof.clientSatisfaction")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">
                {t("socialProof.yearsExperienceNumber")}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                {t("socialProof.yearsExperience")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">
                {t("socialProof.materialsSupportedNumber")}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                {t("socialProof.materialsSupported")}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 border-0 shadow-sm">
              <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed">
                "{t("socialProof.testimonial1")}"
              </p>
              <div>
                <div className="font-semibold text-sm sm:text-base">
                  {t("socialProof.testimonial1Author")}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {t("socialProof.testimonial1Company")}
                </div>
              </div>
            </Card>
            <Card className="p-6 border-0 shadow-sm">
              <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed">
                "{t("socialProof.testimonial2")}"
              </p>
              <div>
                <div className="font-semibold text-sm sm:text-base">
                  {t("socialProof.testimonial2Author")}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {t("socialProof.testimonial2Company")}
                </div>
              </div>
            </Card>
            <Card className="p-6 border-0 shadow-sm">
              <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed">
                "{t("socialProof.testimonial3")}"
              </p>
              <div>
                <div className="font-semibold text-sm sm:text-base">
                  {t("socialProof.testimonial3Author")}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {t("socialProof.testimonial3Company")}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-card-foreground">
              {t("services.title")}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <Card className="p-6 sm:p-8 border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                <Printer className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                {t("services.printing.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                {t("services.printing.description")}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Pricing:</span>
                  <span className="font-medium">
                    {t("serviceDetails.printing.pricing")}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Turnaround:</span>
                  <span className="font-medium">
                    {t("serviceDetails.printing.turnaround")}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Materials:</span>
                  <span className="font-medium">
                    {t("serviceDetails.printing.materials")}
                  </span>
                </div>
              </div>

              <ul className="text-sm text-muted-foreground space-y-1 sm:space-y-2">
                <li>• {t("services.printing.rapidPrototyping")}</li>
                <li>• {t("services.printing.functionalPartsProduction")}</li>
                <li>• {t("services.printing.multipleMaterialOptions")}</li>
                <li>• {t("services.printing.postProcessingServices")}</li>
              </ul>
            </Card>

            <Card className="p-6 sm:p-8 border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 sm:mb-6">
                <Box className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                {t("services.cad.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                {t("services.cad.description")}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Pricing:</span>
                  <span className="font-medium">
                    {t("serviceDetails.cad.pricing")}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Turnaround:</span>
                  <span className="font-medium">
                    {t("serviceDetails.cad.turnaround")}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Software:</span>
                  <span className="font-medium">
                    {t("serviceDetails.cad.software")}
                  </span>
                </div>
              </div>

              <ul className="text-sm text-muted-foreground space-y-1 sm:space-y-2">
                <li>• {t("services.cad.productDesign")}</li>
                <li>• {t("services.cad.technicalDrawings")}</li>
                <li>• {t("services.cad.designOptimization")}</li>
                <li>• {t("services.cad.fileFormatConversion")}</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              {t("process.title")}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              {t("process.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl font-bold text-primary">
                  1
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                {t("process.consultation")}
              </h3>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                {t("process.consultationTime")}
              </div>
              <p className="text-muted-foreground text-sm">
                {t("process.consultationDescription")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl font-bold text-primary">
                  2
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                {t("process.design")}
              </h3>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                {t("process.designTime")}
              </div>
              <p className="text-muted-foreground text-sm">
                {t("process.designDescription")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl font-bold text-primary">
                  3
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                {t("process.production")}
              </h3>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                {t("process.productionTime")}
              </div>
              <p className="text-muted-foreground text-sm">
                {t("process.productionDescription")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl font-bold text-primary">
                  4
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                {t("process.delivery")}
              </h3>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                {t("process.deliveryTime")}
              </div>
              <p className="text-muted-foreground text-sm">
                {t("process.deliveryDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              {t("faq.title")}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              {t("faq.subtitle")}
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              { question: t("faq.question1"), answer: t("faq.answer1") },
              { question: t("faq.question2"), answer: t("faq.answer2") },
              { question: t("faq.question3"), answer: t("faq.answer3") },
              { question: t("faq.question4"), answer: t("faq.answer4") },
              { question: t("faq.question5"), answer: t("faq.answer5") },
              { question: t("faq.question6"), answer: t("faq.answer6") },
              { question: t("faq.question7"), answer: t("faq.answer7") },
              { question: t("faq.question8"), answer: t("faq.answer8") },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold text-base sm:text-lg text-card-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Have a Project in Mind?" text="Get in touch with us" />
    </>
  );
}
