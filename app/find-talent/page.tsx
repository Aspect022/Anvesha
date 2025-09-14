"use client"
import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Navbar } from "@/components/layout/navbar"
import { mockTalents, departments, skillCategories } from "@/lib/mock-data/talents"
import { Search, Filter, MapPin, ExternalLink, Star, Award, Code, Briefcase } from "lucide-react"
import Link from "next/link"

export default function FindTalentPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all")
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [selectedAvailability, setSelectedAvailability] = useState<string>("all")
  const [minCGPA, setMinCGPA] = useState<string>("")
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const filteredTalents = useMemo(() => {
    return mockTalents.filter((talent) => {
      // Search query filter
      if (
        searchQuery &&
        !talent.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !talent.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase())) &&
        !talent.targetRole.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }

      // Department filter
      if (selectedDepartment !== "all" && talent.department !== selectedDepartment) {
        return false
      }

      // Year filter
      if (selectedYear !== "all" && talent.year.toString() !== selectedYear) {
        return false
      }

      // Availability filter
      if (selectedAvailability !== "all" && talent.availability !== selectedAvailability) {
        return false
      }

      // CGPA filter
      if (minCGPA && talent.cgpa < Number.parseFloat(minCGPA)) {
        return false
      }

      // Skills filter
      if (selectedSkills.length > 0 && !selectedSkills.some((skill) => talent.skills.includes(skill))) {
        return false
      }

      return true
    })
  }, [searchQuery, selectedDepartment, selectedYear, selectedAvailability, minCGPA, selectedSkills])

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]))
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedDepartment("all")
    setSelectedYear("all")
    setSelectedAvailability("all")
    setMinCGPA("")
    setSelectedSkills([])
  }

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available":
        return "bg-green-100 text-green-800"
      case "Busy":
        return "bg-yellow-100 text-yellow-800"
      case "Not Available":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-2">Find Talent</h1>
          <p className="text-lg text-muted-foreground">
            Discover skilled students across departments and specializations
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by name, skills, or target role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </Button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Department</label>
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Departments" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Year</label>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Years" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Years</SelectItem>
                      <SelectItem value="1">1st Year</SelectItem>
                      <SelectItem value="2">2nd Year</SelectItem>
                      <SelectItem value="3">3rd Year</SelectItem>
                      <SelectItem value="4">4th Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Availability</label>
                  <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                    <SelectTrigger>
                      <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="Available">Available</SelectItem>
                      <SelectItem value="Busy">Busy</SelectItem>
                      <SelectItem value="Not Available">Not Available</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Min CGPA</label>
                  <Input
                    type="number"
                    step="0.1"
                    min="0"
                    max="10"
                    placeholder="e.g., 8.0"
                    value={minCGPA}
                    onChange={(e) => setMinCGPA(e.target.value)}
                  />
                </div>
              </div>

              {/* Skills Filter */}
              <div className="mb-4">
                <label className="text-sm font-medium text-foreground mb-3 block">Skills</label>
                <div className="space-y-3">
                  {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category}>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <div key={skill} className="flex items-center space-x-2">
                            <Checkbox
                              id={skill}
                              checked={selectedSkills.includes(skill)}
                              onCheckedChange={() => handleSkillToggle(skill)}
                            />
                            <label htmlFor={skill} className="text-sm text-foreground cursor-pointer">
                              {skill}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <Button variant="outline" onClick={clearFilters}>
                  Clear All Filters
                </Button>
                <p className="text-sm text-muted-foreground">
                  {filteredTalents.length} talent{filteredTalents.length !== 1 ? "s" : ""} found
                </p>
              </div>
            </Card>
          )}
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTalents.map((talent) => (
            <Card key={talent.id} className="hover:shadow-lg transition-all duration-300 border minimal-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {talent.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="font-heading font-semibold text-lg text-foreground">
                        {talent.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{talent.usn}</p>
                    </div>
                  </div>
                  <Badge className={`text-xs ${getAvailabilityColor(talent.availability)}`}>
                    {talent.availability}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Department</p>
                    <p className="font-medium text-foreground">{talent.department}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Year</p>
                    <p className="font-medium text-foreground">
                      {talent.year}
                      {talent.year === 1 ? "st" : talent.year === 2 ? "nd" : talent.year === 3 ? "rd" : "th"} Year
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">CGPA</p>
                    <p className="font-medium text-foreground flex items-center">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" />
                      {talent.cgpa}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Target Role</p>
                    <p className="font-medium text-foreground text-xs">{talent.targetRole}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Code className="w-3 h-3" />
                    <span>{talent.projects} Projects</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Briefcase className="w-3 h-3" />
                    <span>{talent.internships} Internships</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="w-3 h-3" />
                    <span>{talent.hackathons} Hackathons</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Top Skills</p>
                  <div className="flex flex-wrap gap-1">
                    {talent.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {talent.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{talent.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3 mr-1" />
                    {talent.location}
                  </div>
                  <Link href={`/portfolio/${talent.usn}`}>
                    <Button size="sm" variant="outline" className="text-xs bg-transparent">
                      View Profile
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTalents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">No talents found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search criteria or filters</p>
            <Button variant="outline" onClick={clearFilters}>
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
