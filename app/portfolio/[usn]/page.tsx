"use client"

import { use } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Globe,
  BookOpen,
  Award,
  Code,
  Briefcase,
  Trophy,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

// Hardcoded portfolio database
const portfolioDatabase: { [key: string]: any } = {
  "1MS21CS042": {
    profile: {
      name: "Arjun Sharma",
      usn: "1MS21CS042",
      year: "3rd Year",
      department: "Computer Science & Engineering",
      college: "Mysore Institute of Technology",
      bio: "Passionate full-stack developer with expertise in React, Node.js, and machine learning. Love building innovative solutions that solve real-world problems and contribute to open source projects.",
      avatar: "/student-profile.png",
      email: "arjun.sharma@example.com",
      phone: "+91 9876543210",
      location: "Bangalore, Karnataka",
      website: "https://arjunsharma.dev",
    },
    links: {
      github: "https://github.com/arjunsharma",
      linkedin: "https://linkedin.com/in/arjunsharma",
      leetcode: "https://leetcode.com/arjunsharma",
      portfolio: "https://arjunsharma.dev",
    },
    academic: {
      cgpa: 8.7,
      semester: "6th Semester",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Machine Learning",
        "Web Development",
        "Software Engineering",
        "Computer Networks",
      ],
      achievements: [
        { title: "Dean's List", semester: "5th Semester", year: "2023" },
        { title: "Best Student Award", semester: "4th Semester", year: "2023" },
      ],
    },
    skills: {
      technical: ["React", "Node.js", "Python", "JavaScript", "TypeScript", "MongoDB", "PostgreSQL", "AWS"],
      frameworks: ["Next.js", "Express.js", "TensorFlow", "Django", "React Native"],
      tools: ["Git", "Docker", "VS Code", "Figma", "Postman", "Jenkins"],
    },
    certifications: [
      {
        name: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024-01-15",
        credentialId: "AWS-CCP-2024-001",
        verificationUrl: "https://aws.amazon.com/verification",
      },
      {
        name: "React Developer Certification",
        issuer: "Meta",
        date: "2023-11-20",
        credentialId: "META-REACT-2023-042",
        verificationUrl: "https://meta.com/verification",
      },
      {
        name: "Google Cloud Associate",
        issuer: "Google Cloud",
        date: "2023-09-10",
        credentialId: "GCP-ACE-2023-789",
        verificationUrl: "https://cloud.google.com/verification",
      },
    ],
    projects: [
      {
        title: "Smart Home IoT System",
        description:
          "Complete IoT solution with React dashboard, Node.js backend, and Arduino sensors for home automation. Features real-time monitoring, automated controls, and mobile app integration.",
        technologies: ["React", "Node.js", "Arduino", "MongoDB", "Socket.io", "React Native"],
        github: "https://github.com/arjun/smart-home",
        demo: "https://smart-home-demo.com",
        image: "/project1.png",
        featured: true,
        status: "Completed",
        duration: "6 months",
      },
      {
        title: "AI Expense Tracker",
        description:
          "Machine learning powered expense categorization and budgeting app with predictive analytics and personalized financial insights.",
        technologies: ["Python", "TensorFlow", "React Native", "Firebase", "Pandas", "Scikit-learn"],
        github: "https://github.com/arjun/expense-ai",
        demo: "https://expense-ai.com",
        image: "/project2.png",
        featured: true,
        status: "In Progress",
        duration: "4 months",
      },
      {
        title: "E-commerce Platform",
        description:
          "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
        technologies: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Prisma"],
        github: "https://github.com/arjun/ecommerce",
        demo: "https://ecommerce-demo.com",
        image: "/project3.png",
        featured: false,
        status: "Completed",
        duration: "3 months",
      },
    ],
    experience: [
      {
        company: "Google Summer of Code",
        role: "Open Source Contributor",
        duration: "May 2024 - Aug 2024",
        location: "Remote",
        description:
          "Contributing to TensorFlow.js library, implementing new neural network layers and optimizing performance for web applications. Collaborated with international team of developers.",
        technologies: ["JavaScript", "TensorFlow.js", "WebGL", "Node.js"],
        achievements: [
          "Implemented 3 new neural network layers",
          "Improved performance by 25%",
          "Contributed to 15+ pull requests",
        ],
      },
      {
        company: "TechStart Solutions",
        role: "Full Stack Developer Intern",
        duration: "Dec 2023 - Feb 2024",
        location: "Bangalore, India",
        description:
          "Developed web applications using React and Node.js, worked on database optimization and API development.",
        technologies: ["React", "Node.js", "MongoDB", "Express.js"],
        achievements: ["Built 2 client projects", "Reduced API response time by 40%", "Mentored 2 junior interns"],
      },
    ],
    achievements: [
      {
        title: "HackBangalore 2024 Winner",
        type: "Hackathon",
        date: "2024-02-20",
        description: "Won first place for developing an AI-powered expense tracker application",
        organization: "HackBangalore",
        certificate: "/certificates/hackbangalore.pdf",
      },
      {
        title: "Best Project Award",
        type: "Academic",
        date: "2023-12-15",
        description: "Awarded for outstanding project in Database Management Systems course",
        organization: "Mysore Institute of Technology",
        certificate: "/certificates/best-project.pdf",
      },
      {
        title: "Research Paper Published",
        type: "Research",
        date: "2023-10-05",
        description: "Published paper on 'Neural Network Optimization for Web Applications' in IEEE conference",
        organization: "IEEE",
        certificate: "/certificates/research-paper.pdf",
      },
      {
        title: "Google Code-in Finalist",
        type: "Competition",
        date: "2023-08-15",
        description: "Selected as finalist in Google Code-in competition for open source contributions",
        organization: "Google",
        certificate: "/certificates/google-codein.pdf",
      },
    ],
    statistics: {
      totalProjects: 12,
      hackathonsWon: 5,
      researchPapers: 2,
      internships: 2,
      certifications: 8,
      githubStars: 234,
      contributions: 456,
    },
  },
}

