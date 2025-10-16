"use client";

import { type UseChatHelpers } from "@ai-sdk/react";
import { ArrowUp, Square } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export function MultimodalInput({
  input,
  setInput,
  append,
  status,
  stop,
}: {
  input: string;
  setInput: (value: string) => void;
  append: UseChatHelpers["append"];
  status: string;
  stop: () => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || status === "submitted") return;

    append({
      role: "user",
      content: input,
    });
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full rounded-xl border bg-background p-3 shadow-sm"
    >
      <Textarea
        ref={textareaRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Send a message..."
        className="min-h-[44px] max-h-[200px] resize-none border-0 bg-transparent p-2 pr-12 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
          }
        }}
      />
      
      <div className="absolute bottom-3 right-3">
        {status === "submitted" ? (
          <Button
            type="button"
            size="icon"
            onClick={stop}
            className="h-8 w-8 rounded-full"
          >
            <Square className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim()}
            className="h-8 w-8 rounded-full"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        )}
      </div>
    </form>
  );
}