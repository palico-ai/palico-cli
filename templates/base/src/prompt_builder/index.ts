import { MessageContext, PromptBuilder } from "@palico-ai/app";

export class AppPromptBuilder implements PromptBuilder {
  async getPromptForQuery(query: string, params: {
    context: MessageContext
  }): Promise<string>  {
    return `
      Known Context:
      ${JSON.stringify(params.context, null, 2)}
      ===
      User Request: ${query}
    `
  }

  async getSystemPrompt(): Promise<string> {
    console.log("CMDKPromptBuilder.getSystemPrompt")
    return `
      You're a helpful assistant for a user who is trying to use a Trello board. 
      DO NOT make assumptions about what values to plug into functions.
      Ask the user for clarification if a user request is ambiguous.
    `
  }
}