'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, Star, Award, Eye, Ear, Hand, Puzzle, Sparkles, Target, Lightbulb, Trophy, Play, RotateCcw } from 'lucide-react'

interface AnimationStep {
  id: string
  duration: number
  component: React.ReactNode
}

export function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([])
  const [progress, setProgress] = useState(0)

  // Confetti particles
  const confettiColors = ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444']
  const [confettiParticles, setConfettiParticles] = useState<Array<{id: number, x: number, y: number, color: string, delay: number}>>([])

  const createConfetti = () => {
    const particles = Array.from({length: 20}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      delay: Math.random() * 0.5
    }))
    setConfettiParticles(particles)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 2000)
  }

  const animationSteps: AnimationStep[] = [
    // Step 1: Login Screen
    {
      id: 'login',
      duration: 2000,
      component: (
        <div className="relative w-full h-full bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Card className="w-80 shadow-xl border-0 bg-white/95 backdrop-blur-sm animate-fade-in">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-800">Welcome Back, Alex!</h3>
                  <p className="text-slate-600">Ready for your learning adventure?</p>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full animate-pulse" style={{width: '100%'}}></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    // Step 2: Character Introduction
    {
      id: 'character',
      duration: 3000,
      component: (
        <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-6 animate-slide-up">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-float">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <Lightbulb className="w-12 h-12 text-emerald-600 animate-pulse" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 animate-wave">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-lg">👋</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-sm mx-auto">
                <p className="text-xl font-semibold text-slate-800 mb-2">Hi there! I'm Spark!</p>
                <p className="text-slate-600">Ready to discover your learning superpower?</p>
                <div className="flex justify-center mt-4">
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{animationDelay: `${i * 0.2}s`}}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Step 3: Interactive Quiz
    {
      id: 'quiz',
      duration: 4000,
      component: (
        <div className="relative w-full h-full bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 p-6">
            <div className="h-full flex flex-col">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">How do you learn best?</h3>
                <Progress value={progress} className="w-full h-2 bg-slate-200">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full transition-all duration-1000" style={{width: `${progress}%`}}></div>
                </Progress>
              </div>
              
              <div className="grid grid-cols-2 gap-4 flex-1">
                {[
                  { id: 'visual', icon: <Eye className="w-8 h-8" />, label: 'Pictures & Charts', color: 'from-blue-400 to-blue-600' },
                  { id: 'auditory', icon: <Ear className="w-8 h-8" />, label: 'Listening & Music', color: 'from-purple-400 to-purple-600' },
                  { id: 'kinesthetic', icon: <Hand className="w-8 h-8" />, label: 'Hands-on Fun', color: 'from-green-400 to-green-600' },
                  { id: 'logical', icon: <Puzzle className="w-8 h-8" />, label: 'Puzzles & Logic', color: 'from-orange-400 to-orange-600' }
                ].map((option) => (
                  <Card 
                    key={option.id}
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 ${
                      selectedAnswer === option.id 
                        ? 'border-emerald-500 shadow-lg scale-105' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    onClick={() => {
                      setSelectedAnswer(option.id)
                      setProgress(75)
                      setTimeout(() => {
                        createConfetti()
                        setProgress(100)
                      }, 500)
                    }}
                  >
                    <CardContent className="p-6 text-center space-y-3">
                      <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg text-white transition-transform duration-300 hover:rotate-12`}>
                        {option.icon}
                      </div>
                      <p className="font-semibold text-slate-700">{option.label}</p>
                      {selectedAnswer === option.id && (
                        <div className="flex justify-center">
                          <Star className="w-6 h-6 text-yellow-500 animate-spin" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          {/* Confetti Animation */}
          {showConfetti && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {confettiParticles.map((particle) => (
                <div
                  key={particle.id}
                  className="absolute w-2 h-2 rounded-full animate-confetti"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    backgroundColor: particle.color,
                    animationDelay: `${particle.delay}s`
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )
    },
    // Step 4: Results & Badges
    {
      id: 'results',
      duration: 4000,
      component: (
        <div className="relative w-full h-full bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 p-6">
            <div className="h-full flex flex-col items-center justify-center space-y-6">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                  <Eye className="w-12 h-12 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-800">You're a Visual Learner!</h3>
                  <p className="text-slate-600">You learn best with pictures, charts, and colorful materials</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                {[
                  { icon: <Brain className="w-6 h-6" />, label: 'Critical Thinker', color: 'bg-blue-500' },
                  { icon: <Target className="w-6 h-6" />, label: 'Goal Setter', color: 'bg-emerald-500' },
                  { icon: <Trophy className="w-6 h-6" />, label: 'Problem Solver', color: 'bg-purple-500' }
                ].map((badge, index) => (
                  <div 
                    key={badge.label}
                    className="text-center space-y-2 animate-slide-up"
                    style={{animationDelay: `${index * 0.3}s`}}
                  >
                    <div className={`w-16 h-16 ${badge.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg text-white animate-pulse`}>
                      {badge.icon}
                    </div>
                    <p className="text-xs font-semibold text-slate-700">{badge.label}</p>
                  </div>
                ))}
              </div>
              
              <Badge className="bg-emerald-600 text-white px-6 py-2 text-lg font-semibold animate-pulse">
                <Sparkles className="w-5 h-5 mr-2" />
                Superpower Unlocked!
              </Badge>
            </div>
          </div>
        </div>
      )
    },
    // Step 5: Learning Path
    {
      id: 'path',
      duration: 3000,
      component: (
        <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 p-6">
            <div className="h-full flex flex-col">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Your Learning Adventure Awaits!</h3>
                <p className="text-slate-600">Here's your personalized journey</p>
              </div>
              
              <div className="flex-1 relative">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  {/* Animated Path */}
                  <path
                    d="M50 250 Q150 150 250 200 T350 100"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="10,5"
                    className="animate-dash"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  
                  {/* Milestone Points */}
                  {[
                    { x: 50, y: 250, label: 'Start', delay: '0s' },
                    { x: 150, y: 180, label: 'Visual Skills', delay: '0.5s' },
                    { x: 250, y: 200, label: 'Problem Solving', delay: '1s' },
                    { x: 350, y: 100, label: 'Master Level', delay: '1.5s' }
                  ].map((point, index) => (
                    <g key={index}>
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="12"
                        fill="#10b981"
                        className="animate-pulse"
                        style={{animationDelay: point.delay}}
                      />
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="8"
                        fill="white"
                      />
                      <text
                        x={point.x}
                        y={point.y - 20}
                        textAnchor="middle"
                        className="text-xs font-semibold fill-slate-700"
                      >
                        {point.label}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
              
              <div className="text-center">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg rounded-xl px-6 py-3 animate-bounce">
                  Start Your Journey!
                  <Sparkles className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  const startAnimation = () => {
    setIsPlaying(true)
    setCurrentStep(0)
    setSelectedAnswer(null)
    setProgress(25)
    
    let stepIndex = 0
    const playNextStep = () => {
      if (stepIndex < animationSteps.length - 1) {
        stepIndex++
        setCurrentStep(stepIndex)
        setTimeout(playNextStep, animationSteps[stepIndex].duration)
      } else {
        setIsPlaying(false)
      }
    }
    
    setTimeout(playNextStep, animationSteps[0].duration)
  }

  const resetAnimation = () => {
    setCurrentStep(0)
    setIsPlaying(false)
    setSelectedAnswer(null)
    setProgress(25)
    setShowConfetti(false)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="aspect-video bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {animationSteps[currentStep]?.component}
        
        {/* Play/Reset Controls */}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          {!isPlaying ? (
            <Button
              onClick={startAnimation}
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg rounded-full w-12 h-12 p-0"
            >
              <Play className="w-5 h-5" />
            </Button>
          ) : (
            <Button
              onClick={resetAnimation}
              size="sm"
              variant="secondary"
              className="bg-white/90 hover:bg-white shadow-lg rounded-full w-12 h-12 p-0"
            >
              <RotateCcw className="w-5 h-5" />
            </Button>
          )}
        </div>
        
        {/* Progress Indicator */}
        <div className="absolute bottom-4 left-4 flex space-x-1">
          {animationSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentStep 
                  ? 'bg-emerald-500 scale-125' 
                  : index < currentStep 
                    ? 'bg-emerald-300' 
                    : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="text-center mt-4 space-y-2">
        <p className="text-sm font-medium text-slate-700">Interactive Demo: How BamboAcademy Works</p>
        <p className="text-xs text-slate-500">Click play to see the magic happen!</p>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        
        @keyframes confetti {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-slide-up { animation: slide-up 0.6s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-wave { animation: wave 1s ease-in-out infinite; }
        .animate-confetti { animation: confetti 2s linear forwards; }
        .animate-dash { animation: dash 2s linear infinite; }
      `}</style>
    </div>
  )
}
