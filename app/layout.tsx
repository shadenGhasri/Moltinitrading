import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moltinitrading -فروشگاه لوازم آشپزخانه ",
  description: "فروشگاه آنلاین لوازم آشپزخانه مولتینی - بهترین کیفیت با مناسب‌ترین قیمت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${geist.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}