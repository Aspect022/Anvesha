"use client"

import { useState } from "react"
import { PlacementLayout } from "@/components/layout/placement-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Edit, Save, X, Mail, Phone, Calendar, Award, Briefcase, Building, User } from "lucide-react"

const placementProfile = {
  name: "Ms. Kavya Reddy",
  email: "kavya.reddy@college.edu",
  phone: "+91 98765 43210",
  role: "Placement Officer",
  department: "Training & Placement Cell",
  experience: "8 years",
  qualification: "MBA in Human Resources",
  specialization: ["Corporate Relations", "Career Counseling", "Industry Partnerships"],
  avatar: "/placement-profile.png",
  bio: "Ms. Kavya Reddy is the Placement Officer with over 8 years of experience in corporate relations and student career development. She has successfully placed over 500 students in top companies.",
  achievements: [
    "100% Placement Record 2023",
    "Best Placement Officer Award 2022",
    "Industry Partnership Excellence 2021",
  ],
  placementStats: {
    totalPlacements: 234,
    activeCompanies: 45,
    averagePackage: "₹12.5 LPA",
    placementRate: "94%",
  },
  companyPartners: [
    { name: "Google", logo: "/company-google.png", placements: 12 },
    { name: "Microsoft", logo: "/company-microsoft.png", placements: 18 },
    { name: "Amazon", logo: "/company-amazon.png", placements: 15 },
    { name: "TCS", logo: "/company-tcs.png", placements: 25 },
    { name: "Infosys", logo: "/company-infosys.png", placements: 22 },
  ],
}

export default function PlacementProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState(placementProfile)

  const handleSave = () => {
    // Save profile changes
    setIsEditing(false)
  }

  const handleCancel = () => {
    // Reset changes
    setProfile(placementProfile)
    setIsEditing(false)
  }

  return (
    <PlacementLayout userName={profile.name} userAvatar={profile.avatar}>
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
                  <p className="text-lg text-muted-foreground">{profile.role}</p>
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
                <Briefcase className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-primary">{profile.placementStats.totalPlacements}</p>
                <p className="text-sm text-muted-foreground">Total Placements</p>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-lg">
                <Building className="w-6 h-6 text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold text-accent">{profile.placementStats.activeCompanies}</p>
                <p className="text-sm text-muted-foreground">Partner Companies</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Award className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">{profile.placementStats.averagePackage}</p>
                <p className="text-sm text-muted-foreground">Average Package</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <Calendar className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-yellow-600">{profile.placementStats.placementRate}</p>
                <p className="text-sm text-muted-foreground">Placement Rate</p>
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
          </div>

          {/* Right Section - Company Partners & Tools */}
          <div className="space-y-6">
            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle>Top Company Partners</CardTitle>
                <CardDescription>Companies with highest placement numbers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {profile.companyPartners.map((company, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Building className="w-4 h-4 text-gray-600" />
                        </div>
                        <span className="font-medium">{company.name}</span>
                      </div>
                      <Badge variant="outline">{company.placements} placed</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle>Placement Tools</CardTitle>
                <CardDescription>Quick access to placement management tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Post New Opportunity
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <User className="w-4 h-4 mr-2" />
                  Student Database
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Building className="w-4 h-4 mr-2" />
                  Company Relations
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Award className="w-4 h-4 mr-2" />
                  Placement Reports
                </Button>
              </CardContent>
            </Card>

            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used placement tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Campus Drive
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Bulk Notifications
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Award className="w-4 h-4 mr-2" />
                  Generate Placement Stats
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PlacementLayout>
  )
}
