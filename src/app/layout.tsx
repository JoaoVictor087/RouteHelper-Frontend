import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/header";
import Chatbot from "@/app/components/Chatbot/Chatbot";

export const metadata: Metadata = {
  title: "Route Helper",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-black">
        <Header />
        {children}
        <Chatbot/>
      </body>
    </html>
  );
}
