import { SimpleApplicationConfig } from "@palico-ai/app";
import { AppPromptBuilder } from "./prompt_builder";
import { AppToolset } from "./toolset";
import * as dotenv from "dotenv";
dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  throw new Error("OpenAI API Key not found");
}

const model = process.env.OPENAI_MODEL ?? "gpt-3.5-turbo-0125";

const config: SimpleApplicationConfig = {
  model,
  openaiApiKey,
  promptBuilder: new AppPromptBuilder(),
  toolset: AppToolset,
};

export default config;