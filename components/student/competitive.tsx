"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Medal } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts"
import { mockTalents, departments } from "@/lib/mock-data/talents"

type ScoredStudent = {
  id: string
  name: string
  department: string
  profileImage: string
  score: number
}

function computeScore(opts: {
  cgpa: number
  projects: number
  internships: number
  hackathons: number
  research: number
  baseBonus: number
}) {
  // Weighted composite scoring tuned for leaderboard clarity
  // CGPA carries most weight, then internships/projects, then hackathons/research
  const cgpaPart = opts.cgpa * 100 // 8.7 => 870, keeps spread intuitive
  const projectsPart = opts.projects * 20
  const internshipsPart = opts.internships * 50
  const hackathonsPart = opts.hackathons * 30
  const researchPart = opts.research * 40
  return Math.round(cgpaPart + projectsPart + internshipsPart + hackathonsPart + researchPart + opts.baseBonus)
}

export function CompetitiveSection() {
  const [dept, setDept] = useState<string>("all")
  const [hackathonBonus, setHackathonBonus] = useState<boolean>(true)

  const scored = useMemo<ScoredStudent[]>(() => {
    const baseBonus = hackathonBonus ? 50 : 0 // global +50 for Hackathon Week
    return mockTalents.map((t) => ({
      id: t.id,
      name: t.name,
      department: t.department,
      profileImage: t.profileImage,
      score: computeScore({
        cgpa: t.cgpa,
        projects: t.projects,
        internships: t.internships,
        hackathons: t.hackathons,
        research: t.research,
        baseBonus,
      }),
    }))
  }, [hackathonBonus])

  const filtered = useMemo(() => {
    return dept === "all" ? scored : scored.filter((s) => s.department === dept)
  }, [dept, scored])

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => b.score - a.score)
  }, [filtered])

  const deptAgg = useMemo(() => {
    // Aggregate department-wise counts and average score
    const map = new Map<string, { total: number; count: number }>()
    for (const s of scored) {
      const prev = map.get(s.department) || { total: 0, count: 0 }
      prev.total += s.score
      prev.count += 1
      map.set(s.department, prev)
    }
    return Array.from(map.entries()).map(([department, { total, count }]) => ({
      department,
      avgScore: Math.round(total / count),
      participants: count,
    }))
  }, [scored])

  const chartConfig = {
    avg: { label: "Avg Score", color: "hsl(var(--chart-1))" },
    participants: { label: "Participants", color: "hsl(var(--chart-2))" },
  }

  const top3 = sorted.slice(0, 3).map((s) => s.id)

  return (
    <div className="space-y-6">
      {/* Controls and Bonus banner */}
      <Card className="border minimal-shadow">
        <CardHeader className="flex flex-col gap-3">
          <CardTitle className="font-heading">Competitive Leaderboard</CardTitle>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
            <div className="flex items-center gap-3">
              <Label htmlFor="dept" className="text-sm text-muted-foreground">
                Filter by department
              </Label>
              <Select value={dept} onValueChange={setDept}>
                <SelectTrigger id="dept" className="w-56">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-3">
              <Switch id="bonus" checked={hackathonBonus} onCheckedChange={setHackathonBonus} />
              <Label htmlFor="bonus" className="text-sm">
                Apply Hackathon Week bonus <span className="font-semibold">+50</span> to all students
              </Label>
              {hackathonBonus && (
                <Badge variant="secondary" className="ml-1">
                  Bonus Active
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Leaderboard */}
      <Card className="border minimal-shadow">
        <CardHeader>
          <CardTitle className="font-heading flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            Leaderboard {dept !== "all" ? `— ${dept}` : ""}
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-14">Rank</TableHead>
                <TableHead>Student</TableHead>
                <TableHead className="hidden md:table-cell">Department</TableHead>
                <TableHead className="text-right">Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sorted.slice(0, 10).map((s, i) => (
                <TableRow key={s.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-mono">{i + 1}</span>
                      {i < 3 ? (
                        <Medal
                          className={`w-4 h-4 ${i === 0 ? "text-yellow-500" : i === 1 ? "text-slate-400" : "text-amber-700"}`}
                          aria-hidden="true"
                        />
                      ) : null}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={s.profileImage || "/placeholder.svg"} alt={`${s.name} profile`} />
                        <AvatarFallback>{s.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-foreground font-medium">{s.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {top3.includes(s.id) ? "Top performer" : "Participant"}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{s.department}</TableCell>
                  <TableCell className="text-right font-mono">{s.score.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Department Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border minimal-shadow">
          <CardHeader>
            <CardTitle className="font-heading">Average Score by Department</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={deptAgg}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="avgScore" fill="var(--color-avg)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="border minimal-shadow">
          <CardHeader>
            <CardTitle className="font-heading">Participants by Department</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={deptAgg}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis />
                  {/* Using Recharts Tooltip directly here for variety; both are supported */}
                  <RechartsTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="participants" fill="var(--color-participants)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
