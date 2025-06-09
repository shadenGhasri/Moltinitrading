import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUSContent from "../components/AboutUSContent";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moltinitrading -فروشگاه لوازم آشپزخانه ",
  description:
    "فروشگاه آنلاین لوازم آشپزخانه و پذیرایی مولتینی - بهترین کیفیت با مناسب‌ترین قیمت",
};

export default function Home() {
  return (
    <main className={`${geist.className} min-h-screen flex flex-col`}>
      <Header />
      <AboutUSContent />
      <Footer />
    </main>
  );
}
