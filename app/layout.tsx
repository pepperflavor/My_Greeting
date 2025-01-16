import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template : "%s | Hello there!",
    default : "My Greeting"
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
        className={`${inter.className}  max-w-screen-sm mx-auto bg-gradient-to-r from-pink-200 via-yellow-200 to-orange-200`}
        >
      {/* <div className="min-h-screen "> */}
        <div className="h-screen bg-cover bg-center bg-no-repeat bg-[url('/main.jpg')] opacity-70">

        
        {children}
        {/* </div> */}
        </div>
      </body>
    </html>
  );
}
