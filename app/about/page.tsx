import { Navbar } from "@/components/layout/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Award, Lightbulb } from "lucide-react"

export default function AboutPage() {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To create a comprehensive platform that bridges the gap between student achievements and institutional recognition, making talent discovery seamless and efficient.",
    },
    {
      icon: Users,
      title: "For Everyone",
      description:
        "Designed for students, faculty, placement cells, and administrators - each with tailored interfaces and functionalities to meet their specific needs.",
    },
    {
      icon: Award,
      title: "Achievement Focused",
      description:
        "Every project, hackathon, research paper, and internship matters. We help students showcase their complete journey and growth.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description:
        "Built with modern technology and user-centric design to provide an intuitive experience for all stakeholders in the education ecosystem.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">About Anvesha</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Anvesha is a comprehensive talent discovery platform designed to showcase student achievements, streamline
            faculty validation processes, and connect opportunities with the right candidates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border minimal-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="font-heading text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border minimal-shadow">
          <CardHeader>
            <CardTitle className="font-heading text-2xl text-center">Our Story</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Anvesha was born from the recognition that student achievements often go unnoticed or are scattered across
              various platforms and documents. We saw the need for a unified system that could capture, validate, and
              showcase the complete journey of every student.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our platform serves as a bridge between students who want to showcase their talents, faculty who need
              efficient validation tools, placement cells seeking qualified candidates, and administrators requiring
              comprehensive institutional reports.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Anvesha represents our commitment to transforming how educational institutions discover, nurture, and
              connect talent with opportunities.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
