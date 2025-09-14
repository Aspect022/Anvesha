export const studentProfileData = {
  // Personal Information
  name: "Arjun Sharma",
  usn: "1MS21CS042",
  email: "arjun.sharma@college.edu",
  phone: "+91 9876543210",
  year: "3rd Year",
  department: "Computer Science & Engineering",
  college: "MS Ramaiah Institute of Technology",
  avatar: "/student-profile.png",
  cgpa: 8.7,
  careerTarget: "Full Stack Developer",
  readiness: 65,

  // Social Profiles
  socialProfiles: {
    github: "https://github.com/arjunsharma",
    linkedin: "https://linkedin.com/in/arjunsharma",
    portfolio: "https://arjunsharma.dev",
    leetcode: "https://leetcode.com/arjunsharma",
    codechef: "https://codechef.com/users/arjun_sharma",
  },

  // Resume
  resume: {
    filename: "Arjun_Sharma_Resume_2024.pdf",
    uploadDate: "2024-01-15",
    url: "/resumes/arjun-sharma-resume.pdf",
  },

  // Skills
  skills: {
    technical: ["JavaScript", "React", "Node.js", "Python", "Java", "MongoDB", "PostgreSQL"],
    soft: ["Leadership", "Communication", "Problem Solving", "Team Work"],
  },

  // Current Goals
  currentGoals: [
    "Complete Full Stack Development Certification",
    "Build 3 more projects for portfolio",
    "Contribute to open source projects",
    "Improve DSA skills for placements",
  ],
}

export const studentStatsData = [
  { label: "CGPA", value: "8.7", icon: "BookOpen", color: "text-primary" },
  { label: "Projects", value: "12", icon: "Code", color: "text-accent" },
  { label: "Hackathons", value: "5", icon: "Trophy", color: "text-green-600" },
  { label: "Research Papers", value: "2", icon: "FileText", color: "text-yellow-600" },
  { label: "Internships", value: "1", icon: "Briefcase", color: "text-blue-600" },
]

export const studentActivities = [
  {
    id: 1,
    title: "Smart Home IoT Project",
    type: "Project",
    date: "2024-01-15",
    status: "Approved",
    description: "Developed a complete IoT solution for home automation using Arduino and React",
    skills: ["IoT", "Arduino", "React", "Node.js"],
    impact: "High",
  },
  {
    id: 2,
    title: "HackBangalore 2024",
    type: "Hackathon",
    date: "2024-02-20",
    status: "Pending",
    description: "Built an AI-powered expense tracker app in 48 hours",
    skills: ["React Native", "Python", "Machine Learning"],
    impact: "Medium",
  },
  {
    id: 3,
    title: "Machine Learning Research Paper",
    type: "Research",
    date: "2024-03-10",
    status: "Rejected",
    description: "Published paper on neural network optimization techniques",
    skills: ["Python", "TensorFlow", "Research"],
    impact: "High",
  },
  {
    id: 4,
    title: "Google Summer of Code",
    type: "Internship",
    date: "2024-03-25",
    status: "Approved",
    description: "Contributing to open source projects under Google mentorship",
    skills: ["Open Source", "Python", "Git"],
    impact: "Very High",
  },
]
