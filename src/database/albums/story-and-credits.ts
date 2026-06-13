import { Track } from "@/types/track.type";
import { Albums } from "../albums";
import { Artists } from "../artists";

export const StoryAndCreditsTracks: Track[] = [
  {
    title: "Cost of Lost Memories (Ending)",
    title_id: "cost-of-lost-memories-ending",
    source: "/musics/cost-of-lost-memories-ending.mp3",
    duration: 270,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Credits 2",
    title_id: "credits-2",
    source: "/musics/credits-2.mp3",
    duration: 292,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Credits 3",
    title_id: "credits-3",
    source: "/musics/credits-3.mp3",
    duration: 284,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Credits",
    title_id: "credits",
    source: "/musics/credits.mp3",
    duration: 268,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Making New Memories (Ending)",
    title_id: "making-new-memories-ending",
    source: "/musics/making-new-memories-ending.mp3",
    duration: 198,
    created_at: new Date("2024-04-26"),
  },
  {
    title: "Return to the Colony (Ending)",
    title_id: "return-to-the-colony-ending",
    source: "/musics/return-to-the-colony-ending.mp3",
    duration: 335,
    created_at: new Date("2024-04-26"),
  }
].map((track) => ({
  ...track,
  ...Artists["stellar-blade"],
  ...Albums["story-and-credits"],
}));
