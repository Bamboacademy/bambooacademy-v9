'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, Play, Heart, ChevronLeft, ChevronRight } from 'lucide-react'

export function VisualTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const testimonials = [
    {
      quote: "My daughter went from hating homework to asking for more learning time!",
      author: "Sarah M.",
      role: "Mom of Emma, 8",
      rating: 5,
      highlight: "Transformed homework time",
      emoji: "😍"
    },
    {
      quote: "Finally found something that works with my son's ADHD. He's focused and happy!",
      author: "Mike R.",
      role: "Dad of Alex, 10",
      rating: 5,
      highlight: "Perfect for ADHD",
      emoji: "🎯"
    },
    {
      quote: "The personalized approach is incredible. She's discovering talents we never knew she had!",
      author: "Lisa K.",
      role: "Mom of Zoe, 9",
      rating: 5,
      highlight: "Discovered hidden talents",
      emoji: "✨"
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container px-4 md:px-6">
        <div className={`text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
            <Heart className="w-5 h-5 mr-2" />
            Happy Families
          </Badge>
          <h2 className="text-5xl font-bold text-slate-900" style={{fontFamily: 'Nunito, sans-serif'}}>
            Parents and kids
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"> love us</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-white to-pink-50">
            <CardContent className="p-12">
              <div className="text-center space-y-8">
                
                {/* Quote Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 fill-amber-400 text-amber-400 animate-pulse" style={{animationDelay: `${i * 100}ms`}} />
                  ))}
                </div>
                
                {/* Main Quote */}
                <blockquote className="text-3xl md:text-4xl font-bold text-slate-800 leading-relaxed italic max-w-3xl mx-auto" style={{fontFamily: 'Nunito, sans-serif'}}>
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                {/* Highlight Badge */}
                <Badge className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
                  <span className="text-2xl mr-2">{testimonials[currentTestimonial].emoji}</span>
                  {testimonials[currentTestimonial].highlight}
                </Badge>
                
                {/* Author */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <span className="text-white font-bold text-xl">
                        {testimonials[currentTestimonial].author.charAt(0)}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-2xl text-slate-800">
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p className="text-slate-600 text-lg">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Video Play Button (Placeholder) */}
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-2 border-pink-300 hover:border-pink-500 text-pink-600 hover:text-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Video Story
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-6 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-2 border-slate-300 hover:border-pink-500 transition-all duration-300 hover:scale-110 w-14 h-14"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-pink-500 scale-125 shadow-lg' 
                      : 'bg-slate-300 hover:bg-slate-400 hover:scale-110'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-2 border-slate-300 hover:border-pink-500 transition-all duration-300 hover:scale-110 w-14 h-14"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
