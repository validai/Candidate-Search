import { Candidate } from "../interfaces/Candidate.interface";

const GITHUB_API_URL = "https://api.github.com";


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
          return (await userResponse.json()) as Candidate; 
        } catch (error) {
          console.error(`Error fetching details for user ${user.login}:`, error);
          return null;
        }
      })
    );

    return usersWithDetails.filter((user) => user !== null); 
  } catch (error) {
    console.error("Error searching GitHub users:", error);
    return [];
  }
};




export const fetchCandidates = async (query: string): Promise<Candidate[]> => {
  return await searchGithub(query);
};




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

    return (await response.json()) as Candidate; 
  } catch (error) {
    console.error(`Error fetching GitHub user (${username}):`, error);
    return null;
  }
};