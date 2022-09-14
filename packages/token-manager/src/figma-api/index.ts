import fs from "fs";
import axios from "axios";

export async function start() {
  console.log("Figma API");

  const FIGMA_API_TOKEN = process.env.FIGMA_API_TOKEN || "";
  const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY || "";
  const FIGMA_PLUGIN_TOKENS_ID =
    process.env.FIGMA_PLUGIN_TOKENS_ID || "843461159747178978";

  if (!FIGMA_API_TOKEN || !FIGMA_FILE_KEY) {
    console.log("No API or FILE Keys");
    return false;
  }

  const docId = FIGMA_FILE_KEY;

  const options = {
    headers: {
      "X-Figma-Token": FIGMA_API_TOKEN,
    },
  };

  const { data } = await axios(
    `https://api.figma.com/v1/files/${docId}?plugin_data=shared`,
    options
  );

  fs.writeFileSync("./tokens-plugin.json", JSON.stringify(data));
}
