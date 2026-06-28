import { z, defineCollection } from 'astro:content';

const knowledge = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    metadata: z.object({
      node_type: z.string().optional(),
      type: z.string().optional(),
      originSessionId: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { knowledge };
