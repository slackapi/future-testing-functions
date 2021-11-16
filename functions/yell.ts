import { DefineFunction, Schema } from "slack-cloud-sdk/mod.ts";

export const YellFunction = DefineFunction(
  "yell",
  {
    title: "Yell",
    description: "Capitalizes any input text",
    input_parameters: {
      text: {
        type: Schema.types.string,
        description: "The text to capitalize",
      },
    },
    output_parameters: {
      scream: {
        type: Schema.types.string,
        description: "The capitalized text",
      },
    },
  },
  async ({ inputs, client, env }) => {
    console.log(`capitalizing ${inputs.text}!`);
    return await {
      completed: true,
      outputs: { scream: inputs.text.toUpperCase() },
    };
  },
);
