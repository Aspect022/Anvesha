"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Download, ExternalLink, Github, Linkedin, Globe, BookOpen, Award, Code, Briefcase, Trophy } from "lucide-react"
import { PortfolioGenerator } from "@/components/portfolio/portfolio-generator"

// Hardcoded portfolio data
const portfolioData = {
  profile: {
    name: "Arjun Sharma",
    usn: "1MS21CS042",
    year: "3rd Year",
    department: "Computer Science & Engineering",
    bio: "Passionate full-stack developer with expertise in React, Node.js, and machine learning. Love building innovative solutions that solve real-world problems.",
    avatar: "/student-profile.png",
    email: "arjun.sharma@example.com",
    phone: "+91 9876543210",
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
    coursework: ["Data Structures", "Algorithms", "Database Systems", "Machine Learning", "Web Development"],
  },
  certifications: [
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2024-01-15" },
    { name: "React Developer Certification", issuer: "Meta", date: "2023-11-20" },
    { name: "Google Cloud Associate", issuer: "Google Cloud", date: "2023-09-10" },
  ],
  projects: [
    {
      title: "Smart Home IoT System",
      description: "Complete IoT solution with React dashboard and Arduino sensors",
      technologies: ["React", "Node.js", "Arduino", "MongoDB"],
      github: "https://github.com/arjun/smart-home",
      demo: "https://smart-home-demo.com",
    },
    {
      title: "AI Expense Tracker",
      description: "Machine learning powered expense categorization and budgeting app",
      technologies: ["Python", "TensorFlow", "React Native", "Firebase"],
      github: "https://github.com/arjun/expense-ai",
      demo: "https://expense-ai.com",
    },
  ],
  internships: [
    {
      company: "Google Summer of Code",
      role: "Open Source Contributor",
      duration: "May 2024 - Aug 2024",
      description: "Contributing to TensorFlow.js library, implementing new neural network layers",
    },
  ],
  achievements: [
    { title: "HackBangalore 2024 Winner", type: "Hackathon", date: "2024-02-20" },
    { title: "Best Project Award", type: "Academic", date: "2023-12-15" },
    { title: "Research Paper Published", type: "Research", date: "2023-10-05" },
  ],
}

export default function StudentPortfolio() {
  const handleExportPDF = () => {
    // Mock PDF export functionality
    alert("PDF export functionality would be implemented here")
  }

  return (
    <DashboardLayout role="student" userName={portfolioData.profile.name} userAvatar={portfolioData.profile.avatar}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-slate-700">Portfolio Preview</h1>
            <p className="text-gray-500">Auto-generated portfolio based on your achievements</p>
          </div>
          <Button onClick={handleExportPDF} className="bg-blue-800 hover:bg-blue-900">
            <Download className="w-4 h-4 mr-2" />
            Export as PDF
          </Button>
        </div>

        <PortfolioGenerator studentData={portfolioData.profile} />

        {/* Profile Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <Avatar className="w-32 h-32 mx-auto md:mx-0">
                <AvatarImage src={portfolioData.profile.avatar || "/placeholder.svg"} />
                <AvatarFallback className="text-2xl">AS</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-slate-700 mb-2">{portfolioData.profile.name}</h2>
                <p className="text-lg text-gray-600 mb-2">{portfolioData.profile.department}</p>
                <p className="text-gray-500 mb-4">
                  {portfolioData.profile.year} • USN: {portfolioData.profile.usn}
                </p>
                <p className="text-gray-700 mb-4">{portfolioData.profile.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Button variant="outline" size="sm" asChild>
                    <a href={portfolioData.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-1" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={portfolioData.links.portfolio} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4 mr-1" />
                      Portfolio
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Academic Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Academic Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Current CGPA</p>
                <p className="text-2xl font-bold text-blue-600">{portfolioData.academic.cgpa}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Current Semester</p>
                <p className="text-lg font-semibold text-slate-700">{portfolioData.academic.semester}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2">
                {portfolioData.academic.coursework.map((course, index) => (
                  <Badge key={index} variant="secondary">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {portfolioData.certifications.map((cert, index) => (
                <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-semibold text-slate-700">{cert.name}</h4>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                  <p className="text-sm text-gray-500">{new Date(cert.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5 text-cyan-600" />
              Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-slate-700">{project.title}</h4>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
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

        {/* Internships */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-purple-600" />
              Internships
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {portfolioData.internships.map((internship, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-slate-700">{internship.role}</h4>
                      <p className="text-sm text-gray-600">{internship.company}</p>
                    </div>
                    <p className="text-sm text-gray-500">{internship.duration}</p>
                  </div>
                  <p className="text-gray-700">{internship.description}</p>
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
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {portfolioData.achievements.map((achievement, index) => (
                <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-semibold text-slate-700">{achievement.title}</h4>
                    <Badge variant="secondary" className="mt-1">
                      {achievement.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">{new Date(achievement.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
