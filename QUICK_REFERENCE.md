# Quick Reference - StudIQ Connect

## 🚀 Start Development

```bash
bun install      # First time only
bun dev          # Start dev server
```

Navigate to: `http://localhost:5173`

## 📁 Key Directories

| Directory | Purpose |
|-----------|---------|
| `src/pages/` | Route pages |
| `src/components/` | Reusable components |
| `src/hooks/` | Custom React hooks |
| `src/lib/` | Utilities & helpers |
| `src/integrations/supabase/` | Supabase config |
| `supabase/migrations/` | Database migrations |

## 🔧 Common Commands

```bash
bun dev              # Development server
bun build            # Production build
bun preview          # Preview build
bun lint             # ESLint check
npm install          # Bun alternative
npm run dev          # Npm alternative
```

## 📦 Project Name & Version

- **Name**: `studiq-connect`
- **Version**: 1.0.0
- **License**: MIT
- **Built with**: React 18, TypeScript 5, Vite, TailwindCSS, Supabase

## 🔐 Environment Setup

Create `.env.local`:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview |
| `SETUP.md` | Installation guide |
| `CONTRIBUTING.md` | Development guidelines |
| `DIRECTORY_STRUCTURE.md` | Detailed folder structure |
| `.env.example` | Environment template |

## 🏗️ Project Structure

```
src/
├── components/        # UI components
├── pages/            # Route pages
├── hooks/            # Custom hooks
├── integrations/     # API integration
├── lib/              # Utilities
└── assets/           # Static files
```

## 🎯 Key Features

- Student engagement platform
- Event discovery
- Resource sharing
- Club management
- User profiles
- Secure authentication

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS, shadcn/ui
- **Backend**: Supabase (PostgreSQL)
- **State**: React Query
- **Routing**: React Router

## 📝 Git Workflow

```bash
git checkout -b feat/your-feature
# Make changes
git add .
git commit -m "feat: description"
git push origin feat/your-feature
# Create PR on GitHub
```

## ✅ Before Committing

- [ ] Code passes linting: `bun lint`
- [ ] No TypeScript errors
- [ ] Tested in browser
- [ ] Follows conventions
- [ ] Updated docs if needed

## 🆘 Quick Fixes

**Port already in use?**
```bash
bun dev -- --port 3000
```

**Clear cache?**
```bash
rm -rf node_modules bun.lockb
bun install
```

**Supabase won't connect?**
```bash
# Check .env.local for correct credentials
# Verify Supabase project is running
# Check browser console for errors
```

## 🔗 Useful Links

- [React Docs](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com)
- [Supabase](https://supabase.com)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vite](https://vitejs.dev)

## 📞 Need Help?

1. **Setup issues?** → Check `SETUP.md`
2. **Code guidelines?** → See `CONTRIBUTING.md`
3. **Project structure?** → Read `DIRECTORY_STRUCTURE.md`
4. **General info?** → View `README.md`

---

**Happy coding! 💻**
