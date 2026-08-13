# Contributing

Thank you for your interest in contributing to the bigA.i Workflow Next.js Template.

## Development Setup

### Prerequisites

- Node.js 20+
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/bigbi-studio/bigai-workflow-nextjs.git
cd bigai-workflow-nextjs
npm install
```

Create your local environment file:

```bash
cp .env.example .env.local
```

Add the required environment variables to `.env.local`.

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Branches

Create a dedicated branch for your changes.

Use descriptive branch names:

```text
feat/add-blog-search
fix/contact-form-validation
refactor/metadata
docs/update-installation
chore/update-dependencies
```

Avoid committing directly to `main`.

## Commit Messages

Use Conventional Commits.

Examples:

```text
feat: add blog search
fix: resolve contact form validation
refactor: simplify metadata generation
docs: update installation guide
chore: update dependencies
```

Keep commits focused and avoid mixing unrelated changes.

## Pull Requests

Before opening a pull request:

1. Make sure your branch is up to date with `main`.
2. Review your changes.
3. Run all validation commands.
4. Make sure no secrets or unnecessary files are included.
5. Provide a clear description of the changes.

Pull requests should:

- Have a clear title.
- Explain what changed and why.
- Include screenshots for significant UI changes.
- Mention any relevant breaking changes.
- Keep unrelated changes out of the pull request.

## Testing and Validation

Run the following commands before submitting a pull request:

```bash
npm run lint
npm run typecheck
npm run build
```

If available, also run:

```bash
npm run knip
```

For dependency changes, review:

```bash
npm audit
```

All validation checks should pass before submitting a pull request.

## Code Style

Follow the existing project conventions.

- Use TypeScript.
- Reuse existing components and utilities.
- Keep content in the appropriate data files.
- Follow the existing project structure.
- Avoid unnecessary dependencies.
- Keep changes focused and minimal.

See [`AGENTS.md`](AGENTS.md) for detailed architecture and coding guidelines.

## Questions and Issues

If you are unsure about an implementation or architectural decision, open an issue before making a significant change.

For bugs and feature requests, please provide enough information to reproduce or understand the request.
