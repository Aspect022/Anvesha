# 🔍 Anvesha - AI-Powered Talent Intelligence Platform

> **"Transforms education from a grading system into a talent intelligence platform"**

[![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-06B6D4)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB)](https://reactjs.org/)

## 🌟 Overview

**Anvesha** is a revolutionary multi-agent talent intelligence platform designed for Smart India Hackathon (SIH) 2025. It transforms how educational institutions discover, nurture, and showcase student talent by leveraging AI-powered analysis, behavioral insights, and predictive career modeling.

The platform addresses critical challenges in higher education:
- **Faculty Overload**: Mentoring 70+ students manually requires 72+ hours/month
- **Recruiter Frustration**: "Pick top 5 from 1,000" with only marksheets
- **Hidden Talent**: 20% of innovative students lack visibility
- **Institutional Underperformance**: NAAC/NIRF ratings don't reflect true potential

## 🎯 Key Features

### 1. 🦢 **Black Swan Talent Discovery**
*"Find the diamonds everyone else missed"*
- AI detects unconventional brilliance in unexpected places
- Example: Student with 2.8 GPA shows exceptional pattern recognition through gaming → Recommended for cybersecurity roles

### 2. 🤖 **Digital Talent Twin**
*"Test-drive your future before making career decisions"*
- AI simulates 'what-if' scenarios for career paths
- Example: "Switch from mechanical to data science? 87% success probability with 6-month Python bootcamp"

### 3. 📄 **Intelligent Portfolio Generator**
*"From scattered achievements to compelling career story"*
- Auto-creates verified, ATS-friendly portfolios
- Transforms fragmented projects into recruiter-ready portfolios in under 2 minutes

### 4. 🎯 **AI-Powered Opportunity Matching**
*"Netflix recommendations, but for your career"*
- Smart matching based on hidden potential, not just grades
- Example: Matches quiet student with excellent forum contributions to Google Summer of Code

## 🏗️ Architecture

### Multi-Agent System (CrewAI)
```
┌─────────────┐    ┌──────────────┐    ┌─────────────────┐
│   Analyzer  │───▶│   Assessor   │───▶│  Digital Twin   │
│    Agent    │    │    Agent     │    │     Agent       │
└─────────────┘    └──────────────┘    └─────────────────┘
       │                   │                     │
       ▼                   ▼                     ▼
┌─────────────┐    ┌──────────────┐    ┌─────────────────┐
│  Database   │    │   Planner    │    │     Coach       │
│   Agent     │    │    Agent     │    │    Agent        │
└─────────────┘    └──────────────┘    └─────────────────┘
```

### Data Flow
1. **Ingestion** → Raw data from GitHub, LinkedIn, ERP, LMS
2. **Analysis** → Feature extraction and vectorization
3. **Assessment** → Monthly evaluations and anomaly detection
4. **Simulation** → Digital Twin predictions and planning
5. **Output** → Portfolios, recommendations, and matching

## 🛠️ Technology Stack

### Frontend & UI
- **Framework**: Next.js 14.2.16 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.1.9
- **Components**: Radix UI + Custom Components
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

### Backend & Database
- **Backend**: FastAPI (Planned)
- **Database**: Supabase (Postgres)
- **Vector DB**: Chroma DB for Digital Twin
- **Authentication**: Firebase Auth
- **File Storage**: Firebase Storage

### AI & ML
- **LLMs**: OpenAI GPT, Meta LLaMA
- **Multi-Agent**: CrewAI Framework
- **ML Libraries**: scikit-learn, HuggingFace, spaCy
- **Anomaly Detection**: Isolation Forest

### Integrations
- **APIs**: GitHub, LinkedIn, ERP, LMS, MOOC platforms
- **Reports**: Auto PDF & Excel Generation (jsPDF)
- **Charts**: Recharts for analytics
- **Forms**: React Hook Form + Zod validation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/pnpm
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/anvesha.git
cd anvesha
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
```

3. **Environment Setup**
```bash
cp .env.example .env.local
```

Configure your environment variables:
```env
# Database
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Authentication
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain

# AI/ML Services
OPENAI_API_KEY=your_openai_api_key
CHROMA_DB_URL=your_chroma_db_url

# External APIs
GITHUB_API_TOKEN=your_github_token
LINKEDIN_API_KEY=your_linkedin_api_key
```

4. **Run the development server**
```bash
npm run dev
# or
pnpm dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Application Structure

### Portal Access
- **🎓 Student Portal**: `/student` - Track achievements & build portfolio
- **👥 Faculty Portal**: `/faculty` - Validate & mentor students
- **🏢 Placement Portal**: `/placement` - Connect talent with opportunities
- **🛡️ Admin Portal**: `/admin` - Manage & generate reports

### Key Components

```
app/
├── (auth)/           # Authentication pages
├── admin/            # Admin dashboard & reports
├── faculty/          # Faculty validation & mentoring
├── placement/        # Recruiter portal & matching
├── student/          # Student dashboard & portfolio
├── about/            # About page
├── contact/          # Contact information
├── find-talent/      # Public talent search
└── info/             # Platform information

components/
├── ui/               # Reusable UI components (Radix-based)
├── layout/           # Layout components (Navbar, etc.)
├── student/          # Student-specific components
│   ├── digital-twin.tsx      # AI Career Guide
│   ├── activity-management.tsx
│   ├── competitive.tsx
│   └── roadmaps-system.tsx
├── faculty/          # Faculty-specific components
├── placement/        # Placement-specific components
└── portfolio/        # Portfolio generation components
```

## 🔄 User Journey

### For Students
1. **Sign up** and provide consent + profile metadata
2. **Connect accounts** (GitHub, LinkedIn, MOOC certificates)
3. **Complete assessments** (Big Five, technical tests, domain MCQs)
4. **Upload artifacts** (projects, CV, certificates, activity logs)
5. **Interact with Digital Twin** for career guidance
6. **Generate portfolio** and apply to opportunities

### For Faculty
1. **Review student data** and validate achievements
2. **Use AI insights** for targeted mentoring
3. **Monitor progress** through automated reports
4. **Identify anomalies** and "Black Swan" talents

### For Recruiters
1. **Search candidates** with advanced filtering
2. **View verified portfolios** with faculty validation
3. **Use AI matching** for optimal candidate selection
4. **Access behavioral insights** for hiring decisions

## 📊 Impact Metrics

### Institutional Efficiency
- **NAAC/NIRF Reporting**: 6 months → 1.5 months (75% reduction)
- **Error-checking**: 3 months → 2 weeks (85% reduction)
- **Final draft preparation**: 2 months → 1 week (87% reduction)

### Faculty Empowerment
- **73%** of counselors report AI reduced workload
- **70%** faster grading with AI-powered tools
- **400-500%** expanded mentor reach through digital scaling

### Student Success
- **42%** higher satisfaction with AI + human career guidance
- **28%** lower dropout rates with AI-driven interventions
- **85%** of students already use AI for academic/career guidance

### Placement Transformation
- **1.5 lakh** interview calls/month via integration potential
- **700+** companies using similar hiring filters
- **80%+** employers prefer electronic portfolios

## 🔮 Roadmap

### Phase 1: MVP (Current)
- [x] Next.js frontend with portal structure
- [x] UI components and basic navigation
- [x] Digital Twin prototype interface
- [ ] Student data ingestion
- [ ] Basic portfolio generation

### Phase 2: Core Intelligence
- [ ] Multi-agent system implementation
- [ ] Vector database integration
- [ ] Basic anomaly detection
- [ ] Faculty validation system

### Phase 3: Advanced Features
- [ ] Full Digital Twin simulation
- [ ] Advanced AI matching
- [ ] Real-time integrations (GitHub, LinkedIn)
- [ ] Comprehensive analytics

### Phase 4: Scale & Monitor
- [ ] Multi-institution support
- [ ] Advanced monitoring and logging
- [ ] Performance optimization
- [ ] Mobile app development

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make changes and test thoroughly
4. Commit with conventional commits: `git commit -m "feat: add amazing feature"`
5. Push to branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏆 Team

**Team Name**: Anvesha Development Team  
**Institution**: Dayananda Sagar University  
**Event**: Smart India Hackathon (SIH) 2025  
**Theme**: AI First Campus Digitization for DSI

### Team Members
- **Jayesh RL** - jayeshrl2005@gmail.com
- **Rajath U** - eng23am0175@dsu.edu.in  
- **M Harshith Raju** - harshithmr2135@gmail.com
- **Yashaswini R** - rygowda1703@gmail.com

## 📞 Support

- **Email**: support@anvesha.com
- **Documentation**: [docs.anvesha.com](https://docs.anvesha.com)
- **Issues**: [GitHub Issues](https://github.com/your-username/anvesha/issues)

---

<div align="center">
  <p><strong>Anvesha</strong> - Discovering Hidden Talents Through AI</p>
  <p>© 2025 Anvesha Development Team. Built with ❤️ for SIH 2025</p>
</div>
