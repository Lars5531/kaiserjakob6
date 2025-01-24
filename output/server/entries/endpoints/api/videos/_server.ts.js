import fs from "fs";
import path from "path";
import { j as json } from "../../../../chunks/index.js";
async function GET() {
  const videoFolder = path.resolve("static/projects");
  try {
    if (!fs.existsSync(videoFolder)) {
      return json({ error: `Ordner ${videoFolder} existiert nicht.` }, { status: 500 });
    }
    const files = await fs.promises.readdir(videoFolder);
    const videoFiles = files.filter((file) => file.endsWith(".mp4")).map((file) => `/projects/${file}`);
    return json(videoFiles);
  } catch (error) {
    console.error("Fehler beim Laden der Videos:", error);
    return json({ error: "Fehler beim Laden der Videos" }, { status: 500 });
  }
}
export {
  GET
};
