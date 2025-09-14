export interface PlacementOpportunity {
  id: number
  title: string
  company: string
  type: string
  location: string
  package: string
  eligibility: string
  deadline: string
  applicants: number
  status: string
}

export interface PlacementReadyStudent {
  usn: string
  name: string
  year: string
  department: string
  cgpa: number
  skills: string[]
  projects: number
  hackathons: number
  internships: number
  avatar: string
  targetRole: string
  readiness: number
  status: string
}

export const mockPlacementOpportunities: PlacementOpportunity[] = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Google",
    type: "Internship",
    location: "Bangalore",
    package: "₹80,000/month",
    eligibility: "CGPA ≥ 8.0, CSE/IT",
    deadline: "2024-04-15",
    applicants: 45,
    status: "Active",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Microsoft",
    type: "Full Time",
    location: "Hyderabad",
    package: "₹18 LPA",
    eligibility: "CGPA ≥ 7.5, All branches",
    deadline: "2024-04-20",
    applicants: 67,
    status: "Active",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Amazon",
    type: "Full Time",
    location: "Chennai",
    package: "₹22 LPA",
    eligibility: "CGPA ≥ 8.5, CSE/ECE",
    deadline: "2024-04-25",
    applicants: 23,
    status: "Active",
  },
]

export const mockPlacementReadyStudents: PlacementReadyStudent[] = [
  {
    usn: "ENG23AM0175",
    name: "Arjun Sharma",
    year: "3rd Year",
    department: "CSE",
    cgpa: 8.7,
    skills: ["React", "Node.js", "Python", "Machine Learning"],
    projects: 12,
    hackathons: 5,
    internships: 1,
    avatar: "/student-profile.png",
    targetRole: "Full Stack Developer",
    readiness: 85,
    status: "Available",
  },
  {
    usn: "ENG23CS0061",
    name: "Sneha Patel",
    year: "3rd Year",
    department: "CSE",
    cgpa: 9.1,
    skills: ["Flutter", "Firebase", "UI/UX", "Dart"],
    projects: 8,
    hackathons: 7,
    internships: 2,
    avatar: "/student2-profile.png",
    targetRole: "Mobile App Developer",
    readiness: 92,
    status: "Available",
  },
  {
    usn: "ENG23CT0042",
    name: "Rahul Kumar",
    year: "3rd Year",
    department: "CSE",
    cgpa: 8.9,
    skills: ["Python", "TensorFlow", "Data Science", "ML"],
    projects: 10,
    hackathons: 3,
    internships: 1,
    avatar: "/student3-profile.png",
    targetRole: "Data Scientist",
    readiness: 78,
    status: "Interviewing",
  },
  {
    usn: "ENG23CS0265",
    name: "Ananya Singh",
    year: "3rd Year",
    department: "CSE",
    cgpa: 8.5,
    skills: ["Java", "Spring Boot", "AWS", "Microservices"],
    projects: 9,
    hackathons: 4,
    internships: 1,
    avatar: "/student4-profile.png",
    targetRole: "Backend Developer",
    readiness: 80,
    status: "Available",
  },
  {
    usn: "ENG23CS0265",
    name: "Vikram Joshi",
    year: "3rd Year",
    department: "CSE",
    cgpa: 9.3,
    skills: ["React", "TypeScript", "GraphQL", "Next.js"],
    projects: 15,
    hackathons: 8,
    internships: 2,
    avatar: "/student5-profile.png",
    targetRole: "Frontend Developer",
    readiness: 95,
    status: "Placed",
  },
]
