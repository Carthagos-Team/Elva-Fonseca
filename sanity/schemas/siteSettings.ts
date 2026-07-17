import { defineField, defineType } from 'sanity';

/** Singleton: dados globais do site (nav, footer, social, donate).
 *  Schemas de conteúdo (stat, program, faqItem, story, homePage) entram na Fase 4. */
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteName', title: 'Site name', type: 'string', initialValue: 'Elva Fonseca Foundation' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'donateUrl', title: 'Donate URL', type: 'url', description: 'Link do provedor de doação (Stripe Payment Link, Donorbox…)' }),
    defineField({ name: 'contactEmail', title: 'Contact e-mail', type: 'string' }),
    defineField({
      name: 'socialLinks',
      title: 'Social links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string' }),
            defineField({ name: 'url', type: 'url' }),
          ],
        },
      ],
    }),
    defineField({ name: 'footerNote', title: 'Footer note', type: 'text', rows: 2 }),
  ],
});

export const schemaTypes = [siteSettings];
