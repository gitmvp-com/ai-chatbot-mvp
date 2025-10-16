# AI Chatbot MVP

A minimal viable product version of the Vercel AI Chatbot, built with Next.js 15 and the AI SDK.

## Features

- ✨ Simple chat interface with AI streaming responses
- 🎨 Modern UI with Tailwind CSS v4
- 🌓 Dark mode support
- 📱 Responsive design
- ⚡ Built with Next.js 15 App Router
- 🤖 Powered by AI SDK

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gitmvp-com/ai-chatbot-mvp.git
cd ai-chatbot-mvp
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your OpenAI API key:
```
OPENAI_API_KEY=your-actual-api-key-here
```

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework:** Next.js 15.3.0-canary.31
- **AI SDK:** ai@5.0.26, @ai-sdk/react@2.0.26
- **Styling:** Tailwind CSS 4.1.13
- **UI Components:** Radix UI primitives
- **Font:** Geist & Geist Mono
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Differences from Original

This MVP simplifies the original Vercel AI Chatbot by:

- ❌ No authentication (removed next-auth)
- ❌ No database persistence (no chat history storage)
- ❌ No file attachments
- ❌ No advanced features (artifacts, code execution, etc.)
- ✅ Core chat functionality only
- ✅ Minimal dependencies
- ✅ Easy to understand and extend

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/gitmvp-com/ai-chatbot-mvp)

Don't forget to add your `OPENAI_API_KEY` environment variable in your Vercel project settings!

## License

MIT

## Original Project

Based on [Vercel AI Chatbot](https://github.com/vercel/ai-chatbot)