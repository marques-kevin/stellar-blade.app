import { Track } from "../types/track.type";
import { Eidos7Tracks } from "./albums/eidos-7";
import { XionTracks } from "./albums/xion";
import { WastelandTracks } from "./albums/wasteland";
import { GreatDesertTracks } from "./albums/great-desert";
import { AltessLevoireTracks } from "./albums/altess-levoire";
import { Matrix11Tracks } from "./albums/matrix-11";
import { AbyssLevoireTracks } from "./albums/abyss-levoire";
import { Eidos9Tracks } from "./albums/eidos-9";
import { SpaceComplexTracks } from "./albums/space-complex";
import { OtherLocationsTracks } from "./albums/other-locations";
import { BossBattlesTracks } from "./albums/boss-battles";
import { VocalCollectionTracks } from "./albums/vocal-collection";
import { StoryAndCreditsTracks } from "./albums/story-and-credits";

export const tracks: Track[] = [
  ...Eidos7Tracks,
  ...XionTracks,
  ...WastelandTracks,
  ...GreatDesertTracks,
  ...AltessLevoireTracks,
  ...Matrix11Tracks,
  ...AbyssLevoireTracks,
  ...Eidos9Tracks,
  ...SpaceComplexTracks,
  ...OtherLocationsTracks,
  ...BossBattlesTracks,
  ...VocalCollectionTracks,
  ...StoryAndCreditsTracks,
];
