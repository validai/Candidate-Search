import { Candidate } from "../interfaces/Candidate.interface";

const GITHUB_API_URL = "https://api.github.com";

/**
 * Function to search GitHub users by query
 */
export const searchGithub = async (query: string): Promise<Candidate[]> => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/search/users?q=${query}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data = await response.json();

    // Fetch detailed user info
    const usersWithDetails: Candidate[] = await Promise.all(
      data.items.map(async (user: any) => {
        try {
          const userResponse = await fetch(user.url, {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
              Accept: "application/vnd.github.v3+json",
            },
          });

          if (!userResponse.ok) return null;
          return (await userResponse.json()) as Candidate; // ✅ Ensure response matches Candidate type
        } catch (error) {
          console.error(`Error fetching details for user ${user.login}:`, error);
          return null;
        }
      })
    );

    return usersWithDetails.filter((user) => user !== null); // ✅ Remove null entries
  } catch (error) {
    console.error("Error searching GitHub users:", error);
    return [];
  }
};

/**
 * Function to fetch detailed candidate data
 */
export const fetchCandidates = async (query: string): Promise<Candidate[]> => {
  return await searchGithub(query);
};

/**
 * Function to get details about a specific GitHub user
 */
export const searchGithubUser = async (username: string): Promise<Candidate | null> => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    return (await response.json()) as Candidate; // ✅ Ensure response matches Candidate type
  } catch (error) {
    console.error(`Error fetching GitHub user (${username}):`, error);
    return null;
  }
};