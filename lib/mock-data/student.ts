export interface StudentData {
  name: string
  usn: string
  year: string
  department: string
  avatar: string
  cgpa: number
  careerTarget: string
  readiness: number
}

export interface StatData {
  label: string
  value: string
  icon: any
  color: string
}

export interface Activity {
  id: number
  title: string
  type: string
  date: string
  status: string
  description: string
}

export const mockStudentData: StudentData = {
  name: "Arjun Sharma",
  usn: "1MS21CS042",
  year: "3rd Year",
  department: "Computer Science & Engineering",
  avatar: "/student-profile.png",
  cgpa: 8.7,
  careerTarget: "Full Stack Developer",
  readiness: 65,
}

export const mockActivities: Activity[] = [
  {
    id: 1,
    title: "Smart Home IoT Project",
    type: "Project",
    date: "2024-01-15",
    status: "Approved",
    description: "Developed a complete IoT solution for home automation",
  },
  {
    id: 2,
    title: "HackBangalore 2024",
    type: "Hackathon",
    date: "2024-02-20",
    status: "Pending",
    description: "Built an AI-powered expense tracker app",
  },
  {
    id: 3,
    title: "Machine Learning Research Paper",
    type: "Research",
    date: "2024-03-10",
    status: "Rejected",
    description: "Published paper on neural network optimization",
  },
  {
    id: 4,
    title: "Google Summer of Code",
    type: "Internship",
    date: "2024-03-25",
    status: "Approved",
    description: "Contributing to open source projects",
  },
]
