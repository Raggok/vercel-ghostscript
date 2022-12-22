import fs from "fs";

import GS from "../../gs";

export default async function handler(req, res) {
  const gs = new GS();

  // version: await gs.version()

  res.status(200).json({ exists: fs.readdirSync("./libs/") });
}
