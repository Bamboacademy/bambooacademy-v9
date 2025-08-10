'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Star, Trophy, Zap, Play, ArrowRight } from 'lucide-react'

export function AnimatedHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [floatingElements, setFloatingElements] = useState<Array<{id: number, x: number, y: number, delay: number}>>([])

  useEffect(() => {
    setIsVisible(true)
    // Create floating elements
    const elements = Array.from({length: 8}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }))
    setFloatingElements(elements)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-emerald-50 to-purple-50">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute animate-float opacity-20"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {element.id % 4 === 0 && <Star className="w-6 h-6 text-emerald-500" />}
            {element.id % 4 === 1 && <Sparkles className="w-8 h-8 text-blue-500" />}
            {element.id % 4 === 2 && <Trophy className="w-7 h-7 text-amber-500" />}
            {element.id % 4 === 3 && <Zap className="w-5 h-5 text-purple-500" />}
          </div>
        ))}
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Minimal Text */}
          <div className={`space-y-8 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg animate-pulse">
                <Sparkles className="w-5 h-5 mr-2" />
                Limited Early Access
              </Badge>
              
              <h1 className="text-6xl md:text-7xl font-bold text-slate-900 leading-tight" style={{fontFamily: 'Nunito, sans-serif'}}>
                Learning that feels like
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600 animate-pulse"> magic</span>
              </h1>
              
              <p className="text-2xl text-slate-600 font-medium">
                Your child's learning adventure starts here
              </p>
            </div>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-2xl rounded-2xl px-12 py-6 text-2xl font-bold transition-all duration-300 hover:shadow-3xl hover:scale-110 hover:-translate-y-2 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial Today
                  <ArrowRight className="ml-3 h-7 w-7 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </Button>
              
              <p className="text-emerald-600 font-semibold text-lg animate-bounce">
                💚 100% Free • No Credit Card Required
              </p>
            </div>
          </div>

          {/* Right Side - Animated Child Learning */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative">
              {/* Main Illustration */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border-4 border-emerald-100 animate-float">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for child learning illustration */}
                  <div className="w-full h-full bg-gradient-to-br from-emerald-200 to-blue-200 rounded-2xl flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-slate-700 font-semibold text-lg">Happy Child Learning</p>
                    </div>
                  </div>
                  
                  {/* Floating Achievement Badges */}
                  <div className="absolute -top-4 -right-4 bg-amber-400 text-white rounded-full p-3 shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white rounded-full p-3 shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                    <Star className="w-6 h-6" />
                  </div>
                  <div className="absolute top-1/2 -right-6 bg-purple-500 text-white rounded-full p-2 shadow-lg animate-bounce" style={{animationDelay: '1.5s'}}>
                    <Zap className="w-5 h-5" />
                  </div>
                </div>
              </div>
              
              {/* Floating Elements Around */}
              <div className="absolute -top-8 left-1/4 animate-float" style={{animationDelay: '0.5s'}}>
                <div className="bg-emerald-500 text-white rounded-full p-4 shadow-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>
              <div className="absolute -bottom-6 right-1/4 animate-float" style={{animationDelay: '1s'}}>
                <div className="bg-blue-500 text-white rounded-full p-4 shadow-lg">
                  <Star className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
