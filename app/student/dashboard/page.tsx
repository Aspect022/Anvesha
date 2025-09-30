"use client"

import { useState } from "react"
import { StudentLayout } from "@/components/layout/student-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Target,
  TrendingUp,
  BookOpen,
  Code,
  Trophy,
  FileText,
  Briefcase,
  Plus,
  Activity,
  Map,
  Bot,
  Calendar,
  BarChart3,
  Zap,
} from "lucide-react"
import { studentProfileData, studentStatsData } from "@/lib/mock-data/student-profile"
import { ActivityManagement } from "@/components/student/activity-management"
import { RoadmapsSystem } from "@/components/student/roadmaps-system"
import { DigitalTwin } from "@/components/student/digital-twin"
import { CompetitiveSection } from "@/components/student/competitive"

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const iconMap = {
    BookOpen,
    Code,
    Trophy,
    FileText,
    Briefcase,
  }

  return (
    <StudentLayout userName={studentProfileData.name} userAvatar={studentProfileData.avatar}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-heading font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Track your progress and manage your career journey</p>
          </div>
        </div>

        {/* Top Section - Current Target & Readiness */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left - Current Target */}
          <div className="lg:col-span-2">
            <Card className="border minimal-shadow h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-heading">
                  <Target className="w-5 h-5 text-primary" />
                  Current Target Role
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground">
                        {studentProfileData.careerTarget}
                      </h3>
                      <p className="text-muted-foreground">Your current career goal</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Target className="w-4 h-4 mr-2" />
                      Change Goal
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">Overall Progress</span>
                      <span className="text-muted-foreground">{studentProfileData.readiness}%</span>
                    </div>
                    <Progress value={studentProfileData.readiness} className="h-3" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Skills Match</p>
                      <p className="text-lg font-bold text-green-600">78%</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">Experience Level</p>
                      <p className="text-lg font-bold text-blue-600">Intermediate</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span>You're on track! Focus on building more projects to reach your goal.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Readiness Score */}
          <div className="space-y-6">
            <Card className="border minimal-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-heading">Readiness Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-3">
                  <div className="relative w-20 h-20 mx-auto">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray={`${studentProfileData.readiness}, 100`}
                        className="text-primary"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-muted"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold text-foreground">{studentProfileData.readiness}%</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Career Ready</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border minimal-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-heading flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Activity
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Goal
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {studentStatsData.map((stat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap]
            return (
              <Card key={index} className="border minimal-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-muted">
                      <IconComponent className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Main Dashboard Tabs */}
        <Card className="border minimal-shadow">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Activities
                </TabsTrigger>
                <TabsTrigger value="roadmaps" className="flex items-center gap-2">
                  <Map className="w-4 h-4" />
                  Roadmaps
                </TabsTrigger>
                <TabsTrigger value="digital-twin" className="flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  Digital Twin
                </TabsTrigger>
                <TabsTrigger value="competitive" className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  Competitive
                </TabsTrigger>
                <TabsTrigger value="analytics" className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Analytics
                </TabsTrigger>
              </TabsList>
            </CardHeader>

            <CardContent>
              <TabsContent value="overview" className="space-y-4">
                <ActivityManagement />
              </TabsContent>

              <TabsContent value="roadmaps" className="space-y-4">
                <RoadmapsSystem />
              </TabsContent>

              <TabsContent value="digital-twin" className="space-y-4">
                <DigitalTwin />
              </TabsContent>

              <TabsContent value="competitive" className="space-y-4">
                <CompetitiveSection />
              </TabsContent>

              <TabsContent value="analytics" className="space-y-4">
                <h3 className="text-lg font-heading font-semibold">Performance Analytics</h3>
                <div className="text-center py-12 text-muted-foreground">
                  <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Detailed analytics and insights about your progress</p>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </StudentLayout>
  )
}
