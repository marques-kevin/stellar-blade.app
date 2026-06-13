import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

const ROOT = path.resolve(__dirname, "..");
const MUSICS_DIR = path.join(ROOT, "musics");
const ALBUMS_DIR = path.join(ROOT, "src/database/albums");

type AlbumDef = {
  key: string;
  name: string;
  cover: string;
  patterns: RegExp[];
};

const ALBUMS: AlbumDef[] = [
  {
    key: "eidos-7",
    name: "Eidos 7",
    cover: "/covers/eidos-7.jpg",
    patterns: [/^eidos-7-/, /^intro-/, /^flooded-commercial-sector/],
  },
  {
    key: "xion",
    name: "Xion",
    cover: "/covers/xion.jpg",
    patterns: [
      /^xion-/,
      /^gwen-hair-salon$/,
      /^enya-s-song-bar-music$/,
      /^atelier$/,
      /^dawn-/,
      /^take-me-away/,
      /^just-fine/,
      /^blur/,
      /^lullaby-of-secret/,
      /^oasis/,
    ],
  },
  {
    key: "wasteland",
    name: "Wasteland",
    cover: "/covers/wasteland.jpg",
    patterns: [
      /^wasteland/,
      /^scrapyard$/,
      /^nest$/,
      /^train-graveyard$/,
      /^ambush/,
    ],
  },
  {
    key: "great-desert",
    name: "Great Desert",
    cover: "/covers/great-desert.jpg",
    patterns: [/^great-desert-/],
  },
  {
    key: "altess-levoire",
    name: "Altess Levoire",
    cover: "/covers/altess-levoire.jpg",
    patterns: [/^altess-levoire/],
  },
  {
    key: "matrix-11",
    name: "Matrix 11",
    cover: "/covers/matrix-11.jpg",
    patterns: [/^matrix-11/],
  },
  {
    key: "abyss-levoire",
    name: "Abyss Levoire",
    cover: "/covers/abyss-levoire.jpg",
    patterns: [/^abyss-levoire/],
  },
  {
    key: "eidos-9",
    name: "Eidos 9",
    cover: "/covers/eidos-9.jpg",
    patterns: [/^eidos-9-/],
  },
  {
    key: "space-complex",
    name: "Space Complex",
    cover: "/covers/space-complex.jpg",
    patterns: [/^raphael-space-center/, /^space-/],
  },
  {
    key: "other-locations",
    name: "Other Locations",
    cover: "/covers/other-locations.jpg",
    patterns: [
      /^maintenance-sector/,
      /^hall-of-records$/,
      /^presence-chamber$/,
      /^prestige-lounge/,
      /^collapsed-rail/,
      /^contaminated-water-/,
      /^cargo-lift-/,
      /^passenger-lift$/,
      /^memory-tower$/,
      /^hypertube-/,
      /^laser-trap$/,
      /^buzzsaw-slide$/,
      /^karakuri$/,
    ],
  },
  {
    key: "boss-battles",
    name: "Boss Battles",
    cover: "/covers/boss-battles.jpg",
    patterns: [
      /^abaddon$/,
      /^behemoth$/,
      /^belial$/,
      /^brute$/,
      /^corrupter$/,
      /^demogorgon$/,
      /^elder-naytiba$/,
      /^gigas$/,
      /^juggernaut$/,
      /^battle-droid$/,
      /^boss-challenge$/,
      /^democrawler/,
      /^master-core$/,
      /^maelstrom$/,
      /^mann-phase-/,
      /^providence/,
      /^raven$/,
      /^royal-guard-quiel$/,
      /^scarlet-phase-/,
      /^tachy-boss-fight$/,
      /^roxanne$/,
      /^kaya$/,
      /^stalker$/,
      /^su$/,
      /^unidentified-naytiba$/,
    ],
  },
  {
    key: "vocal-collection",
    name: "Vocal Collection",
    cover: "/covers/vocal-collection.jpg",
    patterns: [
      /^everglow$/,
      /^shelter$/,
      /^beyond-fate-trio-version$/,
      /^the-song-of-/,
      /^sisterly-love$/,
      /^meet-lily$/,
      /^lily-/,
    ],
  },
  {
    key: "story-and-credits",
    name: "Story & Credits",
    cover: "/covers/story-and-credits.jpg",
    patterns: [/^credits/, /-ending$/],
  },
];

function getDuration(filePath: string): number {
  const output = execSync(
    `ffprobe -v quiet -show_entries format=duration -of csv=p=0 "${filePath}"`,
    { encoding: "utf-8" }
  ).trim();
  return Math.round(parseFloat(output));
}

