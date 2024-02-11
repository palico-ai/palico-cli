import { SimpleApplicationConfig } from "@palico-ai/app";
import { AppPromptBuilder } from "./prompt_builder";
import { TrelloToolSet } from "./toolsets";

const config: SimpleApplicationConfig = {
  model: "gpt-3.5-turbo-0125",
  openaiApiKey: "...",
  promptBuilder: new AppPromptBuilder(),
  toolset: TrelloToolSet,
};

export default config;