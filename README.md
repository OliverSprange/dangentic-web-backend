# KeystoneJS CMS for Loom Industries

This is the KeystoneJS backend that replaces Strapi for content management.

## Environment Variables

Required environment variables for Railway deployment:

```bash
DATABASE_URL=postgresql://username:password@host:port/database
SESSION_SECRET=your-secret-key-here
FRONTEND_URL=https://your-vercel-app.vercel.app
NODE_ENV=production
PORT=3001
```

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables in `.env`:
```bash
DATABASE_URL=postgresql://localhost:5432/keystone
SESSION_SECRET=local-dev-secret
FRONTEND_URL=http://localhost:3000
```

3. Start development server:
```bash
npm run dev
```

4. Access the admin UI at http://localhost:3001

## Deployment

Deploy to Railway:

1. Connect your repository to Railway
2. Set the required environment variables
3. Railway will automatically build and deploy

## GraphQL API

The GraphQL API is available at `/api/graphql` and provides:

- Queries for all content types (Page, CaseStudy, Service, etc.)
- Mutations for creating/updating content
- Real-time subscriptions
- GraphQL Playground in development mode

## Content Types

- **GlobalSetting**: Site-wide settings (single type)
- **Homepage**: Homepage content (single type)
- **Page**: Static pages
- **CaseStudy**: Portfolio case studies
- **Service**: Service offerings