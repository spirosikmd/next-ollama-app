This repository is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses [Vercel's AI SDK](https://sdk.vercel.ai/getting-started) and [Langchain](https://js.langchain.com/v0.2/docs/introduction/) to implement an LLM-powered chatbot with the `llama3.1` model downloaded from [Ollama](https://ollama.com).

I recommend using the [Open WebUI project](https://docs.openwebui.com). It is an extensible, feature-rich, and user-friendly self-hosted WebUI designed to operate entirely offline. It supports various LLM runners, including Ollama and OpenAI-compatible APIs.

## Getting Started

Install the packages:

```bash
npm install
```

Download [Ollama](https://ollama.com) and run the `llama3.1` model:

```bash
ollama run llama3.1
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can edit the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the Next.js creators.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
