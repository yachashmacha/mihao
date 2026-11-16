"use client";

import { useState } from "react";

export default function HomePage() {
  const [claimed, setClaimed] = useState(false);

  return (
    <main>
      <h1>$mihao</h1>
      <button type="button" aria-pressed={claimed} onClick={() => setClaimed(true)}>
        {claimed ? "You're in" : "Get the airdrop"}
      </button>
    </main>
  );
}
