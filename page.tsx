'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Mail, Users, ArrowRight, Sparkles, Heart } from 'lucide-react'
import Link from "next/link"
import { AnimatedHero } from '../components/animated-hero'
import { GamificationPreview } from '../components/gamification-preview'
import { AppDemo } from '../components/app-demo'
import { VisualComparison } from '../components/visual-comparison'
import { FreeTrialHighlight } from '../components/free-trial-highlight'
import { VisualTestimonials } from '../components/visual-testimonials'

export default function BamboAcademyLanding() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white relative overflow-hidden" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className={`flex items-center space-x-3 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 hover:rotate-3">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-800 transition-colors duration-300 hover:text-emerald-600" style={{fontFamily: 'Nunito, sans-serif'}}>
              BamboAcademy
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#demo" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105 relative group">
              Demo
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#trial" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105 relative group">
              Free Trial
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#stories" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105 relative group">
              Stories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white shadow-lg rounded-xl px-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 font-semibold">
            Start Free Trial
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <AnimatedHero />

      {/* Gamification Preview */}
      <GamificationPreview />

      {/* App Demo Section */}
      <div id="demo">
        <AppDemo />
      </div>

      {/* Visual Comparison */}
      <VisualComparison />

      {/* Free Trial Highlight */}
      <div id="trial">
        <FreeTrialHighlight />
      </div>

      {/* Visual Testimonials */}
      <div id="stories">
        <VisualTestimonials />
      </div>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-xl animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-lg animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg animate-bounce">
                <Sparkles className="w-6 h-6 mr-3" />
                Ready to Start?
              </Badge>
              
              <h2 className="text-6xl font-bold text-slate-900" style={{fontFamily: 'Nunito, sans-serif'}}>
                Your child's learning
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500"> adventure awaits</span>
              </h2>
              
              <p className="text-2xl text-slate-600 font-medium max-w-2xl mx-auto">
                Join thousands of families discovering the joy of personalized learning
              </p>
            </div>
            
            <div className="space-y-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-2xl rounded-2xl px-16 py-6 text-2xl font-bold transition-all duration-300 hover:shadow-3xl hover:scale-110 hover:-translate-y-2 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Free Trial Now
                  <ArrowRight className="ml-3 h-7 w-7 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </Button>
              
              <p className="text-emerald-600 font-bold text-xl">
                💚 100% Free • No Credit Card • Instant Access
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              {[
                { icon: "🎯", title: "Personalized", desc: "Tailored to your child" },
                { icon: "🎮", title: "Gamified", desc: "Learning feels like play" },
                { icon: "📈", title: "Results", desc: "Track real progress" }
              ].map((feature, index) => (
                <div key={index} className="text-center space-y-3 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold" style={{fontFamily: 'Nunito, sans-serif'}}>
                  BamboAcademy
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Making learning magical for every child through personalized, gamified education.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Product</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-slate-300 hover:text-white transition-colors">Free Trial</Link>
                <Link href="#" className="block text-slate-300 hover:text-white transition-colors">How It Works</Link>
                <Link href="#" className="block text-slate-300 hover:text-white transition-colors">Success Stories</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Support</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-slate-300 hover:text-white transition-colors">Help Center</Link>
                <Link href="#" className="block text-slate-300 hover:text-white transition-colors">Parent Resources</Link>
                <Link href="#" className="block text-slate-300 hover:text-white transition-colors">Contact Us</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Connect</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-slate-300">
                  <Mail className="h-4 w-4" />
                  <span>hello@bamboacademy.com</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <Heart className="h-4 w-4" />
                  <span>Parent Community</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 BamboAcademy. Made with ❤️ for families who believe learning should be magical.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
