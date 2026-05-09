# Simen Røisi - Personal Portfolio

A sleek, modern, single-page React portfolio designed with a custom "stellar grey" and "warm orange" aesthetic. Built with performance and fluid animations in mind.

## 🚀 Tech Stack
- **React** 
- **Vite** 
- **Tailwind CSS**
- **Framer Motion** (for smooth scroll animations)
- **Lucide React** (SVG icons)

## 🛠 Quick Start

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
This project uses `package.json` to manage requirements. To install all necessary dependencies, simply run:
```bash
npm install
```

### Running Locally
Start the local development server:
```bash
npm run dev
```
Open your browser and visit the local address provided (usually `http://localhost:5173`).

### Building for Production
To compile the site into highly-optimized static files for deployment (e.g., Vercel, Netlify, GitHub Pages):
```bash
npm run build
```
This will output the finalized files into the `dist/` folder.

## 📁 Project Structure
- `src/components/`: Contains all the individual UI sections (Hero, About, TechStack, Projects).
- `src/data/portfolioData.js`: A centralized data file. Edit this file to easily update text, projects, and educational info without digging into the UI code!
- `public/`: Static assets like images and logos.
