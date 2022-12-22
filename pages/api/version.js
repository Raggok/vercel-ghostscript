import fs from "fs";

export default async function handler(req, res) {
  // version: await gs.version()

  res.status(200).json({ exists: fs.readdirSync("./") });
}
