# Stellar Blade Music

A music player application for Stellar Blade soundtracks.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd stellar-musics
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables (if needed):

   - Create a `.env` file with required configuration
   - See documentation for details on environment setup

4. Start the development server:

```bash
yarn start
```

The application will be available at `http://localhost:28473`

## Documentation

For more detailed information, please refer to the documentation:

- [Adding Music to the Database](./docs/adding-music.md) - Learn how to add new music tracks to the database
- [Project Structure](./docs/project-structure.md) - Understand how the project is organized
- [How Ladders Work](./docs/ladders.md) - Learn about the ladder system and build-time data fetching

## Regenerating the track database

After adding MP3 files to `musics/`, run:

```bash
yarn tsx scripts/generate-stellar-blade-tracks.ts
```
