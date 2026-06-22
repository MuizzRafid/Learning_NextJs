"use client";

import { useEffect } from "react";

//error boundary must be client component

export default function ErrorExampleUI({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    //sent a report to you error logging service
  }, [error]);
  return (
    <div>
      <p className="text-red-600">{error?.message || "an error occured"}</p>
    </div>
  );
}
