# Toni Osho - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full Stack Developer, Game Developer, and Software Engineer. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Animations**: Smooth animations powered by Framer Motion
- **Video Background**: Immersive background video with optimized loading
- **Project Showcase**: Dynamic project cards with detailed modals
- **Skills & Technologies**: Comprehensive overview of technical expertise
- **Professional Experience**: Timeline of career achievements
- **Contact Integration**: Direct contact links and information

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with custom components
- **Assets**: Optimized images and videos

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website/Toni-Osho-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify via drag-and-drop or connect your repository for automatic deployments.

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your web hosting service.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # UI-specific components
├── data/               # Static data (projects, etc.)
├── pages/              # Main page components
├── assets/             # Static assets
└── styles/             # CSS and styling files

public/
├── Toni-Osho-Portfolio/
│   ├── images/         # Project images and photos
│   ├── icons/          # Technology and skill icons
│   └── Videos/         # Background videos
```

## Customization

### Adding New Projects

1. Add project data to `src/data/projects.ts`
2. Include project images in `public/Toni-Osho-Portfolio/images/`
3. Projects will automatically appear in the portfolio

### Updating Skills

1. Modify the skills arrays in `src/pages/Home.tsx`
2. Add corresponding icons to `public/Toni-Osho-Portfolio/icons/`

### Changing Content

- **About Section**: Edit the about text in `src/pages/Home.tsx`
- **Experience**: Update the experience array in `src/pages/Home.tsx`
- **Contact Info**: Modify contact details in relevant components

## Configuration

### Base URL Configuration

If deploying to a subdirectory, update the base URL in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-subdirectory/',
  // ... other config
})
```

### Environment Variables

Create a `.env` file for any environment-specific variables:

```
VITE_API_URL=your_api_url_here
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

**Toni Osho**
- Email: [your.email@example.com]
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from various open-source icon libraries
- Background video and images are original content