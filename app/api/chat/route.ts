import { NextRequest } from 'next/server';
import { ChatOllama } from '@langchain/ollama';
import { AIMessage, HumanMessage } from '@langchain/core/messages';
import { Message } from 'postcss';
import { BytesOutputParser } from '@langchain/core/output_parsers';

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const model = new ChatOllama({
    model: 'llama3.1',
  });

  const parser = new BytesOutputParser();
  console.log(messages);

  const stream = await model
    .pipe(parser)
    .stream(
      (messages as Message[]).map((message) =>
        message.role == 'user'
          ? new HumanMessage(message.content)
          : new AIMessage(message.content)
      )
    );

  return new Response(stream, {
    status: 200,
    headers: {
      contentType: 'text/plain; charset=utf-8',
    },
  });
}
