"use client";
import { useEffect } from "react";

// ✅ Khai báo jQuery cho TypeScript khỏi báo lỗi
declare global {
  interface Window {
    $: unknown;
    jQuery: unknown;
  }
}

interface ScriptsLoaderProps {
  scriptPaths: string[];
}

export default function ScriptsLoader({ scriptPaths }: ScriptsLoaderProps) {
  useEffect(() => {
    const existingScripts = document.querySelectorAll("script[data-dynamic-script]");
    existingScripts.forEach((s) => s.remove());

    (async () => {
      for (const src of scriptPaths) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.async = false;
          script.defer = false;
          script.setAttribute("data-dynamic-script", "true");

          script.onload = () => {
            console.log(`Loaded: ${src}`);
            resolve();
          };
          script.onerror = (err) => {
            console.error(`Failed: ${src}`, err);
            reject(err);
          };

          document.body.appendChild(script);
        });
      }

      if (window.$ && typeof window.$ === "function") {
        window.$(".loader").fadeOut();
        window.$(".preloader").delay(1000).fadeOut();
      }
    })();

    return () => {
      const cleanup = document.querySelectorAll("script[data-dynamic-script]");
      cleanup.forEach((s) => s.remove());
    };
  }, []);

  return null;
}
