import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Digitaleafs — Custom Websites, Apps & Software Studio",
    short_name: "Digitaleafs",
    description:
      "High-converting custom websites, Android/iOS mobile apps, and business software starting from ₹7,999. 100% full source code ownership.",
    start_url: "/",
    display: "standalone",
    background_color: "#171717",
    theme_color: "#171717",
    icons: [
      {
        src: "/img/favicon/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/img/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/img/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/img/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/img/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}