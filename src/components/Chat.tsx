"use client"

import React, { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"

interface Message {
  id: string
  content: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleSend = () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue('')

    // 模拟机器人回复
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: '这是一个自动回复消息',
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto">
      <Card className="flex-1 p-4 overflow-auto mb-4">
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
                    {message.sender === 'user' ? 'U' : 'B'}
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
      </Card>
      <div className="flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="输入消息..."
          className="flex-1"
        />
        <Button onClick={handleSend}>发送</Button>
      </div>
    </div>
  )
} 