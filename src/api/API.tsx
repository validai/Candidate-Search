const GITHUB_API_URL = "https://api.github.com";

// Function to search GitHub users
export const searchGithub = async (query: string) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/search/users?q=${query}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.items; // Returns an array of users
  } catch (error) {
    console.error("Error searching GitHub users:", error);
    return [];
  }
};

// Function to fetch detailed candidate data
export const fetchCandidates = async (query: string) => {
  return await searchGithub(query); // Calls searchGithub function
};


// Function to get details about a specific GitHub user
export const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    return await response.json(); // Returns user details
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
};
