"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, FileText, Download, CheckCircle, AlertCircle, XCircle } from "lucide-react"
import { useState } from "react"

export default function ResumeAnalyzerPage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      setIsAnalyzing(true)
      // Simulate analysis
      setTimeout(() => {
        setIsAnalyzing(false)
        setAnalysisComplete(true)
      }, 3000)
    }
  }

  const mockAnalysisData = {
    overallScore: 85,
    sections: {
      contact: { score: 95, status: "excellent" },
      summary: { score: 80, status: "good" },
      experience: { score: 90, status: "excellent" },
      education: { score: 85, status: "good" },
      skills: { score: 75, status: "needs_improvement" },
    },
    suggestions: [
      "Add more quantifiable achievements in your experience section",
      "Include relevant keywords for your target role",
      "Consider adding a professional summary",
      "Update your skills section with current technologies",
    ],
    keywords: {
      present: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
      missing: ["TypeScript", "Next.js", "GraphQL", "Docker"],
    },
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Resume Analyzer</h1>
        <p className="text-gray-600">Upload your resume for AI-powered analysis and improvement suggestions</p>
      </div>

      {!uploadedFile ? (
        <Card className="border-2 border-dashed border-gray-300 hover:border-[#6C63FF] transition-colors">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Upload className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Your Resume</h3>
            <p className="text-gray-600 mb-4 text-center">Drag and drop your resume here, or click to browse</p>
            <p className="text-sm text-gray-500 mb-4">Supports PDF, DOC, and DOCX files up to 10MB</p>
            <label htmlFor="resume-upload">
              <Button className="bg-[#6C63FF] hover:bg-[#5B54E6] text-white">Choose File</Button>
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {/* File Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#6C63FF]" />
                Uploaded Resume
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{uploadedFile.name}</p>
                  <p className="text-sm text-gray-600">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload New
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Analysis Progress */}
          {isAnalyzing && (
            <Card>
              <CardContent className="py-8">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6C63FF] mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold mb-2">Analyzing Your Resume</h3>
                  <p className="text-gray-600">Our AI is parsing your resume and generating insights...</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Analysis Results */}
          {analysisComplete && (
            <div className="space-y-6">
              {/* Overall Score */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Overall Resume Score</span>
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {mockAnalysisData.overallScore}/100
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    Your resume scores well overall with room for improvement in key areas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={mockAnalysisData.overallScore} className="h-3" />
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>Needs Work</span>
                    <span>Good</span>
                    <span>Excellent</span>
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Analysis */}
              <Tabs defaultValue="sections" className="space-y-4">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="sections">Sections</TabsTrigger>
                  <TabsTrigger value="keywords">Keywords</TabsTrigger>
                  <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
                  <TabsTrigger value="report">Report</TabsTrigger>
                </TabsList>

                <TabsContent value="sections" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(mockAnalysisData.sections).map(([section, data]) => (
                      <Card key={section}>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base capitalize flex items-center justify-between">
                            {section.replace("_", " ")}
                            {data.status === "excellent" && <CheckCircle className="h-5 w-5 text-green-600" />}
                            {data.status === "good" && <AlertCircle className="h-5 w-5 text-yellow-600" />}
                            {data.status === "needs_improvement" && <XCircle className="h-5 w-5 text-red-600" />}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Score</span>
                              <span className="font-medium">{data.score}/100</span>
                            </div>
                            <Progress value={data.score} className="h-2" />
                            <Badge
                              variant={
                                data.status === "excellent"
                                  ? "default"
                                  : data.status === "good"
                                    ? "secondary"
                                    : "destructive"
                              }
                              className="text-xs"
                            >
                              {data.status.replace("_", " ")}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="keywords" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-green-600 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5" />
                          Keywords Found
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {mockAnalysisData.keywords.present.map((keyword) => (
                            <Badge key={keyword} variant="secondary" className="bg-green-100 text-green-800">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-red-600 flex items-center gap-2">
                          <XCircle className="h-5 w-5" />
                          Missing Keywords
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {mockAnalysisData.keywords.missing.map((keyword) => (
                            <Badge key={keyword} variant="secondary" className="bg-red-100 text-red-800">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="suggestions" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Improvement Suggestions</CardTitle>
                      <CardDescription>AI-generated recommendations to enhance your resume</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockAnalysisData.suggestions.map((suggestion, index) => (
                          <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-blue-900">{suggestion}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="report" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Download Analysis Report</CardTitle>
                      <CardDescription>Get a comprehensive PDF report of your resume analysis</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium mb-2">Report includes:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Detailed section-by-section analysis</li>
                            <li>• ATS compatibility score</li>
                            <li>• Keyword optimization recommendations</li>
                            <li>• Industry-specific suggestions</li>
                            <li>• Before/after comparison templates</li>
                          </ul>
                        </div>
                        <Button className="bg-[#6C63FF] hover:bg-[#5B54E6] text-white">
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF Report
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
