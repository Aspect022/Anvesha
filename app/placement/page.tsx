"use client"

import { useState } from "react"
import { PlacementLayout } from "@/components/layout/placement-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Search, Filter, Users, Briefcase, TrendingUp, Building, Eye, Download } from "lucide-react"
import { PostOpportunityModal } from "@/components/placement/post-opportunity-modal"
import { StudentFinderModal } from "@/components/placement/student-finder-modal"

// Hardcoded placement cell data
const placementData = {
  name: "Ms. Kavya Reddy",
  role: "Placement Officer",
  avatar: "/placement-profile.png",
}

// Hardcoded placement statistics
const placementStats = [
  { label: "Active Opportunities", value: "24", icon: Briefcase, color: "text-blue-600", bgColor: "bg-blue-100" },
  { label: "Placement Ready", value: "156", icon: Users, color: "text-emerald-600", bgColor: "bg-emerald-100" },
  { label: "Placed Students", value: "89", icon: TrendingUp, color: "text-cyan-600", bgColor: "bg-cyan-100" },
  { label: "Partner Companies", value: "45", icon: Building, color: "text-amber-600", bgColor: "bg-amber-100" },
]

// Hardcoded placement-ready students
const placementReadyStudents = [
  {
    usn: "1MS21CS042",
    name: "Arjun Sharma",
    year: "3rd Year",
    department: "CSE",
    cgpa: 8.7,
    skills: ["React", "Node.js", "Python", "Machine Learning"],
    projects: 12,
    hackathons: 5,
    internships: 1,
    avatar: "/student-profile.png",
    targetRole: "Full Stack Developer",
    readiness: 85,
    status: "Available",
  },
  {
    usn: "1MS21CS043",
    name: "Sneha Patel",
    year: "3rd Year",
    department: "CSE",
    cgpa: 9.1,
    skills: ["Flutter", "Firebase", "UI/UX", "Dart"],
    projects: 8,
    hackathons: 7,
    internships: 2,
    avatar: "/student2-profile.png",
    targetRole: "Mobile App Developer",
    readiness: 92,
    status: "Available",
  },
  {
    usn: "1MS21CS044",
    name: "Rahul Kumar",
    year: "3rd Year",
    department: "CSE",
    cgpa: 8.9,
    skills: ["Python", "TensorFlow", "Data Science", "ML"],
    projects: 10,
    hackathons: 3,
    internships: 1,
    avatar: "/student3-profile.png",
    targetRole: "Data Scientist",
    readiness: 78,
    status: "Interviewing",
  },
  {
    usn: "1MS21CS045",
    name: "Ananya Singh",
    year: "3rd Year",
    department: "CSE",
    cgpa: 8.5,
    skills: ["Java", "Spring Boot", "AWS", "Microservices"],
    projects: 9,
    hackathons: 4,
    internships: 1,
    avatar: "/student4-profile.png",
    targetRole: "Backend Developer",
    readiness: 80,
    status: "Available",
  },
  {
    usn: "1MS21CS046",
    name: "Vikram Joshi",
    year: "3rd Year",
    department: "CSE",
    cgpa: 9.3,
    skills: ["React", "TypeScript", "GraphQL", "Next.js"],
    projects: 15,
    hackathons: 8,
    internships: 2,
    avatar: "/student5-profile.png",
    targetRole: "Frontend Developer",
    readiness: 95,
    status: "Placed",
  },
]

// Hardcoded active opportunities
const activeOpportunities = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Google",
    type: "Internship",
    location: "Bangalore",
    package: "₹80,000/month",
    eligibility: "CGPA ≥ 8.0, CSE/IT",
    deadline: "2024-04-15",
    applicants: 45,
    status: "Active",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Microsoft",
    type: "Full Time",
    location: "Hyderabad",
    package: "₹18 LPA",
    eligibility: "CGPA ≥ 7.5, All branches",
    deadline: "2024-04-20",
    applicants: 67,
    status: "Active",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Amazon",
    type: "Full Time",
    location: "Chennai",
    package: "₹22 LPA",
    eligibility: "CGPA ≥ 8.5, CSE/ECE",
    deadline: "2024-04-25",
    applicants: 23,
    status: "Active",
  },
]

