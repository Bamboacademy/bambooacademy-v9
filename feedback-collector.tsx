'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, ThumbsUp, ThumbsDown, Star, Send } from 'lucide-react'

export function FeedbackCollector() {
  const [feedbackType, setFeedbackType] = useState<'positive' | 'negative' | null>(null)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Track feedback submission
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'feedback_submitted', {
        event_category: 'engagement',
        event_label: feedbackType,
        value: rating
      })
    }
    
    // Send to your feedback collection system
    console.log('Feedback:', { feedbackType, rating, comment, email })
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto shadow-lg border-0 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl">
        <CardContent className="p-6 text-center space-y-4">
          <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto">
            <ThumbsUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800">Thank you!</h4>
            <p className="text-sm text-slate-600">Your feedback helps us improve</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-md mx-auto shadow-lg border-0 bg-white rounded-2xl">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="text-center">
            <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              <MessageSquare className="w-4 h-4 mr-1" />
              Quick Feedback
            </Badge>
            <h4 className="font-bold text-slate-800 mt-2">What do you think so far?</h4>
          </div>

          {!feedbackType && (
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setFeedbackType('positive')}
                className="flex flex-col items-center space-y-2 p-4 border-2 border-slate-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-300"
              >
                <ThumbsUp className="w-8 h-8 text-emerald-500" />
                <span className="text-sm font-medium">Love it!</span>
              </button>
              <button
                onClick={() => setFeedbackType('negative')}
                className="flex flex-col items-center space-y-2 p-4 border-2 border-slate-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-300"
              >
                <ThumbsDown className="w-8 h-8 text-red-500" />
                <span className="text-sm font-medium">Not sure</span>
              </button>
            </div>
          )}

          {feedbackType && (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Star Rating */}
              <div className="text-center space-y-2">
                <p className="text-sm text-slate-600">Rate your interest level:</p>
                <div className="flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="transition-colors duration-200"
                    >
                      <Star 
                        className={`w-6 h-6 ${
                          star <= rating 
                            ? 'text-amber-400 fill-current' 
                            : 'text-slate-300'
                        }`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Comment */}
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="What would make this perfect for your child? (optional)"
                className="w-full p-3 border border-slate-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                rows={3}
              />

              {/* Email for follow-up */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email (optional - for follow-up questions)"
                className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300"
                disabled={rating === 0}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Feedback
              </Button>
            </form>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
