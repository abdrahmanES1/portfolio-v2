"use client";

import { useEffect } from "react";

export default function CopyCodeListener() {
  useEffect(() => {
    function handleCopyClick(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest(".copy-code-btn") as HTMLElement | null;
      if (!target) return;

      const encodedCode = target.getAttribute("data-code");
      if (!encodedCode) return;

      const code = decodeURIComponent(encodedCode);
      navigator.clipboard.writeText(code).then(() => {
        const label = target.querySelector(".copy-label");
        const originalText = label ? label.textContent : target.innerText;

        if (label) {
          label.textContent = "Copied!";
        } else {
          target.innerText = "Copied!";
        }

        target.classList.add("border-teal-400", "text-teal-300", "bg-teal-950/50");

        setTimeout(() => {
          if (label) {
            label.textContent = originalText;
          } else {
            target.innerText = originalText || "Copy";
          }
          target.classList.remove("border-teal-400", "text-teal-300", "bg-teal-950/50");
        }, 2000);
      });
    }

    document.addEventListener("click", handleCopyClick);
    return () => {
      document.removeEventListener("click", handleCopyClick);
    };
  }, []);

  return null;
}
