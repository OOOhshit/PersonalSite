"use client"

import React, { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Bot, X } from 'lucide-react'

interface Message {
  id: string
  content: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [messageCount, setMessageCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handleReset = () => {
    setMessages([])
    setMessageCount(0)
    setInputValue('')
  }

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: inputValue,
          messageCount: messageCount + 1
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setMessageCount(prev => prev + 1)
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, something went wrong. Please try again later.',
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen && messages.length === 0) {
      // Add welcome message
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        content: "Hi! I'm your Product Management Assistant. I can help you with questions about product strategy, user experience, market analysis, and more.",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }

  return (
    <>
      {/* Floating bot icon */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-4 right-4 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <Bot size={24} />
      </button>

      {/* Chat window */}
      <div className={`fixed bottom-4 right-4 w-[380px] transition-all duration-300 transform ${isOpen ? 'scale-100' : 'scale-0'} origin-bottom-right z-50`}>
        <div className="flex flex-col h-[500px] bg-background rounded-lg shadow-xl border">
          {/* Title bar */}
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center gap-2">
              <Bot size={20} className="text-primary" />
              <h2 className="text-lg font-semibold">PM Assistant</h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Left: {Math.max(0, 5 - messageCount)}/5
              </span>
              <button
                onClick={toggleChat}
                className="p-1 hover:bg-muted rounded"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages area */}
          <div className="flex-1 p-4 overflow-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div className={`flex ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-2 max-w-[80%]`}>
                    <Avatar className="w-8 h-8">
                      <div className="w-full h-full flex items-center justify-center bg-primary text-primary-foreground">
                        {message.sender === 'user' ? 'U' : 'PM'}
                      </div>
                    </Avatar>
                    <div
                      className={`rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Input area */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about product management..."
                className="flex-1"
                disabled={isLoading || messageCount >= 5}
              />
              <Button 
                onClick={handleSend}
                disabled={isLoading || messageCount >= 5}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </Button>
            </div>
            {messageCount >= 5 && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="mt-2 w-full"
              >
                Start New Chat
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  )
} 