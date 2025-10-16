"use client";

import { Sparkles } from "lucide-react";

export function Greeting() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <Sparkles className="h-8 w-8 text-primary" />
      </div>
      <h2 className="mb-2 font-semibold text-2xl">Welcome to AI Chat</h2>
      <p className="text-muted-foreground">
        Start a conversation by typing a message below.
      </p>
    </div>
  );
}