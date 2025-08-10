'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MessageCircle, Gift, ArrowRight, Clock } from 'lucide-react'

export function AssumptionTester() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const actions = [
    {
      id: 'interview',
      title: '15-min Parent Chat',
      description: 'Share your learning challenges & get personalized tips',
      icon: <MessageCircle className="w-6 h-6" />,
      cta: 'Book Free Call',
      color: 'from-blue-500 to-purple-500',
      value: 'High-value feedback + relationship building'
    },
    {
      id: 'early-access',
      title: 'Early Access List',
      description: 'Be first to try our personalized learning plans',
      icon: <Gift className="w-6 h-6" />,
      cta: 'Join Waitlist',
      color: 'from-emerald-500 to-blue-500',
      value: 'Email collection + interest validation'
    },
    {
      id: 'demo',
      title: 'Personal Demo',
      description: 'See how BamboAcademy works for your specific child',
      icon: <Calendar className="w-6 h-6" />,
      cta: 'Schedule Demo',
      color: 'from-amber-500 to-orange-500',
      value: 'High-intent leads + product feedback'
    }
  ]

  const handleActionSelect = (actionId: string) => {
    setSelectedAction(actionId)
    
    // Track which action they're most interested in
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'action_selected', {
        event_category: 'interest',
        event_label: actionId
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Track conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'lead_generated', {
        event_category: 'conversion',
        event_label: selectedAction,
        value: selectedAction === 'interview' ? 100 : selectedAction === 'demo' ? 75 : 50
      })
    }
    
    // Send to your CRM/email system
    console.log('Lead captured:', { action: selectedAction, email })
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    const selectedActionData = actions.find(a => a.id === selectedAction)
    
    return (
      <Card className="max-w-2xl mx-auto shadow-2xl border-0 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl">
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto animate-bounce">
            {selectedActionData?.icon}
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-800">You're All Set! 🎉</h3>
            <p className="text-slate-600">
              {selectedAction === 'interview' && "We'll send you a calendar link within 24 hours"}
              {selectedAction === 'demo' && "Check your email for demo scheduling options"}
              {selectedAction === 'early-access' && "You're on the list! We'll notify you when early access opens"}
            </p>
            <Badge className="bg-emerald-500 text-white px-6 py-3 rounded-full">
              <Clock className="w-4 h-4 mr-2" />
              Response within 24 hours
            </Badge>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold">
          Help Us Build Something Amazing
        </Badge>
        <h3 className="text-3xl font-bold text-slate-800">
          What would be most valuable for you right now?
        </h3>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Choose what interests you most, and we'll make it happen
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {actions.map((action) => (
          <Card 
            key={action.id}
            className={`border-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-2xl ${
              selectedAction === action.id 
                ? 'border-emerald-500 shadow-lg scale-105' 
                : 'border-slate-200 hover:border-emerald-300'
            }`}
            onClick={() => handleActionSelect(action.id)}
          >
            <CardContent className="p-6 text-center space-y-4">
              <div className={`w-16 h-16 bg-gradient-to-br ${action.color} rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg`}>
                {action.icon}
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-slate-800">{action.title}</h4>
                <p className="text-slate-600">{action.description}</p>
              </div>
              {selectedAction === action.id && (
                <Badge className="bg-emerald-500 text-white px-4 py-2 rounded-full animate-pulse">
                  Selected ✓
                </Badge>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedAction && (
        <Card className="max-w-md mx-auto shadow-lg border-0 bg-white rounded-2xl animate-slide-up">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center space-y-2">
                <h4 className="font-bold text-slate-800">Almost there!</h4>
                <p className="text-sm text-slate-600">
                  Enter your email to {actions.find(a => a.id === selectedAction)?.cta.toLowerCase()}
                </p>
              </div>
              
              <div className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300"
                >
                  {actions.find(a => a.id === selectedAction)?.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <p className="text-xs text-slate-500 text-center">
                💚 No spam, just valuable updates
              </p>
            </form>
          </CardContent>
        </Card>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.4s ease-out; }
      `}</style>
    </div>
  )
}
