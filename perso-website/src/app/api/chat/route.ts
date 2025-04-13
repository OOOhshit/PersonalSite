import { NextResponse } from 'next/server';
import { getChatCompletion } from '@/lib/openai';

export async function POST(request: Request) {
  try {
    const { message, messageCount } = await request.json();
    
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const response = await getChatCompletion(message, messageCount);
    
    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 