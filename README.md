# Marcel Grace Infotech

A modern, professional website for Marcel Grace Infotech - a leading software development company specializing in innovative technology solutions.

## 🚀 Features

- **Modern Design**: Clean, professional interface with glassmorphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js 15 for optimal performance
- **TypeScript**: Fully typed for better development experience
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Interactive Components**: Client-side filtering for portfolio and blog
- **Accessibility**: ARIA labels and semantic markup for better accessibility

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth animations
- **Icons**: React Icons (Feather Icons, Simple Icons)
- **Development**: ESLint, Prettier (configured)

## 📋 Project Structure

```
marcel-grace/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx      # Navigation component
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About company section
│   │   ├── FeaturedProjects.tsx
│   │   ├── FeaturedServices.tsx
│   │   ├── Contact.tsx     # Contact section
│   │   ├── Footer.tsx      # Footer component
│   │   ├── BlogFilter.tsx  # Blog filtering (client)
│   │   └── PortfolioFilter.tsx # Portfolio filtering (client)
│   ├── about/              # About page
│   ├── services/           # Services page
│   ├── portfolio/          # Portfolio/projects page
│   ├── blog/              # Blog/insights page
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── public/
│   └── assets/           # Static assets (images, icons)
├── tailwind.config.js    # Tailwind configuration
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Primary**: Purple gradient (#8B5CF6 to #A855F7)
- **Accent**: Pink accent (#EC4899)
- **Background**: Dark theme (#0F172A, #1E293B)
- **Text**: White primary, gray variations for secondary

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable typography

### Components
- **Glass Cards**: Backdrop blur with border effects
- **Buttons**: Primary and secondary variants with hover states
- **Skill Tags**: Pill-shaped badges for technologies
- **Gradients**: Purple to pink gradients throughout

## 🚦 Getting Started

### Prerequisites
- Node.js 18 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd marcel-grace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages Overview

### 🏠 Home (`/`)
- Hero section with company introduction
- Featured services overview
- Featured projects showcase
- About company highlights
- Contact information

### ℹ️ About (`/about`)
- Company mission and vision
- Core values and principles
- Why choose Marcel Grace
- Company achievements

### 🔧 Services (`/services`)
- Custom Software Development
- Web Application Development
- Mobile App Development
- Cloud Solutions
- DevOps & Automation
- Quality Assurance
- Development process overview
- Pricing information

### 💼 Portfolio (`/portfolio`)
- Featured projects with detailed descriptions
- Project filtering by category
- Technology stack for each project
- Live demo and code links
- Project categories: E-Commerce, Healthcare, Finance, etc.

### 📝 Blog (`/blog`)
- Technical insights and tutorials
- Industry updates and trends
- Category-based filtering
- Recent articles on software development

### 💼 Careers (`/careers`)
- Open positions with detailed descriptions
- Company benefits and culture
- Application process
- Job requirements and responsibilities

### 📞 Contact (`/contact`)
- Contact form for project inquiries
- Company contact information
- Social media links
- FAQ section
- Quick action buttons

## 🎯 Key Components

### Navigation
- Responsive navigation bar
- Mobile-friendly hamburger menu
- Smooth scrolling to sections
- Active page highlighting

### Portfolio Filter
- Client-side filtering by technology/category
- Interactive category buttons
- Dynamic project display
- Responsive grid layout

### Blog Filter
- Category-based article filtering
- Date-based sorting
- Reading time estimates
- Interactive filtering buttons

### Contact Form
- Multi-field contact form
- Service and budget selection
- Professional form validation ready
- Company-specific form fields

## 🔧 Customization

### Adding New Projects
Edit `app/portfolio/page.tsx` and add to the `projects` array:

```typescript
{
  id: 9,
  title: 'Your Project Title',
  description: 'Project description...',
  technologies: ['React', 'Node.js', 'MongoDB'],
  category: 'Web Development',
  codeUrl: 'https://github.com/...',
  liveUrl: 'https://demo.example.com',
  featured: false,
}
```

### Adding New Blog Posts
Edit `app/blog/page.tsx` and add to the `blogPosts` array:

```typescript
{
  id: 9,
  title: 'Your Article Title',
  excerpt: 'Article excerpt...',
  date: '2024-12-20',
  readTime: '8 min read',
  category: 'Development',
  slug: 'your-article-slug',
}
```

### Modifying Services
Edit `app/services/page.tsx` to update the `services` array with your offerings.

### Updating Contact Information
Update contact details in:
- `app/components/Footer.tsx`
- `app/contact/page.tsx`
- `app/components/Contact.tsx`

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project can be deployed to any platform that supports Next.js static sites.

## 📧 Contact

**Marcel Grace Infotech**
- Email: info@marcelgrace.com
- Phone: +880 170 6776 711
- Location: Dhaka, Bangladesh
- Website: [https://marcelgrace.com](https://marcelgrace.com)

## 📄 License

This project is proprietary and confidential. All rights reserved by Marcel Grace Infotech.

---

**Built with ❤️ by Marcel Grace Infotech Team**
