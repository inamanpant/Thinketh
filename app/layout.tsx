import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thinketh | Learn early. Choose freely.",
  description:
    "An online school of learning for Class 5 to 11. Build understanding, confidence and life skills with Thinketh.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
