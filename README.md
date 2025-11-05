# Masonry Grid Photo Gallery

A responsive, dynamic photo gallery app built with **React**, **TypeScript**, and **Styled Components**, featuring infinite scrolling, search, and a detailed photo view.

---

### Environment Variables

Copy `.env.template` to `.env` and fill in your own Pexels API key:

## Features

- **Infinite Scroll** for curated photos.
- **Search** photos by keyword.
- **Photo Details** view showing photographer, description, and full-size image.
- **Responsive Design** with dynamic columns.
- **Error Boundaries** to handle unexpected runtime errors gracefully.
- **Custom Hooks** for data fetching and state management.
- **Unit Tests** for Grid and virtualized photo rendering.
  _Note: Only one test is implemented for demonstration purposes, as this is an interview task and full test coverage was not completed._

---

## Tech Stack

- **Frontend:** Node v24, React v19, TypeScript, Styled Components
- **Testing:** Vitest + React Testing Library
- **API:** Pexels API (for photos)
- **Utilities:** Custom debounce, throttle

---

## Project Structure

src/
├─ api/ # API service
├─ components/ # Reusable UI components
│ ├─ Grid/ # Masonry Grid, Columns, VirtualPhoto
│ ├─ InfiniteScroll/ # Infinite Scroll Wrapper
│ ├─ Search/ # Search input
│ ├─ Spinner/ # Loading indicator
│ └─ ...
├─ hooks/ # Custom hooks (useVisibilityObserver)
├─ pages/ # App pages (Home, PhotoDetails)
├─ utils/ # Utilities (debounce, throttle)
└─ routes/ # App Router
└─ styles/ # Global styles
