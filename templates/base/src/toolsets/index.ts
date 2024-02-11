import { ToolExecutionEnvironment, Toolset } from "@palico-ai/app";
import * as z from "zod";

export const TrelloToolSet: Toolset = {
  name: "trello",
  tools: [
    {
      name: "create_lists",
      description: "Create one or more lists in the current board",
      input: z.object({
        titles: z.array(z.string()),
      }),
      output: z.array(z.object({
        id: z.string(),
        title: z.string(),
      })),
      executionEnvironment: ToolExecutionEnvironment.Client,
    },
    {
      name: "create_cards",
      description: "Create one or more cards in a list",
      input: z.object({
        titles: z.array(z.string()),
        listId: z.string(),
      }),
      output: z.array(z.object({
        id: z.string(),
        title: z.string(),
      })),
      executionEnvironment: ToolExecutionEnvironment.Client,
    },
    {
      name: "move_cards",
      description: "Moves one or more cards to a destination list",
      input: z.object({
        cardIds: z.array(z.string()),
        listId: z.string(),
      }),
      executionEnvironment: ToolExecutionEnvironment.Client,
    },
  ],
};