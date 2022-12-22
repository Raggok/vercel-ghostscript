import path from "path";

export default async function handler(req, res) {
  // version: await gs.version()

  const libsDirectory = path.join(process.cwd(), "libs");
  const gszip = path.join(libsDirectory, "ghostscript-10.0.0-linux-x86_64.tgz");

  res.status(200).json({ gszip });
}
