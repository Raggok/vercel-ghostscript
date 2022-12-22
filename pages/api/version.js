import fs from "fs";

export default async function handler(req, res) {
  // version: await gs.version()

  const files = fs
    .readdirSync("./")
    .map((file) => file + "/" + fs.readdirSync(file));

  res.status(200).json({ files });
}
