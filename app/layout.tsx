import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "gimnasio",
  description: "Gestión de planes y miembros del gimnasio",
  icons: "/logo.png",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
