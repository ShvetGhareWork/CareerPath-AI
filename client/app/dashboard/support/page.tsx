"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, MessageCircle, Book, Mail } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Support Center</h1>
        <p className="text-gray-600">Get help and find answers to your questions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-5 w-5 text-[#6C63FF]" />
              Documentation
            </CardTitle>
            <CardDescription>Browse our comprehensive guides</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-[#6C63FF] hover:bg-[#5B54E6] text-white">View Docs</Button>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-[#6C63FF]" />
              Live Chat
            </CardTitle>
            <CardDescription>Chat with our support team</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-[#6C63FF] hover:bg-[#5B54E6] text-white">Start Chat</Button>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-[#6C63FF]" />
              Email Support
            </CardTitle>
            <CardDescription>Send us a detailed message</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-[#6C63FF] hover:bg-[#5B54E6] text-white">Send Email</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-[#6C63FF]" />
            Contact Support
          </CardTitle>
          <CardDescription>Send us a message and we'll get back to you</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={4} placeholder="Describe your issue or question..." />
            </div>
            <Button className="bg-[#6C63FF] hover:bg-[#5B54E6] text-white">Send Message</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              question: "How does the AI resume analysis work?",
              answer: "Our AI analyzes your resume against industry standards and job requirements.",
              status: "Popular",
            },
            {
              question: "Can I export my career roadmap?",
              answer: "Yes, you can export your roadmap as PDF or share it with others.",
              status: "New",
            },
            {
              question: "How often are course recommendations updated?",
              answer: "Course recommendations are updated weekly based on market trends.",
              status: "Updated",
            },
          ].map((faq, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-medium">{faq.question}</h4>
                <Badge variant="secondary">{faq.status}</Badge>
              </div>
              <p className="text-sm text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
