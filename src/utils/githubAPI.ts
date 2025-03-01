const GITHUB_API_URL = "https://api.github.com/search/users";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || "";

export const fetchCandidates = async (query: string) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}?q=${query}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.items; // GitHub returns users inside `items`
  } catch (error) {
    console.error("Error fetching candidates:", error);
    return [];
  }
};
