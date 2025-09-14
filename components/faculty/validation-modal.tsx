"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle, XCircle, FileText } from "lucide-react"

interface ValidationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  submission: any
}

export function ValidationModal({ open, onOpenChange, submission }: ValidationModalProps) {
  const [feedback, setFeedback] = useState("")

  if (!submission) return null

  const handleSubmit = () => {
    // Handle validation submission (hardcoded for demo)
    console.log(`${submission.action} submission:`, {
      submissionId: submission.id,
      feedback,
      action: submission.action,
    })
    onOpenChange(false)
    setFeedback("")
  }

  const isApproval = submission.action === "approve"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {isApproval ? (
              <CheckCircle className="w-5 h-5 text-emerald-600" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600" />
            )}
            {isApproval ? "Approve" : "Reject"} Submission
          </DialogTitle>
          <DialogDescription>Review the submission details and provide feedback to the student.</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Submission Details */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={submission.studentAvatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {submission.studentName
                    ?.split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold text-slate-700">{submission.title}</h4>
                <p className="text-sm text-gray-600">
                  {submission.studentName} • {submission.studentUSN}
                </p>
              </div>
              <Badge variant="secondary">{submission.type}</Badge>
            </div>
            <p className="text-gray-700 mb-3">{submission.description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>Submitted: {new Date(submission.submittedDate).toLocaleDateString()}</span>
              <Button variant="ghost" size="sm" asChild>
                <a href={submission.proofLink} target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-1" />
                  View Proof Document
                </a>
              </Button>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="space-y-2">
            <Label htmlFor="feedback">
              {isApproval ? "Approval Comments (Optional)" : "Rejection Reason (Required)"}
            </Label>
            <Textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder={
                isApproval
                  ? "Add any comments or congratulations for the student..."
                  : "Please explain why this submission is being rejected..."
              }
              rows={4}
              required={!isApproval}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className={`flex-1 ${isApproval ? "bg-emerald-600 hover:bg-emerald-700" : "bg-red-600 hover:bg-red-700"}`}
              disabled={!isApproval && !feedback.trim()}
            >
              {isApproval ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Approve Submission
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 mr-2" />
                  Reject Submission
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
