"use client"

import { useState } from "react"
import { FacultyLayout } from "@/components/layout/faculty-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle, XCircle, Eye, FileText, Filter, Search, Users, ClipboardList } from "lucide-react"
import { ValidationModal } from "@/components/faculty/validation-modal"
import { StudentProfileModal } from "@/components/faculty/student-profile-modal"

// Hardcoded faculty data
const facultyData = {
  name: "Dr. Priya Nair",
  department: "Computer Science & Engineering",
  avatar: "/faculty-profile.png",
}

// Hardcoded validation queue data
const validationQueue = [
  {
    id: 1,
    studentName: "Arjun Sharma",
    studentUSN: "1MS21CS042",
    studentAvatar: "/student-profile.png",
    title: "Smart Home IoT Project",
    type: "Project",
    submittedDate: "2024-01-15",
    description: "Developed a complete IoT solution for home automation using React and Arduino",
    proofLink: "/proof/iot-project.pdf",
    status: "pending",
  },
  {
    id: 2,
    studentName: "Sneha Patel",
    studentUSN: "1MS21CS043",
    studentAvatar: "/student2-profile.png",
    title: "HackBangalore 2024",
    type: "Hackathon",
    submittedDate: "2024-02-20",
    description: "Built an AI-powered expense tracker app and won first place",
    proofLink: "/proof/hackathon-cert.pdf",
    status: "pending",
  },
  {
    id: 3,
    studentName: "Rahul Kumar",
    studentUSN: "1MS21CS044",
    studentAvatar: "/student3-profile.png",
    title: "Machine Learning Research Paper",
    type: "Research",
    submittedDate: "2024-03-10",
    description: "Published paper on neural network optimization in IEEE conference",
    proofLink: "/proof/research-paper.pdf",
    status: "pending",
  },
  {
    id: 4,
    studentName: "Ananya Singh",
    studentUSN: "1MS21CS045",
    studentAvatar: "/student4-profile.png",
    title: "Google Summer of Code",
    type: "Internship",
    submittedDate: "2024-03-25",
    description: "Contributing to TensorFlow.js open source project",
    proofLink: "/proof/gsoc-acceptance.pdf",
    status: "pending",
  },
]

// Hardcoded student list for profile viewer
const studentsList = [
  {
    usn: "1MS21CS042",
    name: "Arjun Sharma",
    year: "3rd Year",
    cgpa: 8.7,
    projects: 12,
    hackathons: 5,
    research: 2,
    internships: 1,
    avatar: "/student-profile.png",
  },
  {
    usn: "1MS21CS043",
    name: "Sneha Patel",
    year: "3rd Year",
    cgpa: 9.1,
    projects: 8,
    hackathons: 7,
    research: 1,
    internships: 2,
    avatar: "/student2-profile.png",
  },
  {
    usn: "1MS21CS044",
    name: "Rahul Kumar",
    year: "3rd Year",
    cgpa: 8.9,
    projects: 10,
    hackathons: 3,
    research: 4,
    internships: 1,
    avatar: "/student3-profile.png",
  },
]

