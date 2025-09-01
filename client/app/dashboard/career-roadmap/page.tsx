"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Circle, Clock, BookOpen, Award, Target, Map } from "lucide-react"
import { useState } from "react"

const careerPaths = [
  { id: "frontend", name: "Frontend Developer", description: "Build user interfaces and web experiences" },
  { id: "backend", name: "Backend Developer", description: "Develop server-side applications and APIs" },
  { id: "fullstack", name: "Full Stack Developer", description: "Work on both frontend and backend development" },
  { id: "data-scientist", name: "Data Scientist", description: "Analyze data and build machine learning models" },
]

const mockRoadmapData = {
  selectedPath: "Frontend Developer",
  progress: 65,
  estimatedTime: "8-12 months",
  phases: [
    {
      id: 1,
      title: "Foundation Skills",
      status: "completed",
      progress: 100,
      duration: "2-3 months",
      skills: ["HTML", "CSS", "JavaScript Basics"],
      courses: [
        { name: "HTML & CSS Fundamentals", platform: "freeCodeCamp", completed: true },
        { name: "JavaScript Basics", platform: "Codecademy", completed: true },
      ],
      projects: [
        { name: "Personal Portfolio Website", completed: true },
        { name: "Responsive Landing Page", completed: true },
      ],
    },
    {
      id: 2,
      title: "Modern JavaScript & React",
      status: "in_progress",
      progress: 75,
      duration: "3-4 months",
      skills: ["ES6+", "React", "State Management"],
      courses: [
        { name: "Modern JavaScript Course", platform: "Udemy", completed: true },
        { name: "React Complete Guide", platform: "Udemy", completed: false },
      ],
      projects: [
        { name: "Todo App with React", completed: true },
        { name: "E-commerce Frontend", completed: false },
      ],
    },
    {
      id: 3,
      title: "Advanced Frontend",
      status: "upcoming",
      progress: 0,
      duration: "2-3 months",
      skills: ["TypeScript", "Next.js", "Testing"],
      courses: [
        { name: "TypeScript Fundamentals", platform: "Pluralsight", completed: false },
        { name: "Next.js Complete Course", platform: "Udemy", completed: false },
      ],
      projects: [
        { name: "Full Stack Blog App", completed: false },
        { name: "Real-time Chat Application", completed: false },
      ],
    },
    {
      id: 4,
      title: "Professional Skills",
      status: "upcoming",
      progress: 0,
      duration: "1-2 months",
      skills: ["Git/GitHub", "Deployment", "Performance"],
      courses: [
        { name: "Git & GitHub Mastery", platform: "Udemy", completed: false },
        { name: "Web Performance Optimization", platform: "Google", completed: false },
      ],
      projects: [
        { name: "Open Source Contribution", completed: false },
        { name: "Portfolio Optimization", completed: false },
      ],
    },
  ],
}

export default function CareerRoadmapPage() {
  const [selectedCareer, setSelectedCareer] = useState("frontend")

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "in_progress":
        return <Clock className="h-5 w-5 text-blue-600" />
      default:
        return <Circle className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "in_progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-600 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Career Roadmap</h1>
        <p className="text-gray-600">Your personalized path to achieving your career goals</p>
      </div>

      {/* Career Path Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-[#6C63FF]" />
            Select Your Career Goal
          </CardTitle>
          <CardDescription>Choose your target role to generate a personalized learning roadmap</CardDescription>
        </CardHeader>
        <CardContent>
          <Select value={selectedCareer} onValueChange={setSelectedCareer}>
            <SelectTrigger className="w-full md:w-1/2">
              <SelectValue placeholder="Select a career path" />
            </SelectTrigger>
            <SelectContent>
              {careerPaths.map((path) => (
                <SelectItem key={path.id} value={path.id}>
                  <div>
                    <div className="font-medium">{path.name}</div>
                    <div className="text-sm text-gray-600">{path.description}</div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Current Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Map className="h-5 w-5 text-[#6C63FF]" />
            {mockRoadmapData.selectedPath} Roadmap
          </CardTitle>
          <CardDescription>Track your progress towards becoming a {mockRoadmapData.selectedPath}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#6C63FF] mb-2">{mockRoadmapData.progress}%</div>
              <p className="text-sm text-gray-600">Overall Progress</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{mockRoadmapData.estimatedTime}</div>
              <p className="text-sm text-gray-600">Estimated Time</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {mockRoadmapData.phases.filter((p) => p.status === "completed").length}/{mockRoadmapData.phases.length}
              </div>
              <p className="text-sm text-gray-600">Phases Complete</p>
            </div>
          </div>
          <Progress value={mockRoadmapData.progress} className="h-3" />
        </CardContent>
      </Card>

      {/* Roadmap Phases */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Learning Phases</h2>

        {mockRoadmapData.phases.map((phase, index) => (
          <Card
            key={phase.id}
            className={`border-l-4 ${
              phase.status === "completed"
                ? "border-l-green-500"
                : phase.status === "in_progress"
                  ? "border-l-blue-500"
                  : "border-l-gray-300"
            }`}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3">
                  {getStatusIcon(phase.status)}
                  <span>
                    Phase {phase.id}: {phase.title}
                  </span>
                  <Badge className={getStatusColor(phase.status)}>{phase.status.replace("_", " ")}</Badge>
                </CardTitle>
                <div className="text-sm text-gray-600">{phase.duration}</div>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex-1">
                  <Progress value={phase.progress} className="h-2" />
                </div>
                <span className="text-sm font-medium">{phase.progress}%</span>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="skills" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="courses">Courses</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                </TabsList>

                <TabsContent value="skills" className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {phase.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="courses" className="space-y-3">
                  {phase.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-4 w-4 text-[#6C63FF]" />
                        <div>
                          <p className="font-medium text-sm">{course.name}</p>
                          <p className="text-xs text-gray-600">{course.platform}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {course.completed ? (
                          <Badge className="bg-green-100 text-green-800">Completed</Badge>
                        ) : (
                          <Button size="sm" variant="outline">
                            Start Course
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="projects" className="space-y-3">
                  {phase.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Award className="h-4 w-4 text-[#6C63FF]" />
                        <p className="font-medium text-sm">{project.name}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {project.completed ? (
                          <Badge className="bg-green-100 text-green-800">Completed</Badge>
                        ) : (
                          <Button size="sm" variant="outline">
                            Start Project
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle className="text-green-600">🎯 Next Steps</CardTitle>
          <CardDescription>Recommended actions to continue your progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-blue-900">Complete React Complete Guide</p>
                <p className="text-sm text-blue-700">Continue with your current course to maintain momentum</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
              <Award className="h-5 w-5 text-purple-600" />
              <div>
                <p className="font-medium text-purple-900">Build E-commerce Frontend Project</p>
                <p className="text-sm text-purple-700">Apply your React skills in a real-world project</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
