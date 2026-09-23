"use client"
import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import FadeDown from "@/components/animations/FadeDown"

interface ExperienceItem {
  id: number
  company: string
  role: string
  date: string
  description: string
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Optimalogistic",
    role: "Software Engineering Intern (PFE)",
    date: "Feb 2026 - Jun 2026",
    description: "Independently designed and built a three-part fleet management ecosystem on Dolibarr ERP/CRM. Built the Flotte module end-to-end with vehicle, driver, customer, vendor, and spare-part management; booking, fuel-log, inspection, and work-order tracking; expense tracking and reporting via RESTful API endpoints. Added Firebase push notifications, cron-based alerts, and a live vehicle-tracking map view. Developed DoliTrack (React Native/Expo, TypeScript) with Google Maps integration for real-time driver location tracking.",
    skills: ["Dolibarr ERP", "React Native", "Expo", "TypeScript", "RESTful APIs", "Firebase"],
  },
  {
    id: 2,
    company: "Tunisie Telecom",
    role: "Software Engineering Intern",
    date: "Jul 2025 - Sep 2025",
    description: "Built the Employee Portal Management System, a PHP/MySQL web application for employee profiles, internal announcements, and communication. Implemented secure authentication (PHP sessions, PDO prepared statements), a session-controlled employee dashboard, AJAX-driven content loading, and a file-upload system.",
    skills: ["PHP", "MySQL", "AJAX", "Web Development"],
  },
  {
    id: 3,
    company: "Ceram Square Hmmami Sodimac",
    role: "Software Engineering Intern",
    date: "Jul 2026 - Sep 2026",
    description: "Independently designed and built MarketIntel, a distributed competitive-intelligence platform. Built a horizontally-scalable stealth scraping cluster (Python, Playwright, SeleniumBase) with a Redis-backed job queue, dead-letter handling, and Prometheus metrics. Developed a multi-perspective 'LLM Council' AI analysis layer and a multilingual vector-embedding service (FastAPI, sentence-transformers) backed by PostgreSQL with TimescaleDB and pgvector. Built the dashboard backend (FastAPI, JWT auth) and frontend (Next.js, React, TypeScript, Tailwind CSS).",
    skills: ["Python", "FastAPI", "Next.js", "Playwright", "PostgreSQL", "Redis", "Docker"],
  },
]

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll position of the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  // Add a slight spring physics to the line growth for smoothness
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section id="experience" className="w-full max-w-7xl mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10" ref={containerRef}>
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Career Path</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">Work Experience</h3>
        </div>
      </FadeDown>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative group/list flex flex-col">
        {experiences.map((exp, index) => {
          return (
            <motion.div key={exp.id} initial={{ opacity: 0, y: 40, filter: "blur(5px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: index * 0.1 }} className="group/item relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-6 md:p-8 -mx-6 md:-mx-8 rounded-2xl transition-all duration-500 hover:!opacity-100 hover:!blur-none group-hover/list:opacity-40 group-hover/list:blur-[2px] hover:bg-text-secondary/5 hover:shadow-lg border border-transparent hover:border-text-secondary/10">
              
              {/* Left Column: Date */}
              <div className="md:col-span-1 pt-1 md:pt-2">
                <span className="text-xs font-bold tracking-widest text-text-secondary uppercase">{exp.date}</span>
              </div>

              {/* Right Column: Details */}
              <div className="md:col-span-3 flex flex-col">
                <h4 className="text-2xl font-bold text-text-primary tracking-tight mb-1 group-hover/item:text-text-primary transition-colors">{exp.role}</h4>
                <h5 className="text-sm font-bold text-text-secondary tracking-wide uppercase mb-6">{exp.company}</h5>

                <p className="text-base text-text-secondary font-medium leading-relaxed mb-6">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-xs font-bold bg-background md:bg-thirdary text-text-primary px-3 py-1.5 rounded-lg border border-text-secondary/10 uppercase tracking-wider group-hover/item:bg-background transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
