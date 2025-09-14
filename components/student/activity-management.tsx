"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Eye, Calendar, Filter, Search, Trophy, Code, FileText, Briefcase, BookOpen, Award } from "lucide-react"
import { studentActivities } from "@/lib/mock-data/student-profile"

interface Activity {
  id: number
  title: string
  type: string
  date: string
  status: "Approved" | "Pending" | "Rejected"
  description: string
  skills: string[]
  impact: string
}

export function ActivityManagement() {
  const [activities, setActivities] = useState<Activity[]>(studentActivities)
  const [showAddModal, setShowAddModal] = useState(false)
  const [filterType, setFilterType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [newActivity, setNewActivity] = useState({
    title: "",
    type: "",
    description: "",
    skills: "",
    impact: "Medium",
    date: new Date().toISOString().split("T")[0],
  })

  const activityTypes = [
    { value: "Project", icon: Code, color: "bg-blue-100 text-blue-800" },
    { value: "Hackathon", icon: Trophy, color: "bg-green-100 text-green-800" },
    { value: "Research", icon: FileText, color: "bg-purple-100 text-purple-800" },
    { value: "Internship", icon: Briefcase, color: "bg-orange-100 text-orange-800" },
    { value: "Course", icon: BookOpen, color: "bg-indigo-100 text-indigo-800" },
    { value: "Certification", icon: Award, color: "bg-yellow-100 text-yellow-800" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Very High":
        return "bg-red-100 text-red-800"
      case "High":
        return "bg-orange-100 text-orange-800"
      case "Medium":
        return "bg-blue-100 text-blue-800"
      case "Low":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const handleAddActivity = () => {
    const activity: Activity = {
      id: activities.length + 1,
      title: newActivity.title,
      type: newActivity.type,
      date: newActivity.date,
      status: "Pending",
      description: newActivity.description,
      skills: newActivity.skills.split(",").map((s) => s.trim()),
      impact: newActivity.impact,
    }

    setActivities([activity, ...activities])
    setNewActivity({
      title: "",
      type: "",
      description: "",
      skills: "",
      impact: "Medium",
      date: new Date().toISOString().split("T")[0],
    })
    setShowAddModal(false)
  }

  const filteredActivities = activities.filter((activity) => {
    const matchesType = filterType === "all" || activity.type === filterType
    const matchesStatus = filterStatus === "all" || activity.status === filterStatus
    const matchesSearch =
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesType && matchesStatus && matchesSearch
  })

  const getTypeIcon = (type: string) => {
    const typeConfig = activityTypes.find((t) => t.value === type)
    return typeConfig ? typeConfig.icon : Code
  }

  return (
    <div className="space-y-6">
      {/* Header with Add Button */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-heading font-semibold">Activity Management</h3>
          <p className="text-sm text-muted-foreground">Track and manage your achievements</p>
        </div>
        <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Activity
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Activity</DialogTitle>
              <DialogDescription>Add a new achievement, project, or activity to your profile</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Activity Title</Label>
                  <Input
                    id="title"
                    value={newActivity.title}
                    onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
                    placeholder="e.g., Smart Home IoT Project"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Activity Type</Label>
                  <Select
                    value={newActivity.type}
                    onValueChange={(value) => setNewActivity({ ...newActivity, type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {activityTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center gap-2">
                            <type.icon className="w-4 h-4" />
                            {type.value}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newActivity.date}
                    onChange={(e) => setNewActivity({ ...newActivity, date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="impact">Impact Level</Label>
                  <Select
                    value={newActivity.impact}
                    onValueChange={(value) => setNewActivity({ ...newActivity, impact: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Very High">Very High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newActivity.description}
                  onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
                  placeholder="Describe your activity, what you accomplished, and its impact..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Skills Used (comma-separated)</Label>
                <Input
                  id="skills"
                  value={newActivity.skills}
                  onChange={(e) => setNewActivity({ ...newActivity, skills: e.target.value })}
                  placeholder="e.g., React, Node.js, MongoDB, Leadership"
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowAddModal(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddActivity} disabled={!newActivity.title || !newActivity.type}>
                  Add Activity
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters and Search */}
      <Card className="border minimal-shadow">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search activities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-40">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {activityTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Approved">Approved</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activities List */}
      <div className="space-y-4">
        {filteredActivities.length === 0 ? (
          <Card className="border minimal-shadow">
            <CardContent className="p-8 text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-50" />
              <p className="text-muted-foreground">No activities found matching your criteria</p>
            </CardContent>
          </Card>
        ) : (
          filteredActivities.map((activity) => {
            const IconComponent = getTypeIcon(activity.type)
            return (
              <Card key={activity.id} className="border minimal-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-foreground" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-foreground text-lg">{activity.title}</h4>
                            <p className="text-muted-foreground">{activity.description}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={getStatusColor(activity.status)}>{activity.status}</Badge>
                            <Badge variant="outline" className={getImpactColor(activity.impact)}>
                              {activity.impact} Impact
                            </Badge>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(activity.date).toLocaleDateString()}
                          </div>
                          <Badge variant="secondary">{activity.type}</Badge>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {activity.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })
        )}
      </div>

      {/* Activity Statistics */}
      <Card className="border minimal-shadow">
        <CardHeader>
          <CardTitle className="font-heading">Activity Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold text-foreground">{activities.length}</p>
              <p className="text-sm text-muted-foreground">Total Activities</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-2xl font-bold text-green-600">
                {activities.filter((a) => a.status === "Approved").length}
              </p>
              <p className="text-sm text-muted-foreground">Approved</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <p className="text-2xl font-bold text-yellow-600">
                {activities.filter((a) => a.status === "Pending").length}
              </p>
              <p className="text-sm text-muted-foreground">Pending</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">
                {activities.filter((a) => a.impact === "High" || a.impact === "Very High").length}
              </p>
              <p className="text-sm text-muted-foreground">High Impact</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
