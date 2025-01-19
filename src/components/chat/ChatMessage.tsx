import React from 'react';

interface ChatMessageProps {
  content: string;
  isBot: boolean;
  timestamp: Date;
}

export function ChatMessage({ content, isBot, timestamp }: ChatMessageProps) {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`max-w-[80%] ${
        isBot 
          ? 'bg-white' 
          : 'bg-[#5de0e6] text-white'
        } rounded-2xl px-4 py-2 shadow-sm`}
      >
        <p className="text-sm">{content}</p>
        <span className="text-xs opacity-60 mt-1 block">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}