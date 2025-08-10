'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, Star, Trophy, Target, Lightbulb, Zap, Award, Heart } from 'lucide-react'

export function GamificationPreview() {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(false)

  const badges = [
    { id: 'thinker', name: 'Critical Thinker', icon: <Brain className="w-6 h-6" />, color: 'from-blue-500 to-blue-600' },
    { id: 'fast', name: 'Fast Learner', icon: <Zap className="w-6 h-6" />, color: 'from-yellow-500 to-orange-500' },
    { id: 'creative', name: 'Creative Genius', icon: <Lightbulb className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' },
    { id: 'solver', name: 'Problem Solver', icon: <Target className="w-6 h-6" />, color: 'from-emerald-500 to-green-600' }
  ]

  const steps = [
    { title: 'Take Fun Quiz', progress: 25, badge: null },
    { title: 'Discover Style', progress: 50, badge: 'thinker' },
    { title: 'Unlock Path', progress: 75, badge: 'fast' },
    { title: 'Start Adventure', progress: 100, badge: 'creative' }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const next = (prev + 1) % steps.length
        setProgress(steps[next].progress)
        if (steps[next].badge && !unlockedBadges.includes(steps[next].badge)) {
          setUnlockedBadges(prev => [...prev, steps[next].badge!])
        }
        return next
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container px-4 md:px-6">
        <div className={`text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
            <Trophy className="w-5 h-5 mr-2" />
            Gamified Learning
          </Badge>
          <h2 className="text-5xl font-bold text-slate-900" style={{fontFamily: 'Nunito, sans-serif'}}>
            Learning feels like
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"> playing</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Animated Learning Journey */}
          <div className="relative">
            <Card className="shadow-2xl border-0 bg-white rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{steps[currentStep].title}</h3>
                    <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{width: `${progress}%`}}
                      ></div>
                    </div>
                    <p className="text-slate-600 mt-2 font-semibold">{progress}% Complete</p>
                  </div>

                  {/* Interactive Quiz Preview */}
                  <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: <Brain className="w-8 h-8" />, label: 'Think', color: 'bg-blue-100 hover:bg-blue-200 text-blue-600' },
                        { icon: <Heart className="w-8 h-8" />, label: 'Feel', color: 'bg-pink-100 hover:bg-pink-200 text-pink-600' },
                        { icon: <Zap className="w-8 h-8" />, label: 'Act', color: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-600' },
                        { icon: <Star className="w-8 h-8" />, label: 'Create', color: 'bg-purple-100 hover:bg-purple-200 text-purple-600' }
                      ].map((option, index) => (
                        <div 
                          key={option.label}
                          className={`${option.color} rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 cursor-pointer animate-pulse`}
                          style={{animationDelay: `${index * 0.2}s`}}
                        >
                          <div className="flex flex-col items-center space-y-2">
                            {option.icon}
                            <span className="font-semibold">{option.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievement Celebration */}
                  {steps[currentStep].badge && (
                    <div className="text-center animate-bounce">
                      <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg">
                        <Award className="w-6 h-6" />
                        <span className="font-bold">Badge Unlocked!</span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Badge Collection */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Collect Achievement Badges</h3>
              <p className="text-xl text-slate-600">Every child becomes a learning hero</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {badges.map((badge, index) => (
                <Card 
                  key={badge.id}
                  className={`border-0 shadow-lg rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    unlockedBadges.includes(badge.id) 
                      ? 'animate-bounce bg-white' 
                      : 'bg-slate-100 opacity-50'
                  }`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${badge.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg ${
                      unlockedBadges.includes(badge.id) ? 'animate-pulse' : ''
                    }`}>
                      {badge.icon}
                    </div>
                    <h4 className="font-bold text-slate-800">{badge.name}</h4>
                    {unlockedBadges.includes(badge.id) && (
                      <Badge className="mt-2 bg-emerald-500 text-white">
                        <Star className="w-4 h-4 mr-1" />
                        Unlocked!
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
