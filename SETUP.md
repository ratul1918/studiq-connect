# Setup Guide - StudIQ Connect

Complete guide for setting up the StudIQ Connect project for development.

## Prerequisites

Before starting, ensure you have:

- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **Bun** 1.0+ (recommended) or npm/yarn ([Bun Installation](https://bun.sh))
- **Git** ([Download](https://git-scm.com))
- **A Supabase Account** ([Create Free Account](https://supabase.com))
- A code editor (VS Code recommended)

## Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/studiq-connect.git
cd studiq-connect
```

## Step 2: Install Dependencies

Using Bun (recommended):
```bash
bun install
```

Or using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

## Step 3: Set Up Supabase

### 3.1 Create Supabase Project

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Click "New Project"
3. Fill in the project details:
   - **Name**: `studiq-connect` (or your preference)
   - **Database Password**: Create a strong password
   - **Region**: Choose the nearest region
4. Click "Create new project"
5. Wait for project initialization (usually 2-5 minutes)

### 3.2 Get API Credentials

1. Go to Project Settings → API
2. Copy the following:
   - **Project URL** (Supabase URL)
   - **anon public** key (Anon Key)

## Step 4: Configure Environment Variables

### 4.1 Create `.env.local` File

```bash
cp .env.example .env.local
```

### 4.2 Update `.env.local`

Edit `.env.local` and add your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 5: Set Up Database

### 5.1 Initialize Supabase (Optional - if using local development)

```bash
# Link to your Supabase project
supabase link --project-ref your-project-ref

# Pull existing database schema
supabase db pull
```

### 5.2 Run Migrations

If migrations exist in `supabase/migrations/`:

```bash
supabase migration up
```

Or through the Supabase dashboard → SQL Editor.

## Step 6: Start Development Server

Using Bun:
```bash
bun dev
```

Or using npm:
```bash
npm run dev
```

The application will be available at: `http://localhost:5173`

## Step 7: Verify Setup

1. **Check Console**: Open browser DevTools (F12)
   - Should see no errors
   - Supabase connection should be established

2. **Test Navigation**: 
   - Visit `/` (Landing page)
   - Visit `/auth` (Authentication)
   - Try signing up

3. **Check Database Connection**:
   - User data should sync to Supabase after signup

## Troubleshooting

### Port 5173 Already in Use

```bash
# Use a different port
bun dev -- --port 3000
```

### Supabase Connection Failed

1. Verify `.env.local` has correct credentials
2. Check Supabase project is running
3. Verify API key has correct permissions
4. Check browser console for CORS errors

### Dependencies Not Installing

```bash
# Clear cache and reinstall
rm -rf node_modules
bun install  # or npm install
```

### TypeScript Errors

```bash
# Regenerate TypeScript definitions
bun run type-check  # or npm run type-check
```

### Build Issues

```bash
# Clean and rebuild
rm -rf dist
bun run build  # or npm run build
```

## Available Scripts

| Command | Purpose |
|---------|---------|
| `bun dev` | Start development server |
| `bun build` | Build for production |
| `bun preview` | Preview production build |
| `bun lint` | Run ESLint |
| `bun type-check` | Check TypeScript types |

## Database Tables Structure

The migrations should create these main tables:

- **users** - User profiles and authentication data
- **posts** - Social feed posts
- **clubs** - Student clubs/organizations
- **events** - Campus events
- **resources** - Academic resources
- **user_clubs** - User-club memberships

Check `supabase/migrations/` for detailed schema.

## VS Code Extensions (Recommended)

For better development experience, install these extensions:

- **ES7+ React/Redux/React-Native snippets** - dsznajder.es7-react-js-snippets
- **Prettier** - esbenp.prettier-vscode
- **ESLint** - dbaeumer.vscode-eslint
- **TypeScript Vue Plugin** - Vue.volar
- **Tailwind CSS IntelliSense** - bradlc.vscode-tailwindcss
- **Supabase** - supabase.supabase-vscode

## Next Steps

1. **Explore the codebase**: Check `DIRECTORY_STRUCTURE.md`
2. **Read contributing guide**: See `CONTRIBUTING.md`
3. **Check the docs**: Review `README.md`
4. **Start coding**: See [Feature Development](#feature-development) below

## Feature Development

### Creating a New Page

1. Create file: `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`
3. Update navigation if needed
4. Test in development

### Creating a New Component

```tsx
// src/components/YourComponent.tsx
import { FC } from 'react';

interface YourComponentProps {
  title: string;
}

const YourComponent: FC<YourComponentProps> = ({ title }) => {
  return <div className="p-4">{title}</div>;
};

export default YourComponent;
```

## Getting Help

1. **Documentation**: Check [README.md](./README.md)
2. **Structure Guide**: See [DIRECTORY_STRUCTURE.md](./DIRECTORY_STRUCTURE.md)
3. **Contributing**: Read [CONTRIBUTING.md](./CONTRIBUTING.md)
4. **Supabase Docs**: [docs.supabase.com](https://docs.supabase.com)
5. **Issues**: Search [GitHub Issues](https://github.com/yourusername/studiq-connect/issues)

## Common Commands Cheat Sheet

```bash
# Development
bun dev                    # Start dev server
bun build                  # Production build
bun preview                # Preview build

# Maintenance
bun install               # Install dependencies
bun lint                  # Check code quality
bun run type-check        # Check TypeScript

# Database (if using local Supabase)
supabase migration new    # Create new migration
supabase migration up     # Run pending migrations
supabase db push          # Push schema changes
```

## Performance Tips

- Use React DevTools for component profiling
- Check Network tab to optimize API calls
- Use TanStack Query for caching
- Monitor console for warnings

## Security Notes

- Never commit `.env.local` - it's in `.gitignore`
- Keep your Supabase keys private
- Use Row Level Security (RLS) in production
- Validate user input on frontend and backend
- Review Supabase security settings

## System Requirements

- **Minimum**:
  - 4GB RAM
  - 500MB disk space
  - Modern browser

- **Recommended**:
  - 8GB+ RAM
  - 2GB+ disk space
  - Latest Chrome/Firefox/Safari

## Success! 🎉

Your StudIQ Connect development environment is ready. Start building amazing features!

For questions or issues:
- Create a GitHub issue
- Check existing documentation
- Ask in discussions

Happy coding! 💻
