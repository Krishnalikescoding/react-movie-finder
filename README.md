# 🎬 Listem

A modern movie discovery app built with React and Vite, powered by the TMDB API. Browse popular movies, web series, and anime — save your favourites and build your watchlist.

---

## 🚀 Live Demo

[react-movie-finder-web.netlify.app](https://react-movie-finder-web.netlify.app)

---

## ✨ Features

- 🎬 Browse popular **Movies**, **TV Shows**, and **Anime** on the home page
- 🔍 **Search** across all three categories
- ❤️ **Favourites** — save movies/shows you love
- 🔖 **Watchlist** — save content you want to watch later
- 🗂️ **Category tabs** in Favourites and Watchlist (Movies | TV Shows | Anime)
- 💾 **Persistent storage** — data saved across page refreshes via localStorage
- 📱 **Fully responsive** with a hamburger menu on mobile

---

## 🛠️ Tech Stack

- **React** — UI library
- **Vite** — build tool
- **React Router DOM** — client-side routing
- **TMDB API** — movie, TV show and anime data
- **LocalStorage** — persistent favourites and watchlist
- **CSS** — custom styling with responsive design

---

## 📁 Project Structure

```
src/
├── components/
│   ├── MovieCard.jsx       # Reusable card for movies/shows/anime
│   └── NavBar.jsx          # Navigation bar with hamburger menu
├── contexts/
│   └── MovieContext.jsx    # Global state for favourites and watchlist
├── css/
│   ├── App.css
│   ├── Favourites.css
│   ├── Home.css
│   ├── index.css
│   ├── MovieCard.css
│   └── NavBar.css
├── pages/
│   ├── Home.jsx            # Homepage with tabs and search
│   ├── Favourites.jsx      # Favourites page with category tabs
│   └── Watchlist.jsx       # Watchlist page with category tabs
├── services/
│   └── api.js              # TMDB API functions
├── App.jsx                 # Root component with routing
└── main.jsx                # Entry point
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js installed
- A TMDB API key — get one free at [themoviedb.org](https://www.themoviedb.org/settings/api)

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/listem.git
cd listem
```

2. Install dependencies

```bash
npm install
```

3. Add your TMDB API key in `src/services/api.js`

```js
const API_KEY = "your_api_key_here";
```

4. Start the development server

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🔌 API Reference

This app uses the following TMDB endpoints:

| Function            | Endpoint                                             | Description              |
| ------------------- | ---------------------------------------------------- | ------------------------ |
| `getPopularMovies`  | `/movie/popular`                                     | Fetch popular movies     |
| `getPopularTVShows` | `/tv/popular`                                        | Fetch popular TV shows   |
| `getPopularAnime`   | `/discover/tv?with_genres=16&with_origin_country=JP` | Fetch popular anime      |
| `searchMovies`      | `/search/movie`                                      | Search movies by query   |
| `searchTVShows`     | `/search/tv`                                         | Search TV shows by query |
| `searchAnime`       | `/search/tv?with_genres=16`                          | Search anime by query    |

---

## 🗺️ Pages

| Route         | Page       | Description               |
| ------------- | ---------- | ------------------------- |
| `/`           | Home       | Browse and search content |
| `/Favourites` | Favourites | View saved favourites     |
| `/Watchlist`  | Watchlist  | View watchlist            |

---

## 👨‍💻 Author

**Krishna Gupta**

- Portfolio: [krishnaguptadev.netlify.app](https://krishnaguptadev.netlify.app/)
- LinkedIn: [krishna-gupta-169a02370](https://www.linkedin.com/in/krishna-gupta-169a02370/)
- Email: guptakrishnadhananjay@gmail.com

---

## 🙏 Acknowledgements

- [TMDB](https://www.themoviedb.org/) for the free movie database API
- [React](https://react.dev/) and [Vite](https://vitejs.dev/) for the dev tooling
