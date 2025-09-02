const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-site.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SinbarTIK - Web Education",
    template: `%s | SinbarTIK`,
  },
  description: "Website Build For Education",
  openGraph: {
    title: "SinbarTIK - Web Education",
    description: "Website Build For Education",
    url: siteUrl,
    siteName: "SinbarTIK",
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "SinbarTIK - Web Education",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SinbarTIK - Web Education",
    description: "Website Build For Education",
    images: [`${siteUrl}/opengraph-image.png`],
  },
  icons: {
    icon: [
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-grey.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};