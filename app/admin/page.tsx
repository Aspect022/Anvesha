"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/layout/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import {
  Download,
  Search,
  Filter,
  Users,
  GraduationCap,
  Trophy,
  Briefcase,
  TrendingUp,
  FileText,
  BarChart3,
  PieChartIcon,
  Calendar,
} from "lucide-react"

// Hardcoded admin data
const adminData = {
  name: "Dr. Rajesh Kumar",
  role: "System Administrator",
  avatar: "/admin-profile.png",
}

// Hardcoded analytics data
const overviewStats = [
  {
    label: "Total Students",
    value: "1,247",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    change: "+12%",
  },
  {
    label: "Active Faculty",
    value: "89",
    icon: GraduationCap,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    change: "+3%",
  },
  {
    label: "Achievements",
    value: "3,456",
    icon: Trophy,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    change: "+28%",
  },
  {
    label: "Placements",
    value: "234",
    icon: Briefcase,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
    change: "+15%",
  },
]

// Chart data
const participationData = [
  { month: "Jan", students: 120, achievements: 45, placements: 12 },
  { month: "Feb", students: 135, achievements: 52, placements: 18 },
  { month: "Mar", students: 148, achievements: 67, placements: 25 },
  { month: "Apr", students: 162, achievements: 78, placements: 31 },
  { month: "May", students: 175, achievements: 89, placements: 28 },
  { month: "Jun", students: 189, achievements: 95, placements: 35 },
]

const departmentData = [
  { name: "Computer Science", value: 45, color: "#1E3A8A" },
  { name: "Electronics", value: 25, color: "#06B6D4" },
  { name: "Mechanical", value: 15, color: "#10B981" },
  { name: "Electrical", value: 10, color: "#F59E0B" },
  { name: "Others", value: 5, color: "#DC2626" },
]

const certificationData = [
  { category: "Technical", count: 456, percentage: 65 },
  { category: "Soft Skills", count: 234, percentage: 33 },
  { category: "Industry", count: 123, percentage: 18 },
  { category: "Research", count: 89, percentage: 13 },
]

