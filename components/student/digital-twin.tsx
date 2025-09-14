"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bot,
  Send,
  Target,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Lightbulb,
  MessageSquare,
  Settings,
  RefreshCw,
  Zap,
} from "lucide-react"

interface ChatMessage {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
  suggestions?: string[]
}

interface Insight {
  id: string
  type: "strength" | "weakness" | "opportunity" | "recommendation"
  title: string
  description: string
  priority: "high" | "medium" | "low"
  actionable: boolean
}

export function DigitalTwin() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "ai",
      content:
        "Hello Arjun! I'm your AI career guide. I've analyzed your profile and current progress toward becoming a Full Stack Developer. How can I help you today?",
      timestamp: new Date(),
      suggestions: [
        "Analyze my current progress",
        "Suggest next steps",
        "Help me change my career goal",
        "Review my skill gaps",
      ],
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [currentGoal, setCurrentGoal] = useState("Full Stack Developer")
  const [showGoalChange, setShowGoalChange] = useState(false)

  const insights: Insight[] = [
    {
      id: "1",
      type: "strength",
      title: "Strong Frontend Foundation",
      description: "You have excellent React and JavaScript skills with 12 completed projects",
      priority: "high",
      actionable: false,
    },
    {
      id: "2",
      type: "weakness",
      title: "Backend Experience Gap",
      description: "Limited Node.js and database experience compared to your frontend skills",
      priority: "high",
      actionable: true,
    },
    {
      id: "3",
      type: "opportunity",
      title: "Open Source Contribution",
      description: "Your GSoC experience shows potential for more open source contributions",
      priority: "medium",
      actionable: true,
    },
    {
      id: "4",
      type: "recommendation",
      title: "Focus on System Design",
      description: "Start learning system design concepts to prepare for senior roles",
      priority: "medium",
      actionable: true,
    },
  ]

  const careerOptions = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "DevOps Engineer",
    "Data Scientist",
    "Mobile Developer",
    "UI/UX Designer",
    "Product Manager",
  ]

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: newMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: getAIResponse(newMessage),
        timestamp: new Date(),
        suggestions: ["Tell me more about this", "What should I do next?", "Show me resources", "Update my roadmap"],
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 2000)
  }

  const getAIResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("progress") || lowerMessage.includes("analyze")) {
      return "Based on your current profile, you're 65% ready for a Full Stack Developer role. Your frontend skills are excellent, but I recommend focusing on backend development and database management. You're particularly strong in React and JavaScript, which is great! Your next priority should be completing the Node.js and database sections in your roadmap."
    }

    if (lowerMessage.includes("next steps") || lowerMessage.includes("what should")) {
      return "Here are your immediate next steps: 1) Complete the Node.js & Express backend module in your roadmap, 2) Build a full-stack project combining your React skills with a backend API, 3) Learn database design with MongoDB or PostgreSQL. I'd also suggest contributing to more open source projects to strengthen your portfolio."
    }

    if (lowerMessage.includes("skill gap") || lowerMessage.includes("weakness")) {
      return "Your main skill gaps are in backend development and system design. While your frontend skills are strong, you need more experience with server-side technologies, databases, and API design. I recommend spending the next 4-6 weeks focusing on Node.js, Express, and database management before moving to more advanced topics."
    }

    return "I understand you're looking for guidance on your career journey. Based on your profile and goals, I can help you identify the best path forward. Would you like me to analyze a specific area of your development or suggest personalized action items?"
  }

  const handleSuggestionClick = (suggestion: string) => {
    setNewMessage(suggestion)
  }

  const getInsightIcon = (type: Insight["type"]) => {
    switch (type) {
      case "strength":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "weakness":
        return <AlertCircle className="w-5 h-5 text-red-600" />
      case "opportunity":
        return <TrendingUp className="w-5 h-5 text-blue-600" />
      case "recommendation":
        return <Lightbulb className="w-5 h-5 text-yellow-600" />
    }
  }

  const getInsightColor = (type: Insight["type"]) => {
    switch (type) {
      case "strength":
        return "bg-green-100 text-green-800"
      case "weakness":
        return "bg-red-100 text-red-800"
      case "opportunity":
        return "bg-blue-100 text-blue-800"
      case "recommendation":
        return "bg-yellow-100 text-yellow-800"
    }
  }

  const handleGoalChange = (newGoal: string) => {
    setCurrentGoal(newGoal)
    setShowGoalChange(false)

    // Add AI message about goal change
    const aiMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "ai",
      content: `Great choice! I've updated your career target to ${newGoal}. Let me analyze what this means for your learning path and update your roadmap accordingly. This change will affect your skill priorities and timeline.`,
      timestamp: new Date(),
      suggestions: [
        "Show me the new roadmap",
        "What skills do I need?",
        "How does this change my timeline?",
        "Compare with my current skills",
      ],
    }
    setMessages((prev) => [...prev, aiMessage])
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-heading font-semibold">AI Career Guide</h3>
          <p className="text-sm text-muted-foreground">Your personalized digital twin for career guidance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setShowGoalChange(!showGoalChange)}>
            <Target className="w-4 h-4 mr-2" />
            Change Goal
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Goal Change Section */}
      {showGoalChange && (
        <Card className="border minimal-shadow">
          <CardHeader>
            <CardTitle className="font-heading">Change Career Goal</CardTitle>
            <CardDescription>Select a new career target to update your learning path</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Select value={currentGoal} onValueChange={handleGoalChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {careerOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Changing your goal will update your roadmap, skill priorities, and readiness score.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left - AI Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="border minimal-shadow h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-heading">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                AI Career Assistant
              </CardTitle>
              <CardDescription>Chat with your personalized career guide</CardDescription>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col">
              {/* Messages */}
              <div className="flex-1 space-y-4 overflow-y-auto mb-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] space-y-2 ${message.type === "user" ? "order-2" : "order-1"}`}>
                      <div
                        className={`p-3 rounded-lg ${
                          message.type === "user"
                            ? "bg-primary text-primary-foreground ml-auto"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>

                      {message.suggestions && message.type === "ai" && (
                        <div className="flex flex-wrap gap-2">
                          {message.suggestions.map((suggestion, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              className="text-xs bg-transparent"
                              onClick={() => handleSuggestionClick(suggestion)}
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>

                    <Avatar className={`w-8 h-8 ${message.type === "user" ? "order-1 ml-2" : "order-2 mr-2"}`}>
                      {message.type === "user" ? (
                        <AvatarImage src="/student-profile.png" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <AvatarFallback>{message.type === "user" ? "AS" : "AI"}</AvatarFallback>
                    </Avatar>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-center space-x-2 bg-muted p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground">AI is thinking...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Ask me about your career path, skills, or goals..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} disabled={!newMessage.trim() || isTyping}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right - Insights & Analytics */}
        <div className="space-y-6">
          {/* Current Goal Status */}
          <Card className="border minimal-shadow">
            <CardHeader>
              <CardTitle className="text-lg font-heading">Current Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{currentGoal}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Readiness</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>Next milestone: Complete backend development</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="border minimal-shadow">
            <CardHeader>
              <CardTitle className="text-lg font-heading flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {insights.slice(0, 3).map((insight) => (
                <div key={insight.id} className="p-3 border border-border rounded-lg space-y-2">
                  <div className="flex items-start gap-2">
                    {getInsightIcon(insight.type)}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-foreground text-sm">{insight.title}</h4>
                        <Badge className={`text-xs ${getInsightColor(insight.type)}`}>{insight.type}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{insight.description}</p>
                    </div>
                  </div>
                  {insight.actionable && (
                    <Button variant="outline" size="sm" className="w-full text-xs bg-transparent">
                      Take Action
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border minimal-shadow">
            <CardHeader>
              <CardTitle className="text-lg font-heading">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Analysis
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                <MessageSquare className="w-4 h-4 mr-2" />
                Get Recommendations
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                <Target className="w-4 h-4 mr-2" />
                Update Goals
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
