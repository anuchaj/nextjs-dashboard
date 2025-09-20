// /app/ui/fonts.ts

import { Inter, Lusitana } from 'next/font/google';

// Inter remains the same
export const inter = Inter({ subsets: ['latin'] });

// Lusitana with weights 400 and 700
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});
