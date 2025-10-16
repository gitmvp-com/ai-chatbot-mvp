"use client";

import type { Message } from "ai";
import { useEffect, useRef } from "react";
import { MessageComponent } from "@/components/message";
import { Greeting } from "@/components/greeting";

export function Messages({
  messages,
  status,
}: {
  messages: Message[];
  status: string;
}) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="mx-auto max-w-4xl px-4 py-6">
        {messages.length === 0 ? (
          <Greeting />
        ) : (
          <div className="flex flex-col gap-4">
            {messages.map((message, index) => (
              <MessageComponent
                key={message.id || index}
                message={message}
                isLoading={status === "submitted" && index === messages.length - 1}
              />
            ))}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}