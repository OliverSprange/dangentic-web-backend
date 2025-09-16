import { list } from '@keystone-6/core';
import {
  text,
  relationship,
  select,
  timestamp,
  integer,
  checkbox,
  json,
  image,
} from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

export const lists = {
  // Single types equivalent to Strapi single types
  GlobalSetting: list({
    access: {
      operation: {
        query: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
      },
    },
    graphql: {
      plural: 'GlobalSettings',
      singular: 'GlobalSetting',
    },
    fields: {
      siteName: text({ validation: { isRequired: true } }),
      siteDescription: text({ ui: { displayMode: 'textarea' } }),
      tagline: text(),
      logo: image({ storage: 'local_images' }),
      favicon: image({ storage: 'local_images' }),

      // Contact Info as JSON
      contactInfo: json({
        defaultValue: {
          email: '',
          phone: '',
          address: '',
          businessHours: '',
        },
      }),

      // Social Links as JSON array
      socialLinks: json({
        defaultValue: [],
      }),

      globalMessaging: text({ ui: { displayMode: 'textarea' } }),

      // Navigation as JSON
      navigation: json({
        defaultValue: [],
      }),

      // Footer as JSON
      footer: json({
        defaultValue: {
          copyright: '',
          links: [],
        },
      }),

      // SEO fields
      seoMetaTitle: text(),
      seoMetaDescription: text({ ui: { displayMode: 'textarea' } }),
      seoKeywords: text(),
      seoMetaImage: image({ storage: 'local_images' }),
      seoCanonicalURL: text(),
      seoMetaRobots: text(),
      seoStructuredData: json(),
      seoMetaViewport: text(),

      // Analytics
      analytics: json({
        defaultValue: {
          googleAnalyticsId: '',
          facebookPixelId: '',
          linkedInInsightTag: '',
        },
      }),
    },
  }),

  Homepage: list({
    access: {
      operation: {
        query: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
      },
    },
    graphql: {
      plural: 'Homepages',
      singular: 'Homepage',
    },
    fields: {
      title: text({ validation: { isRequired: true } }),
      heroTitle: text({ validation: { isRequired: true } }),
      heroSubtitle: text(),
      heroDescription: text({ ui: { displayMode: 'textarea' } }),
      heroImage: image({ storage: 'local_images' }),

      ctaPrimaryText: text(),
      ctaPrimaryUrl: text(),
      ctaSecondaryText: text(),
      ctaSecondaryUrl: text(),

      // Preview sections as JSON
      servicesPreview: json({
        defaultValue: {
          title: '',
          description: '',
          link: '',
        },
      }),

      showcasePreview: json({
        defaultValue: {
          title: '',
          description: '',
          featuredCaseStudy: '',
          link: '',
        },
      }),

      aboutPreview: json({
        defaultValue: {
          title: '',
          description: '',
          link: '',
        },
      }),

      // SEO fields
      seoMetaTitle: text(),
      seoMetaDescription: text({ ui: { displayMode: 'textarea' } }),
      seoKeywords: text(),
      seoMetaImage: image({ storage: 'local_images' }),
      seoCanonicalURL: text(),
      seoMetaRobots: text(),
      seoStructuredData: json(),
      seoMetaViewport: text(),

      publishedAt: timestamp(),
    },
  }),

  // Collection types
  Page: list({
    access: {
      operation: {
        query: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
      },
    },
    fields: {
      title: text({ validation: { isRequired: true } }),
      slug: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      content: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
        ],
        links: true,
        dividers: true,
      }),

      // SEO fields
      seoMetaTitle: text(),
      seoMetaDescription: text({ ui: { displayMode: 'textarea' } }),
      seoKeywords: text(),
      seoMetaImage: image({ storage: 'local_images' }),
      seoCanonicalURL: text(),
      seoMetaRobots: text(),
      seoStructuredData: json(),
      seoMetaViewport: text(),

      publishedAt: timestamp(),
      createdAt: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({ defaultValue: { kind: 'now' }, db: { updatedAt: true } }),
    },
  }),

  CaseStudy: list({
    access: {
      operation: {
        query: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
      },
    },
    graphql: {
      plural: 'CaseStudies',
      singular: 'CaseStudy',
    },
    fields: {
      title: text({ validation: { isRequired: true } }),
      slug: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      client: text({ validation: { isRequired: true } }),
      challenge: text({ ui: { displayMode: 'textarea' }, validation: { isRequired: true } }),
      solution: text({ ui: { displayMode: 'textarea' }, validation: { isRequired: true } }),

      // Results as JSON array
      results: json({
        defaultValue: [],
      }),

      // Images as JSON array (storing image references)
      images: json({
        defaultValue: [],
      }),

      // Tags as JSON array
      tags: json({
        defaultValue: [],
      }),

      featuredImage: image({ storage: 'local_images' }),
      featured: checkbox(),

      industry: select({
        options: [
          { label: 'Technology', value: 'technology' },
          { label: 'Healthcare', value: 'healthcare' },
          { label: 'Finance', value: 'finance' },
          { label: 'Retail', value: 'retail' },
          { label: 'Manufacturing', value: 'manufacturing' },
          { label: 'Other', value: 'other' },
        ],
      }),

      publishedDate: timestamp(),
      excerpt: text({ ui: { displayMode: 'textarea' } }),

      // SEO fields
      seoMetaTitle: text(),
      seoMetaDescription: text({ ui: { displayMode: 'textarea' } }),
      seoKeywords: text(),
      seoMetaImage: image({ storage: 'local_images' }),
      seoCanonicalURL: text(),
      seoMetaRobots: text(),
      seoStructuredData: json(),
      seoMetaViewport: text(),

      publishedAt: timestamp(),
      createdAt: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({ defaultValue: { kind: 'now' }, db: { updatedAt: true } }),
    },
  }),

  Service: list({
    access: {
      operation: {
        query: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
      },
    },
    fields: {
      name: text({ validation: { isRequired: true } }),
      slug: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      description: text({ ui: { displayMode: 'textarea' }, validation: { isRequired: true } }),

      // Benefits as JSON array
      benefits: json({
        defaultValue: [],
      }),

      callToAction: text(),
      icon: image({ storage: 'local_images' }),
      featuredImage: image({ storage: 'local_images' }),

      content: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
        ],
        links: true,
        dividers: true,
      }),

      // Pricing as JSON object
      pricing: json({
        defaultValue: {
          type: 'custom',
          price: null,
          startingPrice: null,
          currency: 'USD',
          description: '',
          priceRange: '',
          duration: '',
          includes: [],
          contactForPricing: true,
        },
      }),

      // Features as JSON array
      features: json({
        defaultValue: [],
      }),

      order: integer({ defaultValue: 0 }),

      // SEO fields
      seoMetaTitle: text(),
      seoMetaDescription: text({ ui: { displayMode: 'textarea' } }),
      seoKeywords: text(),
      seoMetaImage: image({ storage: 'local_images' }),
      seoCanonicalURL: text(),
      seoMetaRobots: text(),
      seoStructuredData: json(),
      seoMetaViewport: text(),

      publishedAt: timestamp(),
      createdAt: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({ defaultValue: { kind: 'now' }, db: { updatedAt: true } }),
    },
  }),
};