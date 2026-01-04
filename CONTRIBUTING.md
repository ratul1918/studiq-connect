# Contributing to StudIQ Connect

Thank you for your interest in contributing to StudIQ Connect! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Accept criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

### Prerequisites

- Node.js 18.0+
- Bun (recommended) or npm/yarn
- Git
- A Supabase account for testing

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/studiq-connect.git
   cd studiq-connect
   ```

3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/original-owner/studiq-connect.git
   ```

4. Install dependencies:
   ```bash
   bun install
   ```

5. Create your feature branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```

## Development Guidelines

### Code Style

- Follow TypeScript best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Write self-documenting code

### Component Development

- Use functional components with hooks
- Place components in appropriate directories
- Create reusable UI components in `src/components/ui/`
- Use shadcn/ui components as building blocks
- Add proper TypeScript types
- Document component props with JSDoc comments

Example component structure:
```tsx
import { FC } from 'react';

interface YourComponentProps {
  /** Description of prop */
  propName: string;
  /** Optional callback */
  onAction?: () => void;
}

/**
 * YourComponent description
 * @param props - Component props
 * @returns Rendered component
 */
const YourComponent: FC<YourComponentProps> = ({ propName, onAction }) => {
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
};

export default YourComponent;
```

### Commit Messages

Follow conventional commits format:
- `feat:` - A new feature
- `fix:` - A bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, semicolons, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Dependency updates, configuration changes

Examples:
```bash
git commit -m "feat: add event filtering to events page"
git commit -m "fix: resolve navigation menu alignment issue"
git commit -m "docs: update setup instructions"
```

### Git Workflow

1. Keep your branch updated:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. Push to your fork:
   ```bash
   git push origin feat/your-feature-name
   ```

3. Create a Pull Request on GitHub

## Pull Request Process

1. **Title Format**: Use conventional commits format in PR title
   - Example: `feat: add event search functionality`

2. **PR Description**: Include:
   - What changes you made
   - Why you made these changes
   - How to test the changes
   - Any breaking changes
   - Related issues (use `Closes #123`)

3. **Checklist**:
   - [ ] Code follows style guidelines
   - [ ] Self-reviewed code
   - [ ] Added comments for complex logic
   - [ ] Updated documentation
   - [ ] No console errors or warnings
   - [ ] Tested in development

4. **Review**: 
   - Address reviewer comments
   - Re-request review after changes
   - Keep discussion professional

## Testing

### Run Development Server
```bash
bun dev
```

### Run Linter
```bash
bun run lint
```

### Build for Production
```bash
bun run build
```

### Manual Testing Checklist
- [ ] Feature works as expected
- [ ] No console errors
- [ ] Responsive on mobile devices
- [ ] Works across browsers
- [ ] Existing features still work

## File Structure Guidelines

### New Components
- Place in `src/components/` or `src/components/ui/` for reusable UI
- Use PascalCase for component files: `YourComponent.tsx`
- Export as default

### New Pages
- Place in `src/pages/`
- Use PascalCase for file names
- Add route in `App.tsx`

### New Hooks
- Place in `src/hooks/`
- Use kebab-case for file names: `use-your-hook.ts`
- Start with `use-` prefix

### Utilities
- Place in `src/lib/utils.ts` or create new utility file
- Export reusable functions
- Add TypeScript types

## Database Changes

1. Create a new migration file:
   ```bash
   supabase migration new your_migration_name
   ```

2. Write SQL in the generated file
3. Test locally: `supabase db push`
4. Commit migration file to repository

Migration naming: `YYYYMMDDhhmmss_description.sql`

## Documentation

- Update README.md for major changes
- Add JSDoc comments to functions
- Document component props
- Include examples for complex features

## Reporting Issues

When reporting bugs:
1. Check if issue already exists
2. Use clear, descriptive title
3. Include:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Browser/OS information
   - Screenshots if applicable

When requesting features:
1. Provide clear use case
2. Explain benefits
3. Suggest implementation (optional)

## Questions?

- Check existing documentation
- Look at similar implementations in the codebase
- Create a discussion or ask in issues
- Reach out to maintainers

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to StudIQ Connect! 🎉**
