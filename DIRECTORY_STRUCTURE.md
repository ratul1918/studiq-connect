# StudIQ Connect - Directory Structure Guide

## Overview

The project follows a feature-based modular structure for better organization, scalability, and maintainability.

## Directory Layout

```
studiq-connect/
│
├── 📦 Configuration Files
│   ├── vite.config.ts                 # Vite build configuration
│   ├── tsconfig.json                  # TypeScript root configuration
│   ├── tsconfig.app.json              # TypeScript app configuration
│   ├── tsconfig.node.json             # TypeScript Node configuration
│   ├── tailwind.config.ts             # Tailwind CSS configuration
│   ├── postcss.config.js              # PostCSS configuration
│   ├── eslint.config.js               # ESLint configuration
│   ├── components.json                # shadcn/ui configuration
│   ├── package.json                   # Dependencies & scripts
│   └── bun.lockb                      # Bun lock file
│
├── 📁 Source Directory (src/)
│   │
│   ├── 🎨 Components (components/)
│   │   ├── Navigation.tsx              # Main navigation bar
│   │   ├── PostCard.tsx                # Post display component
│   │   ├── CreatePost.tsx              # Post creation form
│   │   │
│   │   └── 🎯 UI Components (ui/)     # Reusable shadcn/ui components
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── checkbox.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── popover.tsx
│   │       ├── select.tsx
│   │       ├── sheet.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── tooltip.tsx
│   │       ├── use-toast.ts
│   │       └── [other components...]
│   │
│   ├── 📄 Pages (pages/)              # Page components (routes)
│   │   ├── Index.tsx                   # Home page (/index)
│   │   ├── LandingPage.tsx             # Public landing page (/)
│   │   ├── Auth.tsx                    # Authentication page (/auth)
│   │   ├── Feed.tsx                    # Social feed (/feed)
│   │   ├── Profile.tsx                 # User profile (/profile)
│   │   ├── Clubs.tsx                   # Clubs listing (/clubs)
│   │   ├── Events.tsx                  # Events listing (/events)
│   │   ├── Resources.tsx               # Resources page (/resources)
│   │   └── NotFound.tsx                # 404 error page
│   │
│   ├── 🪝 Custom Hooks (hooks/)
│   │   ├── use-toast.ts                # Toast notification hook
│   │   └── use-mobile.tsx              # Mobile detection hook
│   │
│   ├── 🔌 Integrations (integrations/)
│   │   └── supabase/                   # Supabase integration
│   │       ├── client.ts               # Supabase client initialization
│   │       └── types.ts                # Supabase type definitions
│   │
│   ├── 🛠️ Utilities (lib/)
│   │   └── utils.ts                    # General utility functions
│   │
│   ├── 🖼️ Assets (assets/)
│   │   ├── hero-image.jpg
│   │   └── [other images/icons]
│   │
│   ├── App.tsx                         # Root app component with routing
│   ├── main.tsx                        # Application entry point
│   ├── App.css                         # App-level styles
│   ├── index.css                       # Global styles
│   └── vite-env.d.ts                   # Vite environment type definitions
│
├── 📚 Supabase (supabase/)
│   ├── config.toml                     # Supabase project configuration
│   └── migrations/                     # Database migration files
│       └── 20251030225730_*.sql        # SQL migration files
│
├── 📦 Public (public/)
│   └── robots.txt                      # SEO robots configuration
│
├── 📋 Documentation
│   ├── README.md                       # Project overview & setup
│   ├── CONTRIBUTING.md                 # Contribution guidelines
│   ├── .env.example                    # Environment variables template
│   └── DIRECTORY_STRUCTURE.md          # This file
│
├── .gitignore                          # Git ignore configuration
└── LICENSE                             # Project license (MIT)
```

## Naming Conventions

### Files & Folders

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `PostCard.tsx`, `Navigation.tsx` |
| Pages | PascalCase | `LandingPage.tsx`, `Profile.tsx` |
| Hooks | kebab-case + use prefix | `use-toast.ts`, `use-mobile.tsx` |
| Utilities | kebab-case | `utils.ts` |
| Directories | kebab-case | `supabase/`, `components/` |
| Config files | kebab-case | `tsconfig.json`, `eslint.config.js` |

### Component Internal Structure

```tsx
// 1. Imports
import { FC } from 'react';
import { Button } from '@/components/ui/button';

// 2. Type definitions
interface ComponentProps {
  title: string;
}

// 3. Component definition
const MyComponent: FC<ComponentProps> = ({ title }) => {
  return <div>{title}</div>;
};

// 4. Export
export default MyComponent;
```

## Path Aliases

Using TypeScript path aliases for cleaner imports:

```ts
// Instead of:
import { Button } from '../../../components/ui/button';

// Use:
import { Button } from '@/components/ui/button';
```

**Configured aliases in `tsconfig.json`:**
- `@/` → `src/`

## Adding New Features

### New Page
1. Create file in `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`
3. Update navigation if needed

### New Component
1. Create in `src/components/YourComponent.tsx`
2. For reusable UI, place in `src/components/ui/`
3. Export from component file

### New Hook
1. Create in `src/hooks/use-your-hook.ts`
2. Follow React hooks conventions
3. Include TypeScript types

### New Utility
1. Add to `src/lib/utils.ts` or create new file
2. Export functions with types
3. Include documentation

### Database Changes
1. Create migration: `supabase migration new description`
2. Write SQL in migration file
3. Run: `supabase db push`
4. Commit migration file

## Import Ordering

Follow this pattern for consistent imports:

```tsx
// 1. External libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';

// 2. Internal components & hooks
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// 3. Utilities & types
import { cn } from '@/lib/utils';
import { CustomType } from '@/types';

// 4. Styles
import './YourComponent.css';
```

## Best Practices

### Do's ✅
- Keep components focused and single-responsibility
- Use TypeScript for type safety
- Organize related files together
- Add comments for complex logic
- Use meaningful names
- Export components as default
- Keep utilities pure functions
- Use relative paths within same folder level

### Don'ts ❌
- Don't mix multiple features in one file
- Don't create deeply nested folder structures
- Don't use 'any' type (unless absolutely necessary)
- Don't export unnamed/anonymous components
- Don't create generic 'utils' folders
- Don't commit sensitive data
- Don't modify schema without migration

## File Size Guidelines

- Components: < 500 lines (split if larger)
- Pages: < 1000 lines (split into components)
- Hooks: < 300 lines
- Utilities: Keep functions < 100 lines

## Continuous Improvement

This structure is flexible and can evolve. When proposing changes:
1. Document the change in this file
2. Follow existing patterns
3. Get team feedback
4. Update imports across codebase
5. Update CI/CD configurations if needed

---

**Last Updated**: January 2026
