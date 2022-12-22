import fs from "fs";

import gszip from "gs.zip";

export default async function handler(req, res) {
  // version: await gs.version()

  const files = fs
    .readdirSync("./")
    .map((file) =>
      fs.lstatSync(file).isDirectory()
        ? file + "/" + fs.readdirSync(file)
        : file
    );

  res.status(200).json({ files });
}
