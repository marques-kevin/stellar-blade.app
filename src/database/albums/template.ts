import { Track } from "@/types/track.type";
import { Albums } from "../albums";
import { Artists } from "../artists";

export const Template: Track[] = [
  {
    title: "Template",
    title_id: "template",
    source: "/musics/template.mp3",
    duration: 123,
    created_at: new Date("2024-04-26"),
    ...Artists["stellar-blade"],
    ...Albums["eidos-7"],
  },
];
