# Axiom Software

## Tech Stack
- Next.js - React framework for production
- React.js - UI component library
- Tailwind CSS - Utility-first CSS framework
- Node.js - JavaScript runtime
- MongoDB - NoSQL database
- Firebase - Backend services

## Project Structure
```
/
├── app/                # Next.js app directory
│   ├── layout.js       # Root layout
│   ├── page.js         # Home page
│   ├── globals.css     # Global styles
│   └── animations.css  # Animation styles
├── components/         # React components
│   ├── Contact.js      # Contact form component
│   ├── Discount.js     # Discount section
│   ├── Footer.js       # Footer component
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section
│   ├── Projects.js     # Projects showcase
│   ├── Services.js     # Services section
│   └── ScrollAnimations.js # Scroll animations
└── public/            # Static assets
```

## Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn package manager

### Installation
1. Clone the repository
```bash
git clone [repository-url]
cd axiom
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start development server
```bash
npm run dev
# or
yarn dev
```

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Key Features
- Server-side rendering with Next.js
- Responsive design with Tailwind CSS
- Interactive UI components
- Smooth scroll animations
- Contact form with EmailJS integration
- Mobile-friendly navigation

### Component Architecture
- **Header**: Navigation component with mobile responsiveness
- **Hero**: Landing section with main CTA
- **Services**: Service showcase with tabbed interface
- **Projects**: Project portfolio display
- **Contact**: Contact form with validation
- **ScrollAnimations**: Custom scroll-based animations

## Styling
- Tailwind CSS for utility-first styling
- Custom CSS animations
- Responsive design breakpoints
- Custom color scheme and typography

## Performance Optimization
- Image optimization with Next.js
- Component-level code splitting
- Optimized font loading
- Minimized bundle size

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)