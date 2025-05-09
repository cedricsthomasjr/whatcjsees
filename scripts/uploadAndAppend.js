import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const toUploadDir = path.join(__dirname, "../to-upload");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function uploadOnce() {
  const files = fs.readdirSync(toUploadDir).filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return [".jpg", ".jpeg", ".png", ".webp"].includes(ext);
  });

  if (files.length === 0) {
    console.log("⚠️  No images found in /to-upload/");
    return;
  }

  console.log("\n🗂️  Images ready to upload:");
  files.forEach((file, i) => {
    console.log(`  ${i + 1}. ${file}`);
  });

  const index = parseInt(await ask("\n👉 Select a file by number: "), 10) - 1;
  if (index < 0 || index >= files.length) {
    console.log("❌ Invalid selection. Skipping.");
    return;
  }

  const fileName = files[index];

  // Prompt for metadata
  const title = await ask("📸 Photo title: ");
  const alt = await ask("📝 Alt text: ");
  const category = await ask(
    "🗂️  Category (Cityscapes, Currents, High Peaks): "
  );
  const description = await ask("🧾 Description: ");
  const location = await ask("📍 Location: ");
  const camera = await ask("📷 Camera used: ");
  const lens = await ask("🔭 Lens used: ");
  const software = await ask("🖥️ Editing software: ");

  const normalizedCategory = category.trim().toLowerCase();
  const ext = path.extname(fileName);
  const finalName = `${title.toLowerCase().replace(/\s+/g, "-")}${ext}`;

  const sourcePath = path.join(toUploadDir, fileName);
  const targetDir = path.join(
    __dirname,
    `../public/collections/${normalizedCategory}`
  );
  const targetPath = path.join(targetDir, finalName);
  const relativeSrc = `/collections/${normalizedCategory}/${finalName}`;

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`📁 Created: /public/collections/${normalizedCategory}`);
  }

  fs.copyFileSync(sourcePath, targetPath);
  fs.unlinkSync(sourcePath);
  console.log("🧹 Deleted original file from /to-upload/");

  const jsonPath = path.join(__dirname, "../data/gallery.json");
  const galleryData = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
  const lastId = galleryData.length > 0 ? Number(galleryData.at(-1).id) : 0;
  const newId = (lastId + 1).toString();

  const newEntry = {
    id: newId,
    src: relativeSrc,
    alt,
    title,
    category: category.trim(),
    description,
    location,
    camera,
    lens,
    software,
  };

  galleryData.push(newEntry);
  fs.writeFileSync(jsonPath, JSON.stringify(galleryData, null, 2));

  console.log("\n✅ Upload complete!");
  console.log(`🖼️  Saved as: ${relativeSrc}`);
  console.log(`🆔  Assigned ID: ${newId}`);
}

async function run() {
  let keepGoing = true;
  while (keepGoing) {
    await uploadOnce();
    const again = await ask("\n➕ Upload another photo? (y/n): ");
    keepGoing = again.trim().toLowerCase() === "y";
  }
  rl.close();
}

run();