// Hardcoded student overview data
const studentOverview = [
  {
    usn: "1MS21CS042",
    name: "Arjun Sharma",
    year: "3rd Year",
    department: "CSE",
    cgpa: 8.7,
    achievements: 12,
    status: "Active",
    lastActivity: "2024-01-15",
  },
  {
    usn: "1MS21CS043",
    name: "Sneha Patel",
    year: "3rd Year",
    department: "CSE",
    cgpa: 9.1,
    achievements: 15,
    status: "Active",
    lastActivity: "2024-01-14",
  },
  {
    usn: "1MS21EC001",
    name: "Priya Nair",
    year: "4th Year",
    department: "ECE",
    cgpa: 8.4,
    achievements: 8,
    status: "Placed",
    lastActivity: "2024-01-10",
  },
  {
    usn: "1MS21ME001",
    name: "Karthik Reddy",
    year: "4th Year",
    department: "ME",
    cgpa: 8.8,
    achievements: 6,
    status: "Active",
    lastActivity: "2024-01-12",
  },
]

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  const filteredStudents = studentOverview
    .filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.usn.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesDepartment = departmentFilter === "all" || student.department === departmentFilter
      const matchesStatus = statusFilter === "all" || student.status.toLowerCase() === statusFilter.toLowerCase()
      return matchesSearch && matchesDepartment && matchesStatus
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "cgpa":
          return b.cgpa - a.cgpa
        case "achievements":
          return b.achievements - a.achievements
        case "year":
          return a.year.localeCompare(b.year)
        default:
          return 0
      }
    })

  const handleExport = (type: string) => {
    // Mock export functionality
    alert(`Exporting ${type} report... This would generate and download the report.`)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-100 text-emerald-800"
      case "Placed":
        return "bg-blue-100 text-blue-800"
      case "Inactive":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <AdminLayout role="admin" userName={adminData.name} userAvatar={adminData.avatar}>
      <div className="space-y-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {overviewStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-700">{stat.value}</p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="text-emerald-600">
                      {stat.change}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="analytics" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="exports" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Reports
            </TabsTrigger>
          </TabsList>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            {/* Participation Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Participation Trends
                </CardTitle>
                <CardDescription>Monthly student engagement and achievement trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={participationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="students"
                        stroke="#1E3A8A"
                        strokeWidth={2}
                        name="Active Students"
                      />
                      <Line
                        type="monotone"
                        dataKey="achievements"
                        stroke="#06B6D4"
                        strokeWidth={2}
                        name="Achievements"
                      />
                      <Line type="monotone" dataKey="placements" stroke="#10B981" strokeWidth={2} name="Placements" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Department Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChartIcon className="w-5 h-5 text-emerald-600" />
                    Department Distribution
                  </CardTitle>
                  <CardDescription>Student participation by department</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={departmentData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {departmentData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Certification Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-600" />
                    Certification Categories
                  </CardTitle>
                  <CardDescription>Achievement distribution by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {certificationData.map((cert, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-slate-700">{cert.category}</span>
                          <span className="text-sm text-gray-600">{cert.count} achievements</span>
                        </div>
                        <Progress value={cert.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievement Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-cyan-600" />
                  Achievement Breakdown
                </CardTitle>
                <CardDescription>Monthly achievement submissions by type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={participationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="achievements" fill="#06B6D4" name="Total Achievements" />
                      <Bar dataKey="placements" fill="#10B981" name="Placements" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      Student Overview
                    </CardTitle>
                    <CardDescription>Comprehensive view of all students with filtering and sorting</CardDescription>
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
                    <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Dept.</SelectItem>
                        <SelectItem value="CSE">CSE</SelectItem>
                        <SelectItem value="ECE">ECE</SelectItem>
                        <SelectItem value="ME">ME</SelectItem>
                        <SelectItem value="EEE">EEE</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="placed">Placed</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-32">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="name">Name</SelectItem>
                        <SelectItem value="cgpa">CGPA</SelectItem>
                        <SelectItem value="achievements">Achievements</SelectItem>
                        <SelectItem value="year">Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {filteredStudents.map((student) => (
                    <div key={student.usn} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div>
                            <h4 className="font-semibold text-slate-700">{student.name}</h4>
                            <p className="text-sm text-gray-600">
                              {student.usn} • {student.year} • {student.department}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <p className="text-lg font-bold text-blue-600">{student.cgpa}</p>
                            <p className="text-xs text-gray-500">CGPA</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-amber-600">{student.achievements}</p>
                            <p className="text-xs text-gray-500">Achievements</p>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-600">
                              {new Date(student.lastActivity).toLocaleDateString()}
                            </p>
                            <p className="text-xs text-gray-500">Last Activity</p>
                          </div>
                          <Badge className={getStatusColor(student.status)}>{student.status}</Badge>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="exports" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* NAAC Reports */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    NAAC Reports
                  </CardTitle>
                  <CardDescription>National Assessment and Accreditation Council reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => handleExport("NAAC Student Achievement")}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Student Achievement Report
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => handleExport("NAAC Faculty Performance")}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Faculty Performance Report
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => handleExport("NAAC Institutional")}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Institutional Data Report
                  </Button>
                </CardContent>
              </Card>

              {/* NIRF Reports */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    NIRF Reports
                  </CardTitle>
                  <CardDescription>National Institutional Ranking Framework reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => handleExport("NIRF Teaching Learning")}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Teaching & Learning Report
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => handleExport("NIRF Research")}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Research & Innovation Report
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => handleExport("NIRF Placement")}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Placement & Outcomes Report
                  </Button>
                </CardContent>
              </Card>

              {/* AICTE Reports */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-600" />
                    AICTE Reports
                  </CardTitle>
                  <CardDescription>All India Council for Technical Education reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => handleExport("AICTE Annual")}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Annual Progress Report
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => handleExport("AICTE Student Data")}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Student Data Report
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => handleExport("AICTE Infrastructure")}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Infrastructure Report
                  </Button>
                </CardContent>
              </Card>

              {/* Custom Reports */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-cyan-600" />
                    Custom Reports
                  </CardTitle>
                  <CardDescription>Generate custom analytics and data exports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                      onClick={() => handleExport("Department Analytics")}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Department-wise Analytics
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                      onClick={() => handleExport("Placement Analytics")}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Placement Analytics Report
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                      onClick={() => handleExport("Achievement Trends")}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Achievement Trends Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bulk Export Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  Scheduled Reports
                </CardTitle>
                <CardDescription>Set up automated report generation and delivery</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Monthly Reports
                  </Button>
                  <Button variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Configure Auto-Export
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Bulk Data Export
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}
