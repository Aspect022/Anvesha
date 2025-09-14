"use client"

import { useState } from "react"
import { StudentLayout } from "@/components/layout/student-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Edit,
  Save,
  X,
  Github,
  Linkedin,
  Globe,
  Code,
  Trophy,
  Upload,
  Download,
  Calendar,
  Mail,
  Phone,
  GraduationCap,
  Building,
  Target,
} from "lucide-react"
import { studentProfileData } from "@/lib/mock-data/student-profile"

export default function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState(studentProfileData)

  const handleSave = () => {
    // Here you would typically save to backend
    setIsEditing(false)
  }

  const handleCancel = () => {
    // Reset to original data
    setProfileData(studentProfileData)
    setIsEditing(false)
  }

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    portfolio: Globe,
    leetcode: Code,
    codechef: Trophy,
  }

  return (
    <StudentLayout userName={profileData.name} userAvatar={profileData.avatar}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-heading font-bold text-foreground">Profile</h1>
            <p className="text-muted-foreground">Manage your personal information and social profiles</p>
          </div>
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
                <Button variant="outline" onClick={handleCancel}>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)} variant="outline">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Personal Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Photo & Basic Info */}
            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle className="font-heading">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Photo */}
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={profileData.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-accent text-white">
                      {profileData.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button variant="outline" size="sm">
                      <Upload className="w-4 h-4 mr-2" />
                      Change Photo
                    </Button>
                  )}
                </div>

                {/* Basic Information */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    {isEditing ? (
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      />
                    ) : (
                      <p className="text-foreground font-medium">{profileData.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="usn">USN</Label>
                    <p className="text-foreground font-medium">{profileData.usn}</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      />
                    ) : (
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <p className="text-foreground">{profileData.email}</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      />
                    ) : (
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <p className="text-foreground">{profileData.phone}</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Academic Information */}
            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle className="font-heading">Academic Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">College</p>
                    <p className="text-foreground font-medium">{profileData.college}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Department</p>
                    <p className="text-foreground font-medium">{profileData.department}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Year</p>
                    <p className="text-foreground font-medium">{profileData.year}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">CGPA</p>
                    <p className="text-foreground font-medium">{profileData.cgpa}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Section - Social Profiles & Resume */}
          <div className="lg:col-span-2 space-y-6">
            {/* Social Profiles */}
            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle className="font-heading">Social Profiles</CardTitle>
                <CardDescription>Connect your professional and coding profiles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(profileData.socialProfiles).map(([platform, url]) => {
                  const Icon = socialIcons[platform as keyof typeof socialIcons]
                  return (
                    <div key={platform} className="flex items-center gap-4 p-4 border border-border rounded-xl">
                      <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground capitalize">{platform}</p>
                        {isEditing ? (
                          <Input
                            value={url}
                            onChange={(e) =>
                              setProfileData({
                                ...profileData,
                                socialProfiles: {
                                  ...profileData.socialProfiles,
                                  [platform]: e.target.value,
                                },
                              })
                            }
                            placeholder={`Your ${platform} profile URL`}
                          />
                        ) : (
                          <p className="text-sm text-muted-foreground truncate">{url}</p>
                        )}
                      </div>
                      {!isEditing && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={url} target="_blank" rel="noopener noreferrer">
                            Visit
                          </a>
                        </Button>
                      )}
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Resume Section */}
            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle className="font-heading">Resume</CardTitle>
                <CardDescription>Upload and manage your latest resume</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 border border-border rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <span className="text-red-600 font-bold text-sm">PDF</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{profileData.resume.filename}</p>
                      <p className="text-sm text-muted-foreground">
                        Uploaded on {new Date(profileData.resume.uploadDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <Upload className="w-4 h-4 mr-2" />
                      Update
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle className="font-heading">Skills</CardTitle>
                <CardDescription>Your technical and soft skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.technical.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.soft.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-accent/10 text-accent">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Goals */}
            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle className="font-heading">Current Goals</CardTitle>
                <CardDescription>Your learning and career objectives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {profileData.currentGoals.map((goal, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="text-foreground">{goal}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </StudentLayout>
  )
}
