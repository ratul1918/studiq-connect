# StudIQ Connect

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)](https://vitejs.dev/)

A modern student engagement platform that helps university students connect with peers, discover events, share academic resources, and join clubs. Built with React, TypeScript, and Supabase.

## 🌟 Features

- **🤝 Connect with Peers** - Join a vibrant community of students, faculty, and clubs
- **📅 Discover Events** - Never miss campus events, workshops, and club activities
- **📚 Share Resources** - Access and share academic materials, notes, and study guides
- **📊 Track Engagement** - Monitor your activity and climb the university leaderboard
- **🏃 Join Clubs** - Explore and participate in various student organizations
- **👥 User Profiles** - Customize your profile and connect with others
- **🔐 Secure Authentication** - Sign in securely with email/password or social providers

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **Bun** (recommended) or npm/yarn
- **Supabase** account (for backend)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/studiq-connect.git
cd studiq-connect
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Start the development server:
```bash
bun dev
# or
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
studiq-connect/
├── src/
│   ├── components/
│   │   ├── ui/                 # Reusable shadcn/ui components
│   │   ├── Navigation.tsx       # Main navigation component
│   │   ├── PostCard.tsx         # Post display component
│   │   └── CreatePost.tsx       # Post creation component
│   ├── pages/
│   │   ├── Index.tsx            # Index/home page
│   │   ├── LandingPage.tsx      # Public landing page
│   │   ├── Auth.tsx             # Authentication page
│   │   ├── Feed.tsx             # Social feed
│   │   ├── Profile.tsx          # User profile
│   │   ├── Clubs.tsx            # Clubs discovery
│   │   ├── Events.tsx           # Events listing
│   │   ├── Resources.tsx        # Academic resources
│   │   └── NotFound.tsx         # 404 page
│   ├── hooks/
│   │   ├── use-toast.ts         # Toast notifications hook
│   │   └── use-mobile.tsx       # Mobile detection hook
│   ├── integrations/
│   │   └── supabase/
│   │       ├── client.ts        # Supabase client configuration
│   │       └── types.ts         # TypeScript types
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   ├── assets/                  # Static assets (images, etc)
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── supabase/
│   ├── config.toml              # Supabase configuration
│   └── migrations/              # Database migrations
├── public/                       # Static files
├── package.json                 # Project dependencies
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── README.md                    # This file
```

## 🛠️ Build & Deployment

### Development
```bash
bun dev
```

### Build for Production
```bash
bun run build
```

### Preview Production Build
```bash
bun run preview
```

### Lint Code
```bash
bun run lint
```

## 🎨 Tech Stack

- **Frontend**
  - React 18
  - TypeScript 5
  - Vite 5
  - TailwindCSS 3
  - shadcn/ui (Radix UI)
  - React Router DOM
  - React Hook Form
  - Lucide React (Icons)

- **Backend & Auth**
  - Supabase (PostgreSQL, Auth, Realtime)
  - Supabase-js Client

- **Data Management**
  - TanStack React Query
  - Zod (Schema validation)

- **Utilities**
  - date-fns
  - clsx/class-variance-authority
  - class-validator

## 📝 Development Workflow

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines on:
- Code style and conventions
- Git workflow
- Pull request process
- Component development

## 📋 Database Schema

The database migrations are located in `supabase/migrations/`. Key tables include:
- `users` - User profiles and metadata
- `posts` - Social feed posts
- `clubs` - Student clubs and organizations
- `events` - Campus events
- `resources` - Academic resources
- `user_clubs` - User-club relationships

For database changes, create new migration files following the naming convention: `YYYYMMDDhhmmss_description.sql`

## 🔐 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Optional: API endpoints
# VITE_API_URL=http://localhost:3000
```

See [.env.example](./.env.example) for a template.

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Supabase Docs](https://supabase.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

## 🤝 Contributing

Contributions are welcome! Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) first.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 👥 Team

Built by the StudIQ Connect team.

## 🆘 Support

For support, please:
1. Check existing [Issues](https://github.com/yourusername/studiq-connect/issues)
2. Create a new issue with detailed description
3. Include steps to reproduce the problem

---

**Made with ❤️ for students everywhere**

