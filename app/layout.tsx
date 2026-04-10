import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}