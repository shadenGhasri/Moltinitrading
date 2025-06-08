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
      <head>
        <link
          href="https://cdn.fontcdn.ir/Font/Persian/Vazir/Vazir.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${geist.className} antialiased`} style={{ fontFamily: 'Vazir, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
