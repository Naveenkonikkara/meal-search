# MealSearch

MealSearch is a React + TypeScript + Vite web application that allows users to search for meals by name. For each meal, the app displays the recipe instructions, title, and image.

## Features

- Search for meals using the [TheMealDB API](https://www.themealdb.com/api.php)
- View meal title, image, and a short preview of recipe instructions
- Responsive design with dark mode support
- Built with React, TypeScript, Tailwind CSS, and Vite

## Getting Started

### Installation

```sh
git clone https://github.com/yourusername/meal-search.git
cd meal-search
npm install
```

### Development

```sh
npm run dev
```

### Build

```sh
npm run build
```

### Preview

```sh
npm run preview
```

## Project Structure

```
meal-search/
  src/
    components/
      Card.tsx        # Displays meal info
      SearchForm.tsx  # Search input and button
      Header.tsx      # Site header
      Footer.tsx      # Site footer
    layouts/
      MainLayout.tsx  # Page layout
    App.tsx           # Main app logic
    index.css         # Global styles
    main.tsx          # App entry point
  tailwind.config.js  # Tailwind CSS config
  package.json        # Project dependencies and scripts
```

## ESLint & TypeScript

This project uses ESLint for linting and TypeScript for type safety. See the configuration files for details.

## License

MIT

---

Powered by [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/).
