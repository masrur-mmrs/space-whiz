import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Stars from "@/components/Stars";
import QueryProvider from "./providers/QueryProvider";
import ReduxProvider from "./providers/Provider";
config.autoAddCss = false

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Space Whizz",
  description: "Explore the Universe and learn about Space Weather!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.className} antialiased`}
      >
        <QueryProvider>
          <ReduxProvider>
            <main className="flex flex-col items-center justify-center">
              <div className="z-10">{children}</div>
              <div className="galaxy z-0">
                <Stars/>
              </div>
            </main>
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  );
}