"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    particlesJS?: {
      load: (tagId: string, path: string, callback?: () => void) => void;
    };
  }
}

export default function ParticlesInit() {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS.load("particles-js", "/js/particles1.json", () => {
        console.log("Particles loaded");
      });
    }
  }, []);
  return null;
}

export {};
