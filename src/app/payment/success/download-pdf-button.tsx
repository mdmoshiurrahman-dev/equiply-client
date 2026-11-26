"use client";

import { Button } from "@/components/ui/button";

export function DownloadPdfButton() {
  return (
    <Button type="button" variant="outline" onClick={() => window.print()}>
      Download as PDF
    </Button>
  );
}
