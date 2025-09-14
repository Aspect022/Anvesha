"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, BookOpen, Code, Trophy, Briefcase } from "lucide-react"

interface StudentProfileModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  student: any
}

// Hardcoded detailed student data for modal
const getStudentDetails = (usn: string) => {
  const studentDetails: { [key: string]: any } = {
    "1MS21CS042": {
      name: "Arjun Sharma",
      usn: "1MS21CS042",
      year: "3rd Year",
      department: "Computer Science & Engineering",
      cgpa: 8.7,
      email: "arjun.sharma@example.com",
      phone: "+91 9876543210",
      avatar: "/student-profile.png",
      skills: ["React", "Node.js", "Python", "Machine Learning", "MongoDB"],
      projects: [
        { title: "Smart Home IoT System", tech: ["React", "Arduino", "MongoDB"], status: "Completed" },
        { title: "AI Expense Tracker", tech: ["Python", "TensorFlow", "React Native"], status: "In Progress" },
      ],
      achievements: [
        { title: "HackBangalore 2024 Winner", type: "Hackathon", date: "2024-02-20" },
        { title: "Best Project Award", type: "Academic", date: "2023-12-15" },
      ],
      internships: [
        { company: "Google Summer of Code", role: "Open Source Contributor", duration: "May 2024 - Aug 2024" },
      ],
    },
    "1MS21CS043": {
      name: "Sneha Patel",
      usn: "1MS21CS043",
      year: "3rd Year",
      department: "Computer Science & Engineering",
      cgpa: 9.1,
      email: "sneha.patel@example.com",
      phone: "+91 9876543211",
      avatar: "/student2-profile.png",
      skills: ["Flutter", "Firebase", "Dart", "UI/UX Design", "Figma"],
      projects: [
        { title: "E-commerce Mobile App", tech: ["Flutter", "Firebase"], status: "Completed" },
        { title: "Social Media Dashboard", tech: ["React", "Node.js"], status: "Completed" },
      ],
      achievements: [
        { title: "Google Developer Challenge Winner", type: "Competition", date: "2024-01-15" },
        { title: "UI/UX Design Excellence", type: "Academic", date: "2023-11-20" },
      ],
      internships: [
        { company: "Microsoft", role: "Software Engineering Intern", duration: "Jun 2024 - Aug 2024" },
        { company: "Startup XYZ", role: "Flutter Developer", duration: "Dec 2023 - Feb 2024" },
      ],
    },
  }
  return studentDetails[usn] || null
}

export function StudentProfileModal({ open, onOpenChange, student }: StudentProfileModalProps) {
  if (!student) return null

  const studentDetails = getStudentDetails(student.usn)
  if (!studentDetails) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src={studentDetails.avatar || "/placeholder.svg"} />
              <AvatarFallback>
                {studentDetails.name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            Student Profile
          </DialogTitle>
          <DialogDescription>Detailed view of student achievements and performance</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Basic Info */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={studentDetails.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-lg">
                    {studentDetails.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-700">{studentDetails.name}</h3>
                  <p className="text-gray-600">
                    {studentDetails.usn} • {studentDetails.year}
                  </p>
                  <p className="text-gray-600">{studentDetails.department}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold text-blue-600">{studentDetails.cgpa} CGPA</span>
                    </div>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{studentDetails.email}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Full Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Skills & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {studentDetails.skills.map((skill: string, index: number) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Code className="w-5 h-5 text-cyan-600" />
                Projects ({studentDetails.projects.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {studentDetails.projects.map((project: any, index: number) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-slate-700">{project.title}</h4>
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech: string, techIndex: number) => (
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
              <CardTitle className="flex items-center gap-2 text-lg">
                <Trophy className="w-5 h-5 text-amber-600" />
                Achievements ({studentDetails.achievements.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {studentDetails.achievements.map((achievement: any, index: number) => (
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

          {/* Internships */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Briefcase className="w-5 h-5 text-purple-600" />
                Internships ({studentDetails.internships.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {studentDetails.internships.map((internship: any, index: number) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-slate-700">{internship.role}</h4>
                        <p className="text-gray-600">{internship.company}</p>
                      </div>
                      <p className="text-sm text-gray-500">{internship.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
