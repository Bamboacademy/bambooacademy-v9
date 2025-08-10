'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Clock, Shield, Users, ArrowRight, Gift, Star } from 'lucide-react'

export function FreeTrialHighlight() {
  const [timeLeft, setTimeLeft] = useState({ days: 7, hours: 12, minutes: 34 })
  const [isVisible, setIsVisible] = useState(false)
  const [pulseElements, setPulseElements] = useState<number[]>([])

  useEffect(() => {
    setIsVisible(true)
    // Create pulsing elements
    const elements = Array.from({length: 6}, (_, i) => i)
    setPulseElements(elements)

    // Countdown timer simulation
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 }
        }
        return prev
      })
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {pulseElements.map((element) => (
          <div
            key={element}
            className="absolute animate-pulse opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${element * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className={`max-w-4xl mx-auto text-center space-y-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          
          {/* Main Highlight Card */}
          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-white to-emerald-50 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 animate-pulse"></div>
            <CardContent className="p-12 relative">
              <div className="space-y-8">
                
                {/* Limited Time Badge */}
                <div className="flex justify-center">
                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg animate-bounce">
                    <Gift className="w-6 h-6 mr-3" />
                    Limited Early Access
                  </Badge>
                </div>

                {/* Main Headline */}
                <div className="space-y-4">
                  <h2 className="text-6xl font-bold text-slate-900" style={{fontFamily: 'Nunito, sans-serif'}}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">100% Free</span> Trial
                  </h2>
                  <p className="text-2xl text-slate-600 font-medium max-w-2xl mx-auto">
                    Your first step into personalized education
                  </p>
                </div>

                {/* Countdown Timer */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-200 max-w-md mx-auto">
                  <p className="text-slate-600 font-semibold mb-4">Early Access Ends In:</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-600">{timeLeft.days}</div>
                      <div className="text-sm text-slate-500">Days</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">{timeLeft.hours}</div>
                      <div className="text-sm text-slate-500">Hours</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">{timeLeft.minutes}</div>
                      <div className="text-sm text-slate-500">Minutes</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-2xl rounded-2xl px-16 py-6 text-2xl font-bold transition-all duration-300 hover:shadow-3xl hover:scale-110 hover:-translate-y-2 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Claim Your Free Trial
                      <ArrowRight className="ml-3 h-7 w-7 transition-transform duration-300 group-hover:translate-x-2" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </Button>
                  
                  <p className="text-emerald-600 font-bold text-lg">
                    💚 No Credit Card • No Commitment • Instant Access
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="grid md:grid-cols-3 gap-6 pt-8">
                  {[
                    { icon: <Clock className="w-6 h-6" />, text: "5 minutes to start", color: "text-emerald-600" },
                    { icon: <Shield className="w-6 h-6" />, text: "100% secure & private", color: "text-blue-600" },
                    { icon: <Users className="w-6 h-6" />, text: "Join 50,000+ families", color: "text-purple-600" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-center space-x-3 text-slate-700 transition-all duration-300 hover:scale-105">
                      <div className={`${item.color} transition-transform duration-300 hover:scale-110`}>
                        {item.icon}
                      </div>
                      <span className="font-semibold">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What's Included */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Complete Assessment", desc: "Discover your child's learning style", icon: "🧠" },
              { title: "Personalized Plan", desc: "Custom learning path & recommendations", icon: "🎯" },
              { title: "Progress Tracking", desc: "Watch your child's growth journey", icon: "📈" }
            ].map((feature, index) => (
              <Card key={index} className={`border-0 shadow-lg rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slide-up`} style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-6 text-center space-y-4 bg-gradient-to-br from-white to-slate-50">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                  <div className="flex justify-center">
                    <Star className="w-5 h-5 text-amber-400 fill-current" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.6s ease-out forwards; }
      `}</style>
    </div>
  )
}
