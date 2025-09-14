export interface ValidationSubmission {
  id: number
  studentName: string
  studentUSN: string
  studentAvatar: string
  title: string
  type: string
  submittedDate: string
  description: string
  proofLink: string
  status: string
}

export interface StudentProfile {
  usn: string
  name: string
  year: string
  cgpa: number
  projects: number
  hackathons: number
  research: number
  internships: number
  avatar: string
}

export const mockValidationQueue: ValidationSubmission[] = [
  {
    id: 1,
    studentName: "Arjun Sharma",
    studentUSN: "1MS21CS042",
    studentAvatar: "/student-profile.png",
    title: "Smart Home IoT Project",
    type: "Project",
    submittedDate: "2024-01-15",
    description: "Developed a complete IoT solution for home automation using React and Arduino",
    proofLink: "/proof/iot-project.pdf",
    status: "pending",
  },
  {
    id: 2,
    studentName: "Sneha Patel",
    studentUSN: "1MS21CS043",
    studentAvatar: "/student2-profile.png",
    title: "HackBangalore 2024",
    type: "Hackathon",
    submittedDate: "2024-02-20",
    description: "Built an AI-powered expense tracker app and won first place",
    proofLink: "/proof/hackathon-cert.pdf",
    status: "pending",
  },
  {
    id: 3,
    studentName: "Rahul Kumar",
    studentUSN: "1MS21CS044",
    studentAvatar: "/student3-profile.png",
    title: "Machine Learning Research Paper",
    type: "Research",
    submittedDate: "2024-03-10",
    description: "Published paper on neural network optimization in IEEE conference",
    proofLink: "/proof/research-paper.pdf",
    status: "pending",
  },
  {
    id: 4,
    studentName: "Ananya Singh",
    studentUSN: "1MS21CS045",
    studentAvatar: "/student4-profile.png",
    title: "Google Summer of Code",
    type: "Internship",
    submittedDate: "2024-03-25",
    description: "Contributing to TensorFlow.js open source project",
    proofLink: "/proof/gsoc-acceptance.pdf",
    status: "pending",
  },
]

export const mockStudentsList: StudentProfile[] = [
  {
    usn: "1MS21CS042",
    name: "Arjun Sharma",
    year: "3rd Year",
    cgpa: 8.7,
    projects: 12,
    hackathons: 5,
    research: 2,
    internships: 1,
    avatar: "/student-profile.png",
  },
  {
    usn: "1MS21CS043",
    name: "Sneha Patel",
    year: "3rd Year",
    cgpa: 9.1,
    projects: 8,
    hackathons: 7,
    research: 1,
    internships: 2,
    avatar: "/student2-profile.png",
  },
  {
    usn: "1MS21CS044",
    name: "Rahul Kumar",
    year: "3rd Year",
    cgpa: 8.9,
    projects: 10,
    hackathons: 3,
    research: 4,
    internships: 1,
    avatar: "/student3-profile.png",
  },
]