export default function FacultyDashboard() {
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null)
  const [selectedStudent, setSelectedStudent] = useState<any>(null)
  const [showValidationModal, setShowValidationModal] = useState(false)
  const [showStudentModal, setShowStudentModal] = useState(false)
  const [filterType, setFilterType] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [cgpaFilter, setCgpaFilter] = useState("all")

  const filteredQueue = validationQueue.filter((item) => {
    const matchesType = filterType === "all" || item.type.toLowerCase() === filterType.toLowerCase()
    const matchesSearch =
      item.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesSearch
  })

  const filteredStudents = studentsList.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.usn.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCGPA =
      cgpaFilter === "all" ||
      (cgpaFilter === "high" && student.cgpa >= 9.0) ||
      (cgpaFilter === "medium" && student.cgpa >= 8.0 && student.cgpa < 9.0) ||
      (cgpaFilter === "low" && student.cgpa < 8.0)
    return matchesSearch && matchesCGPA
  })

  const handleValidate = (submission: any, action: "approve" | "reject") => {
    setSelectedSubmission({ ...submission, action })
    setShowValidationModal(true)
  }

  const handleViewStudent = (student: any) => {
    setSelectedStudent(student)
    setShowStudentModal(true)
  }

  const pendingCount = validationQueue.filter((item) => item.status === "pending").length

  return (
    <FacultyLayout userName={facultyData.name} userAvatar={facultyData.avatar}>
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border minimal-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-yellow-100">
                  <ClipboardList className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{pendingCount}</p>
                  <p className="text-sm text-muted-foreground">Pending Reviews</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border minimal-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-green-100">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">24</p>
                  <p className="text-sm text-muted-foreground">Approved</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border minimal-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-red-100">
                  <XCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">3</p>
                  <p className="text-sm text-muted-foreground">Rejected</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border minimal-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-accent/20">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{studentsList.length}</p>
                  <p className="text-sm text-muted-foreground">Students</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Validation Queue */}
        <Card className="border minimal-shadow">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="flex items-center gap-2 font-heading">
                  <ClipboardList className="w-5 h-5 text-accent" />
                  Validation Queue
                </CardTitle>
                <CardDescription>Review and validate student achievement submissions</CardDescription>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search submissions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-40">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="project">Projects</SelectItem>
                    <SelectItem value="hackathon">Hackathons</SelectItem>
                    <SelectItem value="research">Research</SelectItem>
                    <SelectItem value="internship">Internships</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredQueue.map((submission) => (
                <div key={submission.id} className="p-4 border border-border rounded-xl bg-card">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={submission.studentAvatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white">
                          {submission.studentName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-foreground">{submission.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {submission.studentName} • {submission.studentUSN}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{submission.type}</Badge>
                      <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                    </div>
                  </div>

                  <p className="text-foreground mb-3">{submission.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Submitted: {new Date(submission.submittedDate).toLocaleDateString()}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={submission.proofLink} target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4 mr-1" />
                          View Proof
                        </a>
                      </Button>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleValidate(submission, "reject")}
                        className="text-red-600 border-red-200 hover:bg-red-50"
                      >
                        <XCircle className="w-4 h-4 mr-1" />
                        Reject
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleValidate(submission, "approve")}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Approve
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Student Profile Viewer */}
        <Card className="border minimal-shadow">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="flex items-center gap-2 font-heading">
                  <Users className="w-5 h-5 text-primary" />
                  Student Profile Viewer
                </CardTitle>
                <CardDescription>View detailed student portfolios and performance</CardDescription>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search students..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Select value={cgpaFilter} onValueChange={setCgpaFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="CGPA Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All CGPA</SelectItem>
                    <SelectItem value="high">9.0+ CGPA</SelectItem>
                    <SelectItem value="medium">8.0-8.9 CGPA</SelectItem>
                    <SelectItem value="low">Below 8.0</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {filteredStudents.map((student) => (
                <div key={student.usn} className="p-4 border border-border rounded-xl bg-card">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={student.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white">
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-foreground">{student.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {student.usn} • {student.year}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-lg font-bold text-primary">{student.cgpa}</p>
                        <p className="text-xs text-muted-foreground">CGPA</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-accent">{student.projects}</p>
                        <p className="text-xs text-muted-foreground">Projects</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-green-600">{student.hackathons}</p>
                        <p className="text-xs text-muted-foreground">Hackathons</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-yellow-600">{student.research}</p>
                        <p className="text-xs text-muted-foreground">Research</p>
                      </div>

                      <Button variant="outline" size="sm" onClick={() => handleViewStudent(student)}>
                        <Eye className="w-4 h-4 mr-1" />
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border minimal-shadow">
          <CardHeader>
            <CardTitle className="font-heading">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Generate Accreditation Report
              </Button>
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Export Student Data
              </Button>
              <Button variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Bulk Approve Submissions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <ValidationModal
        open={showValidationModal}
        onOpenChange={setShowValidationModal}
        submission={selectedSubmission}
      />

      <StudentProfileModal open={showStudentModal} onOpenChange={setShowStudentModal} student={selectedStudent} />
    </FacultyLayout>
  )
}
