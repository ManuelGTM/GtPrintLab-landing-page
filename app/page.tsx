"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Printer, Box, Zap, Eye, Cog, Menu, Send, X, Upload } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import { translations, type Language, getTranslation } from "@/lib/translations"

export default function Home() {
  const [language, setLanguage] = useState<Language>("en")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0] as Language
    if (translations[browserLang]) {
      setLanguage(browserLang)
    }
  }, [])

  const t = (key: string) => getTranslation(language, key)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".stl"))) {
      setUploadedFile(file)
    } else {
      alert("Please upload only PDF or STL files")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("firstName", formData.firstName)
      formDataToSend.append("lastName", formData.lastName)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("description", formData.description)

      if (uploadedFile) {
        formDataToSend.append("file", uploadedFile)
      }

      const response = await fetch("/api/send-quote", {
        method: "POST",
        body: formDataToSend,
      })

      const result = await response.json()

      if (result.success) {
        setSubmitMessage(t("form.successMessage"))
        setFormData({ firstName: "", lastName: "", email: "", description: "" })
        setUploadedFile(null)
        setTimeout(() => setIsModalOpen(false), 2000)
      } else {
        setSubmitMessage("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      setSubmitMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const openQuoteModal = () => {
    setIsModalOpen(true)
    setSubmitMessage("")
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50 flex gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage("en")}
          className={`text-xs px-2 py-1 h-7 rounded-md transition-all duration-200 ${
            language === "en"
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          EN
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage("es")}
          className={`text-xs px-2 py-1 h-7 rounded-md transition-all duration-200 ${
            language === "es"
              ? "bg-muted text-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          ES
        </Button>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-lg sm:text-xl text-primary">Gt Print Lab</div>

            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base"
              >
                {t("nav.about")}
              </a>
              <a
                href="#services"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base"
              >
                {t("nav.services")}
              </a>
              <a
                href="#portfolio"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base"
              >
                {t("nav.portfolio")}
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm lg:text-base"
              >
                {t("nav.contact")}
              </a>
              <ThemeToggle />
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button variant="ghost" size="sm" className="w-9 h-9 rounded-full" onClick={toggleMobileMenu}>
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md animate-in slide-in-from-top-2 duration-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#about"
                  className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200 text-base rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.about")}
                </a>
                <a
                  href="#services"
                  className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200 text-base rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.services")}
                </a>
                <a
                  href="#portfolio"
                  className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200 text-base rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.portfolio")}
                </a>
                <a
                  href="#contact"
                  className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200 text-base rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("nav.contact")}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-background"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance mb-4 sm:mb-6 leading-tight">
            {t("hero.title")}
            <span className="text-foreground block">{t("hero.titleHighlight")}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 text-pretty max-w-2xl mx-auto px-4">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              size="lg"
              className="rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg group w-full sm:w-auto"
            >
              <a href="#portfolio">{t("hero.viewPortfolio")}</a>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg bg-transparent w-full sm:w-auto"
              onClick={openQuoteModal}
            >
              {t("hero.getFreeQuote")}
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-12 sm:h-16 lg:h-20 fill-muted/50">
            <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"></path>
          </svg>
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
                  src="/professional-cad-workstation-3d-modeling-software.jpg"
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

      {/* Services Grid */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              {t("services.title")}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">{t("services.subtitle")}</p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <Card className="p-6 sm:p-8 border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                <Printer className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t("services.printing.title")}</h3>
              <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                {t("services.printing.description")}
              </p>
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
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t("services.cad.title")}</h3>
              <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                {t("services.cad.description")}
              </p>
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-4 sm:mb-6">
              {t("portfolio.title")}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">{t("portfolio.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src="/3d-printed-mechanical-prototype-with-gears-and-mov.jpg"
                  alt="High-precision 3D printed mechanical prototype featuring complex gears and moving parts for functional testing and validation"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-1 sm:mb-2">
                {t("portfolio.mechanicalPrototype")}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">{t("portfolio.mechanicalPrototypeDetails")}</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src="/custom-architectural-model-3d-printed-building-des.jpg"
                  alt="Detailed 3D printed architectural scale model showcasing building design with precise structural elements and landscaping features"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-1 sm:mb-2">
                {t("portfolio.architecturalModel")}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">{t("portfolio.architecturalModelDetails")}</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src="/custom-product-design-3d-printed-consumer-electron.jpg"
                  alt="Custom 3D printed consumer electronics enclosure demonstrating professional product design and manufacturing capabilities"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-1 sm:mb-2">
                {t("portfolio.productEnclosure")}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">{t("portfolio.productEnclosureDetails")}</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src="/3d-printed-custom-tools-and-jigs-manufacturing.jpg"
                  alt="Specialized 3D printed manufacturing tools and jigs designed for custom production workflows and quality control"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-1 sm:mb-2">
                {t("portfolio.customTooling")}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">{t("portfolio.customToolingDetails")}</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src="/artistic-3d-printed-sculpture-decorative-object.jpg"
                  alt="Intricate 3D printed artistic sculpture showcasing creative design capabilities and complex geometric patterns"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-1 sm:mb-2">
                {t("portfolio.artisticCreation")}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">{t("portfolio.artisticCreationDetails")}</p>
            </div>

            <div className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src="/replacement-parts-3d-printed-automotive-components.jpg"
                  alt="Precision 3D printed automotive replacement parts demonstrating reverse engineering and restoration capabilities"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-1 sm:mb-2">
                {t("portfolio.replacementParts")}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">{t("portfolio.replacementPartsDetails")}</p>
            </div>
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
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">{t("process.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">{t("process.consultation")}</h3>
              <p className="text-muted-foreground text-sm">{t("process.consultationDescription")}</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">{t("process.design")}</h3>
              <p className="text-muted-foreground text-sm">{t("process.designDescription")}</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">{t("process.production")}</h3>
              <p className="text-muted-foreground text-sm">{t("process.productionDescription")}</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">{t("process.delivery")}</h3>
              <p className="text-muted-foreground text-sm">{t("process.deliveryDescription")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <Card className="p-6 sm:p-8 border-0 shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">{t("form.title")}</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full w-8 h-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <p className="text-muted-foreground mb-6">{t("form.subtitle")}</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-card-foreground mb-2">
                      {t("form.firstName")} *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder={`Enter your ${t("form.firstName").toLowerCase()}`}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-card-foreground mb-2">
                      {t("form.lastName")} *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder={`Enter your ${t("form.lastName").toLowerCase()}`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    {t("form.email")} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder={`Enter your ${t("form.email").toLowerCase()}`}
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-card-foreground mb-2">
                    {t("form.description")} *
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full min-h-[120px] resize-y"
                    placeholder="Describe your project requirements, materials, timeline, and any specific details..."
                  />
                </div>

                <div>
                  <label htmlFor="fileUpload" className="block text-sm font-medium text-card-foreground mb-2">
                    {t("form.fileUpload")}
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                      id="fileUpload"
                      type="file"
                      accept=".stl,.pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <label htmlFor="fileUpload" className="cursor-pointer">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-1">{t("form.fileUploadText")}</p>
                      <p className="text-xs text-muted-foreground">{t("form.fileUploadSupported")}</p>
                    </label>
                    {uploadedFile && (
                      <div className="mt-3 p-2 bg-primary/10 rounded-md">
                        <p className="text-sm text-primary font-medium">📎 {uploadedFile.name}</p>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => setUploadedFile(null)}
                          className="text-xs mt-1"
                        >
                          Remove
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="rounded-full px-8 py-6 text-lg group w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      t("form.sending")
                    ) : (
                      <>
                        {t("form.submit")}
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>

                {submitMessage && (
                  <div className="text-center p-4 rounded-lg bg-primary/10 text-primary font-medium">
                    {submitMessage}
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>
      )}

      {/* Contact Form Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-card relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-4 sm:mb-6 text-balance">
              {t("contact.title")}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 text-pretty px-4">
              {t("contact.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={openQuoteModal}
                className="rounded-full px-8 py-6 text-lg group w-full sm:w-auto"
              >
                {t("contact.getFreeQuote")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg bg-transparent w-full sm:w-auto"
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("contact.viewPortfolio")}
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-12 sm:h-16 lg:h-20 fill-muted/30">
            <path d="M0,120 C300,0 900,0 1200,120 L1200,0 L0,0 Z"></path>
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 sm:py-12 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-bold text-lg sm:text-xl text-primary">Gt Print Lab</div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-muted-foreground text-sm sm:text-base">
              <a href="#" className="hover:text-foreground transition-colors">
                {t("footer.linkedin")}
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                {t("footer.instagram")}
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                {t("footer.contact")}
              </a>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
