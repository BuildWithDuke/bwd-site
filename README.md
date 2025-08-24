# 🚀 BuildWithDuke Portfolio

A modern, responsive portfolio website showcasing full-stack development and AI/ML projects with interactive demos.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

## ✨ Features

### 🎨 Design & UX
- **Dark-first theme** with blue accent colors
- **Responsive design** that works on all devices
- **Smooth rolling animations** for project cards and elements
- **Clean, minimal interface** with professional typography
- **Hover effects** and micro-interactions throughout

### 📱 Pages & Content
- **Home Page**: Hero section + 3x2 featured projects grid
- **About Page**: Personal story, tech stack showcase, experience timeline
- **Contact Page**: Contact form + social links with availability status
- **Project Showcase**: Interactive cards with live demo and GitHub links

### ⚡ Performance & Tech
- **Next.js 14** with App Router and Turbopack
- **TypeScript** for type safety and better DX
- **Tailwind CSS** for utility-first styling
- **CSS animations** for flicker-free performance
- **SEO optimized** with proper meta tags and structure

### 🐳 Deployment Ready
- **Docker configuration** for containerized deployment
- **VPS-ready setup** with nginx proxy configuration
- **Subdomain routing** for individual project demos
- **Production optimized** build with standalone output

## 🛠️ Tech Stack

```typescript
const techStack = {
  frontend: ['Next.js 14', 'TypeScript', 'Tailwind CSS'],
  animations: ['CSS Animations', 'Framer Motion (selective)'],
  deployment: ['Docker', 'nginx', 'OVHCloud VPS'],
  tooling: ['ESLint', 'PostCSS', 'Turbopack'],
  architecture: ['App Router', 'Server Components', 'Static Generation']
}
```

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm or yarn
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/DukeofWaterloo/bwd-site.git
cd bwd-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev        # Start development server with Turbopack
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

## 🐳 Docker Deployment

### Build and Run Locally

```bash
# Build the Docker image
docker build -t buildwithduke .

# Run the container
docker run -p 3000:3000 buildwithduke
```

### Production Deployment with Docker Compose

```bash
# Deploy with nginx proxy
docker-compose up -d
```

The docker-compose setup includes:
- Next.js application container
- nginx reverse proxy for SSL and routing
- Volume mounts for SSL certificates

## 📁 Project Structure

```
buildwithduke/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable React components
│   │   ├── ProjectCard.tsx # Project showcase cards
│   │   ├── Navigation.tsx  # Site navigation
│   │   └── Footer.tsx      # Site footer
│   ├── data/              # Static data and content
│   │   └── projects.ts    # Project information
│   └── types/             # TypeScript type definitions
│       └── project.ts     # Project-related types
├── public/                # Static assets
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Multi-container setup
└── next.config.ts       # Next.js configuration
```

## 🎯 Key Features Explained

### Rolling Fade-in Animations
- **Pure CSS animations** for optimal performance
- **Staggered delays** create a "rolling wave" effect
- **No hydration flicker** - consistent server/client rendering

### Project Showcase System
- **Dynamic project grid** with featured project filtering
- **Status indicators** (live, development, completed)
- **Technology badges** with smart truncation
- **External link handling** for demos and repositories

### Responsive Design
- **Mobile-first approach** with breakpoint-specific layouts
- **Flexible grid system** that adapts from 1 to 3 columns
- **Touch-friendly interactions** on mobile devices

## 🔧 Customization

### Adding New Projects

Edit `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 'your-project',
    title: 'Your Project Name',
    description: 'Brief description of your project',
    technologies: ['React', 'Node.js', 'MongoDB'],
    demoUrl: 'https://your-demo.com',
    githubUrl: 'https://github.com/you/project',
    imageUrl: '/projects/your-project.jpg',
    featured: true,
    category: 'fullstack',
    status: 'live'
  }
]
```

### Customizing Theme

Update CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #0a0a0a;    /* Dark background */
  --foreground: #ededed;    /* Light text */
  --accent: #3b82f6;        /* Blue accent */
  --accent-hover: #2563eb;  /* Darker blue */
  --muted: #262626;         /* Muted backgrounds */
  --border: #404040;        /* Border colors */
}
```

## 🌐 Deployment Strategies

### Vercel (Recommended for Quick Deploy)
```bash
npm i -g vercel
vercel
```

### OVHCloud VPS with Docker
1. Set up your VPS with Docker and Docker Compose
2. Clone the repository on your server
3. Configure SSL certificates in `./ssl/` directory
4. Run `docker-compose up -d`

### Subdomain Project Demos
The architecture supports individual project demos on subdomains:
- `project1.buildwithduke.com` → Docker container for project 1
- `project2.buildwithduke.com` → Docker container for project 2
- Main site at `buildwithduke.com`

## 📈 Performance

- **Lighthouse Score**: 100/100/100/100 (Performance/Accessibility/Best Practices/SEO)
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.5s
- **Bundle Size**: ~162kB First Load JS

## 🤝 Contributing

This is a personal portfolio project, but feedback and suggestions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ About

Built by Duke - a passionate full-stack developer exploring the intersection of web development and AI/ML. Always interested in innovative projects and collaborations!

- **Portfolio**: [buildwithduke.com](https://buildwithduke.com)
- **GitHub**: [@DukeofWaterloo](https://github.com/DukeofWaterloo)
- **Email**: hello@buildwithduke.com

---

⭐ **If you found this project helpful, please give it a star!**

*Last updated: January 2025*
