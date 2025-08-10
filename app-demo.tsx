'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, RotateCcw, Smartphone, Eye, Ear, Hand, Puzzle } from 'lucide-react'

export function AppDemo() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentFrame, setCurrentFrame] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const demoFrames = [
    {
      title: "Welcome to BamboAcademy!",
      content: "Let's discover your learning superpower",
      screen: "welcome"
    },
    {
      title: "How do you learn best?",
      content: "Choose your favorite way",
      screen: "quiz"
    },
    {
      title: "You're a Visual Learner!",
      content: "Pictures and colors help you learn",
      screen: "result"
    },
    {
      title: "Your Learning Adventure",
      content: "Personalized path just for you",
      screen: "dashboard"
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    let interval: NodeJS.Timeout
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % demoFrames.length)
      }, 2500)
    }

    return () => clearInterval(interval)
  }, [isPlaying, demoFrames.length])

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  const resetDemo = () => {
    setCurrentFrame(0)
    setIsPlaying(true)
  }

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container px-4 md:px-6">
        <div className={`text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
            <Smartphone className="w-5 h-5 mr-2" />
            App Preview
          </Badge>
          <h2 className="text-5xl font-bold text-slate-900" style={{fontFamily: 'Nunito, sans-serif'}}>
            See the magic in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"> action</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Watch how BamboAcademy transforms learning into an adventure
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Phone Mockup */}
            <div className="mx-auto w-80 h-[600px] bg-slate-900 rounded-[3rem] p-4 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="bg-slate-50 h-8 flex items-center justify-center">
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                  </div>
                </div>

                {/* App Content */}
                <div className="p-6 h-full bg-gradient-to-br from-blue-50 to-emerald-50">
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto shadow-lg animate-pulse">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-slate-800">
                        {demoFrames[currentFrame].title}
                      </h3>
                      <p className="text-slate-600">
                        {demoFrames[currentFrame].content}
                      </p>
                    </div>

                    {/* Dynamic Content Based on Frame */}
                    {demoFrames[currentFrame].screen === 'quiz' && (
                      <div className="grid grid-cols-2 gap-3 mt-6">
                        {[
                          { icon: <Eye className="w-6 h-6" />, label: 'Pictures', color: 'bg-blue-100 text-blue-600' },
                          { icon: <Ear className="w-6 h-6" />, label: 'Sounds', color: 'bg-purple-100 text-purple-600' },
                          { icon: <Hand className="w-6 h-6" />, label: 'Touch', color: 'bg-emerald-100 text-emerald-600' },
                          { icon: <Puzzle className="w-6 h-6" />, label: 'Logic', color: 'bg-amber-100 text-amber-600' }
                        ].map((option, index) => (
                          <div 
                            key={option.label}
                            className={`${option.color} rounded-xl p-3 transition-all duration-300 hover:scale-105 animate-fade-in`}
                            style={{animationDelay: `${index * 0.1}s`}}
                          >
                            <div className="flex flex-col items-center space-y-1">
                              {option.icon}
                              <span className="text-xs font-semibold">{option.label}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {demoFrames[currentFrame].screen === 'result' && (
                      <div className="space-y-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                          <Eye className="w-10 h-10 text-white" />
                        </div>
                        <Badge className="bg-blue-500 text-white px-4 py-2 rounded-full">
                          Visual Learner
                        </Badge>
                      </div>
                    )}

                    {demoFrames[currentFrame].screen === 'dashboard' && (
                      <div className="space-y-4">
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-semibold text-slate-700">Progress</span>
                            <span className="text-sm font-bold text-emerald-600">75%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full animate-pulse" style={{width: '75%'}}></div>
                          </div>
                        </div>
                        <div className="flex justify-center space-x-2">
                          <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                            <span className="text-xs">🏆</span>
                          </div>
                          <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                            <span className="text-xs">⭐</span>
                          </div>
                          <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                            <span className="text-xs">🎯</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Controls */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                onClick={togglePlayback}
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-slate-300 hover:border-emerald-500 transition-all duration-300 hover:scale-105"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </Button>
              <Button
                onClick={resetDemo}
                variant="outline"
                size="lg"
                className="rounded-full border-2 border-slate-300 hover:border-blue-500 transition-all duration-300 hover:scale-105"
              >
                <RotateCcw className="w-5 h-5" />
              </Button>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center space-x-2 mt-4">
              {demoFrames.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentFrame 
                      ? 'bg-emerald-500 scale-125' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  onClick={() => setCurrentFrame(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      `}</style>
    </div>
  )
}
