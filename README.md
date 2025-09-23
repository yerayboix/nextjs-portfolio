# Yeray Boix Torner - Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing professional skills, projects, and experience. Features smooth animations, and a clean, professional design.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Theme switching with system preference detection
- **Smooth Animations**: GSAP and Framer Motion powered animations
- **Performance Optimized**
- **Component Library**: Custom UI components with shadcn/ui integration
- **Professional Typography**: Custom fonts including New Title family
- **SEO Optimized**: Proper metadata and sitemap configuration

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui + Custom Components
- **Animations**: GSAP, Framer Motion
- **Icons**: Lucide React

### Development Tools
- **Package Manager**: npm/yarn/pnpm/bun
- **Linting**: ESLint with Next.js config
- **Development**: Turbopack for fast builds
- **Deployment**: Prepared for Dokploy

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── _components/             # Page-specific components
│   │   ├── contact/            # Contact section
│   │   ├── footer/             # Footer component
│   │   ├── hero/               # Hero section with layouts
│   │   ├── projects/           # Projects showcase
│   │   └── skills/             # Skills/About section
│   ├── contact/                # Contact page
│   ├── downloads/              # Downloads page
│   ├── fuentes/                # Sources page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/                  # Reusable components
│   ├── blocks/                 # Complex component blocks
│   ├── magicui/                # Magic UI components
│   ├── ui/                     # shadcn/ui components
│   ├── navbar.tsx              # Navigation component
│   └── theme-provider.tsx      # Theme context provider
├── lib/                        # Utilities and constants
├── public/                     # Static assets
│   ├── fonts/                  # Custom font files
│   └── images/                 # Project images and photos
└── docker/                     # Docker configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nextjs-portfolio.git
   cd nextjs-portfolio/portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Available Scripts

- `dev`: Start development server with Turbopack
- `build`: Build the application for production
- `start`: Start the production server
- `lint`: Run ESLint for code quality

## 🎨 Customization

### Fonts
The portfolio uses a combination of Google Fonts and custom fonts:
- **New Title**: Custom font family for headings
- **Inter**: Modern sans-serif for body text
- **Geist**: Vercel's font family
- **PT Mono**: Monospace font for code

### Components
All components follow the project's design system:
- shadcn/ui for base components
- Custom components for specific functionality
- Consistent styling with Tailwind CSS
- Responsive design patterns

## 🐳 Docker Support

The project includes Docker configuration for containerized deployment. The docker-compose is specific for a Dokploy installation:

```bash
# Build and run with Docker Compose
docker-compose up --build
```

## 📱 Pages

- **Home**: Hero section, skills overview, featured projects
- **Contact**: Contact information and form
- **Downloads**: Downloadable resources such as CV


## 📈 Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Image Optimization**: Next.js Image component for optimal loading
- **Font Loading**: Optimized font loading strategies
- **Bundle Size**: Minimized with proper code splitting

## 🌐 Deployment


### Other Platforms
The project can be deployed to any platform supporting Node.js:
- Netlify
- Railway
- Heroku
- AWS
- Google Cloud

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Yeray Boix Torner**
- Portfolio: https://yerayboix.com/
- LinkedIn: www.linkedin.com/in/yerayboix
- Email: yerayboix@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [GSAP](https://greensock.com/gsap/) - Professional-grade animation library
- [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library

---

*This portfolio represents my journey as a developer and showcases the projects I'm most proud of. Feel free to explore the code and reach out if you have any questions!*
