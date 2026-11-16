import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "$mihao airdrop",
  description: "Get the $mihao airdrop.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
