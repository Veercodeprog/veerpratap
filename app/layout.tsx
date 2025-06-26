import "./globals.css";
import { Inter } from "next/font/google";
import MainHeader from "./components/layout/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Veer Pratap | Full Stack Developer & Rust Enthusiast",
  description:
    "Portfolio of Veer Pratap – a full stack developer with expertise in Rust, Node.js, React, and C++. Passionate about building scalable backends, intuitive frontends, and solutions that empower the developer community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full`}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
