import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Ensure this is correctly prefixed
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-08-29',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN // Ensure this is correctly prefixed
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
