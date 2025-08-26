import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkVideoEmbed from "./src/lib/remark-video-embed";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkVideoEmbed],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = withMDX({
  images: {
    domains: [
      "drive.google.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
});

export default nextConfig;
