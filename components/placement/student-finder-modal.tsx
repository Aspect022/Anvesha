"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Users, Eye, Download } from "lucide-react"

interface StudentFinderModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

// Hardcoded student database for search
const studentDatabase = [
  {
    usn: "1MS21CS042",
    name: "Arjun Sharma",
    year: "3rd Year",
    department: "CSE",
    cgpa: 8.7,
    skills: ["React", "Node.js", "Python", "Machine Learning", "MongoDB"],
    projects: 12,
    hackathons: 5,
    internships: 1,
    avatar: "/student-profile.png",
    targetRole: "Full Stack Developer",
    status: "Available",
  },
  {
    usn: "1MS21CS043",
    name: "Sneha Patel",
    year: "3rd Year",
    department: "CSE",
    cgpa: 9.1,
    skills: ["Flutter", "Firebase", "UI/UX", "Dart", "Figma"],
    projects: 8,
    hackathons: 7,
    internships: 2,
    avatar: "/student2-profile.png",
    targetRole: "Mobile App Developer",
    status: "Available",
  },
  {
    usn: "1MS21CS044",
    name: "Rahul Kumar",
    year: "3rd Year",
    department: "CSE",
    cgpa: 8.9,
    skills: ["Python", "TensorFlow", "Data Science", "ML", "Pandas"],
    projects: 10,
    hackathons: 3,
    internships: 1,
    avatar: "/student3-profile.png",
    targetRole: "Data Scientist",
    status: "Interviewing",
  },
  {
    usn: "1MS21EC001",
    name: "Priya Nair",
    year: "4th Year",
    department: "ECE",
    cgpa: 8.4,
    skills: ["VLSI", "Embedded Systems", "C++", "Arduino", "IoT"],
    projects: 7,
    hackathons: 2,
    internships: 1,
    avatar: "/student6-profile.png",
    targetRole: "Embedded Engineer",
    status: "Available",
  },
  {
    usn: "1MS21ME001",
    name: "Karthik Reddy",
    year: "4th Year",
    department: "ME",
    cgpa: 8.8,
    skills: ["CAD", "SolidWorks", "Manufacturing", "Automation", "Python"],
    projects: 6,
    hackathons: 1,
    internships: 2,
    avatar: "/student7-profile.png",
    targetRole: "Design Engineer",
    status: "Available",
  },
]

export function StudentFinderModal({ open, onOpenChange }: StudentFinderModalProps) {
  const [searchFilters, setSearchFilters] = useState({
    skills: "",
    year: "all",
    department: "all",
    cgpa: "all",
    status: "all",
  })

  const [searchResults, setSearchResults] = useState(studentDatabase)

  const handleSearch = () => {
    const filtered = studentDatabase.filter((student) => {
      const matchesSkills =
        !searchFilters.skills ||
        student.skills.some((skill) => skill.toLowerCase().includes(searchFilters.skills.toLowerCase()))

      const matchesYear = searchFilters.year === "all" || student.year.includes(searchFilters.year)

      const matchesDepartment = searchFilters.department === "all" || student.department === searchFilters.department

      const matchesCGPA =
        searchFilters.cgpa === "all" ||
        (searchFilters.cgpa === "high" && student.cgpa >= 9.0) ||
        (searchFilters.cgpa === "medium" && student.cgpa >= 8.0 && student.cgpa < 9.0) ||
        (searchFilters.cgpa === "low" && student.cgpa < 8.0)

      const matchesStatus = searchFilters.status === "all" || student.status.toLowerCase() === searchFilters.status

      return matchesSkills && matchesYear && matchesDepartment && matchesCGPA && matchesStatus
    })

    setSearchResults(filtered)
  }

  const resetFilters = () => {
    setSearchFilters({
      skills: "",
      year: "all",
      department: "all",
      cgpa: "all",
      status: "all",
    })
    setSearchResults(studentDatabase)
  }

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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="w-5 h-5 text-blue-600" />
            Student Finder
          </DialogTitle>
          <DialogDescription>
            Search and filter students based on skills, year, CGPA, and availability.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Search Filters */}
          <div className="p-4 bg-gray-50 rounded-lg space-y-4">
            <h3 className="font-semibold text-slate-700">Search Filters</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="skills">Skills</Label>
                <Input
                  id="skills"
                  value={searchFilters.skills}
                  onChange={(e) => setSearchFilters((prev) => ({ ...prev, skills: e.target.value }))}
                  placeholder="e.g., React, Python, ML"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Select
                  value={searchFilters.year}
                  onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, year: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="2nd">2nd Year</SelectItem>
                    <SelectItem value="3rd">3rd Year</SelectItem>
                    <SelectItem value="4th">4th Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select
                  value={searchFilters.department}
                  onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, department: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="CSE">Computer Science</SelectItem>
                    <SelectItem value="ECE">Electronics</SelectItem>
                    <SelectItem value="ME">Mechanical</SelectItem>
                    <SelectItem value="EEE">Electrical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cgpa">CGPA Range</Label>
                <Select
                  value={searchFilters.cgpa}
                  onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, cgpa: value }))}
                >
                  <SelectTrigger>
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
              <div className="space-y-2">
                <Label htmlFor="status">Availability</Label>
                <Select
                  value={searchFilters.status}
                  onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, status: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="interviewing">Interviewing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end gap-2">
                <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
                <Button variant="outline" onClick={resetFilters}>
                  <Filter className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-slate-700">
                Search Results ({searchResults.length} student{searchResults.length !== 1 ? "s" : ""})
              </h3>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Results
              </Button>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {searchResults.map((student) => (
                <div key={student.usn} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
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
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(student.status)}>{student.status}</Badge>
                      <span className="text-sm font-semibold text-blue-600">{student.cgpa} CGPA</span>
                    </div>
                  </div>

                  <div className="mb-2">
                    <p className="text-sm text-gray-500 mb-1">Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {student.skills.slice(0, 5).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {student.skills.length > 5 && (
                        <Badge variant="outline" className="text-xs">
                          +{student.skills.length - 5} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>{student.projects} projects</span>
                      <span>{student.hackathons} hackathons</span>
                      <span>
                        {student.internships} internship{student.internships !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Users className="w-4 h-4 mr-1" />
                        Contact
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