function toTitle(titleId: string): string {
  const special: Record<string, string> = {
    "beyond-fate-trio-version": "Beyond Fate (Trio Ver.)",
    "enya-s-song-bar-music": "Enya's Song - Bar Music",
    "cost-of-lost-memories-ending": "Cost of Lost Memories (Ending)",
    "making-new-memories-ending": "Making New Memories (Ending)",
    "return-to-the-colony-ending": "Return to the Colony (Ending)",
    "flooded-commercial-sector-bonus-track":
      "Flooded Commercial Sector (Bonus Track)",
    "the-song-of-the-sirens": "The Song of the Sirens",
    "the-song-of-the-wanderer": "The Song of the Wanderer",
    "the-song-of-the-traveler": "The Song of the Traveler",
    "the-song-of-destiny": "The Song of Destiny",
    "tachy-boss-fight": "Tachy Boss Fight",
    "elder-naytiba": "Elder Naytiba",
    "eidos-7-city-underground-sector-combat":
      "Eidos 7 - City Underground Sector (Combat)",
  };

  if (special[titleId]) return special[titleId];

  return titleId
    .split("-")
    .map((word) => {
      if (word === "eidos" && titleId.includes("eidos-7")) return "Eidos 7";
      if (word === "eidos" && titleId.includes("eidos-9")) return "Eidos 9";
      if (word === "7" && titleId.startsWith("eidos-7")) return "";
      if (word === "9" && titleId.startsWith("eidos-9")) return "";
      if (word === "mp3") return "";
      if (word === "2" && titleId.endsWith("-2")) return "2";
      if (word === "3" && titleId.endsWith("-3")) return "3";
      if (word === "combat") return "(Combat)";
      if (word === "instrumental") return "(Instrumental)";
      if (word === "phase") return "Phase";
      if (word === "ver") return "Ver.)";
      if (word === "trio") return "(Trio";
      if (word === "version") return "Version";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .filter(Boolean)
    .join(" ")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/\s+/g, " ")
    .trim();
}

function toExportName(key: string): string {
  return (
    key
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("")
      .replace(/[^a-zA-Z0-9]/g, "") + "Tracks"
  );
}

function assignAlbums(titleId: string): string[] {
  const albums: string[] = [];
  for (const album of ALBUMS) {
    if (album.patterns.some((p) => p.test(titleId))) {
      albums.push(album.key);
    }
  }
  return albums;
}

function main() {
  const files = fs
    .readdirSync(MUSICS_DIR)
    .filter((f) => f.endsWith(".mp3"))
    .sort();

  console.log(`Found ${files.length} MP3 files`);

  const tracksByAlbum: Record<string, string[]> = {};
  for (const album of ALBUMS) {
    tracksByAlbum[album.key] = [];
  }

  const unassigned: string[] = [];

  for (const file of files) {
    const titleId = file.replace(/\.mp3$/, "");
    const albums = assignAlbums(titleId);
    if (albums.length === 0) {
      unassigned.push(titleId);
      tracksByAlbum["other-locations"].push(titleId);
      continue;
    }
    for (const album of albums) {
      tracksByAlbum[album].push(titleId);
    }
  }

  if (unassigned.length > 0) {
    console.warn("Unassigned tracks (added to other-locations):", unassigned);
  }

  const durations: Record<string, number> = {};
  for (const file of files) {
    const titleId = file.replace(/\.mp3$/, "");
    const filePath = path.join(MUSICS_DIR, file);
    durations[titleId] = getDuration(filePath);
    console.log(`${titleId}: ${durations[titleId]}s`);
  }

  // Generate albums.ts
  const albumsTs = `import { Playlist } from "@/types/playlist.type";

export const Albums: Record<string, Omit<Playlist, "tracks">> = {
${ALBUMS.map(
  (a) => `  "${a.key}": {
    playlist_name: "${a.name}",
    playlist_cover: "${a.cover}",
    playlist_id: "${a.key}",
    playlist_type: "jukebox",
  },`
).join("\n")}
};
`;

  fs.writeFileSync(path.join(ROOT, "src/database/albums.ts"), albumsTs);

  // Generate per-album files
  const imports: string[] = [];
  const exports: string[] = [];

  for (const album of ALBUMS) {
    const trackIds = tracksByAlbum[album.key];
    const exportName = toExportName(album.key);
    imports.push(`import { ${exportName} } from "./albums/${album.key}";`);
    exports.push(`  ...${exportName},`);

    const trackEntries = trackIds
      .map((titleId) => {
        const title = toTitle(titleId);
        return `  {
    title: ${JSON.stringify(title)},
    title_id: ${JSON.stringify(titleId)},
    source: "/musics/${titleId}.mp3",
    duration: ${durations[titleId]},
    created_at: new Date("2024-04-26"),
  }`;
      })
      .join(",\n");

    const albumFile = `import { Track } from "@/types/track.type";
import { Albums } from "../albums";
import { Artists } from "../artists";

export const ${exportName}: Track[] = [
${trackEntries}
].map((track) => ({
  ...track,
  ...Artists["stellar-blade"],
  ...Albums["${album.key}"],
}));
`;

    fs.writeFileSync(path.join(ALBUMS_DIR, `${album.key}.ts`), albumFile);
    console.log(`Generated ${album.key}.ts with ${trackIds.length} tracks`);
  }

  // Generate tracks.ts
  const tracksTs = `import { Track } from "../types/track.type";
${imports.join("\n")}

export const tracks: Track[] = [
${exports.join("\n")}
];
`;

  fs.writeFileSync(path.join(ROOT, "src/database/tracks.ts"), tracksTs);

  const totalEntries = Object.values(tracksByAlbum).reduce(
    (sum, ids) => sum + ids.length,
    0
  );
  console.log(
    `\nDone! ${files.length} unique files, ${totalEntries} track entries across albums.`
  );
}

main();
