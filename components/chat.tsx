"use client";

import { useChat } from "@ai-sdk/react";
import { ChatHeader } from "@/components/chat-header";
import { Messages } from "@/components/messages";
import { MultimodalInput } from "@/components/multimodal-input";

export function Chat({ id }: { id: string }) {
  const {
    messages,
    input,
    setInput,
    append,
    status,
    stop,
  } = useChat({
    id,
    api: "/api/chat",
  });

  return (
    <div className="overscroll-behavior-contain flex h-dvh min-w-0 touch-pan-y flex-col bg-background">
      <ChatHeader />
      
      <Messages
        messages={messages}
        status={status}
      />

      <div className="sticky bottom-0 z-1 mx-auto flex w-full max-w-4xl gap-2 border-t-0 bg-background px-2 pb-3 md:px-4 md:pb-4">
        <MultimodalInput
          input={input}
          setInput={setInput}
          append={append}
          status={status}
          stop={stop}
        />
      </div>
    </div>
  );
}