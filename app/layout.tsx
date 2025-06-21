import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Hello there!",
    default: "My Greeting",
  },
  description: "Greeting to my new friends!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning //임시로 브라우저에 확장 프로그램 무시하게함
        className={`${inter.className} relative max-w-screen-sm mx-auto bg-gradient-to-r from-pink-200 via-yellow-200 to-orange-200`}
      >
        {/* 배경 이미지 */}
        <div
          className="absolute inset-0 -z-10 h-screen bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: "url('/main.jpg')" }}
        />

        {/* 실제 콘텐츠 */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
