'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Brain, Eye, Ear, Hand, Puzzle, Mail, CheckCircle } from 'lucide-react'

export function ProgressiveQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [email, setEmail] = useState('')
  const [showEmailCapture, setShowEmailCapture] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const questions = [
    {
      id: 'learning-challenge',
      question: "What's your biggest challenge with your child's learning?",
      options: [
        { id: 'motivation', label: 'Keeping them motivated', icon: '😴' },
        { id: 'style', label: 'Finding their learning style', icon: '🤔' },
        { id: 'progress', label: 'Tracking their progress', icon: '📊' },
        { id: 'engagement', label: 'Making it fun', icon: '🎮' }
      ]
    },
    {
      id: 'current-approach',
      question: "How do you currently help your child learn?",
      options: [
        { id: 'homework', label: 'Traditional homework help', icon: '📚' },
        { id: 'apps', label: 'Educational apps/games', icon: '📱' },
        { id: 'tutoring', label: 'Private tutoring', icon: '👨‍🏫' },
        { id: 'struggle', label: 'We struggle with this', icon: '😅' }
      ]
    },
    {
      id: 'interest-level',
      question: "How interested are you in a personalized learning plan?",
      options: [
        { id: 'very', label: 'Very interested!', icon: '🤩' },
        { id: 'somewhat', label: 'Somewhat interested', icon: '🙂' },
        { id: 'curious', label: 'Just curious', icon: '🤷‍♀️' },
        { id: 'skeptical', label: 'A bit skeptical', icon: '🤨' }
      ]
    }
  ]

  const handleAnswer = (answerId: string) => {
    const newAnswers = [...answers, answerId]
    setAnswers(newAnswers)
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Quiz completed, show email capture
      setShowEmailCapture(true)
    }
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Track completion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'quiz_completed', {
        event_category: 'engagement',
        event_label: 'onboarding_quiz'
      })
    }
    
    // Here you'd send to your email service
    console.log('Quiz completed:', { answers, email })
    setIsCompleted(true)
  }

  const progress = ((currentStep + 1) / questions.length) * 100

  if (isCompleted) {
    return (
      <Card className="max-w-2xl mx-auto shadow-2xl border-0 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl">
        <CardContent className="p-12 text-center space-y-6">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto animate-bounce">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-slate-800">Thank You!</h3>
            <p className="text-xl text-slate-600">
              We're creating your personalized learning insights. Check your email in 2 minutes!
            </p>
            <Badge className="bg-emerald-500 text-white px-6 py-3 rounded-full text-lg">
              🎁 Free Learning Plan Coming Soon
            </Badge>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (showEmailCapture) {
    return (
      <Card className="max-w-2xl mx-auto shadow-2xl border-0 bg-white rounded-3xl">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-800">Almost Done! 🎉</h3>
              <p className="text-slate-600">
                Get your personalized learning insights + a free starter plan
              </p>
            </div>
            
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get My Plan
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
              <p className="text-sm text-slate-500">
                💚 100% free • No spam • Unsubscribe anytime
              </p>
            </form>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-2xl border-0 bg-white rounded-3xl">
      <CardContent className="p-8">
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-slate-600">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} className="h-3 bg-slate-200">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full transition-all duration-500"
                style={{width: `${progress}%`}}
              />
            </Progress>
          </div>

          {/* Question */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">
              {questions[currentStep].question}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions[currentStep].options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(option.id)}
                  className="p-6 border-2 border-slate-200 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-300 hover:scale-105 group text-left"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{option.icon}</span>
                    <span className="font-semibold text-slate-700 group-hover:text-emerald-700">
                      {option.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
