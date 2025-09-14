"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Building, MapPin, DollarSign, Calendar, Users } from "lucide-react"

interface PostOpportunityModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PostOpportunityModal({ open, onOpenChange }: PostOpportunityModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    type: "",
    location: "",
    package: "",
    description: "",
    eligibility: "",
    deadline: "",
    requirements: "",
    benefits: "",
  })

  const opportunityTypes = ["Full Time", "Internship", "Part Time", "Contract", "Remote"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (hardcoded for demo)
    console.log("Opportunity posted:", formData)
    onOpenChange(false)
    // Reset form
    setFormData({
      title: "",
      company: "",
      type: "",
      location: "",
      package: "",
      description: "",
      eligibility: "",
      deadline: "",
      requirements: "",
      benefits: "",
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5 text-emerald-600" />
            Post New Opportunity
          </DialogTitle>
          <DialogDescription>Create a new placement opportunity for students to apply.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                placeholder="e.g., Software Engineer"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <div className="relative">
                <Building className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                  placeholder="e.g., Google"
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type">Opportunity Type</Label>
              <Select
                value={formData.type}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, type: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {opportunityTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                  placeholder="e.g., Bangalore"
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="package">Package/Salary</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="package"
                  value={formData.package}
                  onChange={(e) => setFormData((prev) => ({ ...prev, package: e.target.value }))}
                  placeholder="e.g., ₹12 LPA or ₹50,000/month"
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="deadline">Application Deadline</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => setFormData((prev) => ({ ...prev, deadline: e.target.value }))}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Job Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="Describe the role, responsibilities, and what the candidate will be working on..."
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="eligibility">Eligibility Criteria</Label>
            <div className="relative">
              <Users className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                id="eligibility"
                value={formData.eligibility}
                onChange={(e) => setFormData((prev) => ({ ...prev, eligibility: e.target.value }))}
                placeholder="e.g., CGPA ≥ 8.0, CSE/IT branches"
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Technical Requirements</Label>
            <Textarea
              id="requirements"
              value={formData.requirements}
              onChange={(e) => setFormData((prev) => ({ ...prev, requirements: e.target.value }))}
              placeholder="List required skills, technologies, experience, etc..."
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="benefits">Benefits & Perks</Label>
            <Textarea
              id="benefits"
              value={formData.benefits}
              onChange={(e) => setFormData((prev) => ({ ...prev, benefits: e.target.value }))}
              placeholder="Health insurance, flexible hours, learning opportunities, etc..."
              rows={2}
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
              Post Opportunity
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
