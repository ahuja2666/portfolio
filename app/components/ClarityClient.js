"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityClient() {
  useEffect(() => {
    try {
      const projectId = "vlwqcr5juo";
      if (typeof window !== "undefined" && Clarity && typeof Clarity.init === "function") {
        Clarity.init(projectId);
        if (typeof window.crypto?.randomUUID === "function") {
          Clarity.identify(window.crypto.randomUUID());
        } else {
          Clarity.identify(Math.random().toString(36).slice(2));
        }
      }
    } catch (e) {
      // avoid crashing the app if clarity fails
      // intentionally silent
    }
  }, []);

  return null;
}
