import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moltinitrading -فروشگاه لوازم آشپزخانه ",
  description: "فروشگاه آنلاین لوازم آشپزخانه و پذیرایی مولتینی - بهترین کیفیت با مناسب‌ترین قیمت",
};

export default function Home() {
  return (
    <main className={`${geist.className} min-h-screen flex flex-col`}>
      <Header />
      <Hero />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}
