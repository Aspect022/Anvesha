"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Building, Shield, Search, ArrowRight, Star, Target, Zap } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"

export default function AnveshaHomePage() {
  const navigationTiles = [
    {
      role: "student",
      label: "Student Portal",
      icon: GraduationCap,
      description: "Track achievements & build portfolio",
    },
    {
      role: "faculty",
      label: "Faculty Portal",
      icon: Users,
      description: "Validate & mentor students",
    },
    {
      role: "placement",
      label: "Placement Cell",
      icon: Building,
      description: "Connect talent with opportunities",
    },
    {
      role: "admin",
      label: "Admin Portal",
      icon: Shield,
      description: "Manage & generate reports",
    },
  ]

  const features = [
    {
      icon: Target,
      title: "Talent Discovery",
      description: "Find the right talent with advanced filtering and skill-based search capabilities.",
    },
    {
      icon: Star,
      title: "Verified Portfolios",
      description: "Showcase achievements with faculty-validated credentials and comprehensive profiles.",
    },
    {
      icon: Zap,
      title: "Smart Matching",
      description: "AI-powered recommendations connecting opportunities with the perfect candidates.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Minimalistic Design */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto mb-8 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center minimal-shadow">
              <span className="text-primary-foreground font-bold text-2xl">A</span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-6xl lg:text-7xl text-foreground mb-6 text-balance">
              Anvesha
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Discover and connect talent across your institution
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/find-talent">
                <Button size="lg" className="flex items-center space-x-2 px-8">
                  <Search className="w-5 h-5" />
                  <span>Find Talent</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/auth">
                <Button variant="outline" size="lg" className="px-8 bg-transparent">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">Why Choose Anvesha?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive platform designed to showcase talent and streamline institutional processes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 minimal-shadow hover:shadow-lg transition-all duration-300 bg-card">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="font-heading font-semibold text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">Quick Access</h2>
            <p className="text-lg text-muted-foreground">Choose your portal to get started</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {navigationTiles.map((tile) => (
              <Link key={tile.role} href={`/${tile.role}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border minimal-shadow bg-card">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <tile.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {tile.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center text-sm leading-relaxed">{tile.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-sm">A</span>
                </div>
                <span className="font-heading font-semibold text-xl">Anvesha</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Discover and connect talent</p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/70 mb-6 md:mb-0">
              <Link href="/about" className="hover:text-primary-foreground transition-colors">
                About
              </Link>
              <Link href="/info" className="hover:text-primary-foreground transition-colors">
                Info
              </Link>
              <Link href="/find-talent" className="hover:text-primary-foreground transition-colors">
                Find Talent
              </Link>
              <Link href="/contact" className="hover:text-primary-foreground transition-colors">
                Contact
              </Link>
            </div>

            <div className="text-center md:text-right">
              <p className="text-primary-foreground/70 text-sm">Built for SIH 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