export default function PlacementDashboard() {
  const [showPostModal, setShowPostModal] = useState(false)
  const [showFinderModal, setShowFinderModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [cgpaFilter, setCgpaFilter] = useState("all")

  const filteredStudents = placementReadyStudents.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.usn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesStatus = statusFilter === "all" || student.status.toLowerCase() === statusFilter.toLowerCase()

    const matchesCGPA =
      cgpaFilter === "all" ||
      (cgpaFilter === "high" && student.cgpa >= 9.0) ||
      (cgpaFilter === "medium" && student.cgpa >= 8.0 && student.cgpa < 9.0) ||
      (cgpaFilter === "low" && student.cgpa < 8.0)

    return matchesSearch && matchesStatus && matchesCGPA
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-emerald-100 text-emerald-800"
      case "Interviewing":
        return "bg-amber-100 text-amber-800"
      case "Placed":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getReadinessColor = (readiness: number) => {
    if (readiness >= 90) return "text-emerald-600"
    if (readiness >= 75) return "text-amber-600"
    return "text-red-600"
  }

  return (
    <PlacementLayout userName={placementData.name} userAvatar={placementData.avatar}>
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {placementStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-700">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage placement opportunities and find suitable candidates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => setShowPostModal(true)} className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="w-4 h-4 mr-2" />
                Post New Opportunity
              </Button>
              <Button variant="outline" onClick={() => setShowFinderModal(true)}>
                <Search className="w-4 h-4 mr-2" />
                Student Finder
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Placement Report
              </Button>
              <Button variant="outline">
                <Building className="w-4 h-4 mr-2" />
                Company Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Active Opportunities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              Active Opportunities
            </CardTitle>
            <CardDescription>Currently open positions from partner companies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeOpportunities.map((opportunity) => (
                <div key={opportunity.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-slate-700 text-lg">{opportunity.title}</h4>
                      <p className="text-gray-600">{opportunity.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{opportunity.type}</Badge>
                      <Badge className="bg-emerald-100 text-emerald-800">{opportunity.status}</Badge>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="font-medium">Location:</span> {opportunity.location}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Package:</span> {opportunity.package}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="font-medium">Eligibility:</span> {opportunity.eligibility}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Deadline:</span>{" "}
                        {new Date(opportunity.deadline).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">{opportunity.applicants} students applied</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Users className="w-4 h-4 mr-1" />
                        View Applicants
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Placement Ready Students */}
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-600" />
                  Placement Ready Students
                </CardTitle>
                <CardDescription>Students available for placement opportunities</CardDescription>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search students..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="interviewing">Interviewing</SelectItem>
                    <SelectItem value="placed">Placed</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={cgpaFilter} onValueChange={setCgpaFilter}>
                  <SelectTrigger className="w-40">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
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
            <div className="space-y-4">
              {filteredStudents.map((student) => (
                <div key={student.usn} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={student.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-slate-700">{student.name}</h4>
                        <p className="text-sm text-gray-600">
                          {student.usn} • {student.year} • {student.department}
                        </p>
                        <p className="text-sm text-gray-600">Target: {student.targetRole}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(student.status)}>{student.status}</Badge>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-lg font-bold text-blue-600">{student.cgpa}</p>
                        <p className="text-xs text-gray-500">CGPA</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-cyan-600">{student.projects}</p>
                        <p className="text-xs text-gray-500">Projects</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-emerald-600">{student.hackathons}</p>
                        <p className="text-xs text-gray-500">Hackathons</p>
                      </div>
                      <div className="text-center">
                        <p className={`text-lg font-bold ${getReadinessColor(student.readiness)}`}>
                          {student.readiness}%
                        </p>
                        <p className="text-xs text-gray-500">Readiness</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {student.skills.slice(0, 4).map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {student.skills.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{student.skills.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">
                      {student.internships} internship{student.internships !== 1 ? "s" : ""} completed
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View Profile
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Download Resume
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <PostOpportunityModal open={showPostModal} onOpenChange={setShowPostModal} />
      <StudentFinderModal open={showFinderModal} onOpenChange={setShowFinderModal} />
    </PlacementLayout>
  )
}
