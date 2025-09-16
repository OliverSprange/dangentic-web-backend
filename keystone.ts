import { config } from '@keystone-6/core';
import { lists } from './schema';

const databaseURL = process.env.DATABASE_URL || 'file:./keystone.db';

export default config({
  db: {
    provider: 'postgresql',
    url: databaseURL,
  },
  lists,
  storage: {
    local_images: {
      kind: 'local',
      type: 'image',
      generateUrl: (path: string) => `/images${path}`,
      serverRoute: {
        path: '/images',
      },
      storagePath: 'public/images',
    },
  },
  session: {
    // Simple session for now - can be enhanced later
    strategy: 'jwt',
    secret: process.env.SESSION_SECRET || 'default-dev-secret-change-in-production',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  },
  server: {
    cors: {
      origin: [
        process.env.FRONTEND_URL || 'http://localhost:3000',
        'https://*.vercel.app',
        'https://vercel.app'
      ],
      credentials: true,
    },
    port: process.env.PORT ? parseInt(process.env.PORT) : 3001,
  },
  graphql: {
    debug: process.env.NODE_ENV !== 'production',
    path: '/api/graphql',
    playground: process.env.NODE_ENV !== 'production',
    apolloConfig: {
      introspection: true,
    },
  },
  ui: {
    isAccessAllowed: () => true, // Customize this for production
  },
});