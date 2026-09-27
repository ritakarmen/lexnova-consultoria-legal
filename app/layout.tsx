import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LexNova | Consultoría Legal Online",
  description:
    "Demo de consultoría legal online para derecho civil, familia, laboral y asesoría a empresas.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
