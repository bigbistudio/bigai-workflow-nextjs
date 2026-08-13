# bigA.i Workflow Next.js Template

An open-source AI Workflow & Automation Website Template built with Next.js and TypeScript.

bigA.i Workflow is a modern, production-ready website template for AI startups, automation products, and SaaS businesses. It provides reusable sections, structured content, responsive layouts, and a scalable project architecture.

## Features

* Modern AI workflow and automation-focused design
* Next.js + TypeScript
* Responsive design
* Reusable page sections and components
* Structured content using JSON
* Blog and case study pages
* Pricing page
* Contact form
* Dynamic metadata
* SEO-friendly page structure
* Custom 404 page
* Dark-mode UI support where applicable
* Tailwind CSS
* Lucide icons
* shadcn/ui components
* Production-ready project structure

## Demo

**Live Demo:** https://bigai-workflow-nextjs-demo.bigbistudio.com

## Requirements

* Node.js 20+
* npm 10+

## Installation

Clone the repository:

```bash
git clone https://github.com/bigbi-studio/bigai-workflow-nextjs.git
cd bigai-workflow-nextjs
```

Install dependencies:

```bash
npm install
```

Create your local environment file:

```bash
cp .env.example .env.local
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Environment Variables

Create a `.env.local` file in the project root.

```env
# Contact form
RESEND_API_KEY=

# Cloudflare Turnstile
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
```

Some environment variables are optional depending on the features you enable.

Never commit `.env.local` or other files containing private credentials.

## Development

Start the development server:

```bash
npm run dev
```

Run ESLint:

```bash
npm run lint
```

Run the TypeScript check:

```bash
npm run typecheck
```

Create a production build:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

## Build

Create an optimized production build:

```bash
npm run build
```

After the build completes, start the production server:

```bash
npm run start
```

Before deploying, make sure that:

* TypeScript passes
* ESLint passes
* The production build succeeds
* Required environment variables are configured
* All important routes work correctly

## Deployment

bigA.i Workflow can be deployed to platforms that support Next.js applications.

### Vercel

The recommended deployment platform is Vercel.

1. Import the repository into your Vercel account.
2. Configure the required environment variables.
3. Deploy the project.
4. Configure your custom domain if required.

Make sure production environment variables are configured before using features that require external services.

## Customization

### Site Content

Static site content is organized in the `src` data directory.

Update the relevant JSON files to customize:

* Site information
* Navigation
* Page content
* Pricing
* Blog content
* Case studies
* Other template content

### Pages

Pages are organized using the Next.js App Router.

You can add, remove, or modify pages without changing the underlying reusable section architecture.

### Sections

Reusable sections are organized separately from route files.

This allows you to compose pages from existing sections and create new pages without duplicating UI code.

### Design

The project uses Tailwind CSS and shared design tokens.

Customize:

* Colors
* Typography
* Spacing
* Border radius
* Breakpoints
* Containers
* Other design tokens

### Metadata

Page metadata is managed separately from the page UI.

You can customize:

* Page titles
* Meta descriptions
* Open Graph metadata
* Twitter metadata
* Other SEO-related metadata

## Project Structure

```text
src/
├── app/                    # Next.js routes and layouts
├── components/
│   └── ui/                 # Shared UI primitives
└── bigbistudio/
    ├── components/         # Template components
    │   ├── graphics/
    │   ├── icons/
    │   ├── layout/
    │   ├── logo/
    │   └── ui/
    ├── data/               # Site content and configuration
    ├── lib/                # Data and application utilities
    ├── pages/              # Page-level views
    ├── sections/           # Reusable page sections
    ├── styles/             # Theme styles
    ├── types/              # TypeScript types
    └── utils/              # Shared utilities
```

The exact project structure may evolve as the template is updated. Refer to the source code for the most current organization.

## Credits

This project uses open-source libraries and tools including:

* Next.js
* React
* TypeScript
* Tailwind CSS
* Lucide
* shadcn/ui
* Radix UI

Please refer to the respective projects for their individual licenses and attribution requirements.

## License

bigA.i Workflow Next.js Template is open source and licensed under the MIT License.

You are free to use, modify, and distribute the project according to the terms of the license.

See the [LICENSE](LICENSE) file for the complete license text.

> **Note:** Third-party assets included in this project may be subject to their respective licenses.

---

Made with care by [**bigbi studio.**](https://bigbistudio.com/)
