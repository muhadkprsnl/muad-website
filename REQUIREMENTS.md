# Project Requirements - Muhad K Portfolio Website

## System Requirements

### Required
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **Operating System**: Windows, macOS, or Linux
- **RAM**: Minimum 2GB (4GB recommended)
- **Disk Space**: ~500MB for node_modules and build artifacts

### Optional
- **Git**: For version control and cloning the repository
- **Code Editor**: VS Code, WebStorm, or any modern IDE with TypeScript support

## Environment Setup

### Installation Steps

1. **Verify Node.js and npm are installed**
   ```bash
   node --version  # Should be v18.0.0 or higher
   npm --version   # Should be v9.0.0 or higher
   ```

2. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/ (LTS version recommended)

3. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd muhad-website
   ```

4. **Install project dependencies**
   ```bash
   npm install
   ```
   This will install all packages listed in `package.json`

## Development

### Start Development Server
```bash
npm run dev
```
- Dev server will run at: `http://localhost:8080` (or next available port)
- Auto-reload on file changes
- HMR (Hot Module Replacement) enabled

### Linting
```bash
npm run lint
```
- Checks code quality with ESLint
- Run before committing code

## Production

### Build for Production
```bash
npm run build
```
- Creates optimized build in `dist/` folder
- Minified and bundled assets
- Ready for deployment

### Preview Production Build
```bash
npm run preview
```
- Serves the production build locally
- Useful for testing before deployment

## Core Dependencies

### UI & Styling
- **React** 18.3.1 - UI library
- **React DOM** 18.3.1 - React rendering
- **Tailwind CSS** 3.4.17 - Utility-first CSS framework
- **shadcn/ui** - Component library (via package imports)

### Routing & State
- **React Router DOM** 6.30.1 - Client-side routing
- **TanStack Query** 5.83.0 - Data fetching and caching

### Animations & Effects
- **Framer Motion** 12.23.24 - Animation library
- **GSAP** 3.13.0 - Animation library
- **@gsap/react** 2.1.2 - GSAP React integration

### Forms & Validation
- **React Hook Form** 7.61.1 - Form handling
- **Zod** 3.25.76 - TypeScript-first schema validation
- **@hookform/resolvers** 3.10.0 - Form validation resolvers

### Icons & UI Components
- **Lucide React** 0.552.0 - Icon library
- **React Icons** 5.5.0 - Icon library
- **Recharts** 2.15.4 - Chart library
- **Sonner** 1.7.4 - Toast notifications
- **Embla Carousel** 8.6.0 - Carousel component

### Build Tools
- **Vite** 7.3.3 - Build tool and dev server
- **TypeScript** 5.8.3 - Type safety
- **@vitejs/plugin-react-swc** 3.11.0 - React plugin with SWC compiler

### Development Tools
- **ESLint** 9.32.0 - Code linting
- **Tailwind CSS Typography** 0.5.16 - Typography plugin

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Common Issues

**Port Already in Use**
```bash
# Dev server will automatically try the next available port
# If you need to free a specific port:
# Windows: netstat -ano | findstr :8080
# macOS/Linux: lsof -i :8080
```

**npm install Fails**
```bash
# Clear npm cache and try again
npm cache clean --force
npm install
```

**Build Fails**
```bash
# Clear build artifacts and reinstall
rm -rf node_modules dist
npm install
npm run build
```

**TypeScript Errors**
```bash
# Ensure TypeScript is properly installed
npm install typescript --save-dev
```

## Performance Notes

- Initial bundle size is approximately 576KB (minified)
- Recommended chunk size optimization for production
- Images are optimized with responsive formats (WebP, PNG, JPG)

## Deployment

The project can be deployed to:
- Vercel (recommended - zero-config deployment)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Traditional web servers (Node.js required for SSR, or serve static `dist/` folder)

## Additional Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Check outdated packages
npm outdated

# Update packages
npm update
```

## Support & Documentation

- **Vite**: https://vitejs.dev/
- **React**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **shadcn/ui**: https://ui.shadcn.com/
- **TypeScript**: https://www.typescriptlang.org/

---

**Last Updated**: 2026
**Node Version Tested**: v22.12.0
**npm Version Tested**: v10.9.0
