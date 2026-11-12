# Atiar Rahman Nayeem — Portfolio

A modern personal portfolio built with React and Vite. It showcases work experience, projects, skills, AI tools, testimonials, and contact details in a polished single-page experience with smooth scrolling and clean section routes.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ ([download here](https://nodejs.org))

### Setup

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## ✨ Features

- Responsive hero section with profile image and call-to-action buttons
- Work experience, projects, skills, AI tools, testimonials, and contact sections
- Smooth scrolling, active navigation highlighting, and URLs that track the section currently in view
- Dark/light theme toggle
- Clean routes for sections such as `/experience`, `/projects`, `/contact`
- Unknown routes automatically fall back to the home page

## 📁 Project Structure

```text
src/
├── assets/
│   └── profile.jpg
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── AITools.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── SectionHeader.jsx
├── hooks/
│   ├── useTheme.js
│   ├── useReveal.js
│   └── useActiveNav.js
├── data.js
├── index.css
├── App.jsx
└── main.jsx
```

## ✏️ Updating Content

Most of the portfolio content lives in [src/data.js](src/data.js). Update the following arrays there:

- `NAV` for navigation items
- `SKILLS` for your technical stack
- `EXP` for work experience
- `PROJECTS` for portfolio projects
- `AI_TOOLS` for AI tools and usage
- `METRICS` for impact metrics
- `TESTIMONIALS` for recommendations
- `CONTACT_LINKS` for contact details

To change the profile photo, replace [src/assets/profile.jpg](src/assets/profile.jpg) with your new image while keeping the same filename.

To update the CV download link, change the file in the public folder and the related link in [src/components/Hero.jsx](src/components/Hero.jsx).

## 🎨 Theme Customization

Theme colors are defined in [src/hooks/useTheme.js](src/hooks/useTheme.js). You can update the accent color and light/dark palette there.

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be generated in the `dist/` folder.

## 🚀 Deployment

You can deploy the contents of `dist/` to platforms like Vercel, Netlify, or GitHub Pages.
