"use client"

import { useState } from "react"
import { FacultyLayout } from "@/components/layout/faculty-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Edit, Save, X, Mail, Phone, Calendar, Award, BookOpen, Users, User } from "lucide-react"

const facultyProfile = {
  name: "Dr. Priya Nair",
  email: "priya.nair@college.edu",
  phone: "+91 98765 43210",
  department: "Computer Science & Engineering",
  designation: "Associate Professor",
  experience: "12 years",
  qualification: "Ph.D. in Computer Science",
  specialization: ["Machine Learning", "Data Science", "AI Ethics"],
  researchInterests: ["Neural Networks", "Deep Learning", "Computer Vision"],
  publications: 45,
  projects: 12,
  studentsGuided: 89,
  avatar: "/faculty-profile.png",
  bio: "Dr. Priya Nair is an Associate Professor with over 12 years of experience in computer science education and research. She specializes in machine learning and has published extensively in top-tier conferences.",
  achievements: [
    "Best Faculty Award 2023",
    "Outstanding Research Contribution 2022",
    "Excellence in Teaching Award 2021",
  ],
  socialProfiles: {
    linkedin: "https://linkedin.com/in/priya-nair",
    googleScholar: "https://scholar.google.com/citations?user=xyz",
    researchGate: "https://researchgate.net/profile/priya-nair",
    orcid: "https://orcid.org/0000-0000-0000-0000",
  },
}

export default function FacultyProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState(facultyProfile)

  const handleSave = () => {
    // Save profile changes
    setIsEditing(false)
  }

  const handleCancel = () => {
    // Reset changes
    setProfile(facultyProfile)
    setIsEditing(false)
  }

  return (
    <FacultyLayout userName={profile.name} userAvatar={profile.avatar}>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Profile Header */}
        <Card className="border minimal-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={profile.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-2xl">
                    {profile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{profile.name}</h1>
                  <p className="text-lg text-muted-foreground">{profile.designation}</p>
                  <p className="text-accent font-medium">{profile.department}</p>
                </div>
              </div>
              <Button onClick={() => setIsEditing(!isEditing)} variant={isEditing ? "outline" : "default"}>
                {isEditing ? <X className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-primary">{profile.publications}</p>
                <p className="text-sm text-muted-foreground">Publications</p>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-lg">
                <Award className="w-6 h-6 text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold text-accent">{profile.projects}</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">{profile.studentsGuided}</p>
                <p className="text-sm text-muted-foreground">Students Guided</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <Calendar className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-yellow-600">{profile.experience}</p>
                <p className="text-sm text-muted-foreground">Experience</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Section - Personal Information */}
          <div className="space-y-6">
            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      />
                    ) : (
                      <div className="flex items-center gap-2 mt-1">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span>{profile.email}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      />
                    ) : (
                      <div className="flex items-center gap-2 mt-1">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span>{profile.phone}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="qualification">Qualification</Label>
                    {isEditing ? (
                      <Input
                        id="qualification"
                        value={profile.qualification}
                        onChange={(e) => setProfile({ ...profile, qualification: e.target.value })}
                      />
                    ) : (
                      <p className="mt-1">{profile.qualification}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    {isEditing ? (
                      <Textarea
                        id="bio"
                        value={profile.bio}
                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                        rows={4}
                      />
                    ) : (
                      <p className="mt-1 text-muted-foreground">{profile.bio}</p>
                    )}
                  </div>
                </div>

                {isEditing && (
                  <div className="flex gap-2 pt-4">
                    <Button onClick={handleSave}>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle>Specializations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.specialization.map((spec, index) => (
                    <Badge key={index} variant="secondary">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle>Research Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.researchInterests.map((interest, index) => (
                    <Badge key={index} className="bg-accent/10 text-accent border-accent/20">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Section - Professional Profiles */}
          <div className="space-y-6">
            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle>Professional Profiles</CardTitle>
                <CardDescription>Your academic and professional online presence</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">in</span>
                      </div>
                      <span className="font-medium">LinkedIn</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={profile.socialProfiles.linkedin} target="_blank" rel="noopener noreferrer">
                        View Profile
                      </a>
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 font-bold text-sm">GS</span>
                      </div>
                      <span className="font-medium">Google Scholar</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={profile.socialProfiles.googleScholar} target="_blank" rel="noopener noreferrer">
                        View Profile
                      </a>
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">RG</span>
                      </div>
                      <span className="font-medium">ResearchGate</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={profile.socialProfiles.researchGate} target="_blank" rel="noopener noreferrer">
                        View Profile
                      </a>
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">OR</span>
                      </div>
                      <span className="font-medium">ORCID</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={profile.socialProfiles.orcid} target="_blank" rel="noopener noreferrer">
                        View Profile
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {profile.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
                      <Award className="w-5 h-5 text-accent" />
                      <span className="font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle>Documents</CardTitle>
                <CardDescription>Important academic documents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-medium">Academic CV</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="font-medium">Research Portfolio</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </FacultyLayout>
  )
}
