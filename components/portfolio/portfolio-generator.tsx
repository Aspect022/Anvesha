"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ExternalLink, Share2, Download, Eye } from "lucide-react"

interface PortfolioGeneratorProps {
  studentData: any
}

export function PortfolioGenerator({ studentData }: PortfolioGeneratorProps) {
  const portfolioUrl = `/portfolio/${studentData.usn}`

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${studentData.name}'s Portfolio`,
        text: `Check out ${studentData.name}'s academic portfolio`,
        url: window.location.origin + portfolioUrl,
      })
    } else {
      navigator.clipboard.writeText(window.location.origin + portfolioUrl)
      alert("Portfolio link copied to clipboard!")
    }
  }

  const handlePreview = () => {
    window.open(portfolioUrl, "_blank")
  }

  const handleDownload = () => {
    // Mock PDF generation
    alert("PDF generation would be implemented here")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src={studentData.avatar || "/placeholder.svg"} />
            <AvatarFallback>
              {studentData.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          Auto-Generated Portfolio
        </CardTitle>
        <CardDescription>Your portfolio has been automatically generated based on your achievements</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-slate-700">{studentData.name}</h4>
            <Badge variant="secondary">Live</Badge>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            {studentData.usn} • {studentData.year} • {studentData.department}
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <ExternalLink className="w-4 h-4" />
            <span className="font-mono text-xs">{window.location.origin + portfolioUrl}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={handlePreview} className="flex-1">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline" onClick={handleShare}>
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" onClick={handleDownload}>
            <Download className="w-4 h-4 mr-2" />
            PDF
          </Button>
        </div>

        <div className="text-xs text-gray-500">
          <p>✓ Automatically updated when you add new achievements</p>
          <p>✓ Mobile-responsive design</p>
          <p>✓ SEO optimized for better visibility</p>
        </div>
      </CardContent>
    </Card>
  )
}
