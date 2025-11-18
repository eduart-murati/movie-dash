# MovieDash

MovieDash is a minimal web application built with **React + TypeScript + Vite** that allows you to discover and explore movies. You can browse movies by **category**, filter by **lists**, and watch trailers when available. The app uses **TMDB API**, so you will need an API key to fetch movie data. The UI is responsive and built with **Chakra UI**.

## Getting Started

To get started with MovieDash, follow these steps:

1. **Clone** this repository to your local machine.
2. Run `npm install` to install all dependencies.
3. Get a TMDB API key at [https://www.themoviedb.org/](https://www.themoviedb.org/).
4. Add the API key to `.env` file.
5. Run `npm run dev` to start the local development server.
6. Open your browser at [http://localhost:5173](http://localhost:5173) to see the app in action.

## Features

- Browse movies by **category** and filter by custom **lists**.
- Watch trailers for movies if available.
- Display movie posters, titles, release dates, and ratings.
- Responsive UI for desktop and mobile devices.
- Pagination for browsing large sets of movies.
- Simple, modular, and reusable React components.

## Project Structure

- **src/components/** – UI components such as `MovieCard`, `MovieGrid`, `NavBar`.
- **src/hooks/** – Custom hooks like `useMovies` and `useCategories`.
- **src/services/** – Functions for fetching API data and data processing.
- **App.tsx** – Main application entry point.
- **main.tsx** – Renders React into the DOM.

## Learnings

This project is useful for learning how to:

- Build modern front-end applications with React and TypeScript.
- Manage application **state** using custom hooks.
- Create reusable and modular React components.
- Use UI libraries like Chakra UI effectively.
- Connect your front-end to external APIs (TMDB API).
- Apply best practices for clean code and TypeScript.

MovieDash is minimal and can be extended further with new features such as user watchlists, favorite movies, or additional trailer integrations.
