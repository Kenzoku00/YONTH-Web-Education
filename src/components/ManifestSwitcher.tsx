"use client";

import { useEffect } from "react";

export default function ManifestSwitcher() {
  useEffect(() => {
    const updateAssets = () => {
      const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

      const manifestLink = document.querySelector<HTMLLinkElement>("link[rel='manifest']");
      if (manifestLink) {
        manifestLink.href = theme === "dark" ? "/site-dark.webmanifest" : "/site-light.webmanifest";
      }

      const appleIcon = document.querySelector<HTMLLinkElement>("link[rel='apple-touch-icon']");
      if (appleIcon) {
        appleIcon.href = theme === "dark" ? "/apple-touch-icon-dark.png" : "/apple-touch-icon-light.png";
      }
    };

    updateAssets();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateAssets);

    return () => mediaQuery.removeEventListener("change", updateAssets);
  }, []);

  return null;
}