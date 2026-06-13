import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

const ROOT = path.resolve(__dirname, "..");
const COVERS_DIR = path.join(ROOT, "static/covers");
const CHARACTERS_DIR = path.join(ROOT, "static/characters");
const OG_DIR = path.join(ROOT, "static/og");

type CoverDef = {
  filename: string;
  title: string;
  subtitle: string;
  color: string;
};
type CharacterDef = { filename: string; name: string; color: string };

const COVERS: CoverDef[] = [
  {
    filename: "eidos-7.jpg",
    title: "Eidos 7",
    subtitle: "Stellar Blade",
    color: "0x1a2a3a",
  },
  {
    filename: "xion.jpg",
    title: "Xion",
    subtitle: "Last Human City",
    color: "0x2a1a3a",
  },
  {
    filename: "wasteland.jpg",
    title: "Wasteland",
    subtitle: "Stellar Blade",
    color: "0x3a2a1a",
  },
  {
    filename: "great-desert.jpg",
    title: "Great Desert",
    subtitle: "Stellar Blade",
    color: "0x4a3a1a",
  },
  {
    filename: "altess-levoire.jpg",
    title: "Altess Levoire",
    subtitle: "Stellar Blade",
    color: "0x1a3a3a",
  },
  {
    filename: "matrix-11.jpg",
    title: "Matrix 11",
    subtitle: "Stellar Blade",
    color: "0x2a2a2a",
  },
  {
    filename: "abyss-levoire.jpg",
    title: "Abyss Levoire",
    subtitle: "Stellar Blade",
    color: "0x0a1a2a",
  },
  {
    filename: "eidos-9.jpg",
    title: "Eidos 9",
    subtitle: "Stellar Blade",
    color: "0x1a1a4a",
  },
  {
    filename: "space-complex.jpg",
    title: "Space Complex",
    subtitle: "Stellar Blade",
    color: "0x0a2040",
  },
  {
    filename: "other-locations.jpg",
    title: "Other Locations",
    subtitle: "Stellar Blade",
    color: "0x202020",
  },
  {
    filename: "boss-battles.jpg",
    title: "Boss Battles",
    subtitle: "Stellar Blade",
    color: "0x400a0a",
  },
  {
    filename: "vocal-collection.jpg",
    title: "Vocal Collection",
    subtitle: "Stellar Blade OST",
    color: "0x1a2040",
  },
  {
    filename: "story-and-credits.jpg",
    title: "Story & Credits",
    subtitle: "Stellar Blade",
    color: "0x1a1a2a",
  },
  {
    filename: "top-100.jpg",
    title: "Top Liked",
    subtitle: "Stellar Blade Music",
    color: "0x18181b",
  },
];

const CHARACTERS: CharacterDef[] = [
  { filename: "eve.webp", name: "EVE", color: "0xFFD700" },
  { filename: "adam.webp", name: "Adam", color: "0x4A5568" },
  { filename: "lily.webp", name: "Lily", color: "0xE53E3E" },
  { filename: "tachy.webp", name: "Tachy", color: "0x3182CE" },
  { filename: "raven.webp", name: "Raven", color: "0x553C9A" },
  { filename: "orcal.webp", name: "Orcal", color: "0x2D3748" },
  { filename: "enya.webp", name: "Enya", color: "0xD53F8C" },
  { filename: "kaya.webp", name: "Kaya", color: "0x38A169" },
  { filename: "su.webp", name: "Su", color: "0xDD6B20" },
  { filename: "mann.webp", name: "Mann", color: "0x718096" },
  { filename: "scarlet.webp", name: "Scarlet", color: "0xC53030" },
  { filename: "roxanne.webp", name: "Roxanne", color: "0x805AD5" },
];

function escapeDrawtext(text: string): string {
  return text.replace(/:/g, "\\:").replace(/'/g, "'\\\\\\''");
}

function generateCover(cover: CoverDef, outputPath: string) {
  const title = escapeDrawtext(cover.title);
  const subtitle = escapeDrawtext(cover.subtitle);
  const filter = [
    `drawtext=text='${title}':fontsize=72:fontcolor=0x00D4FF:x=(w-text_w)/2:y=(h/2)-60`,
    `drawtext=text='${subtitle}':fontsize=28:fontcolor=0xFFFFFF:x=(w-text_w)/2:y=(h/2)+30`,
    `drawtext=text='♪':fontsize=120:fontcolor=0x00D4FF@0.3:x=(w-text_w)/2:y=80`,
  ].join(",");

  execSync(
    `ffmpeg -y -f lavfi -i "color=c=${cover.color}:s=1200x1200" -vf "${filter}" -frames:v 1 "${outputPath}"`,
    { stdio: "pipe" }
  );
}

function generateCharacter(char: CharacterDef, outputPath: string) {
  const name = escapeDrawtext(char.name);
  const pngPath = outputPath.replace(".webp", ".png");
  const filter = [
    `drawtext=text='${name}':fontsize=48:fontcolor=0xFFFFFF:x=(w-text_w)/2:y=(h-text_h)/2`,
  ].join(",");

  execSync(
    `ffmpeg -y -f lavfi -i "color=c=${char.color}:s=512x512" -vf "${filter}" -frames:v 1 "${pngPath}"`,
    { stdio: "pipe" }
  );
  execSync(`cwebp -q 85 "${pngPath}" -o "${outputPath}"`, { stdio: "pipe" });
  fs.unlinkSync(pngPath);
}

function generateBackground(outputPath: string) {
  execSync(
    `ffmpeg -y -f lavfi -i "gradients=s=512x512:c0=0x0a1628:c1=0x1a2744" -frames:v 1 "${outputPath}"`,
    { stdio: "pipe" }
  );
}

function generateOgImage(outputPath: string) {
  const filter = [
    `drawtext=text='Stellar Blade Music':fontsize=64:fontcolor=0x00D4FF:x=(w-text_w)/2:y=(h/2)-20`,
    `drawtext=text='Official Soundtrack Player':fontsize=32:fontcolor=0xFFFFFF:x=(w-text_w)/2:y=(h/2)+50`,
  ].join(",");

  execSync(
    `ffmpeg -y -f lavfi -i "gradients=s=1200x630:c0=0x0a1628:c1=0x1a2744" -vf "${filter}" -frames:v 1 "${outputPath}"`,
    { stdio: "pipe" }
  );
}

function main() {
  fs.mkdirSync(COVERS_DIR, { recursive: true });
  fs.mkdirSync(CHARACTERS_DIR, { recursive: true });
  fs.mkdirSync(OG_DIR, { recursive: true });

  for (const cover of COVERS) {
    const output = path.join(COVERS_DIR, cover.filename);
    generateCover(cover, output);
    console.log(`Generated ${cover.filename}`);
  }

  for (const char of CHARACTERS) {
    const output = path.join(CHARACTERS_DIR, char.filename);
    generateCharacter(char, output);
    console.log(`Generated ${char.filename}`);
  }

  generateBackground(path.join(CHARACTERS_DIR, "characters-background.png"));
  console.log("Generated characters-background.png");

  generateOgImage(path.join(OG_DIR, "home.png"));
  console.log("Generated og/home.png");
}

main();
