'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Gamepad2, Frown, Smile, Zap } from 'lucide-react'

export function VisualComparison() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="py-20 bg-gradient-to-br from-white to-emerald-50">
      <div className="container px-4 md:px-6">
        <div className={`text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Badge className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
            <Zap className="w-5 h-5 mr-2" />
            The Difference
          </Badge>
          <h2 className="text-5xl font-bold text-slate-900" style={{fontFamily: 'Nunito, sans-serif'}}>
            Finally, learning that feels like
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500"> an adventure</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Traditional Learning */}
          <Card className="border-0 shadow-xl rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105">
            <CardContent className="p-8 text-center space-y-6 bg-gradient-to-br from-slate-100 to-slate-200">
              <div className="space-y-4">
                <div className="w-20 h-20 bg-slate-400 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Traditional School</h3>
              </div>

              {/* Bored Child Illustration */}
              <div className="bg-white rounded-2xl p-6 shadow-inner">
                <div className="aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto">
                      <Frown className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-slate-600 font-medium">Bored & Disengaged</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-slate-600">
                <p className="flex items-center justify-center space-x-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>One-size-fits-all approach</span>
                </p>
                <p className="flex items-center justify-center space-x-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>Boring textbooks and tests</span>
                </p>
                <p className="flex items-center justify-center space-x-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span>No personalization</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* BamboAcademy */}
          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 animate-pulse"></div>
            <CardContent className="p-8 text-center space-y-6 bg-gradient-to-br from-emerald-50 to-blue-50 relative">
              <div className="space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                  <Gamepad2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">BamboAcademy</h3>
              </div>

              {/* Happy Child Illustration */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-200">
                <div className="aspect-square bg-gradient-to-br from-emerald-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto animate-bounce">
                      <Smile className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-emerald-700 font-bold">Excited & Engaged</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-slate-700">
                <p className="flex items-center justify-center space-x-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span>Personalized for each child</span>
                </p>
                <p className="flex items-center justify-center space-x-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span>Gamified and fun</span>
                </p>
                <p className="flex items-center justify-center space-x-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <span>Builds confidence</span>
                </p>
              </div>

              {/* Floating Achievement Icons */}
              <div className="absolute -top-2 -right-2 animate-bounce" style={{animationDelay: '0.5s'}}>
                <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm">🏆</span>
                </div>
              </div>
              <div className="absolute top-1/2 -left-2 animate-bounce" style={{animationDelay: '1s'}}>
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm">⭐</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
