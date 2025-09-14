"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Calendar, FileText } from "lucide-react"

interface UploadAchievementModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UploadAchievementModal({ open, onOpenChange }: UploadAchievementModalProps) {
  const [formData, setFormData] = useState({
    activityType: "",
    title: "",
    date: "",
    description: "",
    proof: null as File | null,
  })

  const activityTypes = [
    "Project",
    "Hackathon",
    "Research Paper",
    "Internship",
    "Certification",
    "Competition",
    "Workshop",
    "Conference",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (hardcoded for demo)
    console.log("Achievement submitted:", formData)
    onOpenChange(false)
    // Reset form
    setFormData({
      activityType: "",
      title: "",
      date: "",
      description: "",
      proof: null,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, proof: file }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-blue-600" />
            Upload Achievement
          </DialogTitle>
          <DialogDescription>Submit your achievement for faculty validation and portfolio inclusion.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="activityType">Activity Type</Label>
            <Select
              value={formData.activityType}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, activityType: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select activity type" />
              </SelectTrigger>
              <SelectContent>
                {activityTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
              placeholder="Enter achievement title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <div className="relative">
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                required
              />
              <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="Describe your achievement..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="proof">Proof Document</Label>
            <div className="flex items-center gap-2">
              <Input
                id="proof"
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                className="file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700"
              />
              <FileText className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-xs text-gray-500">Upload certificates, screenshots, or documents as proof</p>
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-blue-800 hover:bg-blue-900">
              Submit Achievement
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
