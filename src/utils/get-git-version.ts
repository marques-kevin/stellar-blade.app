import * as git from "git-rev-sync";

/**
 * Returns the current git short hash, or a fallback when git metadata
 * is unavailable (e.g. incomplete .git after copying the project).
 */
export function getGitVersion(): string {
  if (process.env.GIT_VERSION) {
    return process.env.GIT_VERSION;
  }

  try {
    return git.short();
  } catch {
    return "dev";
  }
}
