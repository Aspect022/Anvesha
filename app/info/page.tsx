import { Navbar } from "@/components/layout/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Building, Shield, CheckCircle } from "lucide-react"

export default function InfoPage() {
  const userTypes = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Upload achievements, track progress, and build verified portfolios",
      features: ["Achievement tracking", "Portfolio builder", "Progress analytics", "Career readiness score"],
    },
    {
      icon: Users,
      title: "Faculty",
      description: "Validate student submissions and mentor with data-driven insights",
      features: ["Validation dashboard", "Student profiles", "Bulk operations", "Performance analytics"],
    },
    {
      icon: Building,
      title: "Placement Cell",
      description: "Discover talent, post opportunities, and manage recruitment processes",
      features: ["Talent discovery", "Opportunity posting", "Application tracking", "Company management"],
    },
    {
      icon: Shield,
      title: "Administrators",
      description: "Generate reports, manage users, and oversee institutional processes",
      features: ["NAAC/NIRF reports", "User management", "Analytics dashboard", "System configuration"],
    },
  ]

  const keyFeatures = [
    "Comprehensive achievement tracking across all domains",
    "Faculty validation system for credibility",
    "Advanced talent discovery with filtering capabilities",
    "Automated report generation for accreditation bodies",
    "Real-time analytics and progress tracking",
    "Secure and scalable cloud infrastructure",
    "Mobile-responsive design for all devices",
    "Integration-ready architecture for future enhancements",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">Platform Information</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn how Anvesha serves different user types and discover the comprehensive features that make talent
            discovery and management seamless.
          </p>
        </div>

        {/* User Types */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-8 text-center">Who Can Use Anvesha?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {userTypes.map((userType, index) => (
              <Card key={index} className="border minimal-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <userType.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-xl">{userType.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{userType.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {userType.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-8 text-center">Key Features</h2>
          <Card className="border minimal-shadow">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Stack */}
        <div>
          <h2 className="font-heading font-bold text-3xl text-foreground mb-8 text-center">
            Built With Modern Technology
          </h2>
          <Card className="border minimal-shadow">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <Badge variant="secondary" className="mb-2">
                    Frontend
                  </Badge>
                  <p className="text-sm text-muted-foreground">Next.js, React, TypeScript</p>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="mb-2">
                    Styling
                  </Badge>
                  <p className="text-sm text-muted-foreground">Tailwind CSS, shadcn/ui</p>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="mb-2">
                    Database
                  </Badge>
                  <p className="text-sm text-muted-foreground">PostgreSQL, Prisma</p>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="mb-2">
                    Deployment
                  </Badge>
                  <p className="text-sm text-muted-foreground">Vercel, Cloud Infrastructure</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
