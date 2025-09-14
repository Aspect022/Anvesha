"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Circle, Clock, Star, Target, Code, BookOpen, ArrowRight, Plus } from "lucide-react"

interface RoadmapStep {
  id: string
  title: string
  description: string
  status: "completed" | "in-progress" | "upcoming"
  estimatedTime: string
  skills: string[]
  resources: string[]
  priority: "high" | "medium" | "low"
}

interface Roadmap {
  id: string
  title: string
  description: string
  targetRole: string
  progress: number
  totalSteps: number
  completedSteps: number
  estimatedCompletion: string
  steps: RoadmapStep[]
}

export function RoadmapsSystem() {
  const [activeRoadmap, setActiveRoadmap] = useState("fullstack")

  const roadmaps: Record<string, Roadmap> = {
    fullstack: {
      id: "fullstack",
      title: "Full Stack Developer Roadmap",
      description: "Complete path to becoming a proficient full stack developer",
      targetRole: "Full Stack Developer",
      progress: 65,
      totalSteps: 12,
      completedSteps: 8,
      estimatedCompletion: "3 months",
      steps: [
        {
          id: "html-css",
          title: "Master HTML & CSS Fundamentals",
          description: "Build solid foundation in web markup and styling",
          status: "completed",
          estimatedTime: "2 weeks",
          skills: ["HTML5", "CSS3", "Flexbox", "Grid"],
          resources: ["MDN Web Docs", "CSS Tricks", "Flexbox Froggy"],
          priority: "high",
        },
        {
          id: "javascript",
          title: "JavaScript Fundamentals & ES6+",
          description: "Learn modern JavaScript concepts and features",
          status: "completed",
          estimatedTime: "3 weeks",
          skills: ["JavaScript", "ES6+", "DOM Manipulation", "Async/Await"],
          resources: ["JavaScript.info", "Eloquent JavaScript", "MDN"],
          priority: "high",
        },
        {
          id: "react",
          title: "React.js Development",
          description: "Build interactive user interfaces with React",
          status: "completed",
          estimatedTime: "4 weeks",
          skills: ["React", "JSX", "Hooks", "State Management"],
          resources: ["React Docs", "React Tutorial", "Scrimba React Course"],
          priority: "high",
        },
        {
          id: "nodejs",
          title: "Node.js & Express Backend",
          description: "Create server-side applications and APIs",
          status: "in-progress",
          estimatedTime: "3 weeks",
          skills: ["Node.js", "Express", "REST APIs", "Middleware"],
          resources: ["Node.js Docs", "Express Guide", "FreeCodeCamp"],
          priority: "high",
        },
        {
          id: "database",
          title: "Database Design & Management",
          description: "Learn SQL and NoSQL database concepts",
          status: "in-progress",
          estimatedTime: "2 weeks",
          skills: ["MongoDB", "PostgreSQL", "Database Design", "Queries"],
          resources: ["MongoDB University", "PostgreSQL Tutorial"],
          priority: "high",
        },
        {
          id: "authentication",
          title: "Authentication & Security",
          description: "Implement secure user authentication systems",
          status: "upcoming",
          estimatedTime: "2 weeks",
          skills: ["JWT", "OAuth", "Security Best Practices", "Encryption"],
          resources: ["Auth0 Docs", "OWASP Guidelines"],
          priority: "medium",
        },
        {
          id: "testing",
          title: "Testing & Quality Assurance",
          description: "Write comprehensive tests for your applications",
          status: "upcoming",
          estimatedTime: "2 weeks",
          skills: ["Jest", "React Testing Library", "Unit Testing", "Integration Testing"],
          resources: ["Testing Library Docs", "Jest Documentation"],
          priority: "medium",
        },
        {
          id: "deployment",
          title: "Deployment & DevOps",
          description: "Deploy applications to production environments",
          status: "upcoming",
          estimatedTime: "1 week",
          skills: ["Docker", "AWS", "CI/CD", "Monitoring"],
          resources: ["Docker Docs", "AWS Free Tier", "GitHub Actions"],
          priority: "medium",
        },
        {
          id: "advanced-react",
          title: "Advanced React Patterns",
          description: "Learn advanced React concepts and patterns",
          status: "upcoming",
          estimatedTime: "3 weeks",
          skills: ["Context API", "Custom Hooks", "Performance Optimization"],
          resources: ["React Advanced Patterns", "Kent C. Dodds Blog"],
          priority: "low",
        },
        {
          id: "typescript",
          title: "TypeScript Integration",
          description: "Add type safety to your JavaScript applications",
          status: "upcoming",
          estimatedTime: "2 weeks",
          skills: ["TypeScript", "Type Definitions", "Generics"],
          resources: ["TypeScript Handbook", "TypeScript Deep Dive"],
          priority: "medium",
        },
        {
          id: "microservices",
          title: "Microservices Architecture",
          description: "Design and build scalable microservices",
          status: "upcoming",
          estimatedTime: "4 weeks",
          skills: ["Microservices", "API Gateway", "Service Discovery"],
          resources: ["Microservices.io", "Building Microservices Book"],
          priority: "low",
        },
        {
          id: "portfolio",
          title: "Portfolio & Job Preparation",
          description: "Build impressive portfolio and prepare for interviews",
          status: "upcoming",
          estimatedTime: "2 weeks",
          skills: ["Portfolio Design", "Interview Prep", "System Design"],
          resources: ["Portfolio Examples", "LeetCode", "System Design Primer"],
          priority: "high",
        },
      ],
    },
  }

  const currentRoadmap = roadmaps[activeRoadmap]

  const getStatusIcon = (status: RoadmapStep["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "in-progress":
        return <Clock className="w-5 h-5 text-blue-600" />
      case "upcoming":
        return <Circle className="w-5 h-5 text-muted-foreground" />
    }
  }

  const getPriorityColor = (priority: RoadmapStep["priority"]) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
    }
  }

  const getStatusColor = (status: RoadmapStep["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "upcoming":
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-heading font-semibold">Personalized Roadmaps</h3>
          <p className="text-sm text-muted-foreground">Structured learning paths tailored to your career goals</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Custom Roadmap
        </Button>
      </div>

      {/* Roadmap Overview */}
      <Card className="border minimal-shadow">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="font-heading">{currentRoadmap.title}</CardTitle>
                <CardDescription>{currentRoadmap.description}</CardDescription>
              </div>
            </div>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {currentRoadmap.targetRole}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Overall Progress</p>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{currentRoadmap.progress}%</span>
                  <span className="text-muted-foreground">
                    {currentRoadmap.completedSteps}/{currentRoadmap.totalSteps} steps
                  </span>
                </div>
                <Progress value={currentRoadmap.progress} className="h-2" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Estimated Completion</p>
              <p className="text-lg font-semibold text-foreground">{currentRoadmap.estimatedCompletion}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Current Focus</p>
              <p className="text-lg font-semibold text-blue-600">Backend Development</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Next Milestone</p>
              <p className="text-lg font-semibold text-accent">Authentication</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Roadmap Steps */}
      <Tabs defaultValue="timeline" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="timeline">Timeline View</TabsTrigger>
          <TabsTrigger value="skills">Skills Focus</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="space-y-4">
          <div className="space-y-4">
            {currentRoadmap.steps.map((step, index) => (
              <Card
                key={step.id}
                className={`border minimal-shadow ${step.status === "in-progress" ? "ring-2 ring-primary/20" : ""}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      {getStatusIcon(step.status)}
                      {index < currentRoadmap.steps.length - 1 && <div className="w-px h-12 bg-border mt-2"></div>}
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground text-lg">{step.title}</h4>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(step.status)}>{step.status.replace("-", " ")}</Badge>
                          <Badge className={getPriorityColor(step.priority)}>{step.priority} priority</Badge>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {step.estimatedTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {step.skills.length} skills
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {step.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {step.status === "in-progress" && (
                        <div className="flex gap-2 pt-2">
                          <Button size="sm">
                            Continue Learning
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                          <Button variant="outline" size="sm">
                            Mark Complete
                          </Button>
                        </div>
                      )}

                      {step.status === "upcoming" && (
                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm">
                            Start Learning
                          </Button>
                          <Button variant="ghost" size="sm">
                            View Resources
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="skills" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Frontend", "Backend", "Database", "DevOps", "Testing", "Soft Skills"].map((category) => (
              <Card key={category} className="border minimal-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-heading">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {currentRoadmap.steps
                      .filter((step) => {
                        if (category === "Frontend")
                          return step.skills.some((s) => ["HTML5", "CSS3", "React", "JavaScript"].includes(s))
                        if (category === "Backend")
                          return step.skills.some((s) => ["Node.js", "Express", "REST APIs"].includes(s))
                        if (category === "Database")
                          return step.skills.some((s) => ["MongoDB", "PostgreSQL"].includes(s))
                        return false
                      })
                      .slice(0, 3)
                      .map((step) => (
                        <div key={step.id} className="flex items-center gap-2">
                          {getStatusIcon(step.status)}
                          <span className="text-sm text-foreground">{step.title}</span>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Learning Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {["React Documentation", "Node.js Guide", "MongoDB University", "TypeScript Handbook"].map(
                  (resource) => (
                    <div
                      key={resource}
                      className="flex items-center justify-between p-3 border border-border rounded-lg"
                    >
                      <span className="text-foreground">{resource}</span>
                      <Button variant="ghost" size="sm">
                        Open
                      </Button>
                    </div>
                  ),
                )}
              </CardContent>
            </Card>

            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Code className="w-5 h-5 text-green-600" />
                  Practice Platforms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {["LeetCode", "HackerRank", "Codewars", "FreeCodeCamp"].map((platform) => (
                  <div key={platform} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <span className="text-foreground">{platform}</span>
                    <Button variant="ghost" size="sm">
                      Practice
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
