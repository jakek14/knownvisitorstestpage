# KnownVisitor Waitlist

A modern, responsive landing page for KnownVisitor - a service that identifies anonymous website visitors and turns them into actionable leads.

## 🚀 Features

- **Modern Design**: Clean, professional landing page with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: 
  - Animated hero section with dynamic text
  - Interactive timeline
  - Hover effects and micro-interactions
  - Email signup form
- **Built with**: React, TypeScript, Vite, Tailwind CSS, Framer Motion

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui components
- **Icons**: Lucide React
- **Charts**: Recharts

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd knownvisitor-waitlist
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   pnpm build
   ```

## 🚀 Deployment

This project is configured for GitHub Pages deployment with automatic builds via GitHub Actions.

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service

### GitHub Pages
The repository includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages on every push to the main branch.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── hero-section.tsx # Main hero section
│   └── RevenueLineGraph.tsx # Revenue chart component
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── main.tsx           # App entry point
└── App.tsx            # Main App component
```

## 🎨 Customization

- **Colors**: Update the green theme in `tailwind.config.js`
- **Content**: Modify text content in `src/components/hero-section.tsx`
- **Animations**: Adjust animation parameters in component files
- **Styling**: Use Tailwind classes for quick styling changes

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## 🔧 Development

- **Type Checking**: `npm run type-check`
- **Linting**: `npm run lint`
- **Preview Build**: `npm run preview`

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using modern web technologies
