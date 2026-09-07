import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Drop a new .md or .mdx file into src/content/essays/ and it shows up on the
 * writing page automatically, newest first. Filename becomes the id.
 */
const essays = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = { essays };
