# AI Agent Instructions

## Project Overview

bigA.i Workflow Next.js Template is an open-source website template for AI
workflow and automation products.

The project is built with:

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI

## Architecture

The project uses the Next.js App Router.

### Application Routes

`src/app/` contains Next.js routes, layouts, and route-specific files.

- Keep routing concerns inside `src/app/`.
- Do not put reusable page sections directly inside route files.
- Use the existing route groups such as `(website)` and `(coming-soon)`.

### Views

`src/bigbistudio/pages/` contains page-level view compositions.

- Views compose sections into complete pages.
- Keep views focused on page composition.
- Do not put reusable business logic into view files.

### Sections

`src/bigbistudio/sections/` contains reusable page sections.

- Organize sections by feature or purpose.
- Prefer composing existing sections over creating duplicated markup.
- Keep section-specific types and data close to the section when appropriate.

### Components

`src/bigbistudio/components/` contains reusable template components.

`src/components/ui/` contains shared UI primitives, including shadcn/ui components.

- Reuse existing components before creating new ones.
- Do not duplicate existing UI primitives.
- Keep complex visual UI graphics inside `components/graphics/`.

### Data

`src/bigbistudio/data/` contains static site content and configuration.

- Keep editable content out of page components when possible.
- Prefer data-driven rendering over hardcoded repeated content.
- Follow the existing data/type structure when adding new content.

### Types

`src/bigbistudio/types/` contains shared TypeScript types.

- Reuse existing types before creating duplicates.
- Keep types explicit and descriptive.
- Avoid `any`.

### Lib

`src/bigbistudio/lib/` contains application and data-related utilities.

- Keep reusable logic here rather than inside page components.
- Do not introduce unnecessary abstractions for simple operations.

### Styles

Global and theme styles are located in:

- `src/app/globals.css`
- `src/bigbistudio/styles/theme.css`

Prefer existing design tokens and utilities over introducing arbitrary values.

## Coding Conventions

### TypeScript

- Use TypeScript for application code.
- Prefer explicit types for public component props and data structures.
- Use `import type` for type-only imports.
- Avoid `any`.
- Prefer `satisfies` when validating object structure without losing inference.
- Use `as` only when a type assertion is actually necessary.

### React

- Use functional components.
- Keep components focused on a single responsibility.
- Prefer Server Components unless client-side interactivity requires `"use client"`.
- Add `"use client"` only when necessary.

### Imports

Organize imports consistently:

1. External dependencies
2. Internal project imports
3. Type-only imports

Example:

```tsx
// External
import Image from "next/image"

// Internal
import { Button } from "@/components/ui/button"

// Types
import type { Blog } from "@/bigbistudio/types/blog.types"