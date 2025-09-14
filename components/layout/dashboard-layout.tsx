"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bell, Home, User, Settings, LogOut, GraduationCap, Users, Building, Shield } from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
  role: "student" | "faculty" | "placement" | "admin"
  userName: string
  userAvatar?: string
}

export function DashboardLayout({ children, role, userName, userAvatar }: DashboardLayoutProps) {
  const [notifications] = useState(2)

  const roleConfig = {
    student: {
      title: "Student Dashboard",
      icon: GraduationCap,
      color: "bg-primary",
      navItems: [
        { icon: Home, label: "Dashboard", href: "/student" },
        { icon: User, label: "Profile", href: "/student/profile" },
        { icon: Settings, label: "Settings", href: "/student/settings" },
      ],
    },
    faculty: {
      title: "Faculty Dashboard",
      icon: Users,
      color: "bg-accent",
      navItems: [
        { icon: Home, label: "Dashboard", href: "/faculty" },
        { icon: User, label: "Students", href: "/faculty/students" },
        { icon: Settings, label: "Settings", href: "/faculty/settings" },
      ],
    },
    placement: {
      title: "Placement Cell",
      icon: Building,
      color: "bg-green-600",
      navItems: [
        { icon: Home, label: "Dashboard", href: "/placement" },
        { icon: Users, label: "Students", href: "/placement/students" },
        { icon: Settings, label: "Settings", href: "/placement/settings" },
      ],
    },
    admin: {
      title: "Admin Dashboard",
      icon: Shield,
      color: "bg-yellow-600",
      navItems: [
        { icon: Home, label: "Dashboard", href: "/admin" },
        { icon: Users, label: "Users", href: "/admin/users" },
        { icon: Settings, label: "Settings", href: "/admin/settings" },
      ],
    },
  }

  const config = roleConfig[role]
  const RoleIcon = config.icon

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border px-4 py-3 minimal-shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 ${config.color} rounded-xl flex items-center justify-center`}>
              <RoleIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-heading font-semibold text-foreground">{config.title}</h1>
              <p className="text-sm text-muted-foreground">Welcome back, {userName}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-red-600 text-white text-xs">
                  {notifications}
                </Badge>
              )}
            </Button>

            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src={userAvatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-primary text-white text-sm">
                  {userName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="sm">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4">{children}</main>
    </div>
  )
}
