# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a React portfolio website built with Vite, TypeScript, and Tailwind CSS. The project is for showcasing game development, full-stack development, and software development work across three main portfolio sections.

## Development Commands
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## Tech Stack
- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Styling**: Tailwind CSS (PostCSS)
- **Linting**: ESLint with TypeScript, React Hooks, and React Refresh plugins

## Project Structure
- `src/App.tsx` - Main application component (currently default Vite template)
- `src/main.tsx` - React application entry point
- `src/index.css` - Global styles and Tailwind imports
- `public/` - Static assets
- TypeScript configuration uses project references with separate configs for app and Node

## Portfolio Requirements
The project follows a phased implementation approach outlined in `Reqirments.md`:

**Phase 1 (MVP)**: Header/navigation, home page with hero section, one portfolio section, contact form, responsive design

**Phase 2 (Enhanced)**: All portfolio sections (Game Dev, Full Stack, Software Dev), resume page, SEO optimization

**Phase 3 (Advanced)**: Testimonials, animations, analytics, dark mode

## Key Portfolio Sections to Implement
1. **Game Development** - Project showcases with demos
2. **Full Stack Development** - Web application projects
3. **Software Development** - General programming projects

Each section should include project screenshots, technology stacks, descriptions, live demo links, and case studies.

## Configuration Notes
- Uses ESLint with React Hooks and TypeScript rules
- Vite configured with React SWC plugin for fast builds
- Tailwind CSS configured via PostCSS
- Project currently in early development stage (default Vite template with minor modifications)

## Coding style 
- Try to keep code file no more than 300 line
- Prioritize make new modular components to help with ease of understanding 
- Add minimal comments  