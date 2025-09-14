"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/layout/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Edit, Save, X, Mail, Phone, Calendar, Award, Settings, Shield, User } from "lucide-react"

const adminProfile = {
  name: "Dr. Rajesh Kumar",
  email: "rajesh.kumar@college.edu",
  phone: "+91 98765 43210",
  role: "System Administrator",
  department: "Administration",
  experience: "15 years",
  qualification: "Ph.D. in Computer Science",
  permissions: ["Full System Access", "User Management", "Report Generation", "Data Export"],
  avatar: "/admin-profile.png",
  bio: "Dr. Rajesh Kumar is the System Administrator with over 15 years of experience in educational technology and institutional management. He oversees the complete digital infrastructure of the institution.",
  responsibilities: [
    "System Administration & Maintenance",
    "User Access Management",
    "Data Analytics & Reporting",
    "Institutional Compliance",
  ],
  systemStats: {
    totalUsers: 1247,
    activeUsers: 1089,
    systemUptime: "99.8%",
    dataProcessed: "2.4TB",
  },
}

export default function AdminProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState(adminProfile)

  const handleSave = () => {
    // Save profile changes
    setIsEditing(false)
  }

  const handleCancel = () => {
    // Reset changes
    setProfile(adminProfile)
    setIsEditing(false)
  }

  return (
    <AdminLayout userName={profile.name} userAvatar={profile.avatar}>
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
                <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-primary">{profile.systemStats.totalUsers}</p>
                <p className="text-sm text-muted-foreground">Total Users</p>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-lg">
                <User className="w-6 h-6 text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold text-accent">{profile.systemStats.activeUsers}</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Settings className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">{profile.systemStats.systemUptime}</p>
                <p className="text-sm text-muted-foreground">System Uptime</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <Calendar className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-yellow-600">{profile.systemStats.dataProcessed}</p>
                <p className="text-sm text-muted-foreground">Data Processed</p>
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
                <CardTitle>System Permissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.permissions.map((permission, index) => (
                    <Badge key={index} className="bg-primary/10 text-primary border-primary/20">
                      {permission}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle>Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {profile.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
                      <Settings className="w-5 h-5 text-accent" />
                      <span className="font-medium">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Section - System Management */}
          <div className="space-y-6">
            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle>System Management</CardTitle>
                <CardDescription>Administrative tools and system controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-medium">User Management</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage Users
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Settings className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-medium">System Settings</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-4 h-4 text-yellow-600" />
                      </div>
                      <span className="font-medium">Security Center</span>
                    </div>
                    <Button variant="outline" size="sm">
                      View Logs
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Award className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="font-medium">Reports & Analytics</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Generate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used administrative tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Settings className="w-4 h-4 mr-2" />
                  System Backup
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <User className="w-4 h-4 mr-2" />
                  Bulk User Import
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Shield className="w-4 h-4 mr-2" />
                  Security Audit
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Award className="w-4 h-4 mr-2" />
                  Generate Reports
                </Button>
              </CardContent>
            </Card>

            <Card className="border minimal-shadow">
              <CardHeader>
                <CardTitle>System Health</CardTitle>
                <CardDescription>Current system status and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Database Status</span>
                    <Badge className="bg-green-100 text-green-800">Healthy</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Server Load</span>
                    <Badge className="bg-yellow-100 text-yellow-800">Moderate</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Backup Status</span>
                    <Badge className="bg-green-100 text-green-800">Up to Date</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Security Status</span>
                    <Badge className="bg-green-100 text-green-800">Secure</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
