This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

:root {
/_ ========= COLORS ========= _/

--color-bg: #faf8f5;
--color-bg-soft: #f2ece6;

--color-text: #1c1c1c;
--color-muted: #6f6663;

--color-primary: #4a2025;
--color-primary-hover: #98180b;

--color-border: #e7e0d9;
--color-white: #ffffff;

/_ ========= TYPOGRAPHY ========= _/

--font-primary: var(--font-montserrat);

/_ ========= LAYOUT ========= _/

--container-width: 1200px;

--section-padding-mobile: 64px;
--section-padding-desktop: 104px;

/_ ========= RADIUS ========= _/

--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 28px;

/_ ========= SHADOWS ========= _/

--shadow-soft: 0 20px 60px rgba(74, 32, 37, 0.08);

/_ ========= TRANSITIONS ========= _/

--transition-main: 220ms ease;
}
