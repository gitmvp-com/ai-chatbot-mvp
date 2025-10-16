"use client";

import { MessageSquare } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function ChatHeader() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background px-4 py-3">
      <div className="flex items-center gap-2">
        <MessageSquare className="h-5 w-5" />
        <h1 className="font-semibold text-lg">AI Chat</h1>
      </div>
      <ThemeToggle />
    </header>
  );
}