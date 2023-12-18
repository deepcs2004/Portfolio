import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MoneyView",
  description: "Welcome to MoneyView.Cloud, the official website of our agency specializing in bespoke software solutions for businesses. Our vision is to empower enterprises with cutting-edge technology tailored to their unique needs. With a focus on innovation, user-friendly interfaces, and scalability, we offer services in ERP, CRM, business intelligence, and cloud solutions. Contact us to elevate your business with technology that evolves alongside your growth. MoneyView.Cloud Where Innovation Meets Business Excellence.",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
