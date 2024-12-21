urban-vector/
├── public/
│ ├── index.html (Main HTML file)
│ ├── favicon.ico (Favicon)
│ ├── manifest.json (Web app manifest)
├── src/
│ ├── components/
│ │ ├── Header.jsx (Navigation bar)
│ │ ├── Hero.jsx (Hero section)
│ │ ├── About.jsx (About section)
│ │ ├── Portfolio.jsx (Portfolio section)
│ │ ├── Contact.jsx (Contact section)
│ │ ├── Footer.jsx (Footer component)
│ │ ├── shared/ (Reusable components)
│ │ │ ├── Button.jsx (Reusable button component)
│ │ │ ├── Card.jsx (Reusable card component)
│ │ │ ├── Modal.jsx (Reusable modal component)
│ │ │ ├── Navbar.jsx (Reusable navbar component)
│ │ │ ├── Spinner.jsx (Reusable spinner component)
│ ├── assets/ (Images, icons, and other assets)
│ │ ├── images/ (Image files)
│ │ ├── icons/ (Icon files)
│ │ ├── logo_Urbanvec.svg (Logo file)
│ │ ├── vectorData.js (Vector data file)
│ ├── pages/ (Page-level components)
│ │ ├── Home.jsx (Home page, combines all sections)
│ │ ├── AboutPage.jsx (About page)
│ │ ├── PortfolioPage.jsx (Portfolio page)
│ │ ├── ContactPage.jsx (Contact page)
│ ├── styles/ (Custom styles, e.g., Tailwind overrides)
│ │ ├── tailwind.config.js (Tailwind CSS configuration)
│ │ ├── global.css (Global CSS styles)
│ ├── App.jsx (Root component)
│ ├── index.js (Entry point)
│ ├── serviceWorker.js (Service worker for PWA)
│ ├── setupTests.js (Setup for testing)
│ ├── utils/ (Utility functions)
│ │ ├── api.js (API utility functions)
│ │ ├── helpers.js (Helper functions)
│ ├── hooks/ (Custom hooks)
│ │ ├── useTheme.js (Custom hook for theme management)
│ │ ├── useAuth.js (Custom hook for authentication)

| Component       | Color Class                                        | Mapped to Config                                   |
| --------------- | -------------------------------------------------- | -------------------------------------------------- |
| Buildings       | bg-primary, bg-secondary, bg-accent-dark, bg-coral | Defined in tailwind.config.js.                     |
| Trees           | bg-primary, bg-accent-dark                         | Moss Green, Deep Green.                            |
| Clouds          | bg-white                                           | A neutral white for light/dark modes.              |
| Street          | bg-accent-dark                                     | Deep Green for roads.                              |
| Text (Title)    | text-primary / dark:text-background-light          | Moss Green in light mode, light text in dark mode. |
| Text (Subtitle) | text-secondary / dark:text-accent.text             | Light Sage in light mode, Dark Teal in dark mode.  |
