"use client";

import { useEffect } from "react";

export default function ManifestSwitcher() {
  useEffect(() => {
    const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const manifestLink = document.querySelector<HTMLLinkElement>("link[rel='manifest']");
    if (manifestLink) {
      manifestLink.href = theme === "dark" ? "/site-dark.webmanifest" : "/site-light.webmanifest";
    }
  }, []);

  return null;
}