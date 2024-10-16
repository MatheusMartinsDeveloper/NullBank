import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AOSInitalizer from "./components/AOSInitializer";

export const metadata: Metadata = {
  title: "NullBank",
  description: "NullBank is the bank of the new generation",
  icons: "/images/favicon.svg",
  keywords: ["nullbank", "bank", "finance", "money"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <AOSInitalizer />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
