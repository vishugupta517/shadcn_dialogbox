"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"

// Sample data for demonstration
const globalPrompts = [
  {
    id: 1,
    title: "Code Review Assistant",
    content:
      "A comprehensive prompt for reviewing code quality, identifying potential bugs, and suggesting improvements. This prompt helps maintain coding standards and best practices across your development team.",
  },
  {
    id: 2,
    title: "Technical Documentation Writer",
    content:
      "Generate clear, concise technical documentation for APIs, functions, and complex systems. Perfect for creating user guides and developer documentation.",
  },
  {
    id: 3,
    title: "Bug Report Analyzer",
    content: "Analyze bug reports and provide structured solutions with step-by-step debugging approaches.",
  },
  {
    id: 4,
    title: "Meeting Summary Generator",
    content:
      "Transform meeting notes into actionable summaries with key decisions, action items, and next steps clearly outlined for all participants.",
  },
  {
    id: 5,
    title: "Email Response Template",
    content:
      "Professional email response templates for various business scenarios including customer support, project updates, and stakeholder communications.",
  },
  {
    id: 6,
    title: "Data Analysis Helper",
    content:
      "Comprehensive data analysis prompt that helps interpret datasets, identify trends, and generate insights with statistical significance.",
  },
  {
    id: 11,
    title: "API Documentation Generator",
    content:
      "Automatically generate comprehensive API documentation with examples, parameter descriptions, and response formats for RESTful services.",
  },
  {
    id: 12,
    title: "User Story Creator",
    content:
      "Transform requirements into well-structured user stories with acceptance criteria and definition of done.",
  },
  {
    id: 13,
    title: "Performance Optimization Guide",
    content:
      "Analyze application performance bottlenecks and provide specific optimization recommendations for web applications.",
  },
  {
    id: 14,
    title: "Security Audit Checklist",
    content:
      "Comprehensive security assessment framework covering authentication, authorization, data protection, and vulnerability scanning.",
  },
  {
    id: 15,
    title: "Database Schema Designer",
    content:
      "Design efficient database schemas with proper normalization, indexing strategies, and relationship modeling for optimal performance.",
  },
]

const customPrompts = [
  {
    id: 7,
    title: "Project Planning Assistant",
    content:
      "Custom prompt for breaking down complex projects into manageable tasks with timeline estimates and resource allocation recommendations.",
  },
  {
    id: 8,
    title: "Content Strategy Planner",
    content:
      "Develop comprehensive content strategies for social media, blogs, and marketing campaigns with audience targeting and engagement metrics.",
  },
  {
    id: 9,
    title: "Learning Path Creator",
    content:
      "Design personalized learning paths for skill development with progressive milestones and practical exercises.",
  },
  {
    id: 10,
    title: "Risk Assessment Framework",
    content:
      "Systematic approach to identifying, evaluating, and mitigating risks in business processes and project management.",
  },
  {
    id: 16,
    title: "Team Retrospective Facilitator",
    content:
      "Guide effective retrospective meetings with structured frameworks for identifying improvements and action items.",
  },
  {
    id: 17,
    title: "Technical Interview Prep",
    content:
      "Comprehensive technical interview preparation covering algorithms, system design, and behavioral questions with practice scenarios.",
  },
  {
    id: 18,
    title: "Code Refactoring Assistant",
    content:
      "Systematic approach to refactoring legacy code while maintaining functionality and improving maintainability.",
  },
  {
    id: 19,
    title: "Deployment Strategy Planner",
    content:
      "Plan safe deployment strategies with rollback procedures, monitoring, and gradual rollout approaches for production systems.",
  },
  {
    id: 20,
    title: "Architecture Decision Record",
    content:
      "Document architectural decisions with context, options considered, and rationale for future reference and team alignment.",
  },
]

export function PromptManagerDialog() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  // Simulate loading for 3 seconds when dialog opens
  useEffect(() => {
    if (open) {
      setLoading(true)
      const timer = setTimeout(() => {
        setLoading(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [open])

  const PromptCard = ({ prompt }: { prompt: (typeof globalPrompts)[0] }) => (
    <Card className="h-[280px] flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium leading-tight line-clamp-2 min-h-[2.5rem]">{prompt.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-3">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 min-h-[5.25rem]">{prompt.content}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <p className="text-xs text-muted-foreground">Created by me</p>
      </CardFooter>
    </Card>
  )

  const SkeletonCard = () => (
    <Card className="h-[280px] flex flex-col">
      <CardHeader className="pb-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-5 w-1/2 mt-1" />
      </CardHeader>
      <CardContent className="flex-1 pb-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full mt-2" />
        <Skeleton className="h-4 w-3/4 mt-2" />
        <Skeleton className="h-4 w-5/6 mt-2" />
      </CardContent>
      <CardFooter className="pt-0">
        <Skeleton className="h-3 w-24" />
      </CardFooter>
    </Card>
  )

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Prompt Manager</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh] p-0 flex flex-col overflow-hidden">
        <div className="p-6 pb-0 flex-shrink-0">
          <DialogHeader>
            {loading ? (
              <>
                <Skeleton className="h-7 w-48 mb-2" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-3/4 mt-1" />
              </>
            ) : (
              <>
                <DialogTitle>Prompt Manager</DialogTitle>
                <DialogDescription>
                  Manage and organize your AI prompts. Switch between global templates and your custom prompts.
                </DialogDescription>
              </>
            )}
          </DialogHeader>
        </div>

        <Tabs defaultValue="global" className="flex-1 flex flex-col overflow-hidden">
          <div className="px-6 pt-6 pb-2 flex-shrink-0">
            {loading ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="global">Global Prompts</TabsTrigger>
                <TabsTrigger value="custom">Custom Prompts</TabsTrigger>
              </TabsList>
            )}
          </div>

          <TabsContent value="global" className="flex-1 overflow-hidden m-0 p-0">
            <div className="h-full overflow-y-auto px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                {loading
                  ? Array(9)
                      .fill(0)
                      .map((_, i) => <SkeletonCard key={i} />)
                  : globalPrompts.map((prompt) => <PromptCard key={prompt.id} prompt={prompt} />)}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="custom" className="flex-1 overflow-hidden m-0 p-0">
            <div className="h-full overflow-y-auto px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                {loading
                  ? Array(9)
                      .fill(0)
                      .map((_, i) => <SkeletonCard key={i} />)
                  : customPrompts.map((prompt) => <PromptCard key={prompt.id} prompt={prompt} />)}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
