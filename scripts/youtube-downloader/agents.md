# YouTube Downloader Agent Notes

The filename should use kebab-case for Stellar Blade tracks.

Example: `Everglow - Stellar Blade OST.mp3` → `everglow.mp3`

After downloading, run:

```bash
yarn tsx scripts/generate-stellar-blade-tracks.ts
```

The `@src/database/artists.ts` file defines a single artist: `stellar-blade`.