interface PortfolioPageProps {
  params: Promise<{ usn: string }>
}

export default function PortfolioPage({ params }: PortfolioPageProps) {
  const { usn } = use(params)
  const portfolio = portfolioDatabase[usn.toUpperCase()]

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <h1 className="text-2xl font-bold text-slate-700 mb-2">Portfolio Not Found</h1>
            <p className="text-gray-600 mb-4">The requested student portfolio could not be found.</p>
            <Button onClick={() => (window.location.href = "/")}>Go Back Home</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const handleExportPDF = () => {
    alert("PDF export functionality would be implemented here")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={portfolio.profile.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {portfolio.profile.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-lg font-semibold text-slate-700">{portfolio.profile.name}</h1>
                <p className="text-sm text-gray-500">Portfolio • {portfolio.profile.usn}</p>
              </div>
            </div>
            <Button onClick={handleExportPDF} className="bg-blue-800 hover:bg-blue-900">
              <Download className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-blue-800 to-cyan-600 p-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Avatar className="w-32 h-32 border-4 border-white">
                <AvatarImage src={portfolio.profile.avatar || "/placeholder.svg"} />
                <AvatarFallback className="text-2xl bg-white text-blue-800">
                  {portfolio.profile.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2">{portfolio.profile.name}</h1>
                <p className="text-xl mb-2">{portfolio.profile.department}</p>
                <p className="text-lg opacity-90 mb-4">
                  {portfolio.profile.year} • {portfolio.profile.college}
                </p>
                <p className="text-lg leading-relaxed mb-6">{portfolio.profile.bio}</p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Button variant="secondary" size="sm" asChild>
                    <a href={portfolio.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="secondary" size="sm" asChild>
                    <a href={portfolio.links.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="secondary" size="sm" asChild>
                    <a href={portfolio.links.portfolio} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4 mr-2" />
                      Website
                    </a>
                  </Button>
                  <Button variant="secondary" size="sm" asChild>
                    <a href={`mailto:${portfolio.profile.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Statistics Overview */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{portfolio.academic.cgpa}</div>
              <div className="text-sm text-gray-500">CGPA</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-cyan-600">{portfolio.statistics.totalProjects}</div>
              <div className="text-sm text-gray-500">Projects</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-emerald-600">{portfolio.statistics.hackathonsWon}</div>
              <div className="text-sm text-gray-500">Hackathons</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-amber-600">{portfolio.statistics.researchPapers}</div>
              <div className="text-sm text-gray-500">Research</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{portfolio.statistics.internships}</div>
              <div className="text-sm text-gray-500">Internships</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{portfolio.statistics.certifications}</div>
              <div className="text-sm text-gray-500">Certificates</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Featured Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-cyan-600" />
                  Featured Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {portfolio.projects
                    .filter((project: any) => project.featured)
                    .map((project: any, index: number) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="text-lg font-semibold text-slate-700 mb-1">{project.title}</h4>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                                {project.status}
                              </Badge>
                              <span className="text-sm text-gray-500">{project.duration}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4" />
                              </a>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech: string, techIndex: number) => (
                            <Badge key={techIndex} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-purple-600" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {portfolio.experience.map((exp: any, index: number) => (
                    <div key={index} className="border-l-4 border-blue-200 pl-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-slate-700">{exp.role}</h4>
                          <p className="text-blue-600 font-medium">{exp.company}</p>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <p>{exp.duration}</p>
                          <p>{exp.location}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">{exp.description}</p>
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-600 mb-1">Key Achievements:</p>
                        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                          {exp.achievements.map((achievement: string, achIndex: number) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech: string, techIndex: number) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-600" />
                  Achievements & Awards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {portfolio.achievements.map((achievement: any, index: number) => (
                    <div key={index} className="flex justify-between items-start p-3 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-slate-700">{achievement.title}</h4>
                          <Badge variant="secondary">{achievement.type}</Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-1">{achievement.description}</p>
                        <p className="text-gray-500 text-xs">{achievement.organization}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 mb-2">{new Date(achievement.date).toLocaleDateString()}</p>
                        <Button variant="outline" size="sm" asChild>
                          <a href={achievement.certificate} target="_blank" rel="noopener noreferrer">
                            <Award className="w-4 h-4 mr-1" />
                            View
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <a href={`mailto:${portfolio.profile.email}`} className="text-blue-600 hover:underline">
                    {portfolio.profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">{portfolio.profile.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">{portfolio.profile.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-gray-500" />
                  <a
                    href={portfolio.profile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {portfolio.profile.website}
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {portfolio.skills.technical.map((skill: string, index: number) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {portfolio.skills.frameworks.map((framework: string, index: number) => (
                      <Badge key={index} variant="outline">
                        {framework}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {portfolio.skills.tools.map((tool: string, index: number) => (
                      <Badge key={index} variant="outline">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Academic Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Academic Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">{portfolio.academic.cgpa}</div>
                  <div className="text-sm text-gray-600">Current CGPA</div>
                  <div className="text-xs text-gray-500 mt-1">{portfolio.academic.semester}</div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Relevant Coursework</h4>
                  <div className="space-y-1">
                    {portfolio.academic.coursework.map((course: string, index: number) => (
                      <div key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Award className="w-5 h-5 text-emerald-600" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {portfolio.certifications.map((cert: any, index: number) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <h4 className="font-medium text-slate-700 text-sm">{cert.name}</h4>
                      <p className="text-xs text-gray-600 mb-1">{cert.issuer}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-gray-500">{new Date(cert.date).toLocaleDateString()}</p>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
