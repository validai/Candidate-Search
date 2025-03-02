# Candidate Search Application

## Overview

The Candidate Search application allows users to search for GitHub profiles, view candidate details, and save or remove candidates from a list of potential candidates. The application fetches data from the GitHub API and stores selected candidates in local storage.

## Features

- Search for candidates using GitHub usernames
- View candidate details including avatar, location, email, company, and bio
- Save candidates to a list of potential candidates
- Remove candidates from the saved list
- Navigate between the search page and saved candidates page
- Data persistence using local storage

## Technologies Used

- React with Vite
- React Router for navigation
- GitHub API for fetching candidate data
- Local Storage for saving candidates
- CSS for styling

## Installation

1. Clone the repository:
   git clone <repository-url

2. Navigate to the project directory:
   cd candidate-search

3. Install Dependencies:
   npm install

4. Create a .env file in the root directory and add the GitHub API token:
   VITE_GITHUB_TOKEN=your_personal_access_token

5.Start the development server:
  npm run dev

## Deployment

1. Build the project:
   npm run build
2. Deploy the dist/ folder to a hosting service such as Netlify, Vercel, or Render.

## License

This project is licensed under the MIT License.
